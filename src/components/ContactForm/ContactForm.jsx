import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { ContactSchema } from '../../utils/validationSchemas';
import { showErrorToast, showSuccessToast } from '../../utils/hotToasts';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => showSuccessToast('Contact successfully added!'))
      .catch(() => showErrorToast('Failed to add contact.'));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label className={css.label}>
          Number
          <Field className={css.input} type="phone" name="number" />
          <ErrorMessage className={css.error} component="p" name="number" />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
