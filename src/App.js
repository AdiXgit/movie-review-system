// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const apiKey = '4cc70bc4'; // Replace with your actual OMDB API key

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Simple IMDb Clone</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
