import Card from './components/Card';
import Focus from './components/Focus';
import Nav from './components/Nav';
import Search from './components/Search'
import PageNotFound from './components/PageNotFound';
import { getAllMovies, getSingleMovie, getVideos } from './ApiCalls';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import './css/Card.css';
import './images/load-gif.gif';


const App = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [preview, setPreview] = useState('');
  const [focus, setFocus] = useState('');
  const [videos, setVideos] = useState([]);
  const [trailer, setTrailer] = useState('');
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
  console.log('this', error)
  const movieCards = movies.map(movie => {
    return (
      <Card 
        key = {movie.id}
        id = {movie.id}
        poster_path = {movie.poster_path}
        average_rating = {movie.average_rating}
        getSingleMovie = {() => getData(getSingleMovie, movie.id, setPreview, 'movie')}
        getVideos = {() => getData(getVideos, movie.id, setVideos, 'videos')}
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
        getVideos = {() => getData(getVideos, movie.id, setVideos, 'videos')}
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
            getVideos = {() => getData(getVideos, preview.id, setVideos, 'videos')}
            setFocus = {() => setFocus(preview)}
          />
          <Search 
            search = {search}
            setSearch = {setSearch}
            searchResults = {searchResults}
          />
          {!error && <div className='movies-container'>{!search ? movieCards : searchResults}</div>}
          {loading && <img className='loading' src={require('./images/load-gif.gif')}/>}
          {/* <img className='loading' src={require('./images/load-gif.gif')}/> */}
        </div>}
      />
      <Route path="/movies/:id" element=
        {<Focus
          focus = {focus}
          getData = {getData}
          setFocus = {setFocus}
          // loading = {loading}
          setLoading = {setLoading}
          error = {error}
          // setError = {setError}
          videos = {videos}
          setVideos = {setVideos}
          trailer = {trailer}
          setTrailer = {setTrailer}
          reset = {reset}
          key = {focus.id}
        />}
      />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
};

export default App;
