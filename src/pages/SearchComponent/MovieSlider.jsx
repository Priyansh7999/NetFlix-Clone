import React from 'react';
import { useNavigate } from 'react-router-dom';
import posternotfound from "../../assets/posternotavailable.png"
const MovieSlider = ({ results }) => {
  const navigate = useNavigate();
  function handleClick(id, type) {
    if (type === "tv")
      navigate(`/tvshows/${id}`);
    else
      navigate(`/movies/${id}`);
  }
  return (
    <div className='movie-slider'>
      {console.log(results)}
      {results.length > 0 ? (
        <div className='movie-slider'>
          {results.map((result) => (
            <div key={result.id} className='movie-card-img'>
              <img
                src={result?.poster_path
                  ? `https://image.tmdb.org/t/p/w200${result.poster_path}`
                  : posternotfound
                }
                alt={result.title || result.name}
                style={{ width: '200px', height: '300px' }}
                onClick={() => handleClick(result?.id, result?.media_type)}
              />
              <h4>{result.title || result.name}</h4>
            </div>
          ))}
        </div>
      ) : (
        <p>No results to display</p>
      )}
    </div>
  );
};

export default MovieSlider;
