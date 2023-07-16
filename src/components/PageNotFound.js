import '../css/PageNotFound.css';
import '../images/gauntlet.jpeg';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h1>Oh, SNAP!</h1>
      <h2>404: The page you are looking for was lost in the Blip!</h2>
      <h2>Please head back to our <Link to={'/'} className='home-link'>main page.</Link></h2>
    </div>
  )
}

export default PageNotFound;