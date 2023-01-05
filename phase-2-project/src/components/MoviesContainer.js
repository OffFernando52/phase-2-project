import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";

function MoviesContainer() {
  const IMAGE_PATH = "http://image.tmdb.org/t/p/w1280";
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=ac4c38a17f2a9e99c476dc17e3097e74"
    )
      .then((response) => response.json())
      .then((movies) => setMovies(movies.results));
  }, []);

  function nowClicked(movie) {
    setSelectMovie(movie);
  }

  function updateSearch(searchInput) {
    setSearch(searchInput);
  }
  console.log(movies);
  let filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().startsWith(search.toLowerCase())
  );
  console.log(filteredMovies);
  return (
    <main>
      <Search search={search} updateSearch={updateSearch} />
      <div className="hero">
        <div
          className="hero-content max-center"
          style={{
            backgroundImage: `url('${IMAGE_PATH}${selectMovie.backdrop_path}`,
          }}
        >
          <h1 className={"hero-title"}>{selectMovie.title} </h1>
          {selectMovie.overview ? (
            <p className={"hero-overview"}>{selectMovie.overview}</p>
          ) : null}
        </div>
      </div>
      <MovieCard movies={filteredMovies} nowClicked={nowClicked} />
    </main>
  );
}

export default MoviesContainer;
