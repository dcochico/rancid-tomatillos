import Card from './components/Card';
import Focus from './components/Focus';
import movieData from './data/movieData';
import { useState, useEffect } from 'react';
import './css/App.css';
import './css/Card.css';
import Nav from './components/Nav'


const App = () => {
  // const dummyMovies = movieData.movies;
  const [movies, setMovies] = useState([]);
  const [focus, setFocus] = useState('');

  const displayFocus = id => {
    setFocus(movies.find(movie => {
      return movie.id === id;
    }));
  }

  const exitFocus = () => setFocus('');

  useEffect(() => {
     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
            .then(res => res.json())
            .then(data => setMovies(data.movies))
  })

  const movieCards = movies.map(movie => {
    return (
      <Card 
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        // title = {movie.title}
        average_rating = {movie.average_rating}
        displayFocus = {() => displayFocus(movie.id)}
      />
    );
  });

  return (
    
    <div>
      <Nav />
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
