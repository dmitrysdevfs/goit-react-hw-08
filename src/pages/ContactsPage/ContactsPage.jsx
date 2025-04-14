import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your Phonebook</PageTitle>

      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        !loading && (
          <p className={css.emptyMessage}>
            Your contact list is empty. Start by adding a new contact! 😊
          </p>
        )
      )}
    </>
  );
}
