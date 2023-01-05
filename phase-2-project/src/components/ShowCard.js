import React from "react";
import Shows from "./Shows";

function ShowCard({ shows, nowClicked }) {
  return (
    <div className="cards">
      {shows.map((show) => (
        <Shows
        nowClicked={nowClicked}
          show={show}
          key={show.id}
          name={show.name}
          description={show.overview}
          rate={show.popularity}
          image={show.poster_path}
        />
      ))}
    </div>
  );
}
export default ShowCard;
