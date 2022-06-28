import { ContactListItem } from '../ContactsListItem/ContactsListItem';

export const ContactList = ({ contactsInfo }) => {
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {contactsInfo.map(item => (
          <ContactListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
