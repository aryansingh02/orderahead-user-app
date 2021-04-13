/* eslint no-param-reassign: 0 */ // --> OFF
import React, { LegacyRef, RefObject } from 'react';
import { connect } from 'react-redux';
import config from 'react-global-configuration';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import get from 'lodash/get';
import {
  createStyles,
  WithStyles,
  Grid,
  withStyles,
  Button,
} from '@material-ui/core';
import { createShoppingCart } from './CartSlice';
import { createAppConfigState, createStallState, isDesktop } from '../../utils';
import ItemsList from './ItemsList';
import { PickupOptions } from './PickupOptions';
import { Invoice } from './Invoice';
import { DateModal } from './DateModal';
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
import CartHeader from './CartHeader';
import Typography from '../../Typography';
import ChooseTip from './ChooseTip';
import DesktopHeaderHOC from '../../components/DesktopHeaderHOC';
import { invoice as testInvoice } from '../../data/testData';

export const FullfilmentModeType = {
  FREE_PICKUP: 'FREE_PICKUP',
  SKIP_THE_LINE: 'SKIP_THE_LINE',
  SCHEDULED_PICKUP: 'SCHEDULED_PICKUP',
};

export const zeroFee = { amount: 0, currency: 'USD' };

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      boxShadow: 'inset 0px -1px 0px #E3E3E3',
      borderRadius: '20px 20px 10px 10px',
      overflow: 'none',
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
    cutleryRow: {
      marginTop: '20px',
    },
    invoiceRow: {},
    checkoutButton: {
      height: '48px',
      borderRadius: '24px',
      position: 'fixed',
      bottom: '35px',
    },
    leftPane: {
      overflow: 'scroll',
      paddingBottom: '100px',
    },
    rightPane: {},
    cartRoot: {},
    orderText: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '18px',
    },
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {
  cart: ICart;
  stall: IStall;
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
  //
  private bodyWrapper: RefObject<HTMLDivElement> | undefined;

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
      invoice: testInvoice,
      pickup: undefined,
      pickupSlot: undefined,
      cutlerySwitch: !!(
        this.props.cart.note && this.props.cart.note.length > 0
      ),
    };
    this.bodyWrapper = React.createRef();
  }

  componentDidMount() {
    if (this.bodyWrapper!.current!.offsetWidth) {
      this.forceUpdate();
    }
  }

  handleClose = (fee: IPrice, eta: number) => {
    this.setState({ showModal: false });
  };

  onSlotClick = (slot: Date) => {
    this.setState({ pickupSlot: slot, dateModal: false });
  };

  render() {
    const { stall, cart, classes } = this.props;
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
      <Grid container className={classes.cartRoot}>
        <Grid container direction="row" justify="center">
          <Grid
            item
            container
            xs={12}
            lg={6}
            className={classes.leftPane}
            justify="center"
          >
            <Grid ref={this.bodyWrapper} item xs={11}>
              <CartHeader
                history={this.props.history}
                match={this.props.match}
                location={this.props.location}
              />
            </Grid>
            <Grid item xs={11} className="startJustifiedFlex">
              <Typography
                className={classes.orderText}
                roboto={true}
                variant="h4"
              >
                My Order
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <ItemsList lineItems={cart.lineItems} stall={stall} />
            </Grid>
            {invoice && (
              <Grid item xs={11}>
                {/* @ts-ignore */}
                <ChooseTip
                  invoice={invoice}
                  setRequestedTipPercent={() => {}}
                  cart={cart}
                />
              </Grid>
            )}

            <Grid item xs={11}>
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
            <Grid item xs={11} className={classes.cutleryRow}>
              <CutleryCoupon
                cutlerySwitch={cutlerySwitch}
                updateState={(data) => this.setState(data)}
                updateNote={() => {}}
                setCouponCode={() => {}}
                // @ts-ignore
                invoice={invoice}
                cart={cart}
              />
            </Grid>
            {invoice && (
              <Grid item xs={11} className={classes.invoiceRow}>
                <Invoice
                  invoice={invoice}
                  cart={cart}
                  setRequestedTipPercent={() => {}}
                />
              </Grid>
            )}
            {this.bodyWrapper && this.bodyWrapper.current && (
              <Button
                color="primary"
                variant="contained"
                className={classes.checkoutButton}
                style={{
                  width: this.bodyWrapper!.current!.offsetWidth,
                }}
              >
                <Typography variant="button" roboto={true}>
                  Proceed to Checkout
                </Typography>
              </Button>
            )}
          </Grid>
          {/* @ts-ignore */}
          <Grid
            item
            container
            xs={12}
            lg={6}
            className={classes.rightPane}
            style={{
              backgroundImage: isDesktop()
                ? `url('img/SideImage.svg')`
                : 'none',
            }}
          />
        </Grid>
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
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

const mapStateToProps = (state: RootState) => ({
  rhState: createAppConfigState(),
  stall: createStallState(),
  cart: createShoppingCart(state),
});

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(withStyles(styles)(DesktopHeaderHOC(Cart)));
