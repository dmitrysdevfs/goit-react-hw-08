import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { SignupSchema } from '../../utils/validationSchemas';
import { selectError, selectLoading } from '../../redux/auth/selectors';
import { clearError } from '../../redux/auth/slice';
import Loader from '../Loader';
import css from './RegistrationForm.module.css';

export default function ResistrationForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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
          <Field
            className={css.input}
            type="text"
            name="name"
            onFocus={() => dispatch(clearError())}
          />
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field
            className={css.input}
            type="email"
            name="email"
            onFocus={() => dispatch(clearError())}
          />
          <ErrorMessage className={css.error} component="p" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            onFocus={() => dispatch(clearError())}
          />
          <ErrorMessage className={css.error} component="p" name="password" />
        </label>

        {error && <p className={css.errorMessage}>Please use another email</p>}
        <button className={css.button} type="submit" disabled={loading}>
          {loading ? <Loader /> : 'Register'}
        </button>
      </Form>
    </Formik>
  );
}
