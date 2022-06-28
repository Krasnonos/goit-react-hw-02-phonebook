export const ContactListItem = ({ item }) => {
  return (
    <li>
      <p>name: {item.name}</p>
      <p>number: {item.number}</p>
    </li>
  );
};
