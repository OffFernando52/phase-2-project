import React from "react";
import IdeaForm from "./IdeaForm";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here you can keep a list of movies, and tv shows you are currently
        considering or working on.
      </p>
      <br />
      <h2>Add a New Idea</h2>
      <IdeaForm />
    </div>
  );
}

export default Home;
