import { useState, useEffect } from 'react';

function SearchBar({ onSearch }: { onSearch: (searchQuery: string) => void }) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const savedSearchQuery = localStorage.getItem('searchQuery');
    if (savedSearchQuery) {
      setSearchQuery(savedSearchQuery);
    }
  }, []);

  const handleSearch = () => {
    onSearch(searchQuery.trim());

    localStorage.setItem('searchQuery', searchQuery);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
