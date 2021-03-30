//
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {DeleteLineItemFromCart, FindLineItem, UpdateItemInCart} from "../../utils";

let initialState = {
  lineItems: [],
  stallId: "",
  storeId: "",
  note: "",
  requestedEta: 0,
  requestedDynamicFee: {amount: 0, currency: "USD"},
  pickupTime: 0,
  requestedTipPercent: 15,
  couponCode: "",
};

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    resetCart(state, action) {
      state.lineItems = [];
      state.storeId = action.payload.storeId;
      state.stallId = action.payload.stallId;
      state.requestedDynamicFee = {amount: 0, currency: "USD"};
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
      let lineItem = FindLineItem(state, lineItemBeingModified._id);
      if (lineItem) {
        UpdateItemInCart(state, lineItemBeingModified);
      } else {
        state.lineItems.push(lineItemBeingModified);
      }
    },
  },
});
export const createShoppingCart = (state) => state.shoppingCart;

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
