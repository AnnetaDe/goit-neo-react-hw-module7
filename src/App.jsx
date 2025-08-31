import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsOper } from './redux/contactsOps';
import { selectIsLoading } from './redux/selectors';
import { Loader } from './components/Loader/Loader';
import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import { formValidation } from './components/ContactForm/formValidation';

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
        <ContactForm formValidation={formValidation} />
        {isLoading && <Loader />}
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
export default App;
