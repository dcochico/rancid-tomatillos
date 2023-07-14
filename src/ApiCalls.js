const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
}

const getSingleMovie = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => res.json())
}

const getVideos = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(res => res.json())
}

export { getAllMovies, getSingleMovie, getVideos }