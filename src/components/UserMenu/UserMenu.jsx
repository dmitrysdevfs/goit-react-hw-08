import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectUser,
} from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import Loader from '../Loader';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleLougout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={handleLougout}
        disabled={loading}
      >
        {loading ? <Loader /> : 'Logout'}
      </button>
      {error && (
        <p className={css.errorMessage}>Logout failed. Please try again.</p>
      )}
    </div>
  );
}
