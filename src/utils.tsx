import React from 'react';
import Currency from 'react-currency-formatter';
import { ICartItem, IMenu, IPrice, IStall } from './types';
import { appConfig, stall as StallData } from './data/testData';

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

export const FindMenuItem = (menu: IMenu, id: string) => {
  if (menu && menu.menuItems) {
    return menu.menuItems.find((item) => item._id === id);
  }
  return null;
};

export const GenerateEpochDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  // @ts-ignore
  const newDate = Date.parse(new Date(year, month, day, 0, 0, 0, 0));
  return newDate;
};

export function CalculateLineItemTotal(cartItem: ICartItem) {
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

export const GenerateFormattedAmount = (amount: IPrice) => (
  <Currency quantity={amount.amount / 100} currency={amount.currency} />
);

export const GenerateWaitTime = (time: number) =>
  Math.round(time / (1000 * 60));

export const createStallState = () => StallData;
export const createAppConfigState = () => appConfig;
export const isDesktop = () => window.innerWidth > 1280;

const FilterbyTagOrName = (stalls: IStall[], tag: string) =>
  stalls.filter((stall) => {
    const validTags = stall.tag.filter(
      (item) => item.name.toLowerCase() === tag.toLowerCase()
    );
    const index = stall.name.toLowerCase().indexOf(tag.toLowerCase());
    return validTags.length > 0 || index !== -1;
  });

export const FilterStalls = (stalls: IStall[], query: string) => {
  let filteredStalls = stalls;
  if (query) {
    filteredStalls = FilterbyTagOrName(filteredStalls, query);
  }
  return filteredStalls;
};

export function loadScript(
  scriptSource: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: ((this: GlobalEventHandlers, ev: Event) => any) | null
) {
  const scriptLoad = document.createElement('script');
  scriptLoad.src = scriptSource;
  scriptLoad.type = 'text/javascript';
  scriptLoad.async = false;
  scriptLoad.onload = callback;
  document.getElementsByTagName('head')[0].appendChild(scriptLoad);
}
