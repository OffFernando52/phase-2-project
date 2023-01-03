import React from "react";

function Movies({movie}) {

  return (
    <div className="card">
      <img src={movie.image}/>
      <h4>{movie.name}</h4>
      <p>{movie.description}</p>
      
    </div>
  );
}

export default Movies;