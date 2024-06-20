import { useEffect, useMemo, useReducer } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    { data: [], response: false, errorMessage: "", isLoading: false }
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
        dispatchPodcasts({ type: "failed", payload: err.message });
      })
      .finally(() => dispatchPodcasts({ type: "loading", payload: false }));
  }, []); 

  /**
   * State of the list of genres
   */
  const [genres, setGenres] = useState([]);

  const setGenresWithNoduplicates = () => {
    setGenres([...new Set(genres)]);
  };
  /**
   * Fetch the list of genres from the api
   * If error, set the list of genres to ["No genres found"]
   */
  useEffect(() => {
    const setOfGenres = new Set(
      Podcasts.data
        .map((pod) => pod.genres)
        .reduce((prev, curr) => {
          console.log(prev);
          return prev.concat(...curr);
        }, [])
    );
    console.log(Array.from(setOfGenres));

    /**
     * Check if the genre exist
     * @param {Number} id of the genre being searched
     * @returns true if the genre exist else false
     */
    const existOnGenre = (id) => {
      return genres.some((gen) => gen.id === id);
    };
    Array.from(setOfGenres).forEach((id) => {
      if (!existOnGenre(id))
        fetch(`https://podcast-api.netlify.app/genre/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setGenres((currentState) => [
              ...currentState,
              { id: id, title: data.title },
            ]);
          })
          .catch((err) => {
            dispatchPodcasts({ type: "failed", payload: err.message });
          });
    });
  }, []);

  /**
   * Search podcasts by title or filter by genre id
   * @param {Array} podcasts list of podcasts
   * @param {*} podcastTitle  title of podcast
   * @param {Number} selectedGenreId is the id of the selected genre
   * @returns  list of podcast if the title is found else empty list
   */
  const search = (podcasts = [], podcastTitle = "", selectedGenreId) => {
    return podcasts.filter(
      (podcast) =>
        podcast.title
          ?.toLowerCase()
          .trim()
          .includes(podcastTitle?.toLowerCase().trim()) ||
        podcast.genres.some((genre) => {
          if (selectedGenreId === 0) return true;
          return genre.id === selectedGenreId;
        })
    );
  };

  //State/store of the searched podcast title
  const [searchedTitle, setSearchedTitle] = useState("");
  //State of filter by genre
  const [selectedGenre, setSelectedGenre] = useState({});

  /**
   * Memorizing variable
   * We will use it to render data
   * If there is no search/filter: show all podcasts
   * If there is search/filter: show search/filter results
   */

  const memorizedPodcasts = useMemo(() => {
    const searched = search(Podcasts.data, searchedTitle, selectedGenre.id);
    return searched.length > 0 ? searched : Podcasts.data;
  }, [Podcasts, searchedTitle, selectedGenre]);

  return (
    <div className="explore-page">
      <div className="podcasts-container">
        <FilterButton
          className="filter-button"
          searchedTitle={searchedTitle}
          setSearchedTitle={setSearchedTitle}
          filters={genres}
          setSelectedFilter={setSelectedGenre}
        />
        {Podcasts.isLoading ? (
          <LoadingPage />
        ) : (
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
                    <p></p>
                    <p className="podcast-update-date">
                      {" "}
                      {`${
                        podcast.seasons
                      } Seasons Last updated: ${podcast.updated?.substring(
                        0,
                        10
                      )}`}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      {/* <div className="carousel-container">
        <h1>Carousel</h1>
        <Carousel />
      </div> */}
    </div>
  );
};

export default AllPodcasts;
