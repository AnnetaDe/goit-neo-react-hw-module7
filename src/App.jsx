import './App.css';
import { FormikContactForm } from './components/FormikForm/FormikForm';
import { FormikSearchBox } from './components/FormikSearchBox/FormikSearchBox';
import { FormikContactList } from './components/FormikContactList/FormikContactList';
import { formValidation } from './components/FormikForm/formValidation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsOper } from './redux/contactsOps';
import { selectContacts, selectError, selectIsLoading } from './redux/selectors';
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsOper());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <FormikContactForm formValidation={formValidation} />
        <FormikSearchBox />
        <FormikContactList />
        {isLoading && <b>Loading in progr</b>}
      </div>
    </div>
  );
}
export default App;
