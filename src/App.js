import Card from './components/Card';
import Focus from './components/Focus';
import Nav from './components/Nav';
import Search from './components/Search'
import PageNotFound from './components/PageNotFound';
import { getAllMovies, getSingleMovie } from './ApiCalls';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import './css/Card.css';


const App = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [preview, setPreview] = useState('');
  const [focus, setFocus] = useState('');
//   const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  const getData = (request, id, setter, key) => {
    setLoading(true);
    request(id)
      .then(res => {
        if(!res.ok) {
          throw Error('Unable to fetch data at this time. Please try again later.');
        }
        return res.json();
      })
      .then(data => {
        setter(data[key]);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message)
      })
  };

  useEffect(() => {
    getData(getAllMovies, null, setMovies, 'movies');
    setError(null);
  }, []);
  
  const reset = () => {
    setPreview('');
    setFocus('');
    // setVideos([]);
  }

  // const movieCards = movies.filter((movie) => {
  //   const searchMovie = search.toLowerCase()
  //   return (
  //     search === '' ?
  //     movie :
  //     movie.title.toLowerCase().includes(searchMovie) 
  //   )
  // }).map(movie => {
  //   return (
  //     <Card 
  //       className="movie-card"
  //       key = {movie.id}
  //       id = {movie.id}
  //       poster_path = {movie.poster_path}
  //       average_rating = {movie.average_rating}
  //       getSingleMovie = {() => getData(getSingleMovie, movie.id, setPreview, 'movie')}
  //       // getVideos = {() => getData(getVideos, movie.id, setVideos, 'videos')}
  //       setFocus = {() => setFocus(preview)}
  //     />
  //   );
  // });

  const movieCards = movies.map(movie => {
    return (
      <Card 
        className="movie-card"
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        average_rating = {movie.average_rating}
        getSingleMovie = {() => getData(getSingleMovie, movie.id, setPreview, 'movie')}
        // getVideos = {() => getData(getVideos, movie.id, setVideos, 'videos')}
        setFocus = {() => setFocus(preview)}
      />
    );
  });

  const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase() || search)).map(movie => {
    return (
      <Card 
        className="movie-card"
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        average_rating = {movie.average_rating}
        getSingleMovie = {() => getData(getSingleMovie, movie.id, setPreview, 'movie')}
        // getVideos = {() => getData(getVideos, movie.id, setVideos, 'videos')}
        setFocus = {() => setFocus(preview)}
      />
    );
  });

  return (
    <div>
    <Routes>
      <Route path="/" element=
        {<div className='App'>
          {error && <h1 className='error-message'>{error}</h1>}
          <Nav
            key = {preview.id}
            id = {preview.id}
            title = {preview.title}
            average_rating = {preview.average_rating}
            release_date = {preview.release_date}
            tagline = {preview.tagline}
            genres = {preview.genres}
            backdrop_path = {preview.backdrop_path}
            preview = {preview}
            // getVideos = {() => getData(getVideos, preview.id, setVideos, 'videos')}
            setFocus = {() => setFocus(preview)}
          />
          <Search 
            search = {search}
            setSearch = {setSearch}
            searchResults = {searchResults}
          />
          <div className='movies-container'>{!search ? movieCards : searchResults}</div>
          {loading && <h1 className="loading">Loading...</h1>}
        </div>}
      />
      <Route path="/movies/:id" element=
        {<Focus
          focus = {focus}
          setFocus = {setFocus}
          loading = {loading}
          setLoading = {setLoading}
          error = {error}
          setError = {setError}
          reset = {reset}
          key = {focus.id}
        />}
      />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </div>
  );
};

export default App;
