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
  const [focus, setFocus] = useState('');

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
           .then(res => res.json())
           .then(data => setMovies(data.movies))
  }, []);
  
  const displayPreview = id => {
    console.log('hello')
    setPreview(movies.find(movie => {
      return movie.id === id;
    }));
  }

  const exitPreview = () => setPreview('');

  const displayFocus = id => {
    setFocus(movies.find(movie => {
      return movie.id === id;
    }));
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
        exitPreview = {exitPreview}
        displayFocus = {() => displayFocus(movie.id)}
      />
    );
  });

  return (
    <div className='App'>
      {!focus && <Nav preview={preview}/>}
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
          exitFocus = {exitFocus}
        />
      }
    </div>
  );
}

export default App;
