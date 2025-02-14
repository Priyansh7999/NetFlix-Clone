import React, { useState, useEffect } from "react";
import useFetch from "../../components/useFetch/useFetch";
import "./WatchShow.css"
export default function WatchShow({ showId }) {
  const [selectedSeason, setSelectedSeason] = useState(1); // Default season
  const [selectedEpisode, setSelectedEpisode] = useState(1); // Default episode
  const [episodes, setEpisodes] = useState([]); // Episodes for the selected season

  // Fetch details of all seasons
  const { data: showData, loading: loadingShow, error: errorShow } = useFetch({
    url: `https://api.themoviedb.org/3/tv/${showId}?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US`,
  });

  // Fetch details of the selected season
  const { data: seasonData, loading: loadingSeason, error: errorSeason } = useFetch({
    url: `https://api.themoviedb.org/3/tv/${showId}/season/${selectedSeason}?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US`,
  });

  // Populate episodes when season data changes
  useEffect(() => {
    if (seasonData?.episodes) {
      setEpisodes(seasonData.episodes);
      setSelectedEpisode(1); // Reset episode selection when season changes
    }
  }, [seasonData]);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handleEpisodeChange = (event) => {
    setSelectedEpisode(event.target.value);
  };

  // Generate the embed URL
  const embedUrl = `https://vidsrc.xyz/embed/tv?tmdb=${showId}&season=${selectedSeason}&episode=${selectedEpisode}&no-redirect=true`;
  // const embedUrl = `https://vidsrc.xyz/v3/embed/tv/${showId}/${selectedSeason}/${selectedEpisode}`;



  if (loadingShow || loadingSeason) return <p>Loading...</p>;
  if (errorShow || errorSeason)
    return <p>Error fetching data: {errorShow || errorSeason}</p>;

  return (
    <div className="watch-show">
      <h2>Watch Show</h2>
      <div className="dropdowns">
        <div className="dropdown">
          <label htmlFor="season-dropdown">Season: </label>
          <select
            id="season-dropdown"
            value={selectedSeason}
            onChange={handleSeasonChange}
          >
            {showData?.seasons?.map((season) => (
              <option key={season.season_number} value={season.season_number}>
                Season {season.season_number}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="episode-dropdown">Episode: </label>
          <select
            id="episode-dropdown"
            value={selectedEpisode}
            onChange={handleEpisodeChange}
          >
            {episodes.map((episode) => (
              <option key={episode.episode_number} value={episode.episode_number}>
                Episode {episode.episode_number}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="video-container" >
        <iframe
          src={embedUrl}
          title="Watch Show"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
}
