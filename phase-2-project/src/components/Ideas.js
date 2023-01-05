import React from "react";

function Ideas({ idea }) {
  return (
    <div className="card">
      <h3>Title: {idea.title}</h3>
      <br />
      <h4>Media type: {idea.content_type}</h4>
      <br />
      <p>
        <strong>Overview:</strong> {idea.overview}
      </p>
      <br />
      <h4>
        Genres:{" "}
        {idea.genres.map((genre) => (
          <p>{genre}</p>
        ))}
      </h4>
      <br />
    </div>
  );
}

export default Ideas;
