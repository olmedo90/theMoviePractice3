import request from "../api";
import { Movie } from "../models/models";

const fetchMovies= async () => {
    const api_key='7ee5082443702d761a75e6fb9750e482'
    await delay();
    const result = await request({
        endpoint:`https://api.themoviedb.org/3/search/movie?query=Action&api_key=${api_key}&page=20`,
        method:'GET'
    });
    return result.results as Movie[];
}
const delay = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
}
export default fetchMovies;