import {
  Grid,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Hidden,
  TextField,
  Divider,
  Paper,
} from '@material-ui/core';
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { BackButton } from '../../components/BackButton';
import Typography from '../../Typography';
import '../style/style.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
    },
    continueRoot: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    bodyText: {
      marginTop: '16px',
    },
    outerGrid: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      background: '#F7F8FB',
    },
    phonefield: {
      background: 'white',
      borderRadius: '8px',
      border: '1px solid #E3E3E3',
    },
    namefield: {
      marginBottom: '20px',
    },
    middleGrid: {
      display: 'flex',
      flexDirection: 'column',
    },
    divider: {
      marginTop: theme.spacing(1.2),
      marginBottom: theme.spacing(2.4),
    },
    notificationText: {
      textTransform: 'none',
      color: 'white',
      textAlign: 'center',
    },
    notificationPaper: {
      background: theme.palette.primary.main,
      width: '100%',
      borderRadius: '0px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 5px 10px rgba(109, 92, 255, 0.3)',
    },
  })
);

export const OrderConfirmation = () => {
  const [value, setValue] = React.useState('');
  const classes = useStyles();
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid xs={12} sm={12} lg={6} className={classes.outerGrid}>
        <Paper elevation={3} className={classes.notificationPaper}>
          <Typography
            roboto
            component="div"
            variant="body2"
            className={classes.notificationText}
          >
            Your order will be ready 2 minutes after confirmation
          </Typography>
        </Paper>
        <Grid xs={11} sm={11} lg={11} className={classes.middleGrid}>
          <Grid item xs={12} sm={12}>
            <BackButton header="Order Confirmation" />
            <Typography roboto component="div">
              Enter your name and your phone number to receive order
              confirmation and enjoy your food
            </Typography>
            <Divider className={classes.divider} />
            <Typography roboto> Name </Typography>
            <div className="orderAheadNameInput">
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
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
          </Grid>

          <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                borderRadius: '30px',
                marginTop: 'auto',
              }}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Grid lg={6}>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(/img/OrderConfirm.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </Hidden>
    </div>
  );
};
