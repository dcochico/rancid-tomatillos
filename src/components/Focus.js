import '../css/Focus.css';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Focus = ({ focus, setFocus, reset }) => {
  let id = useParams().id;

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(res => res.json())
      .then(data => setFocus(data.movie))
  }, []);

  let styles = {
    backgroundImage: `url(${focus.backdrop_path})`
  }

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
        <p className="focus-genres">{focus.genres}</p>
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