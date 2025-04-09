import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
  number: Yup.string().min(3, 'Too short!').max(50).required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field className={css.input} type="text" name="name" />
        <ErrorMessage className={css.error} component="p" name="name" />
        <label className={css.label}>Number</label>
        <Field className={css.input} type="phone" name="number" />
        <ErrorMessage className={css.error} component="p" name="number" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
