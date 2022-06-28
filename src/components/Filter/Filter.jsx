export const Filter = ({ filter, onFilter }) => {
  return (
    <label>
      Filter
      <input type="text" name="filter" value={filter} onChange={onFilter} />
    </label>
  );
};
