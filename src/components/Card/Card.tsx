import React from 'react';
import { Datum } from '../../Types';

interface SearchResultsProps {
  card: Datum;
}

const SearchResults: React.FC<SearchResultsProps> = ({ card }) => {
  return (
    <div className="col-lg-3">
      <div className="card text-start">
        <img className="card-img-top" src={card.images.small} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{card.name}</h4>
          <p className="card-text">Supertype: {card.supertype}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
