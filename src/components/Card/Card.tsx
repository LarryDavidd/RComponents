import React from 'react';

interface CardProps {
  img: string;
  title: string;
  author: string;
  tags: string[];
  likesCount: number;
  viewCount: number;
}

const Card: React.FC<CardProps> = ({ img, title, author, tags, likesCount, viewCount }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Tags: {tags.join(', ')}</p>
        <p className="card-text">Likes: {likesCount}</p>
        <p className="card-text">Views: {viewCount}</p>
      </div>
    </div>
  );
};

export default Card;
