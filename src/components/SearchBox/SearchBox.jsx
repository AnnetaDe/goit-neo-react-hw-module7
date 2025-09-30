import s from './SearchBox.module.css';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilteredContacts } from '../../redux/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilteredContacts);

  return (
    <Formik>
      <div className={s.searchBox}>
        <label htmlFor="search">
          <span>Search contact by name</span>
          <input
            id="search"
            type="text"
            defaultValue={value}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </label>
      </div>
    </Formik>
  );
};
