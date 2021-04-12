/* eslint no-param-reassign: 0 */ // --> OFF

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cart } from '../../data/testData';
import { ICart, ILineItem, IPrice, RootState } from '../../types';

const initialState: ICart = cart;

const shoppingCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});
export const createShoppingCart = (state: RootState) => state.cart;

export const {} = shoppingCart.actions;

export default shoppingCart.reducer;
