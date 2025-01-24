import React, { useState } from "react";
import characters from "./characters";
import ImageList from "./components/ImageList";

const App = () => {
  const [char, setChar] = useState(characters);
  const [flipped, setFlipped] = useState(false);
  const [lastSelectedChar, setlastSelectedChar] = useState([]);
  const [score, setScore] = useState(0);

  // handle flip
  const shuffleCharacters = () => {
    setFlipped(true);

    setTimeout(() => {
      const shuffle = [...characters].sort(() => Math.random() - 0.5);
      setChar(shuffle);
      setFlipped(false);
    }, 100);
  };

  const handleImageClick = (id) => {
    console.log(id);
    if (lastSelectedChar.includes(id)) {
      console.log("lost");
      console.log(score);
      setScore(0);
      setlastSelectedChar([]);
    } else {
      setScore((prev) => prev + 1);
      setlastSelectedChar((prev) => [...prev, id]);
    }
    shuffleCharacters();
  };

  return (
    <div className="app-container">
      <header>
        <h1>memory card game</h1>
        <p>Score: {score}</p>
      </header>
      <ImageList
        characters={char}
        handleImageClick={handleImageClick}
        // flipped={flipped}
      />
    </div>
  );
};

export default App;
