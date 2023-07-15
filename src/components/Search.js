import '../css/Search.css';
import PropTypes from 'prop-types';

const Search = ({ searchResults, search, setSearch }) => {
  return (
    <div>
      <form className="search-box">
        <input 
          className="search"
          type="text"
          placeholder='🔍 Search for Titles'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      {!searchResults.length && <p className="no-results">Sorry, No Results</p>}
    </div>
  );
};

export default Search;

Search.propTypes = {
  searchResults: PropTypes.any.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
}