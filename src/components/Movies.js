import Card from "./Card";
import '../css/Movies.css';

const Movies = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <Card 
        id = {movie.id}
        poster_path = {movie.poster_path}
        title = {movie.title}
        average_rating = {movie.average_rating}
        key = {movie.id}
      />
    );
  });
  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  );
}

export default Movies;