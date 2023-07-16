import '../css/Focus.css';
import { useState, useEffect } from 'react';
import { getSingleMovie, getVideos } from '../ApiCalls';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Focus = ({ focus, getData, setFocus, setVideos, setTrailer, setLoading, videos, trailer, error, reset }) => {
  let id = useParams().id;

  useEffect(() => {
    setLoading(true);
    getData(getSingleMovie, id, setFocus, 'movie');
    getData(getVideos, id, setVideos, 'videos');
  }, [])

  if (videos.length) {
    let movieTrailer = videos.find(video => video.type === 'Trailer');
    setTrailer(`https://www.youtube.com/embed/${movieTrailer.key}`);
  }
  
  let styles = {
    backgroundImage: `url(${focus.backdrop_path})`
  }

  let videoStyles = {
    height: '200px',
    width: '200px'
  }

  return (
    <section
      className='focus-container'
      style={styles}
    >
      {
        error ?
        <h1 className='error-message'>{error}</h1> :
        <div className='focus-flex'>
          <div className='focus-wrap'>
            <h1 className="focus-title"> {focus.title}</h1>
            <p className='focus-description'>🍅{focus.average_rating * 10}% • {focus.runtime} minutes • {focus.release_date ? focus.release_date.slice(0, 4) : focus.release_date}</p>
            <div className='focus-movie-overview'>
              <p className ="movie-summary">{focus.overview}</p>
              <p>{focus.genres ? focus.genres.join(' • ') : focus.genres}</p>
            </div>
            <Link to={`/`} >
              <button className="focus-button" onClick={reset}>Back</button>
            </Link>
          </div>
          <div className='iframe-wrap'>
            <iframe
              src={trailer}
              width={1120}
              height={480}
              ref={videoStyles}
              allow='fullscreen'
            ></iframe>
          </div>
        </div>
      }
    </section>
  )
}

export default Focus;

Focus.propTypes = {
  focus: PropTypes.any.isRequired,
  getData: PropTypes.func.isRequired,
  setFocus: PropTypes.func.isRequired,
  setVideos: PropTypes.func.isRequired,
  setTrailer: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired,
  trailer: PropTypes.string.isRequired,
  error: PropTypes.any.isRequired,
  // setError: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}