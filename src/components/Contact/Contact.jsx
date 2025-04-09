import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ item: { id, name, number } }) {
  const dispatch = useDispatch();

  const hanldeDelete = () => {
    dispatch(deleteContact(id));
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
