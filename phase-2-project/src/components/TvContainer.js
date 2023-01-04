import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import Search from "./Search";

function TvContainer() {
  const [shows, setShows] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=ac4c38a17f2a9e99c476dc17e3097e74"
    )
      .then((response) => response.json())
      .then((shows) => setShows(shows.results));
  }, []);

  function updateSearch(searchInput) {
    setSearch(searchInput);
  }
  console.log(shows);
  let filteredShows = shows.filter(
    (show) =>
      show.name.toLowerCase().startsWith(search.toLowerCase()) &&
      show.overview.length > 10
  );
  console.log(filteredShows);
  return (
    <main>
      <Search search={search} updateSearch={updateSearch} />
      <ShowCard shows={filteredShows} />
    </main>
  );
}

export default TvContainer;
