import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Password too short!').required('Required'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Password too short!').required('Required'),
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
  number: Yup.string().min(3, 'Too short!').max(50).required('Required'),
});
