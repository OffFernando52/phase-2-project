import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import MoviesContainer from "./MoviesContainer"

function App() {

  return (
    <div className="app">
      <NavBar/>
      <MoviesContainer/>
    </div>
  );
}

export default App;
