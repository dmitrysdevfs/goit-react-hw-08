import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { SignupSchema } from '../../utils/validationSchemas';
import css from './RegistrationForm.module.css';

export default function ResistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} component="p" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage className={css.error} component="p" name="password" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
