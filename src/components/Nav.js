import '../css/Nav.css';
import '../images/avatar.png';
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';

const Nav = ({ id, title, average_rating, release_date, tagline, genres, backdrop_path, preview, displayFocus }) => {
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
            <h3>{genres[0]}</h3>
            <NavLink to={`/${id}`} >
              <button className="more-info-button" onClick={displayFocus}>More Info</button>
            </NavLink>
          </div>
        </div>
        
      }
    </nav>
  );
}

export default Nav;