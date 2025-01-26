import React, { useState, useRef, useEffect } from "react";
import backgroundScore from "../assets/music/backgroundScore.m4a";
import { MdOutlineMusicOff, MdOutlineMusicNote } from "react-icons/md";
const BackgroundMusic = () => {
  const [musicPlaying, setMusicPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setMusicPlaying(true);
    } else {
      audioRef.current.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop src={backgroundScore} />

      <button onClick={toggleMusic} className="music-toggle">
        {!musicPlaying ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
