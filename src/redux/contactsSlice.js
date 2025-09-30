import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getContactsOper, addContactsOper, deleteContactsOper } from './contactsOps';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentContact: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  selectors: { selectContacts: state => state.items },
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
        state.items = [...state.items, payload];
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
        (state, { error }) => {
          state.isLoading = false;
          state.error = error;
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
  selectors: {
    selectContacts: state => state.items,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
    selectCurrentContact: state => state.currentContact,
  },
});

export const { addCurrentContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { selectContacts, selectIsLoading, selectError, selectCurrentContact } =
  contactsSlice.selectors;
