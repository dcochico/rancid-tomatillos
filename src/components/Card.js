import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const Card = ({ id, poster_path, average_rating, getSingleMovie, setFocus }) => {
  return (
    <div
      className='card-container'
      role='button'
    >
      <NavLink to={`/movies/${id}`} className='card-link'>
        <img 
          src={poster_path}
          className='card-poster-path'
          onMouseEnter={getSingleMovie}
          onClick={setFocus}
        />
      </NavLink>
        <h2 className="rating-number">🍅 {average_rating * 10}%</h2>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  getSingleMovie: PropTypes.func.isRequired,
  setFocus: PropTypes.func.isRequired
}