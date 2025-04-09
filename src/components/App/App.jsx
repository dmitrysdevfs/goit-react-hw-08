import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm />

      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
