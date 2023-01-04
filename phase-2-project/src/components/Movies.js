import React from "react";

function Movies({ movie }) {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <h4>{movie.original_title}</h4>
      <p>{movie.overview}</p>
    </div>
  );
}

export default Movies;
