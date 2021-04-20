/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../types';

export interface LandingState {
  loading: boolean;
}

const initialState: LandingState = {
  loading: false,
};

const landingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<{ loading: boolean }>) {
      state.loading = action.payload.loading;
    },
  },
});

export const { setLoading } = landingSlice.actions;

export default landingSlice.reducer;

// @ts-ignore
export const getLoadingStatus = (state: RootState) => state.loading.loading;
