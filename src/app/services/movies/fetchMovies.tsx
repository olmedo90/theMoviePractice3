import request from "../api";
import { Movie } from "../models/models";

const fetchMovies= async () => {
    await delay();
    const result = await request({
        endpoint:`https://api.themoviedb.org/3/search/movie?query=Action&api_key=${process.env.NEXT_PUBLIC_API_MOVIE_KEY}&page=20`,
        method:'GET'
    });
    return result.results as Movie[];
}
const delay = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
}
export default fetchMovies;