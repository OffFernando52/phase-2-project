import React from "react";

function Shows({ show }) {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} />
      <h4>{show.name}</h4>
      <p>{show.overview}</p>
    </div>
  );
}

export default Shows;
