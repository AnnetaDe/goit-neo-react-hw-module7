import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';
const initialState = {
  name: '',
  number: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  selectors: {
    selectFilter: state => state.filters.name,
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectFilter = state => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
