import React, { useState, useEffect } from "react";
import IdeaForm from "./IdeaForm";
import Ideas from "./Ideas";

function Home() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/ideas")
      .then((resp) => resp.json())
      .then((ideas) => setIdeas(ideas));
  }, []);
  console.log(ideas);

  function addIdea(data) {
    setIdeas([...ideas, data]);
  }
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here you can keep a list of movies, and tv shows you are currently
        considering or working on.
      </p>
      <br />
      <h2>Add a New Idea</h2>
      <IdeaForm addIdea={addIdea} />
      <h2>Working Ideas</h2>
      {ideas.map((idea) => (
        <Ideas key={idea.id} idea={idea} />
      ))}
    </div>
  );
}

export default Home;
