import React from 'react';
import Card from '../Card/Card';
import { Datum } from '../../Types';

interface SearchResultsProps {
  results: Datum[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="container">
      <div className="row">
        {results.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
