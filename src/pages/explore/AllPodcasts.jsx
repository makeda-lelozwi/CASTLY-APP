import { useEffect, useMemo, useReducer } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import LoadingPage from "../Loading";
import FilterButton from "../../components/FilterButton";

const AllPodcasts = () => {
  const [Podcasts, dispatchPodcasts] = useReducer(
    (currentState, action) => {
      switch (action.type) {
        case "successful":
          return {
            ...currentState,
            data: action.payload,
            response: true,
            message: "successful",
          };
        case "failed":
          return {
            ...currentState,
            data: [],
            response: false,
            message: action.payload,
          };
        case "loading":
          return { ...currentState, isLoading: action.payload };
      }
    },
    { data: [], reponse: false, errorMessage: "", isLoading: false }
  );

  useEffect(() => {
    dispatchPodcasts({ type: "loading", payload: true });
    fetch("https:/podcast-api.netlify.app")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatchPodcasts({ type: "successful", payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatchPodcasts({ type: "failed", payload: err.message });
      })
      .finally(() => dispatchPodcasts({ type: "loading", payload: false }));
  }, []);

  /**
   * Search podcasts by title
   * @param {Array} podcasts list of podcasts
   * @param {*} podcastTitle  title of podcast
   * @returns  list of podcast if the title is found else empty list
   */
  const search = (podcasts=[], podcastTitle = "") => {
    return podcasts.filter((podcast) =>
      podcast.title
        ?.toLowerCase()
        .trim()
        .includes(podcastTitle?.toLowerCase().trim())
    );
  };

  //State/store of the searched podcast title
  const [searchedTitle, setSearchedTitle] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  /**
   * Memorizing variable
   * We will use it to render data
   * If there is no search: show all podcasts
   * If there is search: show search results
   */

  const memorizedPodcasts = useMemo(() => {
    const searched = search(Podcasts.data, searchedTitle);
    return searched.length > 0 ? searched : Podcasts.data;
  }, [Podcasts, searchedTitle]);

  return (
    <div className="explore-page">
      <div className="search-container">
       
      </div>
      <div className="podcasts-container">
        <FilterButton className="filter-button"  searchedTitle={searchedTitle} setSearchedTitle={setSearchedTitle} setOpenSearch={setOpenSearch} />
        {
          Podcasts.isLoading?<LoadingPage/>:
        <div className="podcasts-content">
          <div>
            <h1>{Podcasts.response ? "" : Podcasts.message}</h1>
          </div>
          {memorizedPodcasts.map((podcast) => {
            return (
              <Link
                to={`${podcast.id}`}
                key={podcast.id}
                style={{ textDecoration: "none" }}
              >
                <div key={podcast.id} className="podcast-card">
                  <div className="podcasts-image-container">
                    <img
                      className="podcast-image"
                      src={podcast.image}
                      alt={podcast.title}
                    />
                  </div>
                  <h2 className="podcast-title">{podcast.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
        }
      </div>
      <div className="carousel-container">
        <h1>Carousel</h1>
        <Carousel />
      </div>
      
    </div>
  );
};

export default AllPodcasts;
