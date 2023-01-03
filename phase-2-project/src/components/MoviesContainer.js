import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";

function MoviesContainer() {

    const [movies, setMovies] = useState([])

    const [search, setSearch] = useState("")

    useEffect(()=>{
        fetch("http://localhost:3001/Movies")
        .then(response => response.json())
        .then(setMovies)
    },[])

function updateSearch(searchInput) {
    setSearch(searchInput)
}

let filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <Search search={search} updateSearch={updateSearch}/>
      <MovieCard movies={filteredMovies}/>
    </main>
  );
}

export default MoviesContainer;