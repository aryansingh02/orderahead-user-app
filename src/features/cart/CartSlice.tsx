//
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DeleteLineItemFromCart, FindLineItem, UpdateItemInCart } from "../../utils";
import { cart } from '../../data/testData';
import { RootState } from '../../types';

const initialState = cart;

const shoppingCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart(state, action) {
      state.lineItems = [];
      state.storeId = action.payload.storeId;
      state.stallId = action.payload.stallId;
      state.requestedDynamicFee = { amount: 0, currency: "USD" };
      state.requestedEta = 10; // 10 min as the default wait time.
      state.requestedTipPercent = 15.0;
      state.pickupTime = 0;
      state.couponCode = "";
    },
    setRequestedTipPercent(state, action) {
      state.requestedTipPercent = action.payload;
    },
    setPickupTime(state, action) {
      state.pickupTime = action.payload.pickupTime;
    },
    setCouponCode(state, action) {
      state.couponCode = action.payload;
    },
    setDynamicSettings(state, action) {
      state.requestedEta = action.payload.requestedEta;
      state.requestedDynamicFee = action.payload.requestedDynamicFee;
    },
    updateNote(state, action) {
      state.note = action.payload;
    },
    deleteItemFromCart(state, action) {
      const itemBeingDeleted = action.payload;
      DeleteLineItemFromCart(state, itemBeingDeleted._id);
    },
    modifyItemFromCart(state, action) {
      const lineItemBeingModified = action.payload;
      const lineItem = FindLineItem(state, lineItemBeingModified._id);
      if (lineItem) {
        UpdateItemInCart(state, lineItemBeingModified);
      } else {
        state.lineItems.push(lineItemBeingModified);
      }
    },
  },
});
export const createShoppingCart = (state:RootState) => state.cart;

export const {
  resetCart,
  deleteItemFromCart,
  updateNote,
  setRequestedTipPercent,
  setDynamicSettings,
  modifyItemFromCart,
  setPickupTime,
  setCouponCode,
} = shoppingCart.actions;

export default shoppingCart.reducer;
