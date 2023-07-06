import Card from "./Card";
import './css/Movies.css';

const Movies = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <Card 
        id = {movies.id}
        poster_path = {movies.poster_path}
        title = {movies.title}
        average_rating = {movies.average_rating}
      />
    );
  });
  return (
    <div>
      {movieCards}
    </div>
  );
}

export default Movies;