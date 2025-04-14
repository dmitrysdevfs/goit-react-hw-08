import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilters } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilters);

  const handleChange = value => {
    dispatch(changeFilter(value));
  };

  return (
    <>
      <p>Find contacts by name or number</p>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
      />
    </>
  );
}
