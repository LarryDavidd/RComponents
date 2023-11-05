import React, { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults/SearchResult';
import SearchBar from './components/Search/SearchBar';
import { Datum, RootObject } from './Types';
import Pagination from './components/Pagination/Pagination';

const App = () => {
  const [result, setResult] = useState<Datum[] | []>([]);
  const [totalCoutn, setTotalCount] = useState<number>();
  const [pageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchQuery: string) => {
    const query = `https://api.pokemontcg.io/v2/cards/?pageSize=${pageSize}&q=name:${
      searchQuery + '*'
    }&page=${currentPage}`;

    fetch(query)
      .then((response) => response.json())
      .then((data: RootObject) => {
        if (data.count !== 0) {
          setResult(data.data);
          setTotalCount(data.totalCount);
        }
        if (searchQuery === '*') {
          localStorage.removeItem('lastQuery');
        } else {
          localStorage.setItem('lastQuery', searchQuery);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
  };

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    const newQuery = lastQuery ? lastQuery : '';
    handleSearch(newQuery);
  }, [currentPage]);

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={result} />
      <Pagination
        totalItems={totalCoutn}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
