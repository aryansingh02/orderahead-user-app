import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import '../style/style.css';
import { TransitionScreen } from '../../components/TransitionScreen';
import SquarePayment from '../../components/SquarePayment';
import { ICreateOrderEventHandlerParam } from '../../types';

export const Payment = () => {
  const [paymentInProgress, setPaymentInProgress] = React.useState(false);
  const history = useHistory();
  const paymentRef = useRef<SquarePayment>(null);

  function ctaActionHandler() {
    // Avoid multiple clicks on the pay button.
    if (paymentRef.current && !paymentInProgress) {
      paymentRef.current.triggerPayment();
    }
  }

  function handleCreateOrder(arg: ICreateOrderEventHandlerParam) {
    setPaymentInProgress(true);
    console.log(` source ${arg.source} `);
    // TODO: Add Sleek create order API call.
    setPaymentInProgress(false);
    history.push('/stall/order/confirmation');
  }

  const title = 'Payment method';
  const notificationMessage = '';
  const actionButtonCta = paymentInProgress ? 'Processing...' : 'Pay';
  const rightBannerImage = '/img/OrderConfirm.png';

  // TODO: Use actual amount from the cart.
  const amount = 3.45;
  // TODO: use actual stall location from stall object in the redux.
  const squareLocationId = 'GPQDQYYHBQ0G3';
  return (
    <TransitionScreen
      title={title}
      notificationMessage={notificationMessage}
      actionButtonCta={actionButtonCta}
      rightBannerImage={rightBannerImage}
      ctaActionHandler={ctaActionHandler}
    >
      <SquarePayment
        amount={amount}
        ref={paymentRef}
        showLoading={true}
        squareLocationId={squareLocationId}
        handleCreateOrder={handleCreateOrder}
      />
    </TransitionScreen>
  );
};
