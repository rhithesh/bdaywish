import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

useEffect(() => {
  const playAudio = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    } catch (err) {
      console.log("Autoplay blocked:", err);
    }
    document.removeEventListener("click", playAudio);
  };

  document.addEventListener("click", playAudio);

  return () => document.removeEventListener("click", playAudio);
}, []);  return (
    <audio ref={audioRef} loop>
      <source src="/music/output.mp3" type="audio/mpeg" />
    </audio>
  );
}