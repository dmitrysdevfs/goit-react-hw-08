import { NavLink } from 'react-router';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div>
      <NavLink className={getLinkStyles} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkStyles} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
