import { useEffect, useState } from "react";
import { PodcastContext } from "../context/PodcastContext";
import { useContext } from "react";

const MediaPlayer = () => {
  const {mediaFile} = useContext(PodcastContext);
  const[sound,setSound] = useState("")
  
  
   
  
  useEffect(() => {
    setSound(mediaFile.sound);
    document.getElementById("media-player").load();

  },[mediaFile.title]);
  
  return (
    <div className="media-player-container">
      <div>

      </div>
      <audio id="media-player" className="media-player" src={sound} autoPlay  controls/>
    
    </div>
  );
};

export default MediaPlayer;
