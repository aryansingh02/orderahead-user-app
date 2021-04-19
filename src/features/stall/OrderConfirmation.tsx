import {
  createStyles,
  Divider,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import { useHistory } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import Typography from '../../Typography';
import '../style/style.css';
import { TransitionScreen } from '../../components/TransitionScreen';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    phonefield: {
      background: 'white',
      borderRadius: '8px',
      border: '1px solid #E3E3E3',
    },
    namefield: {
      marginBottom: '20px',
    },
    divider: {
      marginTop: theme.spacing(1.2),
      marginBottom: theme.spacing(2.4),
    },
  })
);

export const OrderConfirmation = () => {
  const [value, setValue] = React.useState('');
  const history = useHistory();
  const classes = useStyles();
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  function ctaActionHandler() {
    history.push('/stall/order/sent');
  }

  const title = 'Order Confirmation';
  const notificationMessage =
    'Your order will be ready 2 minutes after confirmation';
  const actionButtonCta = 'Place Order';
  const rightBannerImage = '/img/OrderConfirm.png';
  return (
    <TransitionScreen
      title={title}
      notificationMessage={notificationMessage}
      actionButtonCta={actionButtonCta}
      rightBannerImage={rightBannerImage}
      ctaActionHandler={ctaActionHandler}
    >
      <Typography roboto component="div">
        Enter your name and your phone number to receive order confirmation and
        enjoy your food
      </Typography>
      <Divider className={classes.divider} />
      <Typography roboto> Name </Typography>
      <div className="orderAheadNameInput">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          type="name"
          className={classes.namefield}
        />
      </div>
      <Typography roboto>Phone number</Typography>
      <div className="orderAheadPhoneInput">
        <PhoneInput
          defaultCountry="US"
          value={value}
          onChange={() => handleOnChange}
          className={classes.phonefield}
        />
      </div>
    </TransitionScreen>
  );
};
