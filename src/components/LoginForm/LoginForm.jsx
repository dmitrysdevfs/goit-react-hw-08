import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { LoginSchema } from '../../utils/validationSchemas';
import { selectError, selectLoading } from '../../redux/auth/selectors';
import { clearError } from '../../redux/auth/slice';
import Loader from '../Loader';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form} autoComplete="off">
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

        {error && (
          <p className={css.errorMessage}>Incorrect email or password</p>
        )}
        <button className={css.button} type="submit" disabled={loading}>
          {loading ? <Loader /> : 'Log in'}
        </button>
      </Form>
    </Formik>
  );
}
