import { useSelector } from 'react-redux';
import s from './ContactList.module.css';

import { Contact } from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
