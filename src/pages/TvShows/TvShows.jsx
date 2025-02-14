import React from 'react'
import TvShowSlider from '../../components/TvShowSlider/TvShowSlider';
import { useNavigate } from 'react-router-dom'
export default function TvShows() {
    const navigate = useNavigate();
    const handleClick = (heading, endpoint, type) => {
        navigate(`/where/${heading}`, { state: { heading, endpoint , type } });
    };
    return (
        <div className='Movies-page'>
            <div className='section1'>
                <h1>TV Shows</h1>
                <p>These days, the small screen has some very big things to offer. From sitcoms <br /> to dramas to travel and talk shows, these are all the best programs on TV.</p>
            </div>
            <div className='Main-Container'>


                {/* Trending Tv Shows */}
                <div id='trending_movie' className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Trending Tv Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "2025 released movies",
                            "https://api.themoviedb.org/3/trending/tv/day?api_key=751b9c08bbb4091a6ea15142ff6350f7","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/trending/tv/day?api_key=751b9c08bbb4091a6ea15142ff6350f7"/>
                </div>


                {/* top rated tv shows */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Top-Rated Tv Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "Top-Rated Hollywood Movies",
                            "https://api.themoviedb.org/3/tv/top_rated?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=en","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/tv/top_rated?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=en" />
                </div>


                {/* top rated Bollywood tv shows */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Top-Rated Bollywood Tv Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "Top-Rated Bollywood Movies",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=hi","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=hi" />
                </div>
                 {/* top rated Hollywood tv shows */}
                 <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Top-Rated Hollywood Tv Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "Top-Rated Bollywood Tv Shows",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&with_original_language=en","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_original_language=en" />
                </div>
                

                {/* romantic tv shows */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Romantic Tv Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "Romantic Tv Shows",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=10749&with_original_language=en","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_original_language=en" />
                </div>
                {/* K-Dramas */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>K-Dramas</h1>
                        <button onClick={() =>
                        handleClick(
                            "K-Dramas",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_original_language=ko","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_original_language=ko" />
                </div>

                {/* K-Dramas Romantic */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>K-Dramas Romantic</h1>
                        <button onClick={() =>
                        handleClick(
                            "K-Dramas Romantic",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=10749&with_original_language=ko","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=10749&with_original_language=ko" />
                </div>

                {/* K-Dramas Historical */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>K-Dramas Historical</h1>
                        <button onClick={() =>
                        handleClick(
                            "K-Dramas Historical",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=36&with_original_language=ko","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=36&with_original_language=ko" />
                </div>


                {/* US TV Dramas */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>US TV Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            " US TV Shows",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=18&with_original_language=en&sort_by=popularity.desc&language=en-US","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=18&with_original_language=en&sort_by=popularity.desc&language=en-US"/>
                </div>


                {/* Bingeworthy TV Shows */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Bingeworthy TV Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "Bingeworthy TV Shows",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&sort_by=popularity.desc&vote_count.gte=1000&language=en-US","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&sort_by=popularity.desc&vote_count.gte=1000&language=en-US"/>
                </div>

                {/* Thriller TV Shows */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1>Thriller TV Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "Thriller TV Shows",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=80,9648&sort_by=popularity.desc&language=en-US","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=80,9648&sort_by=popularity.desc&language=en-US"/>
                </div>


                {/* Sci-Fi & Fantasy TV Shows */}
                <div className='Container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                        <h1> Sci-Fi & Fantasy TV Shows</h1>
                        <button onClick={() =>
                        handleClick(
                            "Sci-Fi & Fantasy TV Shows",
                            "https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=10765&with_original_language=en","tvshows"
                        )
                    }>View All</button>
                    </div>
                    <TvShowSlider urls="https://api.themoviedb.org/3/discover/tv?api_key=751b9c08bbb4091a6ea15142ff6350f7&with_genres=10765&with_original_language=en"/>
                </div>
            </div>
        </div>
    )
}
