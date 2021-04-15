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
