
type SearchBarProps ={
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="search" role="search">
      <label htmlFor="search-input" className="search__label">
        Search by title, author, or category
      </label>

      <input
        id="search-input"
        type="search"
        className="search__input"
        placeholder="Search books"
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
      />
      
    </div>
  );
};

export default SearchBar;
