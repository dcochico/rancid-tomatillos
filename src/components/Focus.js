import '../css/Focus.css';

const Focus = ({ id, backdrop_path, title, average_rating, runtime, release_date, overview, genres, exitFocus }) => {
  let styles = {
    backgroundImage: `url(${backdrop_path})`
  }
  return (
    <section>
      <img 
        className="focus-img"
        src={backdrop_path}
      />
      <h2>{title}</h2>
      <h3>{average_rating}</h3>
      <button onClick={exitFocus}>Close</button>
    </section>
  )
}

export default Focus;