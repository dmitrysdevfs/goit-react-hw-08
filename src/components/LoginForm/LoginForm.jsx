import { Field, Form, Formik } from 'formik';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
