import React from 'react';
import SearchBar from './components/Search/SearchBar';
import SearchResults from './components/SearchResults/SearchResult';
import data from './Api/cards.json';

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

class App extends React.Component<{}, { searchResults: SearchResult[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchResults: convertDataToArray(data),
    };
  }

  handleSearch = (searchQuery: string) => {
    const filteredResults = convertDataToArray(data).filter((result: SearchResult) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ searchResults: filteredResults });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.handleSearch} />
        <SearchResults results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
