import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

function IdeaForm() {
  const [content_type, setContent_type] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState([]);
  console.log(content_type);
  console.log(title);
  console.log(overview);
  console.log(genres);

  function genreSelector(e) {
    const newGenre = e.target.value;
    if (genres.includes(newGenre) == false) {
      setGenres([...genres, newGenre]);
    } else {
      const index = [...genres].indexOf(newGenre);
      console.log(index);
      console.log(genres);
      const newGenres = [...genres];
      newGenres.splice(index, 1);
      setGenres(newGenres);
    }
  }

  return (
    <div>
      <form>
        <h3>Will this be a TV Show or Movie?</h3>
        <br />
        <label for="movie">
          This will be a Movie
          <input
            type="radio"
            id="movie"
            name="film_type"
            value="movie"
            onChange={(e) => setContent_type(e.target.id)}
          ></input>
        </label>
        <label for="tv">
          This will be a TV Show
          <input
            type="radio"
            id="tv"
            name="film_type"
            value="tv show"
            onChange={(e) => setContent_type(e.target.id)}
          ></input>
        </label>
        <h3>Add a Title and Overview to your Work</h3>
        <br />
        <label for="title">
          Title
          <input
            type="text"
            id="title"
            placeholder="name your masterpiece here..."
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label for="overview">
          Overview
          <input
            type="text"
            id="overview"
            placeholder="summary here..."
            onChange={(e) => setOverview(e.target.value)}
          ></input>
        </label>
        <br />
        <h3>Select genre(s) relevant to your work</h3>
        <br />
        <label for="a/a">
          Action/Adventure
          <input
            type="checkbox"
            id="a/a"
            name="a/a"
            value="Action/Adventure"
            onChange={(e) => genreSelector(e)}
          ></input>
        </label>
        <label for="comedy">
          Comedy
          <input
            type="checkbox"
            id="comedy"
            name="comedy"
            value="Comedy"
            onChange={(e) => genreSelector(e)}
          ></input>
        </label>
        <label for="drama">
          Drama
          <input
            type="checkbox"
            id="drama"
            name="drama"
            value="Drama"
            onChange={(e) => genreSelector(e)}
          ></input>
        </label>
        <label for="horror">
          Horror
          <input
            type="checkbox"
            id="horror"
            name="horror"
            value="Horror"
            onChange={(e) => genreSelector(e)}
          ></input>
        </label>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default IdeaForm;
