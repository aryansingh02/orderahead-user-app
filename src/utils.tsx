import React from 'react';
import NumberFormat from "react-number-format";
import getSymbolFromCurrency from "currency-symbol-map";
import { ICart, ICartItem, ILineItem, IMenu, IPrice } from './types';
import { appConfig, invoice, stall } from './data/testData';



const greyedDollar = () => (
  <span
    style={{
      display: 'inline',
      color: '#979797',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }}
  >
    $
  </span>
);

const normalDollar = () => (
  <span
    style={{
      display: 'inline',
      color: '#263238',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }}
  >
    $
  </span>
);

export const GenerateExpenseLevel = (expenseLevel: number) => {
  let i = expenseLevel;
  let j = 3 - expenseLevel;
  const retVal = [];
  while (i > 0) {
    retVal.push(normalDollar());
    i -= 1;
  }
  while (j > 0) {
    retVal.push(greyedDollar());
    j -= 1;
  }
  return retVal;
};

export const DeleteLineItemFromCart = (cart:ICart, lineItemId:string) => {
  if (cart && cart.lineItems) {
    const itemIndex = cart.lineItems.findIndex(
      (item) => item._id === lineItemId
    );
    if (itemIndex >= 0) {
      cart.lineItems.splice(itemIndex, 1);
    }
  }
};

export const FindLineItem = (cart:ICart, lineItemId:string) => {
  if (cart && cart.lineItems) {
    const itemIndex = cart.lineItems.findIndex(
      (lineItem) => lineItem._id === lineItemId
    );
    if (itemIndex >= 0) {
      return cart.lineItems[itemIndex];
    }
  }
  return null;
};


export const UpdateItemInCart = (cart:ICart, lineItem:ILineItem) => {
  if (cart && cart.lineItems) {
    const itemIndex = cart.lineItems.findIndex(
      (item) => item._id === lineItem._id
    );
    if (lineItem.count === 0) {
      cart.lineItems.splice(itemIndex, 1);
    } else {
      cart.lineItems.splice(itemIndex, 1, lineItem);
    }
  }
};

export function CalculateLineItemTotal(cartItem:ICartItem) {
  let subTotal = cartItem.selectedVariation.price.amount;
  if (cartItem.modifiers && cartItem.modifiers.length !== 0) {
    cartItem.modifiers.forEach((modGroup) => {
      // @ts-ignore
      modGroup.chosenValue.forEach((modValue) => {
        subTotal += modValue.price.amount;
      });
    });
  }
  return {
    amount: subTotal,
    currency: cartItem.selectedVariation.price.currency,
  };
}

export const GenerateCurrencyNumber = (price:IPrice) => (
  <NumberFormat
    value={price.amount / 100}
    decimalScale={2}
    fixedDecimalScale={true}
    displayType="text"
    thousandSeparator={true}
    prefix={getSymbolFromCurrency(price.currency)}
    renderText={(value: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <span>{value}</span>}
  />
);

export const FindMenuItem = (menu:IMenu, id:string) => {
  if (menu && menu.menuItems) {
    return menu.menuItems.find((item) => item._id === id);
  }
  return null;
};

export const GenerateEpochDate = (date:Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  // @ts-ignore
  const newDate = Date.parse(new Date(year, month, day, 0, 0, 0, 0));
  return newDate;
};


export const GenerateWaitTime = (time: number) => Math.round(time / (1000 * 60));

export const createStallState = () => stall;
export const createAppConfigState = () => appConfig;
export const isDesktop = () => window.innerWidth > 1280;
