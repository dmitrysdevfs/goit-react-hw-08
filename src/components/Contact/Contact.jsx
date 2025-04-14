import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { showErrorToast, showSuccessToast } from '../../utils/hotToasts';
import css from './Contact.module.css';

export default function Contact({ item: { id, name, number } }) {
  const dispatch = useDispatch();

  const hanldeDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => showSuccessToast('Contact successfully deleted!'))
      .catch(() => showErrorToast('Failed to delete contact.'));
  };

  return (
    <div className={css.container}>
      <div className={css.wrapperInfo}>
        <div className={css.contactInfo}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactInfo}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={hanldeDelete}>Delete</button>
    </div>
  );
}
