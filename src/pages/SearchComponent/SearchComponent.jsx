import React, { useState } from 'react';
import axios from 'axios';
import MovieSlider from './MovieSlider';
import './SearchComponent.css';
const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const API_KEY = '751b9c08bbb4091a6ea15142ff6350f7';
  const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  // Search movies or TV shows by name
  const searchByName = async () => {
    try {
      const url = `${TMDB_BASE_URL}/search/multi`;
      const params = {
        api_key: API_KEY,
        query: searchQuery,
        language: 'en-US', // Fetch the title in English
        page: 1,
        include_adult: false,
      };
      const { data } = await axios.get(url, { params });
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
      <h1 className="heading">Movie and TV Show Search</h1> 
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Movies/TV Shows"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={searchByName}>Search</button>
        </div>  
      <h1 className="results-heading">Results:</h1>
      {results.length > 0 ? (
        <MovieSlider results={results} />
      ) : (
        <p className="no-results">No results found. Try adjusting your search or filters.</p>
      )}
    </div>
  );
}
export default SearchComponent;
