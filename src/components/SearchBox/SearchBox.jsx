import s from './SearchBox.module.css';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/filtersSlice';
export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <Formik>
      <div className={s.searchBox}>
        <label htmlFor="search">
          <span>Search contact by name</span>
          <input
            id="search"
            type="text"
            value={useSelector(selectFilter)}
            defaultValue=''
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </label>
      </div>
    </Formik>
  );
};
