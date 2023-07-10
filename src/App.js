import Card from './components/Card';
import Focus from './components/Focus';
// import movieData from './data/movieData';
import { useState, useEffect } from 'react';
import './css/App.css';
import './css/Card.css';
import Nav from './components/Nav'


const App = () => {
  // const dummyMovies = movieData.movies;
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

  const exitPreview = () => setPreview('');

  const displayFocus = () => {
    setFocus(preview);
  }
  
  const exitFocus = () => setFocus('');

  const movieCards = movies.map(movie => {
    return (
      <Card 
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        // title = {movie.title}
        average_rating = {movie.average_rating}
        displayPreview = {() => displayPreview(movie.id)}
        // exitPreview = {exitPreview}
        displayFocus = {displayFocus}
      />
    );
  });

  return (
    <div className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      {
        !focus && 
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
        />
      }
      {
        !focus ?
        <div className='movies-container'>
          {movieCards}
        </div> : 
        <Focus
          key = {focus.id}
          id = {focus.id}
          backdrop_path = {focus.backdrop_path}
          title = {focus.title}
          average_rating = {focus.average_rating}
          runtime = {focus.runtime}
          release_date = {focus.release_date}
          overview = {focus.overview}
          genres = {focus.genres}
          exitFocus = {exitFocus}
        />
      }
    </div>
  );
}

export default App;
