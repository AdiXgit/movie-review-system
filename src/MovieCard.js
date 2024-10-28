// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid hsl(206, 88%, 48%)', padding: '10px', margin: '10px' }}>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
        style={{ width: '100px' }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
