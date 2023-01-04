import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import IdeaForm from "./IdeaForm";
import Home from "./Home";
import MoviesContainer from "./MoviesContainer";
import TvContainer from "./TvContainer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <IdeaForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/tv" element={<TvContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
