import '../css/Nav.css';
import '../images/avatar.png';
import { useParams, Link, Outlet } from 'react-router-dom';

const Nav = ({ id, title, average_rating, release_date, tagline, genres, backdrop_path, preview }) => {
  let styles = {
    backgroundImage: `url(${backdrop_path})`
  }
  return (
    <nav className='nav-bar'>
      {
        !preview ? 
        <div className="header-div">
          <h1 className='site-header'>Rancid Tomatillos</h1>
          <img src='../images/avatar.png' />
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
          </div>
        </div>
      }
    </nav>
  );
}

export default Nav;