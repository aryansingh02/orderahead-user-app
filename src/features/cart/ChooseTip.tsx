import React, { Fragment } from 'react';
import { Button, Grid, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { ICart, IInvoice } from '../../types';
import Typography from '../../Typography';
import { GenerateCurrencyNumber } from '../../utils';

interface IProps {
  invoice: IInvoice;
  cart: ICart;
  setRequestedTipPercent: (percent: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tipButton: {
      height: '40px !important',
      width: '40px !important',
      marginRight: '8px',
      background: '#FFFFFF',
      padding: 0,
      borderRadius: '4px',
      border: '1px solid #E3E3E3',
      boxSizing: 'border-box',
      position: 'relative',
    },
    activeButton: {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    tipText: {
      margin: '20px 0',
    },
    tipRoot: {
      paddingBottom: '20px',
      borderBottom: '1px solid #E3E3E3',
    },
  })
);

const ChooseTip = (props: IProps) => {
  const { invoice, cart, setRequestedTipPercent } = props;
  const classes = useStyles();
  console.log('invoice', invoice);

  return (
    <Grid container className={classes.tipRoot}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12}>
          <Typography roboto={true} variant="h4" className={classes.tipText}>
            Tip
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={10} container direction="row">
              <Box
                className={`${classes.tipButton} ${
                  cart.requestedTipPercent === 0 ? 'activeButton' : ''
                }`}
                onClick={() => setRequestedTipPercent(0)}
              >
                <Typography
                  roboto={true}
                  variant="body2"
                  className="centreAligned"
                >
                  0%
                </Typography>
              </Box>
              <Box
                className={`${classes.tipButton} ${
                  cart.requestedTipPercent === 10 ? 'activeButton' : ''
                }`}
                onClick={() => setRequestedTipPercent(10)}
              >
                <Typography
                  roboto={true}
                  variant="body2"
                  className="centreAligned"
                >
                  10%
                </Typography>
              </Box>
              <Box
                className={`${classes.tipButton} ${
                  cart.requestedTipPercent === 15 ? 'activeButton' : ''
                }`}
                onClick={() => setRequestedTipPercent(15)}

              >
                <Typography
                  roboto={true}
                  variant="body2"
                  className="centreAligned"
                >
                  15%
                </Typography>
              </Box>
              <Box
                onClick={() => setRequestedTipPercent(20)}
                className={`${classes.tipButton} ${
                  cart.requestedTipPercent === 20 ? 'activeButton' : ''
                }`}
              >
                <Typography
                  roboto={true}
                  variant="body2"
                  className="centreAligned"
                >
                  20%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className="endJustifiedFlex">
              <Typography roboto={true} variant="body2">
                {GenerateCurrencyNumber(invoice.tip)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChooseTip;

const CouponRow = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 8px;
  height: 51px;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  padding-left: 10px;
  color: #979797;
  &:focus {
    outline: none;
  }
`;

const CheckDiv = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;
