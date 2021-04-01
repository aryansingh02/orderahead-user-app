/* eslint no-param-reassign: 0 */ // --> OFF
import React, { LegacyRef } from 'react';
import { connect } from 'react-redux';
import config from 'react-global-configuration';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { createStyles, WithStyles, Grid } from '@material-ui/core';
import {
  createShoppingCart,
  setCouponCode,
  setDynamicSettings,
  setPickupTime,
  setRequestedTipPercent,
  updateNote,
} from './CartSlice';
import {
  CalculateInvoice,
  GenerateWaitTime,
  createAppConfigState,
  createStallState,
} from '../../utils';
import ItemsList from './ItemsList';
import { PickupOptions } from './PickupOptions';
import { Invoice } from './Invoice';
import { DateModal } from './DateModal';
import { SkipModal } from './SkipModal';
import { CutleryCoupon } from './CutleryCoupon';
import {
  ICart,
  IDynamicSettings,
  IInvoice,
  IPrice,
  IStall,
  RootState,
} from '../../types';
import { AppDispatch } from '../../store';
import { theme as Theme } from '../../theme';
import { CommonP } from '../../commonStyles';
import CartHeader from './CartHeader';
import Typography from '../../Typography';

export const FullfilmentModeType = {
  FREE_PICKUP: 'FREE_PICKUP',
  SKIP_THE_LINE: 'SKIP_THE_LINE',
  SCHEDULED_PICKUP: 'SCHEDULED_PICKUP',
};

export const zeroFee = { amount: 0, currency: 'USD' };

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      boxShadow: 'inset 0px -1px 0px #E3E3E3',
      borderRadius: '20px 20px 10px 10px',
    },
    scrollRoot: {
      flexGrow: 1,
      width: '100%',
      marginTop: theme.spacing(2.5),
      position: 'relative',
    },
    categoryWrapper: {
      marginTop: theme.spacing(4),
    },
    headingRow: {},
    accountHeading: {},
    logoImage: {
      marginRight: theme.spacing(2.5),
    },
    appBarRoot: {
      backgroundColor: 'transparent',
    },
    tabRoot: {
      fontFamily: 'Roboto',
    },
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {
  cart: ICart;
  stall: IStall;
  setDynamicSettings: (data: IDynamicSettings) => void;
  updateNote: (note: string) => void;
  setCouponCode: (code: string) => void;
  setRequestedTipPercent: (percent: number | string) => void;
  setPickupTime: (data: number) => void;
  rhState: () => {};
}
interface IState {
  mode?: string;
  showModal: boolean;
  dateModal?: boolean;
  itemEta: number;
  dynamicEta: number;
  dynamicFee: IPrice;
  invoice?: IInvoice;
  pickup?: Date;
  pickupSlot?: Date;
  cutlerySwitch: boolean;
}

class Cart extends React.Component<IProps, IState> {
  private bodyWrapper: LegacyRef<HTMLDivElement>;

  // enableSurgeFee = true;
  enableSurgeFee =
  config.get('enable_surge_fee') ||
    (this.props.stall &&
      config
        .get('surge_fee_enabled_stall_whitelist')
        .findIndex((x: string) => x === this.props.stall._id) !== -1);

  constructor(props: IProps) {
    super(props);
    this.state = {
      mode: FullfilmentModeType.FREE_PICKUP,
      showModal: false,
      dateModal: false,
      itemEta: 0,
      dynamicEta: 0,
      dynamicFee: zeroFee,
      invoice: undefined,
      pickup: undefined,
      pickupSlot: undefined,
      cutlerySwitch: !!(
        this.props.cart.note && this.props.cart.note.length > 0
      ),
    };
    this.bodyWrapper = React.createRef();
  }

  componentDidMount() {
    this.updateInvoice();
    this.fetchOrderData();
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (
      prevState.mode !== this.state.mode ||
      prevProps.cart.requestedTipPercent !==
        this.props.cart.requestedTipPercent ||
      prevProps.cart.couponCode !== this.props.cart.couponCode
    ) {
      this.updateInvoice();
    }
  }

  updateInvoice = async () => {
    const { cart, stall } = this.props;
    CalculateInvoice(cart).then((data) => {
      this.setState({ invoice: data });
    });
  };

  fetchOrderData = async () => {
    const { dynamicEta } = this.state;
    const { stall } = this.props;

    const response = await fetch(
      `${config.get('backend')}/stall/${stall._id}/wait-time`
    );
    let time = await response.json();
    time = GenerateWaitTime(time.waitTime);
    this.setState({ itemEta: time });

    if (dynamicEta < 1.0) {
      this.triggerSkipTheLineModal();
    }
  };

