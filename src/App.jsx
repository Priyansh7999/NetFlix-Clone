import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Layout'
import Where from './pages/Where/Where'
import Movies from './pages/Movies/Movies'
import TvShows from './pages/TvShows/TvShows'
import SearchComponent from './pages/SearchComponent/SearchComponent'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import TvShowDeatils from './pages/TvShowDetails/TvShowDeatils'
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tvshows' element={<TvShows/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}/>
          <Route path='/tvshows/:tvshowId' element={<TvShowDeatils/>}/>
          <Route path='/search' element={<SearchComponent/>}/>
          <Route path='/where/:where' element={<Where/>}/>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
