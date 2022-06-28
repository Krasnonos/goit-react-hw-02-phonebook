import { ContactListItem } from '../ContactsListItem/ContactsListItem';

export const ContactList = ({ contactsInfo, delateContat }) => {
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {contactsInfo.map(item => (
          <ContactListItem
            item={item}
            key={item.id}
            delateContat={delateContat}
          />
        ))}
      </ul>
    </div>
  );
};
