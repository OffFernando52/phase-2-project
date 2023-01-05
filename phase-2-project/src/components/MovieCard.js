import React from "react";
import Movies from "./Movies";

function MovieCard({ movies, nowClicked }) {
  console.log(movies);
  return (
    <div className="cards">
      {movies.map((movie) => (
        <Movies
          nowClicked={nowClicked}
          movie={movie}
          key={movie.id}
          name={movie.original_title}
          description={movie.overview}
          rate={movie.popularity}
          image={movie.poster_path}
        />
      ))}
    </div>
  );
}
export default MovieCard;
