// noinspection JSAnnotator
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getContactsOper, addContactsOper, deleteContactsOper } from './contactsOps';
import { selectFilter } from './filtersSlice.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentContact: null,
};

const selectContactsItems = state => state.items;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addCurrentContact(state, action) {
      state.currentContact = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsOper.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsOper.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactsOper.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error;
        }
      );
  },
});

export const { addCurrentContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// selectors
export const selectContacts = state => selectContactsItems(state.contacts);
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectCurrentContact = state => state.contacts.currentContact;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
);
