import React, { useState } from "react";
import characters from "./characters";
import ImageList from "./components/ImageList";
import BackgroundMusic from "./components/BackgroundMusic";

const App = () => {
  const [char, setChar] = useState(characters);
  const [flipped, setFlipped] = useState(false);
  const [lastSelectedChar, setlastSelectedChar] = useState([]);
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // handle flip
  const shuffleCharacters = () => {
    setFlipped(true);

    setTimeout(() => {
      const shuffle = [...characters].sort(() => Math.random() - 0.5);
      setChar(shuffle);
      setFlipped(false);
    }, 500);
  };

  const handleImageClick = (id) => {
    console.log(id);
    if (lastSelectedChar.includes(id)) {
      setFinalScore(score);
      setGameOver(true);
      setScore(0);
      setlastSelectedChar([]);
    } else {
      setScore((prev) => prev + 1);
      setlastSelectedChar((prev) => [...prev, id]);
    }
    shuffleCharacters();
  };

  const handleCloseModal = () => {
    setGameOver(false);
  };

  return (
    <div className="app-container">
      <div className="header">
        <img
          src="./src/assets/images/transparentTitle.png"
          alt=""
          className="game-title"
        />
        <BackgroundMusic />
      </div>
      <div className="imageLists">
        <ImageList
          characters={char}
          handleImageClick={handleImageClick}
          flipped={flipped}
        />
      </div>
      <div className="score-box">
        <p>Your Score: {score}</p>
        <p> MaxScore (Possible) :12</p>
      </div>
      {/* game over */}
      {gameOver && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Game Over</h2>
            <p>Your score was: {finalScore}</p>
            <button onClick={handleCloseModal}>Try Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
