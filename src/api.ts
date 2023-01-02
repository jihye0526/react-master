const API_KEY = "03e63f4a6113b7712273d43c6c0662bf";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximun: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number
}

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(res => res.json());
}