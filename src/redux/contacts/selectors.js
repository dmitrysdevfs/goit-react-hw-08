import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilters } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilters],
  (contacts, inputValue) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        contact.number.includes(inputValue)
    );
  }
);
