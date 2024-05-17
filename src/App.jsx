import './App.css';
import { FormikContactForm } from './components/FormikForm/FormikForm';
import { FormikSearchBox } from './components/FormikSearchBox/FormikSearchBox';
import { FormikContactList } from './components/FormikContactList/FormikContactList';
import { formValidation } from './components/FormikForm/formValidation';
function App() {
  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <FormikContactForm formValidation={formValidation} />
        <FormikSearchBox />
        <FormikContactList />
      </div>
    </div>
  );
}
export default App;
