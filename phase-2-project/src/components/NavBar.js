import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <header>
        <h1>
          Movies
          <span role="img">🎬🍿 </span>
        </h1>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv">TV Shows</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
