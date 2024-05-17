import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  name: '',
  number: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  selectors: { selectNameFilter: state => state.name },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
export const { selectNameFilter } = filtersSlice.selectors;
