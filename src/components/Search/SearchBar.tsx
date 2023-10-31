import { Component, ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

interface SearchBarState {
  searchQuery: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      searchQuery: '',
    };
  }

  componentDidMount() {
    const savedSearchQuery = localStorage.getItem('searchQuery');
    if (savedSearchQuery) {
      this.setState({ searchQuery: savedSearchQuery });
    }
  }

  handleSearch = () => {
    const { searchQuery } = this.state;
    this.props.onSearch(searchQuery.trim());

    localStorage.setItem('searchQuery', searchQuery);
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchQuery}
          onChange={this.handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
