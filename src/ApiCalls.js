const getAllMovies = () => fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')

const getSingleMovie = id => fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)

const getVideos = id => fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)

export { getAllMovies, getSingleMovie, getVideos }