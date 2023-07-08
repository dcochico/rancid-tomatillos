import '../css/Focus.css';

const Focus = ({ id, backdrop_path, title, average_rating, exitFocus }) => {
  return (
    <section className="focus-section">
      <img 
        className="focus-img"
        src={backdrop_path}
      />
      <h2 className="focus-title">
        {title}
      </h2>
      <h3 className="focus-info">
        {average_rating}/10
        </h3>
      <button className="focus-button" onClick={exitFocus}>
        Back
        </button>
    </section>
  )
}

export default Focus;