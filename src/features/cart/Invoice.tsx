import React from 'react';
import config from 'react-global-configuration';
import get from 'lodash/get';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { GenerateCurrencyNumber } from '../../utils';
import { ICart, IInvoice } from '../../types';
import Typography from '../../Typography';

interface IProps {
  invoice: IInvoice;
  cart: ICart;
  setRequestedTipPercent: (num: number) => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  invoiceRoot: {

  },
  divider: {
    color: '#E3E3E3',
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px'
  },
  boldFont: {
    fontWeight: 'bold'
  },
  checkoutButton: {
    height: '48px',
    borderRadius: '24px'
  }
}));

export const Invoice = (props: IProps) => {
  const classes = useStyles();

  const { invoice, cart, setRequestedTipPercent } = props;
  return (
    <Grid container direction="column" className={classes.invoiceRoot}>
      <Grid item xs={12} container>
        <Grid item xs={6}>
          <Typography roboto={true} variant="body2">
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6} className="endJustifiedFlex">
          <Typography roboto={true} variant="body2">
            {GenerateCurrencyNumber(invoice.subTotal)}
          </Typography>
        </Grid>
      </Grid>
      {invoice.surgeFee && invoice.surgeFee.amount > 0 ? (
        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography roboto={true} variant="body2">
              Surge Fee
            </Typography>
          </Grid>
          <Grid item xs={6} className="endJustifiedFlex">
            <Typography roboto={true} variant="body2">
              {' '}
              {GenerateCurrencyNumber(invoice.surgeFee)}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
      {invoice.serviceFee && invoice.serviceFee.amount ? (
        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography roboto={true} variant="body2">
              Service Fee
            </Typography>
          </Grid>
          <Grid item xs={6} className="endJustifiedFlex">
            <Typography roboto={true} variant="body2">
              {GenerateCurrencyNumber(invoice.serviceFee)}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
      {invoice.tax && invoice.tax.amount && (
        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography roboto={true} variant="body2">
              Tax
            </Typography>
          </Grid>
          <Grid item xs={6} className="endJustifiedFlex">
            <Typography roboto={true} variant="body2">
              {GenerateCurrencyNumber(invoice.tax)}
            </Typography>
          </Grid>
        </Grid>
      )}
      {get(invoice, "discount.amount") !== 0 ? (
        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Typography roboto={true} variant="body2">
              Discount
            </Typography>
          </Grid>
          <Grid item xs={6} className="endJustifiedFlex">
            <Typography roboto={true} variant="body2">
              {GenerateCurrencyNumber(invoice.discount)}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
      <Divider className={classes.divider}/>
      <Grid item xs={12} container>
        <Grid item xs={6}>
          <Typography roboto={true} variant="body1" className={classes.boldFont}>
            Total
          </Typography>
        </Grid>
        <Grid item xs={6} className="endJustifiedFlex">
          <Typography roboto={true} variant="body1" className={classes.boldFont}>
            {GenerateCurrencyNumber(invoice.total)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CostContainer = styled.div`
  margin-top: 42px;
`;

const PriceLabel = styled.div`
  font-family: NationalRegular;
  font-size: 14px;
  line-height: 22px;
  color: #444444;
`;
const DiscountLabel = styled.div`
  font-family: NationalRegular;
  font-size: 14px;
  line-height: 22px;
  color: rgba(28, 189, 142, 1);
`;

const PriceValue = styled.div`
  font-family: PlatformRegular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #444444;
`;

const DiscountValue = styled(PriceValue)`
  color: rgba(28, 189, 142, 1);
`;

const TotalLabel = styled.div`
  font-family: NationalMedium;
  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

const TotalValue = styled.div`
  font-family: PlatformBold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 1px;
  color: #000000;
`;
