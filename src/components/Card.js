import '../css/Card.css';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const Card = ({ id, poster_path, average_rating, displayPreview, displayFocus }) => {
  return (
    <div
      className="card-container"
      role='button'
      onMouseEnter={displayPreview}
      onClick={displayFocus}
    >
      <NavLink to={`/${id}`} className="card-container">
        <img 
          src={poster_path}
          className='card-poster-path'
        />
        <h2 className="rating-number">{average_rating}/10</h2>
      </NavLink>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  displayPreview: PropTypes.func.isRequired,
  displayFocus: PropTypes.func.isRequired
}