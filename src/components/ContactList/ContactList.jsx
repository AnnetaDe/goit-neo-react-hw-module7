import { useSelector } from 'react-redux';
import s from './ContactList.module.css';

import { Contact } from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredContacts);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
  );

  return (
    <div>
      <ul className={s.contactsFormik}>
        {filteredContacts.map(contact => (
          <Contact li key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};
