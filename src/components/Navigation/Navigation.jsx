import { NavLink } from 'react-router';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
