import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = state => state.items;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;
// export const selectCurrentContact = state => state.contacts.currentContact;
// export const selectFilter = state => state.name;

export const selectFilteredTodos = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ text }) => text.toLowerCase().includes(filter.toLowerCase()));
  }
);
