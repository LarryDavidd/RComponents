import React, { useState } from 'react';
import SearchBar from './components/Search/SearchBar';
import SearchResults from './components/SearchResults/SearchResult';
import data from './Api/cards.json'; // Подключите ваш JSON-файл с данными

interface SearchResult {
  img: string;
  title: string;
  author: string;
  tags: string[];
  likesCount: number;
  viewCount: number;
}

const convertDataToArray = (data: { [key: string]: SearchResult }): SearchResult[] => {
  return Object.values(data);
};

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>(convertDataToArray(data));

  const handleSearch = (searchQuery: string) => {
    const filteredResults = convertDataToArray(data).filter((result: SearchResult) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
