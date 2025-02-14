import React , {useEffect} from 'react'
import './Home.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import MovieSlider from '../../components/MovieSlider/MovieSlider'
import { useNavigate,useParams } from 'react-router-dom'
import TvShowSlider from '../../components/TvShowSlider/TvShowSlider'
export default function Home() {
  const navigate=useNavigate();

  const handleClick = (heading, endpoint,type) => {
    navigate(`/where/${heading}`, { state: { heading, endpoint ,type } });
};
  return (
    <div className='home'>
      <HeroSection />
      <hr />
      <div className='Main-Container'>
        <div className='Container'>
          <div style={{display:'flex',justifyContent:'space-between', padding:'1rem'}}>
            <h1>Upcoming Movies</h1>
            <button onClick={() =>
                        handleClick(
                            "Upcoming Movies",
                            "https://api.themoviedb.org/3/movie/upcoming?api_key=751b9c08bbb4091a6ea15142ff6350f7","movies"
                        )
                    }>View All</button>
                    </div>
          <MovieSlider urls="https://api.themoviedb.org/3/movie/upcoming?api_key=751b9c08bbb4091a6ea15142ff6350f7" />
        </div>
        <hr />

        <div id='trending_movie' className='Container'>
          <div style={{display:'flex',justifyContent:'space-between', padding:'1rem'}}>
            <h1>Trending Movie</h1>
            <button onClick={() =>
                        handleClick(
                            "Trending Movie",
                            "https://api.themoviedb.org/3/trending/movie/day?api_key=751b9c08bbb4091a6ea15142ff6350f7","movies"
                        )
                    }>View All</button>
                    </div>
          <MovieSlider urls="https://api.themoviedb.org/3/trending/movie/day?api_key=751b9c08bbb4091a6ea15142ff6350f7" />
        </div>
        <hr />


        <div id='trending_tv_shows' className='Container'>
        <div style={{display:'flex',justifyContent:'space-between', padding:'1rem'}}>
            <h1 onClick={()=>handleClick("trending_tv_shows")}>Trending TV Shows</h1>
            <button onClick={() =>
                        handleClick(
                            "Trending TV Shows",
                            "https://api.themoviedb.org/3/trending/tv/day?api_key=751b9c08bbb4091a6ea15142ff6350f7","tvshows"
                        )
                    }>View All</button>
                    </div>
          <TvShowSlider urls="https://api.themoviedb.org/3/trending/tv/day?api_key=751b9c08bbb4091a6ea15142ff6350f7" />
        </div>
        <hr />


        <div className='Container'>
          <div style={{display:'flex',justifyContent:'space-between', padding:'1rem'}}>
            <h1 onClick={()=>handleClick("popular_movies")}>Popular Movies</h1>
            <button onClick={() =>
                        handleClick(
                            "Popular Movies",
                            "https://api.themoviedb.org/3/movie/popular?api_key=751b9c08bbb4091a6ea15142ff6350f7","movies"
                        )
                    }>View All</button>
                    </div>
          <MovieSlider urls="https://api.themoviedb.org/3/movie/popular?api_key=751b9c08bbb4091a6ea15142ff6350f7" />
        </div>
        <hr />

        <div className='Container'>
          <div style={{display:'flex',justifyContent:'space-between', padding:'1rem'}}>
            <h1>Popular TV Shows</h1>
            <button onClick={() =>
                        handleClick(
                            "Popular TV Shows",
                            "https://api.themoviedb.org/3/tv/popular?api_key=751b9c08bbb4091a6ea15142ff6350f7","tvshows"
                        )
                    }>View All</button>
                    </div>
          <TvShowSlider urls="https://api.themoviedb.org/3/tv/popular?api_key=751b9c08bbb4091a6ea15142ff6350f7" />
        </div>
        <hr />
      </div>
    </div>
  )
}