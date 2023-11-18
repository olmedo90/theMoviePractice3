import fetchMovies from "../services/movies/fetchMovies";
import { Movie } from "../services/models/models";
import styles from "./styles.module.css";
const Movies = async () => {
  const movie: Movie[] = await fetchMovies();
  console.log("🚀 ~ file: page.tsx:6 ~ Movies ~ movie:", movie)
  const url_img = "https://image.tmdb.org/t/p/w500";
  return (
    <>
    <div className={styles.title}>
      <h1>My Movies</h1>
    </div>
    <div className={styles.movies}>
      
      {movie.map((movie: Movie) =>
        movie.poster_path === null ? (
          <></>
        ) : (
          <article key={movie.id}>
            
            <section>
              <h1>{movie.original_title}</h1>
              <img src={`${url_img}${movie.poster_path}`} alt="" />
              <p>{movie.overview}</p>
            </section>
            <div>
              <span>votes: {movie.vote_count}</span>
              <span>{movie.release_date}</span>
            </div>
          </article>
        )
      )}
    </div>
    </>
  );
};

export default Movies;
