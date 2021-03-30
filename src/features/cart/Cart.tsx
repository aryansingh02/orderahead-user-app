import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {createAppConfigState} from "../../model/appConfigSlice";
import {createStallState} from "../../model/stallSlice";
import {
  createShoppingCart,
  setCouponCode,
  setDynamicSettings,
  setPickupTime,
  setRequestedTipPercent,
  updateNote,
} from "./CartSlice";
import config from "react-global-configuration";
import {MdModeEdit} from "react-icons/all";
import {Redirect} from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import {format} from "date-fns";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Helmet} from "react-helmet";
import {IconContext} from "react-icons";
import {IoIosCheckmarkCircle, IoIosCloseCircle} from "react-icons/all";
import "../store/common.scss";
import {
  CalculateInvoice,
  GenerateCurrencyNumber,
  GenerateEpochDate,
  GenerateWaitTime,
} from "../../util";
import {setInvoice} from "../../model/checkoutSlice";
import get from "lodash/get";
import Navbar from "../Navbar";
import ItemsList from "../store/ItemsList";
import Switch from "react-switch";
import ActionButton from "../checkout/ActionButton";
import {Modal} from "react-bootstrap";
import SlotModal from "../store/SlotModal";
import styled from "styled-components";
import {CommonP, defaultFlex, flexColumnDiv} from "../../styles/CommonStyles";
import {PickupOptions} from "./PickupOptions";
import {Invoice} from "./Invoice";
import {DateModal} from "./DateModal";
import {SkipModal} from "./SkipModal";
import {CutleryCoupon} from "./CutleryCoupon";

export const FullfilmentModeType = {
  FREE_PICKUP: "FREE_PICKUP",
  SKIP_THE_LINE: "SKIP_THE_LINE",
  SCHEDULED_PICKUP: "SCHEDULED_PICKUP",
};

export const zeroFee= {amount: 0, currency: "USD"};

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: FullfilmentModeType.FREE_PICKUP,
      showModal: false,
      dateModal: false,
      itemEta: 0,
      dynamicEta: 0,
      dynamicFee: zeroFee,
      invoice: null,
      pickup: 0,
      pickupSlot: null,
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

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.mode !== this.state.mode ||
      prevProps.cart.requestedTipPercent !==
      this.props.cart.requestedTipPercent ||
      prevProps.cart.couponCode !== this.props.cart.couponCode
    ) {
      this.updateInvoice();
    }
  }

  enableSurgeFee =
    config.get("enable_surge_fee") ||
    (this.props.stall &&
      config
        .get("surge_fee_enabled_stall_whitelist")
        .findIndex((x) => x === this.props.stall._id) !== -1);

  updateInvoice = async () => {
    const {cart, stall} = this.props;
    CalculateInvoice(cart).then((data) => {
      this.props.setInvoice(data.invoice);
      this.setState({invoice: data.invoice});
    });
  };

  fetchOrderData = async () => {
    const {dynamicEta} = this.state;
    const {stall} = this.props;

    const response = await fetch(
      config.get("backend") + `/stall/${stall._id}/wait-time`
    );
    let time = await response.json();
    time = GenerateWaitTime(time.waitTime);
    this.setState({itemEta: time});

    if (dynamicEta < 1.0) {
      this.triggerSkipTheLineModal();
    }
  };

  handleClose = (fee, eta) => {
    this.setState({showModal: false});
    this.props.setDynamicSettings({
      requestedEta: eta,
      requestedDynamicFee: fee,
    });
  };

  triggerSkipTheLineModal = async () => {
    const {cart} = this.props;
    if (!this.enableSurgeFee) {
      return;
    }

    fetch(config.get("backend") + "/surge-fee", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: cart,
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
        console.log("SurgeFee API failed " + error);
        this.setState({showModal: false});
      });
  };

  onSlotClick = (slot) => {
    this.setState({pickupSlot: slot, dateModal: false});
  };

  render() {
    const {stall, cart} = this.props;
    const props = this.props;
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
        return <Redirect to={"/stall/" + cart.stallId} />;
      } else {
        return <Redirect to={"/home"} />;
      }
    }
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{stall.name} Cart</title>
        </Helmet>
        <Wrapper className="container-fluid">
          <div
            ref={this.bodyWrapper}
            className="row cartRow align-align-center text-center m-0"
          >
            <Navbar
              currPage="CartSummary"
              storeId={cart.stallId}
              history={props.history}
            />
          </div>

          <div className="row m-0">
            <div className="col-12 p-0 cartSummarySubHeadline text-left">
              <ItemListText>Items</ItemListText>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="container-fluid p-0 m-0 text-left">
                <ItemsList
                  cart={cart}
                  lineItems={cart.lineItems}
                  stall={stall}
                  page="cart"
                  history={props.history}
                />
              </div>
            </div>
          </div>
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
          <CutleryCoupon
            cutlerySwitch={cutlerySwitch}
            updateState={(data) => this.setState(data)}
            updateNote={this.props.updateNote}
            setCouponCode={this.props.setCouponCode}
            invoice={invoice}
            cart={cart}
          />
          <Invoice
            invoice={invoice}
            cart={cart}
            setRequestedTipPercent={this.props.setRequestedTipPercent}
          />

          <Button className="row m-0">
            <div className="col-12 p-0 text-center">
              <ActionButton
                onClickCallback={() => {
                  this.props.setPickupTime({pickupTime: pickupSlot});
                  if (mode === FullfilmentModeType.FREE_PICKUP) {
                    this.handleClose(zeroFee, itemEta);
                  }
                  props.history.push("/enter_phone");
                }}
                width={get(this.bodyWrapper, "current.offsetWidth")}
              >
                <CheckoutText>Checkout</CheckoutText>
              </ActionButton>
            </div>
          </Button>
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
          rhState={this.props.rhState}
          itemEta={itemEta}
          pickup={pickup}
          updateState={(data) => this.setState(data)}
          pickupSlot={pickupSlot}
          onSlotClick={this.onSlotClick}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setInvoice: (invoice) => {
    dispatch(setInvoice(invoice));
  },
  setDynamicSettings: (data) => {
    dispatch(setDynamicSettings(data));
  },
  updateNote: (note) => {
    dispatch(updateNote(note));
  },
  setCouponCode: (code) => {
    dispatch(setCouponCode(code));
  },
  setRequestedTipPercent: (percent) => {
    dispatch(setRequestedTipPercent(percent));
  },
  setPickupTime: (data) => {
    dispatch(setPickupTime(data));
  },
});

const mapStateToProps = (state) => ({
  rhState: createAppConfigState(state),
  stall: createStallState(state),
  cart: createShoppingCart(state),
});

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