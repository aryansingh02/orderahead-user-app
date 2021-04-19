/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types';
import config from '../../config';
import { FilterStalls } from '../../utils';
import { event as Event } from '../../data/testData';

export interface EventState {
  loading: boolean;
  location: object;
  searchQuery: string;
}

const initialState: EventState = {
  loading: false,
  searchQuery: '',
  location: {
    lat: null,
    lng: null,
    place: '',
  },
};

const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setLocation(state, action: PayloadAction<{ location: Object }>) {
      state.location = action.payload.location;
    },
  },
});

export const { setLocation, setQuery } = EventSlice.actions;

export default EventSlice.reducer;

export const getQuery = (state: RootState) => state.event.searchQuery;
export const getLocation = (state: RootState) => state.event.location;
export const getFilteredStalls = (state: RootState) =>
  FilterStalls(Event.stalls, state.event.searchQuery);
export const getFilteredMapStalls = (state: RootState) => {
  const newStalls = FilterStalls(
    Event.stalls,
    state.event.searchQuery
  ).map((item) => ({ ...item, active: false }));
  return newStalls;
};
