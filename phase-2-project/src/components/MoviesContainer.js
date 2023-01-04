import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";

function MoviesContainer() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=ac4c38a17f2a9e99c476dc17e3097e74"
    )
      .then((response) => response.json())
      .then((movies) => setMovies(movies.results));
  }, []);

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
      <MovieCard movies={filteredMovies} />
    </main>
  );
}

export default MoviesContainer;
