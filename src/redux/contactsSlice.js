import { createSlice } from '@reduxjs/toolkit';
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

    // addContact: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   prepare(values) {
    //     return {
    //       payload: {
    //         name: values.name,
    //         number: values.number,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
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
        ({ type }) => type.endsWith('/fullfilled'),
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
});

export const { addCurrentContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
