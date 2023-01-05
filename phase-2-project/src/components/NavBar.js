import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <header className="logo">
        <h1>
          CinePolis
          <span role="img">🎬🍿 </span>
        </h1>
      <div>
      <button className="button"><span>  <Link to="/">Home</Link></span></button>
  
        
        <button className="button"><span>
          <Link to="/movies">Movies</Link></span>
        </button>
        <button className="button"><span>
          <Link to="/tv">TV Shows</Link></span>
        </button>
      </div>
      </header>
    </nav>
  );
}

export default NavBar;
