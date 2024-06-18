import { useState } from "react";
import { FaPlay } from "react-icons/fa";
const FavouriteEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);

  return (
    <div className="podcasts-container">
      <div className="favourite-episodes-card">
        <div className="favourite-episodes-card-row-one">
          <button>
            <FaPlay size={"40px"} />
          </button>
          <div className="favourite-episodes-season-names">
            <h5>Episode Title</h5>
            <h5>Show name</h5>
            <h5>Season</h5>
          </div>
          <div className="favourite-episodes-image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteEpisodes;
