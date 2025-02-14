import React from 'react'
import useFetch from '../useFetch/useFetch'
import { useNavigate } from 'react-router-dom'
import posternotfound from "../../assets/posternotavailable.png"
export default function TvShowSlider(props) {
   const navigate=useNavigate();
      const {data,loading,error} =useFetch({ url: props.urls })
      // console.log(data)
      function handleClick(id) {
        // Scroll to the top before navigating
        window.scrollTo(0, 0);
        navigate(`/tvshows/${id}`);
      }
    return (
      <div className='movie-slider'>
        {
          data?.results?.map((tvshows)=>(
            <div className="movie-card" key={tvshows.id}>
              <div className="movie-card-img">
                  <img
                  src={
                    tvshows?.poster_path
                      ? `https://image.tmdb.org/t/p/w500${tvshows?.poster_path}`
                      : posternotfound
                  }
                  alt={tvshows?.title}
                  style={{ cursor: 'pointer' }}
                  onClick={()=>handleClick(tvshows.id)}
                  />
              </div>
            </div>
          ))
        }
        <hr />
      </div>
    )
  }
  