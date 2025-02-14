import React from 'react';
import useFetch from '../useFetch/useFetch';
import './MovieTrailer.css'; // Optional CSS for styling

export default function MovieTrailer({ id , type }) {
  // Fetch video data from the TMDB API
  const { data, loading, error } = useFetch({
    url: `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US`,
  });

  if (loading) return <p style={{textAlign:"center"}}>Loading trailer...</p>;
  if (error) return <p style={{textAlign:"center"}}>Error loading trailer: {error}</p>;

  // Find the first video that is a trailer and hosted on YouTube
  const trailer = data?.results?.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  if (!trailer) {
    return <p>No trailer available for this movie.</p>;
  }

  return (
    <div className='movie-trailer'>
      <div className="trailer">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&&modestbranding=1&rel=0&showinfo=0`}
        title={trailer.name}
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}
