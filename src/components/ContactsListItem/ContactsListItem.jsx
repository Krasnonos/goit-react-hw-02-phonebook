import PropTypes from 'prop-types';

export const ContactListItem = ({ item, delateContact }) => {
  return (
    <li>
      <p>name: {item.name}</p>
      <p>number: {item.number}</p>
      <button type="button" onClick={() => delateContact(item.id)}>
        Delate
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  delateContact: PropTypes.func,
  item: PropTypes.objectOf(PropTypes.string),
};
