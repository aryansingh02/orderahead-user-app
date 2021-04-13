/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types';

export interface LandingState {
  loading: boolean;
  searchQuery: string;
}

const initialState: LandingState = {
  loading: false,
  searchQuery: ''
};

const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<{ loading: boolean }>) {
      state.loading = action.payload.loading;
    },
    setQuery(state, action: PayloadAction<string>){
      state.searchQuery = action.payload;
    }
  },
});

export const { setQuery } = EventSlice.actions;

export default EventSlice.reducer;

export const getQuery = (state: RootState) => state.event.searchQuery;
// export const getLoadingStatus = (state: RootState) => state.loading.loading;
