import React , { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/useFetch/useFetch';
import './MovieDetails.css';
import MovieTrailer from '../../components/MovieTrailer/MovieTrailer';
import ImagesList from '../../components/ImagesList/ImagesList';
import { NetFlix } from '../../context';
import CastList from '../../components/CastList/CastList';
import WatchMovie from '../../components/WatchMovie/WatchMovie';
import Skeleton from '../../components/Skeleton/Skeleton';
import MovieSlider from "../../components/MovieSlider/MovieSlider"
export default function MovieDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);
    const {logo} = useContext(NetFlix);
    const params=useParams();
    const movieId=params.movieId;
    const [watchMovie,setWatchMovie]=useState(true);
    const [watchTrailer,setWatchTrailer]=useState(false);
    const [movie,setMovie]=useState({});
    const {data,loading,error}=useFetch({url:`https://api.themoviedb.org/3/movie/${movieId}?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US`})
    useEffect(()=>{
        setMovie(data);
    },[data])
    console.log(movie)
    if (loading) return <Skeleton />
    if (error) return <p style={{textAlign:"center"}}>Error: {error}</p>;

  return (
    <div className='movie-details'>
      <div className='header'>
        <div className='header-image'>
          <img  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
        </div>
        {/* <div className='header-title'>
        <h1 class="gradient-text">{movie?.title}</h1>
          <p>{movie?.overview}</p>
          <div className='hero-btn'>
            <button style={{backgroundColor: 'rgba(255, 0, 0, 0.64)'}} onClick={()=>setWatchMovie(true)}>Watch Now</button>
            <button style={{backgroundColor: 'rgba(184, 180, 180, 0.65)'}} onClick={()=>setWatchTrailer(true)}>Watch Trailer</button>
          </div>
        </div> */}
        <div className='movie-cards'>
        <h2>{movie?.title}</h2>
        <div className='year-certficate-genre'>
          <p>{movie?.release_date} | </p>
          <p>{movie?.popularity} | </p>
          <p>{movie?.genres?.map((genre)=>genre.name+"  ")}</p>
        </div>
        <p><span>Tagline : </span>{movie?.tagline}</p>
        <p><span>Overview : </span>{movie?.overview}</p>
        <p><span>Runtime : </span>{movie?.runtime} min</p>
        <p><span>Production Company : </span>{movie?.production_companies?.map((company)=>company.name+"  ")}</p>
        <p><span>Production Country : </span>{movie?.production_countries?.map((country)=>country.name+"  ")}</p>
        <p><span>Language : </span>{movie?.spoken_languages?.map((language)=>language.name+"  ")}</p>
      </div>
      </div>
      <div className='cast-list'>
        <CastList id={movieId} type="movie"/>
      </div>
      <div className='hero-btn' style={{display: 'flex', justifyContent: 'center', gap: '10px',margin: '20px'}}>
          <button style={{backgroundColor: 'rgba(255, 0, 0, 0.64)'}} onClick={()=>{setWatchMovie(true),setWatchTrailer(false)}}>Watch Now</button>
          <button style={{backgroundColor: 'rgba(184, 180, 180, 0.65)'}} onClick={()=>{setWatchTrailer(true) , setWatchMovie(false)}}>Watch Trailer</button>
      </div>
      <div>
        {watchMovie && <div className='movie-trailer'><WatchMovie id={movieId}/></div>} 
        {watchTrailer && <MovieTrailer id={movieId} type="movie"/>}
      </div>
      <div className='movies-images-list'>
        <ImagesList id={movieId} type="movie"/>
      </div>
      <h1 style={{margin:"20px"}}>Similar Movies</h1>
      <MovieSlider urls={`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=751b9c08bbb4091a6ea15142ff6350f7`}/>
    </div>
  )
}
