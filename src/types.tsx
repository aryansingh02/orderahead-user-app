import { History } from 'history';
import RootReducer from './rootReducer';
import { cart, cartItem, invoice, lineItems, menu, slotsInfo, stall } from './data/testData';

export type RootState = ReturnType<typeof RootReducer>;
export type HistoryType = ReturnType<typeof Object>;

export type IStall = typeof stall;
export type ICart = typeof cart;
export type ILineItems = typeof lineItems;
export type ILineItem = typeof lineItems[0];
export type ICartItem = typeof cartItem;
export interface IPrice {
  amount: number;
  currency: string;
}
export type IMenu = typeof menu;
export type IInvoice = typeof invoice;
export interface IDynamicSettings {
  requestedEta: number;
  requestedDynamicFee: IPrice;
}

export type ISlotsInfo = typeof slotsInfo;