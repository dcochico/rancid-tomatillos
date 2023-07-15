import '../css/Nav.css';
import '../images/avatar.png';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ id, title, average_rating, release_date, tagline, genres, backdrop_path, preview, getVideos, setFocus }) => {
 

  
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
          <div
            className='nav-preview-info'
          >
            <h1 className='preview-title'>{title}</h1>
            <div>
              <p>{average_rating}/10</p>
              <p>{release_date}</p>
            </div>
            <h2 className='preview-tagline'>{tagline}</h2>
            <h3>{genres}</h3>
            <NavLink to={`/movie/${id}`} >
              <button className="more-info-button" onClick={() => {
                getVideos();
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
  tagline: PropTypes.string,
  genres: PropTypes.array,
  backdrop_path: PropTypes.string,
  preview: PropTypes.any,
  getVideos: PropTypes.func,
  setFocus: PropTypes.func
}
















