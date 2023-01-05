import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
import TvContainer from "./TvContainer";

function MoviesContainer() {
  const IMAGE_PATH = "http://image.tmdb.org/t/p/w1280";
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState({
    overview:"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive",
    title:"Avatar: The Way of Water",
    backdrop_path: "/5gPQKfFJnl8d1edbkOzKONo4mnr.jpg"
  });
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
  
  let filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().startsWith(search.toLowerCase())
  );

  
  
  
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
