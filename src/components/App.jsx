import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import Loader from './Loader';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { refreshUser } from '../redux/auth/operations';
import { selectRefreshing } from '../redux/auth/selectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const refreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return refreshing ? (
    <div
      style={{
        position: 'fixed',
        top: '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
      }}
    >
      <Loader size={14} />
    </div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
