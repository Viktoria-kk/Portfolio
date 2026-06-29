import './SearchBar.scss';

function SearchBar({ value, onChange, placeholder }) {
  return (
    <label className="search-bar">
      <span>Search</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </label>
  );
}

export default SearchBar;
