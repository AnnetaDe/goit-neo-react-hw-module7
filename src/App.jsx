import './App.css';
import { FormikContactForm } from './components/FormikForm/FormikForm';
import { FormikSearchBox } from './components/FormikSearchBox/FormikSearchBox';
import { FormikContactList } from './components/FormikContactList/FormikContactList';
import { formValidation } from './components/FormikForm/formValidation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsOper } from './redux/contactsOps';
import { selectError, selectIsLoading } from './redux/selectors';
import { Loader } from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContactsOper());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <FormikContactForm formValidation={formValidation} />
        {isLoading && <Loader />}
        <FormikSearchBox />
        <FormikContactList />
      </div>
    </div>
  );
}
export default App;
