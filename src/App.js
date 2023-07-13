import Card from './components/Card';
import Focus from './components/Focus';
import Nav from './components/Nav'
import { useState, useEffect } from 'react';
import './css/App.css';
import './css/Card.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [preview, setPreview] = useState('');
  const [videos, setVideos] = useState([]);
  const [focus, setFocus] = useState('');

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(res => res.json())
      .then(data => setMovies(data.movies))
  }, []);
  
  const getPreview = id => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(res => res.json())
      .then(data => setPreview(data.movie))
  }

  const getVideos = id => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(res => res.json())
      .then(data => setVideos(data.videos))
  }

  const displayPreview = id => {
    getPreview(id);
    getVideos(id);
  }
  
  const displayFocus = () => {
    setFocus(preview);
  }
  
  const reset = () => {
    setPreview('');
    setFocus('');
  }

  const movieCards = movies.map(movie => {
    return (
      <Card 
        className="movie-card"
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        average_rating = {movie.average_rating}
        displayPreview = {() => displayPreview(movie.id)}
        displayFocus = {displayFocus}
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
            displayFocus={displayFocus}
          />
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
