import '../css/Focus.css';
import { useParams, Link, Outlet } from 'react-router-dom';

const Focus = ({ id, backdrop_path, title, average_rating, runtime, release_date, overview, genres, exitFocus }) => {
  let styles = {
    backgroundImage: `url(${backdrop_path})`
  }
  console.log('useparams',useParams())
  // let movieID = useParams().id;
  return (
    // <section>
    //   <img 
    //     className="focus-img"
    //     src={backdrop_path}
    //   />
    //   <h2>{title}</h2>
    //   <h3>{average_rating}</h3>
    //   <button onClick={exitFocus}>Close</button>
    // </section>
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
        <p>{genres[0]}</p>
      </div>
      <Link to={`/`} >
        <button className="focus-button"onClick={exitFocus}>Back</button>
      </Link>
    </section>
  )
}

export default Focus;