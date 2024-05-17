import s from './FormikSearchBox.module.css';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export const FormikSearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

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
