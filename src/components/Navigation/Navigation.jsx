import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={getLinkStyles} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getLinkStyles} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
