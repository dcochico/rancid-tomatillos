import '../css/Card.css';

const Card = ({ id, poster_path, title, average_rating, displayFocus }) => {
  return (
    <div
      className='card-container'
      onClick={displayFocus}
    >
      <img 
        src={poster_path}
        className='card-poster-path'
      />
      {/* <h2>{title}</h2> */}
      <h2>{average_rating}</h2>
    </div>
  );
}

export default Card;