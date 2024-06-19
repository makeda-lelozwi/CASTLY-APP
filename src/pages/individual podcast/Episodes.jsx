import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";
import { FaPlay, FaRegHeart } from "react-icons/fa";
import {
  BUTTON_COLOR,
  PODCAST_BG_IMAGE_COLOR,
  episode,
} from "../../constants/Constants";

const Episode = ({ data = episode, podcastTitle = "", seasonTitle = "" }) => {
  //Get Media File currently playing from Context
  //Get setMediaFile function from Context
  //Get setToFavouritesEpisodes function from Context
  //Get favoritesEpisodes from Context
  const {
    mediaFile,
    setMediaFile,
    setToFavouritesEpisodes,
    favoritesEpisodes,
  } = useContext(PodcastContext);

  /**
   * search if episode is already in favourites
   * @param {Array} currentState  of current favourite episodes
   * @returns  true if episode is already in favourites else false
   */
  const checkIfExistsInFavourites = (currentState) => {
    return currentState.some(
      (episode) =>
        episode.episode?.title === data.title &&
        episode.podcastTitle === podcastTitle &&
        episode.seasonTitle === seasonTitle
    );
  };
  //check if the current episode is playing
  const isCurrentlyPlaying = mediaFile.title === data.title;

  /**
   * Function to add episode to favourites if it is not already in favourites
   */
  const addToFavouriteEpisodes = () => {
    setToFavouritesEpisodes((currentState) => {
      return checkIfExistsInFavourites(currentState)
        ? currentState
        : [
            ...currentState,
            {
              episode: data,
              podcastTitle: podcastTitle,
              seasonTitle: seasonTitle,
            },
          ];
    });
  };

  return (
    <div className="episode-card" key={data.episode}>
      <div className="play-icon-container">
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMediaFile({ sound: data.file, title: data.title })}
        >
          <FaPlay
            size={"40px"}
            color={isCurrentlyPlaying ? PODCAST_BG_IMAGE_COLOR : "black"}
          />
        </button>
      </div>
      <div className="episode-details">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className="heart-icon-container">
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={addToFavouriteEpisodes}
        >
          <FaRegHeart
            size={"40px"}
            color={
              checkIfExistsInFavourites(favoritesEpisodes)
                ? BUTTON_COLOR
                : "black"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Episode;
