import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import { showErrorToast, showSuccessToast } from '../../utils/hotToasts';
import css from './Contact.module.css';
import { useState } from 'react';

export default function Contact({ item: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleEdit = () => {
    dispatch(editContact({ id, name: editedName, number: editedNumber }))
      .unwrap()
      .then(() => setIsEditing(false));
  };

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
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={e => setEditedName(e.target.value)}
            />
          ) : (
            <p>{name}</p>
          )}
        </div>
        <div className={css.contactInfo}>
          <FaPhoneAlt />
          {isEditing ? (
            <input
              type="text"
              value={editedNumber}
              onChange={e => setEditedNumber(e.target.value)}
            />
          ) : (
            <p>{number}</p>
          )}
        </div>
      </div>
      <div className={css.btnWrapper}>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={hanldeDelete} disabled={isEditing}>
          Delete
        </button>
      </div>
    </div>
  );
}
