import axios from "axios";

export const fetchMovies = () => {
    return axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=tr")
    .then(response => response.data.results)
}

export const fetchMovieDetail = (movieId) => {
    return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=tr`)
    .then(response => response.data)
}


