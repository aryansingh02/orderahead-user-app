import React from 'react';
import Currency from 'react-currency-formatter';
import { IItemDetail } from '../../types';
import Typography from '../../Typography';

interface IProps {
  itemDetails: IItemDetail;
}

export const ItemCardPrice = (props: IProps) => {
  const variations = props.itemDetails.variations.filter(
    (item) => item.status === 'IN_STOCK'
  );

  const indexOfMaxValue = variations.reduce(
    (iMax, x, i, arr) => (x.price.amount >= arr[iMax].price.amount ? i : iMax),
    0
  );
  const indexOfMinValue = variations.reduce(
    (iMin, x, i, arr) => (x.price.amount <= arr[iMin].price.amount ? i : iMin),
    0
  );
  if (variations.length === 0) {
    return <Typography roboto>Out of Stock</Typography>;
  }
  if (variations.length === 1 || indexOfMaxValue === indexOfMinValue) {
    return (
      <Currency
        quantity={
          variations[indexOfMinValue] &&
          variations[indexOfMinValue].price.amount / 100
        }
        currency={
          variations[indexOfMinValue] &&
          variations[indexOfMinValue].price.currency
        }
      />
    );
  }
  return (
    <>
      <Currency
        quantity={
          variations[indexOfMinValue] &&
          variations[indexOfMinValue].price.amount / 100
        }
        currency={variations[indexOfMinValue].price.currency}
      />
      {' - '}

      <Currency
        quantity={variations[indexOfMaxValue].price.amount / 100}
        currency={variations[indexOfMaxValue].price.currency}
      />
    </>
  );
};
