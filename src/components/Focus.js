import '../css/Focus.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Focus = ({ id, backdrop_path, title, average_rating, runtime, release_date, overview, genres, exitFocus }) => {
  let styles = {
    backgroundImage: `url(${backdrop_path})`
  }

  return (

    <section
      className='focus-container'
      style={styles}
    >
      <h1 className="focus-title"> {title}</h1>
      <div className='focus-description'>
        <p>{average_rating}/10</p>
        <p>{runtime} minutes</p>
        <p>{release_date}</p>
      </div>
      <div className='focus-movie-overview'>
        <p className ="movie-summary">{overview}</p>
        <p className="focus-genres">{genres}</p>
      </div>
      <Link to={`/`} >
        <button className="focus-button"onClick={exitFocus}>Back</button>
      </Link>
    </section>
  )
}

export default Focus;

Focus.propTypes = {
  id: PropTypes.number,
  backdrop_path: PropTypes.string,
  title: PropTypes.string,
  average_rating: PropTypes.number,
  runtime: PropTypes.number,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  exitFocus: PropTypes.func
}