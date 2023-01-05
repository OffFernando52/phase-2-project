import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
import YouTube from "react-youtube";


function MoviesContainer() {
  const IMAGE_PATH = "http://image.tmdb.org/t/p/w1280"
  const API_URL = "http://api.themoviedb.org/3/movie/157336?api_key=ac4c38a17f2a9e99c476dc17e3097e74&append_to_response=videos"
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=ac4c38a17f2a9e99c476dc17e3097e74&with_genres=27"
    )
      .then((response) => response.json())
      .then((pizza) => setMovies(pizza.results));
    }, []);
    
 
    function nowClicked(movie){
      setSelectMovie(movie)
    }

   function showTrailer(movie){
    const data = API_URL(movie.id)
    console.log(data, "hii")
    selectMovie(movie)
   }

 
    function updateSearch(searchInput) {
    setSearch(searchInput);
  }

function renderTrailer(){
  const trailer = selectMovie.videos.results.find(vid => vid.name === 'Official Trailer')
  return ( 
  <YouTube
  videoId={trailer.key}/>
  )
}
  
  let filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <main>
      <Search search={search} updateSearch={updateSearch} />
      <div className="hero">
        <div className="hero-content max-center" style={{backgroundImage: `url('${IMAGE_PATH}${selectMovie.backdrop_path}`}}>
        {selectMovie.videos ? renderTrailer() : null}
       <button className="button">play trailer</button>
        <h1 className={"hero-title"}>{selectMovie.title} </h1>
        {selectMovie.overview ? <p className={"hero-overview" }>{selectMovie.overview}</p> : null}
      </div>
      </div>
      <MovieCard movies={filteredMovies} nowClicked={nowClicked} showTrailer={showTrailer} />
    </main>
  );
}

export default MoviesContainer;
