import '../css/Focus.css';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Focus = ({ focus, reset }) => {
  let id = useParams().id;
  let styles = {
    backgroundImage: `url(${focus.backdrop_path})`
  }

  const allGenres = focus.genres.map(genre => {
    return <p className='all-genres'>{genre}</p>
  })

  return (
    <section
      className='focus-container'
      style={styles}
    >
      <h1 className="focus-title"> {focus.title}</h1>
      <div className='focus-description'>
        <p>{focus.average_rating}/10</p>
        <p>{focus.runtime} minutes</p>
        <p>{focus.release_date}</p>
      </div>
      <div className='focus-movie-overview'>
        <p className ="movie-summary">{focus.overview}</p>
        <p className="focus-genres">{allGenres}</p>
      </div>
      <Link to={`/`} >
        <button className="focus-button" onClick={reset}>Back</button>
      </Link>
    </section>
  )
}

export default Focus;

Focus.propTypes = {
  focus: PropTypes.any.isRequired,
  setFocus: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}