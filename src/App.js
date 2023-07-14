import Card from './components/Card';
import Focus from './components/Focus';
import Nav from './components/Nav'
import { getAllMovies, getSingleMovie, getVideos } from './ApiCalls';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import './css/Card.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [preview, setPreview] = useState('');
  const [focus, setFocus] = useState('');
  const [videos, setVideos] = useState([]);

  const getData = (request, id, setter, key) => {
    setLoading(true);
    request(id)
      .then(res => res.json())
      .then(data => setter(data[key]))
      .then(() => setLoading(false))
  }

  console.log('loading', loading);

  useEffect(() => {
    getData(getAllMovies, null, setMovies, 'movies')
  }, []);
  
  const reset = () => {
    setPreview('');
    setFocus('');
    setVideos([]);
  }

  const movieCards = movies.map(movie => {
    return (
      <Card 
        className="movie-card"
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        average_rating = {movie.average_rating}
        getSingleMovie = {() => getData(getSingleMovie, movie.id, setPreview, 'movie')}
        getVideos = {() => getData(getVideos, movie.id, setVideos, 'videos')}
        setFocus = {() => setFocus(preview)}
      />
    );
  });

  return (
    <Routes>
      <Route path="/" element=
        {<div className='App'>
          <Nav
            key = {preview.id}
            id = {preview.id}
            title = {preview.title}
            average_rating = {preview.average_rating}
            release_date = {preview.release_date}
            tagline = {preview.tagline}
            genres = {preview.genres}
            backdrop_path = {preview.backdrop_path}
            preview = {preview}
            getVideos = {() => getData(getVideos, preview.id, setVideos, 'videos')}
            setFocus = {() => setFocus(preview)}
          />
          {loading && <h1 className="loading">Loading...</h1>}
          <div className='movies-container'>{movieCards}</div>
        </div>}
      />
      <Route path="/:id" element=
        {<Focus
          focus = {focus}
          setFocus = {setFocus}
          reset = {reset}
          key = {focus.id}
        />}
      />
    </Routes>
  );
}

export default App;
