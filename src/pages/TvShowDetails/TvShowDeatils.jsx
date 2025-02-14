import React, { useContext, useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/useFetch/useFetch'
import MovieTrailer from '../../components/MovieTrailer/MovieTrailer'
import ImageList from '../../components/ImagesList/ImagesList'
import { NetFlix } from '../../context'
import CastList from '../../components/CastList/CastList'
import Skeleton from '../../components/Skeleton/Skeleton'
import SeasonDetails from './SeasonDetails'
import WatchShow from '../../components/WatchShow/WatchShow'
import TvShowSlider from "../../components/TvShowSlider/TvShowSlider";
export default function TvShowDeatils() {

    useEffect(() => {
      window.scrollTo(0, 0);
  },[]);
    const {logo}=useContext(NetFlix);
    const params = useParams();
    const showId=params.tvshowId
    const {data,loading,error}=useFetch({url:`https://api.themoviedb.org/3/tv/${showId}?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US`})
    console.log(data)
    const [show,setShow]=useState({});
    const [watchShow,setWatchShow]=useState(true);
    const [watchTrailer,setWatchTrailer]=useState(false);
        useEffect(()=>{
            setShow(data);
        },[data])
        useEffect(() => {
          window.scrollTo(0, 0);
      },[]);

    if (loading) return <Skeleton />;
    if (error) return <p style={{textAlign:"center"}}>Error: {error}</p>;
  return (
    <div className='movie-details'>
      <div className='header'>
        <div className='header-image'>
          <img  src={`https://image.tmdb.org/t/p/w500${show?.poster_path}`} alt="" />
        </div>
        <div className='movie-cards'>
        <h2>{show?.name}</h2>
        <div className='year-certficate-genre'>
          <p>{show?.first_air_date} | </p>
          <p>{show?.vote_average} | </p>
          <p>{show?.genres?.map((genre)=>genre.name+"  ")}</p>
        </div>
        <p><span>Tagline : </span>{show?.tagline}</p>
        <p><span>Overview : </span>{show?.overview}</p>
        <p><span>Release : </span>{show?.first_air_date}</p>
        <p><span>Status : </span>{show?.status}</p>
        <p><span>Total Season : </span>{show?.number_of_seasons}</p>
        <p><span>Total Episodes : </span>{show?.number_of_episodes}</p>
        <p><span>Production Company : </span>{show?.production_companies?.map((company)=>company.name+"  ")}</p>
        <p><span>Production Country : </span>{show?.production_countries?.map((country)=>country.name+"  ")}</p>
        <p><span>Language : </span>{show?.spoken_languages?.map((language)=>language.name+"  ")}</p>
      </div>
      </div>
      {/* Add SeasonDetails Component */}
      <SeasonDetails showId={showId} season={show?.number_of_seasons} />
      <div className='cast-list'>
        <CastList id={showId} type="tv"/>
      </div>
      <div className='hero-btn' style={{display: 'flex', justifyContent: 'center', gap: '10px',margin: '20px'}}>
          <button style={{backgroundColor: 'rgba(255, 0, 0, 0.64)'}} onClick={()=>{setWatchShow(true),setWatchTrailer(false)}}>Watch Now</button>
          <button style={{backgroundColor: 'rgba(184, 180, 180, 0.65)'}} onClick={()=>{setWatchTrailer(true) , setWatchShow(false)}}>Watch Trailer</button>
      </div>
      <div>
        {watchShow && <div className='movie-trailer'><WatchShow showId={showId}/></div>} 
        {watchTrailer && <MovieTrailer id={showId} type="tv"/>}
      </div>
       <div className='movies-images-list'>
            <ImageList id={showId} type="tv"/>
       </div>
       <div>
          <h1 style={{margin:"20px"}}>Similar Tv Shows</h1>
          <TvShowSlider urls={`https://api.themoviedb.org/3/tv/${showId}/similar?api_key=751b9c08bbb4091a6ea15142ff6350f7`}/>
        </div>
    </div>
  )
}
