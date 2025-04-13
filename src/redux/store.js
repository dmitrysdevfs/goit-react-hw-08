import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../redux/filters/slice';
import contactsReducer from '../redux/contacts/slice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
  },
});
