export const ContactListItem = ({ item, delateContat }) => {
  return (
    <li>
      <p>name: {item.name}</p>
      <p>number: {item.number}</p>
      <button type="button" onClick={() => delateContat(item.id)}>
        Delate
      </button>
    </li>
  );
};
