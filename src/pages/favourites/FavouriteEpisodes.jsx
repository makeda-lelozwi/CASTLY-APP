import { useContext } from "react";
import { FaPlay, FaTrash } from "react-icons/fa";
import { PodcastContext } from "../../context/PodcastContext";
const FavouriteEpisodes = () => {
  const { favoritesEpisodes, setToFavouritesEpisodes, setMediaFile } =
    useContext(PodcastContext);
  /**
   *  Function to delete episode from favourites 
   * @param {String} episodeTitle 
   * @param {String} podcastTitle 
   * @param {String} seasonTitle 
   */
  const deleteFromFavourites = (episodeTitle,podcastTitle, seasonTitle) => {
   /**
    * 
    * @param {Array} currentState  of current favourite episodes
    * Filters out the episode from the list has same episode title, podcast title and season title
    * @returns filtered array of episodes
    */
    const filterList =  (currentState) =>currentState.filter((favEpisode) =>!(
           favEpisode.episode?.title === episodeTitle &&
           favEpisode.podcastTitle === podcastTitle &&
           favEpisode.seasonTitle === seasonTitle
         )
    );
      
     //set new state of favourite episodes
    setToFavouritesEpisodes(currentState=>filterList(currentState));
  };
  return (
    <div className="podcasts-container">
      {favoritesEpisodes.length > 0 ? (
        favoritesEpisodes.map((favEpisode) => (
          <div className="favourite-episodes-card">
            <div className="favourite-episodes-card-row-one">
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setMediaFile({
                    sound: favEpisode.episode?.file,
                    title: favEpisode.episode?.title,
                  })
                }
              >
                <FaPlay size={"30px"} />
              </button>
              <div className="favourite-episodes-season-names">
                <p>{favEpisode.episode?.title}</p>
                <p>{favEpisode?.podcastTitle}</p>
                <p>{favEpisode?.seasonTitle} </p>
              </div>
              <button
                className="delete-button"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => deleteFromFavourites(favEpisode.episode?.title,favEpisode.podcastTitle,favEpisode.seasonTitle)}
              >
                <FaTrash size={"20px"} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <>No Favourites Episodes</>
      )}
    </div>
  );
};

export default FavouriteEpisodes;
