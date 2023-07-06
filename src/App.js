import Movies from './components/Movies';
import movieData from './data/movieData';
import { useState } from 'react';
import './css/App.css';

const App = () => {
  const dummyMovies = movieData.movies;
  const [movies, setMovies] = useState(dummyMovies);

  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}

export default App;
