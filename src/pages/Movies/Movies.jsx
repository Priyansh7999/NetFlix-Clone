import React, {useEffect} from 'react'
import './Movies.css'
import MovieSlider from '../../components/MovieSlider/MovieSlider'
import { useNavigate } from 'react-router-dom'
export default function Movies() {
    const navigate = useNavigate();
    const handleClick = (heading, endpoint,type ) => {
        navigate(`/where/${heading}`, { state: { heading, endpoint, type } });
    };
    return (
        <div className='Movies-page'>
            <div className='section1'>
                <h1>Movies</h1>
                <p>Movies move us like nothing else can, whether they’re scary, funny, <br />dramatic, romantic or anywhere in-between. So many titles, so much <br /> to experience.</p>
            </div>
            <div className='Main-Container'>

                {/* now playing */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Now Playing</h1>
                        <button onClick={() =>
                        handleClick(
                            "Now Playing",
                            "https://api.themoviedb.org/3/movie/now_playing?api_key=751b9c08bbb4091a6ea15142ff6350f7","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/movie/now_playing?api_key=751b9c08bbb4091a6ea15142ff6350f7" />
                </div>

                {/* 2025 released movies */}
                <div id='trending_movie' className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>2025 released movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "2025 released movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&primary_release_year=2025","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&primary_release_year=2025" />
                </div>


                {/* popular movies*/}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1 onClick={() => handleClick("popular_movies")}>Popular Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Popular Movies",
                            "https://api.themoviedb.org/3/movie/popular?api_key=751b9c08bbb4091a6ea15142ff6350f7","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/movie/popular?api_key=751b9c08bbb4091a6ea15142ff6350f7" />
                </div>



                {/* top rated hollywood movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Top-Rated Hollywood Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Top-Rated Hollywood Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=en","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=en" />
                </div>


                {/* top rated bollywood movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Top-Rated Bollywood Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Top-Rated Bollywood Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=hi","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=hi" />
                </div>
                


                {/* top rated tamil movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Top Tamil-Language Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Top Tamil-Language Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=ta","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=ta" />
                </div>


                {/* top rated telugu movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Top Telugu-Language Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Top Telugu-Language Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_original_language=te&language=en-US","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_original_language=te&language=en-US" />
                </div>

                {/* romantic movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Romantic Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Romantic Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=10749","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=10749" />
                </div>

                {/* comedy movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Comedy Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Comedy Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=35&language=en-US","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=35&language=en-US" />
                </div>

                {/* thriller movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Thriller Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Thriller Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=53&language=en-US","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=53&language=en-US" />
                </div>


                {/* animated movies */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Animated Movies</h1>
                        <button onClick={() =>
                        handleClick(
                            "Animated Movies",
                            "https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=16&with_keywords=210024&language=en-US","movies"
                        )
                    }>View All</button>
                    </div>
                    <MovieSlider urls="https://api.themoviedb.org/3/discover/movie?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=16&with_keywords=210024&language=en-US" />
                </div>
            </div>
        </div>
    )
}
