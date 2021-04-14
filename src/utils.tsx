import React from 'react';
import { IStall } from './types';

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

export const isDesktop = () => window.innerWidth > 1280;

const FilterbyTag = (stalls: IStall[], tag: string) =>
  stalls.filter((stall) => {
    const validTags = stall.tag.filter(
      (item) => item.name.toLowerCase() === tag.toLowerCase()
    );
    return validTags.length > 0;
  });
export const FilterStalls = (stalls: IStall[], query: string) => {
  let filteredStalls = stalls;
  if (query) {
    filteredStalls = FilterbyTag(filteredStalls, query);
  }
  return filteredStalls;
};
