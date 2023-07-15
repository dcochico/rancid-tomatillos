import '../css/Focus.css';
import { useEffect } from 'react';
import { getSingleMovie } from '../ApiCalls';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Focus = ({ focus, setFocus, loading, setLoading, error, setError, reset }) => {
  let id = useParams().id;

  useEffect(() => {
    getSingleMovie(id)
      .then(res => {
        if(!res.ok) {
          throw Error('Unable to fetch data at this time. Please try again later.');
        }
        return res.json();
      })
      .then(data => {
        setFocus(data.movie);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message)
      })
  }, [])

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
      {
        error ?
        <h1 className='error-message'>{error}</h1> :
        <div>
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
        </div>
      }
    </section>
  )
}

export default Focus;

Focus.propTypes = {
  focus: PropTypes.any.isRequired,
  setFocus: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  error: PropTypes.any.isRequired,
  setError: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}