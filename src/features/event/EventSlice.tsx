/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types';

export interface EventState {
  searchQuery: string;
}

const initialState: EventState = {
  searchQuery: '',
};

const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setQuery } = EventSlice.actions;

export default EventSlice.reducer;

export const getQuery = (state: RootState) => state.event.searchQuery;
