/* eslint no-param-reassign: 0 */ // --> OFF

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cart } from '../../data/testData';
import { ICart, ILineItem, IPrice, RootState } from '../../types';

const initialState: ICart = {
  lineItems: [],
  stallId: '',
  storeId: '',
  note: '',
  requestedEta: 0,
  requestedDynamicFee: { amount: 0, currency: 'USD' },
  pickupTime: 0,
  requestedTipPercent: 15,
  couponCode: '',
};

const shoppingCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart(state, action: PayloadAction<ICart>) {
      return { ...action.payload };
    },
  },
});

export const createShoppingCart = (state: RootState) => state.cart;
export const getRequestedTip = (state: RootState) =>
  state.cart.requestedTipPercent;
export const getCouponCode = (state: RootState) => state.cart.couponCode;
export const getNote = (state: RootState) => state.cart.note;
export const getPickupTime = (state: RootState) => state.cart.pickupTime;
export const getRequestedEta = (state: RootState) => state.cart.requestedEta;

export const {} = shoppingCart.actions;

export default shoppingCart.reducer;
