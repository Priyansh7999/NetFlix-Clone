import React, { useState, useEffect } from "react";
import useFetch from "../../components/useFetch/useFetch";
import "./SeasonDetails.css";
export default function SeasonDetails({ showId }) {
  const [seasons, setSeasons] = useState([]); // List of seasons
  const [selectedSeason, setSelectedSeason] = useState(1); // Default to season 1
  const [seasonDetails, setSeasonDetails] = useState(null); // Selected season details
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);
  // Fetch all seasons for the dropdown
  const { data: showData, loading: loadingShow, error: errorShow } = useFetch({
    url: `https://api.themoviedb.org/3/tv/${showId}?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US`,
  });

  // Fetch details of the selected season
  const {
    data: seasonData,
    loading: loadingSeason,
    error: errorSeason,
  } = useFetch({
    url: `https://api.themoviedb.org/3/tv/${showId}/season/${selectedSeason}?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US`,
  });

  // Populate seasons list when the show data is fetched
  useEffect(() => {
    if (showData?.seasons) {
      setSeasons(showData.seasons);
    }
  }, [showData]);

  // Update season details when the selected season data is fetched
  useEffect(() => {
    setSeasonDetails(seasonData);
  }, [seasonData]);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  if (loadingShow || loadingSeason) return <p>Loading...</p>;
  if (errorShow || errorSeason)
    return <p>Error fetching season details: {errorShow || errorSeason}</p>;

  return (
    <div className="season-details">
      <h2>Season Details</h2>
      <div className="season-select">
        <label htmlFor="season-dropdown">Select Season: </label>
        <select
          id="season-dropdown"
          value={selectedSeason}
          onChange={handleSeasonChange}
        >
          {seasons.map((season) => (
            <option key={season.season_number} value={season.season_number}>
              {season.name}
            </option>
          ))}
        </select>
      </div>
      <div className="episodes-list">
        {seasonDetails?.episodes?.map((episode) => (
          <div className="episode-card" key={episode.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${episode?.still_path}`}
              alt={episode?.name}
            />
            <div className="episode-info">
              <h3>{episode?.name}</h3>
              <p>{episode?.runtime ? `${episode.runtime} min` : "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
