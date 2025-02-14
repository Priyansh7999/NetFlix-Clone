import React, { useEffect, useState } from 'react';
import './CastList.css';
import posternotfound from "../../assets/posternotavailable.png"
export default function CastList({ id , type }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=751b9c08bbb4091a6ea15142ff6350f7`
      );
      const data = await response.json();
      setCast(data.cast || []);
    };

    fetchCast();
  }, [id]);

  return (
    <div className="cast-list">
      <h2 className="cast-heading">Cast</h2>
      <div className="cast-container">
        {cast.map((member) => (
          <div key={member.id} className="cast-card">
            <img
              src={
                member?.profile_path
                  ? `https://image.tmdb.org/t/p/w200${member?.profile_path}`
                  : posternotfound
              }
              alt={member?.name}
              className="cast-image"
            />
            <p className="cast-name">{member?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
