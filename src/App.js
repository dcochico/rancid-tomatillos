import Card from './components/Card/Card.js';
import Focus from './components/Focus/Focus.js';
import Nav from './components/Nav/Nav.js';
import Search from './components/Search/Search.js'
import PageNotFound from './components/PageNotFound/PageNotFound.js';
import { getAllMovies, getSingleMovie } from './ApiCalls';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Card/Card.css';
import './images/load-gif.gif';

const App = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [preview, setPreview] = useState('');
  const [focus, setFocus] = useState('');
  const [videos, setVideos] = useState([]);
  const [trailer, setTrailer] = useState('');
  const [search, setSearch] = useState('');

  const getData = (request, id, setter, key) => {
    setLoading(true);
    request(id)
      .then(res => {
        if(!res.ok) {
          throw Error('Unexpected error. Please refresh the page.');
        }
        return res.json();
      })
      .then(data => {
        setter(data[key]);
        setLoading(false);
        setError('');
      })
      .catch(err => {
        setLoading(false);
        setError(err.message)
      })
  };

  useEffect(() => {
    getData(getAllMovies, null, setMovies, 'movies');
    setError('');
  }, []);
  
  const reset = () => {
    setPreview('');
    setFocus('');
    setVideos([]);
    setTrailer('');
  }

  const movieCards = movies.map(movie => {
    return (
      <Card 
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        average_rating = {movie.average_rating}
        getSingleMovie = {() => getData(getSingleMovie, movie.id, setPreview, 'movie')}
        setFocus = {() => setFocus(preview)}
      />
    );
  });

  const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase() || search)).map(movie => {
    return (
      <Card 
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        average_rating = {movie.average_rating}
        getSingleMovie = {() => getData(getSingleMovie, movie.id, setPreview, 'movie')}
        setFocus = {() => setFocus(preview)}
      />
    );
  });

  return (
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
            setFocus = {() => setFocus(preview)}
          />
          <Search 
            search = {search}
            setSearch = {setSearch}
            searchResults = {searchResults}
          />
          {!error && <div className='movies-container'>{!search ? movieCards : searchResults}</div>}
        </div>}
      />
      <Route path="/movies/:id" element=
        {<Focus
          key = {focus.id}
          getData = {getData}
          focus = {focus}
          setFocus = {setFocus}
          setLoading = {setLoading}
          videos = {videos}
          setVideos = {setVideos}
          trailer = {trailer}
          setTrailer = {setTrailer}
          error = {error}
          reset = {reset}
        />}
      />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
};

export default App;
