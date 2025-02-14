import React from 'react';
import './MovieSlider.css';
import useFetch from '../useFetch/useFetch';
import { useNavigate } from 'react-router-dom';
import posternotfound from "../../assets/posternotavailable.png"

export default function MovieSlider(props) {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch({ url: props.urls });

  function handleClick(id) {
    // Scroll to the top before navigating
    window.scrollTo(0, 0);
    navigate(`/movies/${id}`);
  }

  return (
    <div className="movie-slider">
      {data?.results?.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <div className="movie-card-img">
            <img
              src={
                movie?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : posternotfound
              }
              alt={movie?.title || 'No Title Available'}
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(movie.id)}
            />
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
}
