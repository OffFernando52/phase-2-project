import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import Search from "./Search";

function TvContainer() {
  const [shows, setShows] = useState([]);
  const IMAGE_PATH = "http://image.tmdb.org/t/p/w1280";
  const [search, setSearch] = useState("");
  const [selectMovie, setSelectMovie] = useState({
    overview:
      "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
    name: "Wednesday",
    backdrop_path: "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
  });
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=ac4c38a17f2a9e99c476dc17e3097e74"
    )
      .then((response) => response.json())
      .then((shows) => setShows(shows.results));
  }, []);

  function nowClicked(shows) {
    setSelectMovie(shows);
  }

  function updateSearch(searchInput) {
    setSearch(searchInput);
  }

  let filteredShows = shows.filter(
    (show) =>
      show.name.toLowerCase().startsWith(search.toLowerCase()) &&
      show.overview.length > 10
  );
  console.log(filteredShows);
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
          <h1 className={"hero-title"}>{selectMovie.name} </h1>
          {selectMovie.overview ? (
            <p className={"hero-overview"}>{selectMovie.overview}</p>
          ) : null}
        </div>
      </div>
      <ShowCard shows={filteredShows} nowClicked={nowClicked} />
    </main>
  );
}

export default TvContainer;
