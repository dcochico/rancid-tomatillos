import '../css/Nav.css';
import '../images/avatar.png';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ id, title, average_rating, release_date, genres, tagline, backdrop_path, preview, setFocus }) => {
  let styles = {
    backgroundImage: `url(${backdrop_path})`
  }
  return (
    <nav className='nav-bar'>
      {
        !preview ? 
        <div className="header-div">
          <h1 className='site-header'>Rancid Tomatillos</h1>
        </div> :
        <div
          className='nav-preview'
          style={styles}
        >
          <div className='nav-preview-info'>
            <h1 className='preview-title'>{title}</h1>
            <p>🍅 {average_rating * 10}% • {release_date ? release_date.slice(0, 4) : release_date}</p>
            <h2 className='preview-tagline'>{tagline}</h2>
            <p className='preview-genres'>{genres ? genres.join(' • ') : genres}</p>
            <NavLink to={`/movies/${id}`} >
              <button className="more-info-button" onClick={() => {
                // getVideos();
                setFocus();
              }}>More Info</button>
            </NavLink>
          </div>
        </div>
      }
    </nav>
  );
}

export default Nav;

Nav.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  average_rating: PropTypes.number,
  release_date: PropTypes.string,
  genres: PropTypes.array,
  tagline: PropTypes.string,
  backdrop_path: PropTypes.string,
  preview: PropTypes.any,
  // getVideos: PropTypes.func,
  setFocus: PropTypes.func
}
















