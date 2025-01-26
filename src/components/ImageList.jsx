import React from "react";
import "../style.css";
const ImageList = ({ characters, handleImageClick, flipped }) => {
  return (
    <div>
      <div className="image-list">
        {characters.map((character) => (
          <img
            key={character.id}
            src={character.img}
            className={`image-item ${flipped ? "flipped" : ""}`}
            alt={character.name}
            onClick={() => {
              handleImageClick(character.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
