import Card from './components/Card';
import Focus from './components/Focus';
import movieData from './data/movieData';
import { useState, useEffect } from 'react';
import './css/App.css';
import './css/Card.css';

const App = () => {
  const dummyMovies = movieData.movies;
  const [movies, setMovies] = useState(dummyMovies);
  const [focus, setFocus] = useState('');

  const displayFocus = id => {
    setFocus(dummyMovies.find(movie => {
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
        title = {movie.title}
        average_rating = {movie.average_rating}
        displayFocus = {() => displayFocus(movie.id)}
      />
    );
  });

  return (
    <div>
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
