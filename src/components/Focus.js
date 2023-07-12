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
      <Link to={`/`} >
        <button onClick={exitFocus}>Close</button>
      </Link>
      <h1>{title}</h1>
      <div>
        <p>{average_rating}</p>
        <p>{runtime} minutes</p>
        <p>{release_date}</p>
      </div>
      <p>{overview}</p>
      <p>{genres[0]}</p>
    </section>
  )
}

export default Focus;