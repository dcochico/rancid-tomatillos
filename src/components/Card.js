import '../css/Card.css';
import { NavLink } from 'react-router-dom'

const Card = ({ id, poster_path, average_rating, displayPreview, exitPreview, displayFocus }) => {
  return (
    <div
      // className='card-container'
      onMouseEnter={displayPreview}
      onMouseLeave={exitPreview}
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