import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";
import { FaPlay,  FaRegHeart } from "react-icons/fa";

const EpisodeObject = {
  title: String,
  description: String,
  file: String,
  episode: Number,
};
const Episode = ({ data = EpisodeObject }) => {
  const { setMediaFile } = useContext(PodcastContext);
  
  return (
    <div className="episode-card" key={data.episode}>
      <div className="play-icon-container">
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMediaFile({sound:data.file, title:data.title})}
        >
          <FaPlay size={"40px"} />
        </button>
      </div>
      <div className="episode-details">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className="heart-icon-container">
        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <FaRegHeart size={"40px"} />
        </button>
      </div>
    </div>
  );
};

export default Episode;
