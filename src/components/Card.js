import '../css/Card.css';

const Card = ({ id, poster_path, title, average_rating }) => {
  return (
    <div className='card-container'>
      <img 
        src={poster_path}
        className='card-poster-path'
      />
      <h2>{title}</h2>
      <h3>{average_rating}</h3>
    </div>
  );
}

export default Card;