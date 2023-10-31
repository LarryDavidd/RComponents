import React from 'react';
import Card from '../Card/Card';

interface SearchResult {
  img: string;
  title: string;
  author: string;
  tags: string[];
  likesCount: number;
  viewCount: number;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="row">
      {results.map((result, index) => (
        <div className="col-md-4" key={index}>
          <Card
            img={result.img}
            title={result.title}
            author={result.author}
            tags={result.tags}
            likesCount={result.likesCount}
            viewCount={result.viewCount}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
