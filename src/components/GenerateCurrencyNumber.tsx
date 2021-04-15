import React from 'react';
import NumberFormat from 'react-number-format';
import getSymbolFromCurrency from 'currency-symbol-map';
import { IPrice } from '../types';

interface IProps {
  price: IPrice;
}

export default function GenerateCurrencyNumber(props: IProps) {
  const { price } = props;
  return (
    <NumberFormat
      value={price.amount / 100}
      decimalScale={2}
      fixedDecimalScale={true}
      displayType="text"
      thousandSeparator={true}
      prefix={getSymbolFromCurrency(price.currency)}
      renderText={(
        value:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
      ) => <span>{value}</span>}
    />
  );
}
