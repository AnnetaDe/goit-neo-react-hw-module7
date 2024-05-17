import { useSelector } from 'react-redux';
import s from './FormikContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';

import { FormikContact } from '../FormikContact/FormikContact';
import { selectContacts } from '../../redux/contactsSlice';

export const FormikContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <div>
      <ul className={s.contactsFormik}>
        {filteredContacts.map(contact => (
          <FormikContact li key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};
