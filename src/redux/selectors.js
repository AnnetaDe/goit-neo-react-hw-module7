import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';
import { selectFilter } from './filtersSlice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  }
);
