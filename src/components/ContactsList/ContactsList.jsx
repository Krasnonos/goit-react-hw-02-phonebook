import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactsListItem/ContactsListItem';

export const ContactList = ({ contactsInfo, delateContact }) => {
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {contactsInfo.map(item => (
          <ContactListItem
            item={item}
            key={item.id}
            delateContact={delateContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
};
