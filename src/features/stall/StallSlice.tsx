/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// TODO: Remove react-global configuration dependecy form package.json
import config from '../../config';
import { RootState } from '../../types';

interface IStall {
  isLoading: boolean;
  error: any;
  stallState: any;
}

const stallInitialState: IStall = {
  error: null,
  isLoading: false,
  stallState: {},
};

const StallSlice = createSlice({
  name: 'Stall',
  initialState: stallInitialState,
  reducers: {
    getStallStart(state) {
      state.isLoading = true;
    },
    getStallFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.stallState = {};
    },
    getStallSuccess(state, action) {
      state.stallState = action.payload;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const {
  getStallStart,
  getStallFailure,
  getStallSuccess,
} = StallSlice.actions;

export const createStallState = (state: RootState) => state.stall.stallState;
export const createStallLoading = (state: RootState) => state.stall.isLoading;
export const createStallError = (state: RootState) => state.stall.error;
export const createStall = (state: RootState) => state.stall;

export default StallSlice.reducer;

export const fetchStall = (stallId: string) => async (
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  try {
    dispatch(getStallStart());
    const response = await fetch(
      `${config.REACT_APP_BACKEND_ENDPOINT}/stall/${stallId}`
    );
    if (response.status === 200) {
      const responseJson = await response.json();
      dispatch(getStallSuccess(responseJson));
    } else if (response.status === 404 || response.status === 500) {
      dispatch(getStallFailure('cors'));
    }
  } catch (err) {
    dispatch(getStallFailure(err.toString()));
  }
};
