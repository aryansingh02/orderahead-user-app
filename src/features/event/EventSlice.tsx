/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types';

export interface LandingState {
  loading: boolean;
}

const initialState: LandingState = {
  loading: false,
};

const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    // setLoading(state, action: PayloadAction<{ loading: boolean }>) {
    //   state.loading = action.payload.loading;
    // },
  },
});

export const {} = EventSlice.actions;

export default EventSlice.reducer;

// export const getLoadingStatus = (state: RootState) => state.loading.loading;
