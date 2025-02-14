import React, { useState } from "react";
import axios from "axios";

const MovieSlider = ({ urls }) => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        gap: "10px",
        padding: "10px 0",
        scrollbarWidth: "none",
      }}
    >
      {urls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Movie Poster ${index + 1}`}
          style={{ width: "200px", height: "300px", borderRadius: "5px" }}
        />
      ))}
    </div>
  );
};

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const API_KEY = "751b9c08bbb4091a6ea15142ff6350f7";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    try {
      const url = `${TMDB_BASE_URL}/search/multi`;
      const params = {
        api_key: API_KEY,
        query: searchQuery,
        language: "en-US",
        page: 1,
        include_adult: false,
      };

      const { data } = await axios.get(url, { params });
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Extract URLs for MovieSlider
  const posterUrls = results
    .filter((item) => item.poster_path) // Ensure the poster_path exists
    .map((item) => `https://image.tmdb.org/t/p/w500${item.poster_path}`);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Search Movies or TV Shows</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Type movie or TV show name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      <div>
        <h2>Results:</h2>
        {console.log(posterUrls)}
        <MovieSlider urls={posterUrls} />
      </div>
    </div>
  );
};
