import React, { useContext , useEffect } from "react";
import useFetch from "../useFetch/useFetch";
import "./ImagesList.css"; // Ensure you import the CSS file
import posternotfound from "../../assets/posternotavailable.png"
export default function ImageList({ id , type }){
  const { data } = useFetch({
    url: `https://api.themoviedb.org/3/${type}/${id}/images?api_key=751b9c08bbb4091a6ea15142ff6350f7`,
  });
  return (
    <div className="imageList">
      <h1>Images</h1>
      <div className="slider-container">
        {data?.backdrops?.map((img, index) => (
          <img
            key={index}
            src={
              img.file_path
                ? `https://image.tmdb.org/t/p/w500${img.file_path}`
                : posternotfound
            }
            alt={`Backdrop ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
