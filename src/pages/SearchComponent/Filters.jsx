import React, { useState, useEffect } from 'react';

const Filters = ({
  genre,
  language,
  type,
  year,
  setGenre,
  setLanguage,
  setType,
  setYear,
  applyFilters,
}) => {
  const [languages, setLanguages] = useState([]);

  // Predefined list of language options
  useEffect(() => {
    setLanguages([
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'Hindi' },
    ]);
  }, []);

  return (
    <div style={{ margin: '20px',textAlign: 'center' }}>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="tv">TV Show</option>
      </select>

      {/* Language */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      >
        <option value="">All Languages</option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* Genre */}
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      >
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="14">Fantasy</option>
        <option value="10751">Family</option>
        <option value="27">Horror</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
      </select>

      {/* Year */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      >
        <option value="">All Years</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
