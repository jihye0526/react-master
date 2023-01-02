const API_KEY = "03e63f4a6113b7712273d43c6c0662bf";
const BASE_PATH = "https://api.themoviedb.org/3";


export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(res => res.json());
}