  handleClose = (fee: IPrice, eta: number) => {
    this.setState({ showModal: false });
    this.props.setDynamicSettings({
      requestedEta: eta,
      requestedDynamicFee: fee,
    });
  };

  triggerSkipTheLineModal = async () => {
    const { cart } = this.props;
    if (!this.enableSurgeFee) {
      return;
    }

    fetch(`${config.get('backend')}/surge-fee`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update State of dynamicFee and dynamicEta
        // Hide UI for skipping the line if DynamoDB cannot communicate with Lambda
        this.setState({
          dynamicEta: data.data.eta,
          dynamicFee: data.data.fee,
          showModal: true,
        });
      })
      .catch((error) => {
        // TODO: show error to user
        console.log(`SurgeFee API failed ${error}`);
        this.setState({ showModal: false });
      });
  };

  onSlotClick = (slot: Date) => {
    this.setState({ pickupSlot: slot, dateModal: false });
  };

  render() {
    const { stall, cart } = this.props;
    const { props } = this;
    const {
      mode,
      showModal,
      dateModal,
      itemEta,
      dynamicEta,
      dynamicFee,
      invoice,
      pickup,
      pickupSlot,
      cutlerySwitch,
    } = this.state;

    if (cart.lineItems.length === 0) {
      // Redirect to store homepage if no item left in cart.
      if (cart.stallId) {
        return <Redirect to={`/stall/${cart.stallId}`} />;
      }
      return <Redirect to="/home" />;
    }
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{stall.name} Cart</title>
        </Helmet>
        <Grid container direction="row" justify="center">
          <Grid item xs={10}>
            <CartHeader
              history={this.props.history}
              match={this.props.match}
              location={this.props.location}
            />
          </Grid>
          <Grid item xs={10} className='startJustifiedFlex'>
            <Typography roboto={true} variant="h4">
              My Order
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <ItemsList
              cart={cart}
              lineItems={cart.lineItems}
              stall={stall}
              page="cart"
              history={props.history}
            />
          </Grid>
          <Grid item xs={10}>
            <PickupOptions
              enableSurgeFee={this.enableSurgeFee}
              mode={mode}
              dynamicFee={dynamicFee}
              dynamicEta={dynamicEta}
              handleClose={this.handleClose}
              updateState={(data) => this.setState(data)}
              itemEta={itemEta}
              dateModal={dateModal}
              pickup={pickup}
              pickupSlot={pickupSlot}
            />
          </Grid>
        </Grid>

        <Wrapper className="container-fluid">
          <div
            ref={this.bodyWrapper}
            className="row cartRow align-align-center text-center m-0"
          />


          <CutleryCoupon
            cutlerySwitch={cutlerySwitch}
            updateState={(data) => this.setState(data)}
            updateNote={this.props.updateNote}
            setCouponCode={this.props.setCouponCode}
            // @ts-ignore
            invoice={invoice}
            cart={cart}
          />
          {invoice && (
            <Invoice
              invoice={invoice}
              cart={cart}
              setRequestedTipPercent={this.props.setRequestedTipPercent}
            />
          )}
        </Wrapper>
        <SkipModal
          showModal={showModal}
          itemEta={itemEta}
          handleClose={this.handleClose}
          updateState={(data) => this.setState(data)}
          dynamicFee={dynamicFee}
          dynamicEta={dynamicEta}
        />
        <DateModal
          dateModal={dateModal}
          // @ts-ignore
          rhState={this.props.rhState}
          itemEta={itemEta}
          pickup={pickup}
          //  @ts-ignore
          updateState={(data) => this.setState(data)}
          // @ts-ignore
          pickupSlot={pickupSlot}
          onSlotClick={this.onSlotClick}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setDynamicSettings: (data: IDynamicSettings) => {
    dispatch(setDynamicSettings(data));
  },
  updateNote: (note: string) => {
    dispatch(updateNote(note));
  },
  setCouponCode: (code: string) => {
    dispatch(setCouponCode(code));
  },
  setRequestedTipPercent: (percent: number) => {
    dispatch(setRequestedTipPercent(percent));
  },
  setPickupTime: (data: number) => {
    dispatch(setPickupTime({ pickupTime: data }));
  },
});

const mapStateToProps = (state: RootState) => ({
  rhState: createAppConfigState(),
  stall: createStallState(),
  cart: createShoppingCart(state),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const Wrapper = styled.div`
  padding-bottom: 90px;
`;

const Button = styled.div`
  position: fixed;
  bottom: 20px;
  background: #ffffff;
`;

const ItemListText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 22px;
  line-height: 28px;
  color: #444444;
`;

const CheckoutText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  color: #ffffff;
`;
