import React from 'react';
import { IconContext } from 'react-icons';
import { Box, Grid, InputBase } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/all';
import Checkbox from '@material-ui/core/Checkbox';
import get from 'lodash/get';
import { ICart, IInvoice } from '../../types';
import Typography from '../../Typography';

interface IProps {
  cutlerySwitch: boolean;
  invoice: IInvoice;
  cart: ICart;
  setCouponCode: (coupon: string) => void;
  updateNote: (note: string) => void;
  updateState: ({ cutlerySwitch }: { cutlerySwitch: boolean }) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      border: '1px solid #e6e6e6',
      background: '#FFFFFF',
      boxSizing: 'border-box',
      borderRadius: '8px',
      height: '51px',
      width: '100%',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '14px',
      paddingLeft: '10px',
      color: '#979797',
      '&:focus': {
        outline: 'none',
      },
      '&:after': {
        border: 'none',
      },
      '& .MuiInput-underline': {
        border: 'none',
      },
    },
    checkDiv: {
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translate(-50%, -50%)',
    },
    couponRow: {
      marginTop: '20px',
      marginBottom: '20px',
      position: 'relative',
    },
  })
);

export const CutleryCoupon = (props: IProps) => {
  const {
    cutlerySwitch,
    updateState,
    updateNote,
    setCouponCode,
    invoice,
    cart,
  } = props;
  const classes = useStyles();

  const getCouponClass = () => {
    if (cart.couponCode) {
      return get(invoice, 'discount.amount') === 0
        ? 'invalidCoupon'
        : 'validCoupon';
    }
    return '';
  };
  return (
    <Grid container>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={2}>
          <Checkbox
            checked={cutlerySwitch}
            onChange={(evt) => {
              updateState({ cutlerySwitch: evt.target.checked });
              let note;
              if (evt.target.checked) {
                note = 'Utensils, straws, etc to be added in this order.';
              } else {
                note = '';
              }
              updateNote(note);
            }}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Grid>
        <Grid item xs={8} container direction="column">
          <Typography variant="body2" roboto={true}>
            Utensils, straws, etc..
          </Typography>
          <Typography variant="caption" roboto={true}>
            These items won't be added unless you ask
          </Typography>
        </Grid>
        <Grid item xs={2} container className="endJustifiedFlex">
          <img src="/img/leaf.png" alt="surge fee" width="16px" height="16px" />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.couponRow}>
          <InputBase
            placeholder="Enter your coupon or promo code"
            className={`${getCouponClass()} ${classes.input}`}
          />
          <Box className={`${classes.checkDiv} "pointer"`}>
            {getCouponClass() === 'validCoupon' && (
              <IconContext.Provider
                value={{
                  color: 'rgba(28,189,142,1)',
                  className: 'global-class-name',
                  size: '16px',
                }}
              >
                <IoIosCheckmarkCircle />
              </IconContext.Provider>
            )}
            {getCouponClass() === 'invalidCoupon' && (
              <IconContext.Provider
                value={{
                  color: 'rgba(255, 81, 81, 1)',
                  className: 'global-class-name',
                  size: '16px',
                }}
              >
                <IoIosCloseCircle />
              </IconContext.Provider>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
