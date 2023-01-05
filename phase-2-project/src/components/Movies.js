import React from "react";

function Movies({ movie, nowClicked }) {
  return (
    <div className="card" onClick={() => nowClicked(movie)}>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <h4>{movie.original_title}</h4>
      <p>{movie.overview}</p>
    </div>
  );
}

export default Movies;
