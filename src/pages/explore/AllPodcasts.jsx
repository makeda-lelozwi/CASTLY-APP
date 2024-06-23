import { useEffect, useMemo, useReducer } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../Loading";
import FilterButton from "../../components/FilterButton";

//FETCHING THE LIST OF ALL PODCASTS
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

  //SORTING LIST OF PODCASTS
  //default (a-z) sorting
  if (Podcasts.data) {
    Podcasts.data.sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  const [selectedSort, setSelectedSort] = useState("a-z");

  /**
   * Sorts the given data based on the specified sortType.
   *
   * @param {Array} data - The array of data to be sorted.
   * @param {string} sortType - The type of sorting to be applied. It can be one of the following:
   *   - "a-z": Sorts the data in ascending order based on the title property.
   *   - "z-a": Sorts the data in descending order based on the title property.
   *   - "newest": Sorts the data in descending order based on the updated property.
   *   - "oldest": Sorts the data in ascending order based on the updated property.
   * @return {Array} The sorted data array.
   */
  const sortData = (data = [], sortType = String) => {
    switch (sortType) {
      case "a-z":
        return data.sort((a, b) => (a.title > b.title ? 1 : -1));

      case "z-a":
        return data.sort((a, b) => (a.title < b.title ? 1 : -1));

      case "newest":
        return data.sort((a, b) => (a.updated < b.updated ? 1 : -1));

      case "oldest":
        return data.sort((a, b) => (a.updated > b.updated ? 1 : -1));

      default:
        return data;
    }
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  /**
   * Search podcasts by title
   * @param {Array} podcasts list of podcasts
   * @param {*} podcastTitle  title of podcast
   * @returns  list of podcast if the title is found else empty list
   */
  const search = (podcasts = [], podcastTitle = "") => {
    return podcasts.filter((podcast) =>
      podcast.title
        ?.toLowerCase()
        .trim()
        .includes(podcastTitle?.toLowerCase().trim())
    );
  };
  //State or store of the searched podcast title
  const [searchedTitle, setSearchedTitle] = useState("");

  //SORTING PODCASTS BY GENRE
  //State of filter by genre
  const [selectedGenre, setSelectedGenre] = useState("all");


  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };
  //Logs out the new selected genre when the selected genre changes
  useEffect(() => {
    console.log(selectedGenre);
  }, [selectedGenre]);

  //FILTERING PODCASTS BY GENRE

  const filterByGenres = (data = [], selectedGenres = "all") => {
    let genreIdToCheck = null;
    let groupedData = [];

    switch (selectedGenres) {
      case "all":
        return data; // If no genres are selected, return all data

      case "personal growth":
        genreIdToCheck = 1;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;

      case "investigative":
        genreIdToCheck = 2;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;

      case "history":
        genreIdToCheck = 3;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;
      case "comedy":
        genreIdToCheck = 4;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;
      case "entertainment":
        genreIdToCheck = 5;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;
      case "business":
        genreIdToCheck = 6;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;
      case "fiction":
        genreIdToCheck = 7;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;
      case "news":
        genreIdToCheck = 8;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;
      case "kids and family":
        genreIdToCheck = 9;
        groupedData = data.filter((podcast) =>
          podcast.genres.includes(genreIdToCheck)
        );
        console.log(groupedData);
        return groupedData;
      default:
        return data; // Default case, return all data if selectedGenres doesn't match any case
    }
  };

  filterByGenres(Podcasts.data, selectedGenre);

  /**
   * Memorizing variable
   * We will use it to render data
   * If there is no search/filter: show all podcasts
   * If there is search/filter: show search/filter results
   */

  const memorizedPodcasts = useMemo(() => {
    const searched = search(Podcasts.data, searchedTitle);
    const sortedMemoizedData = sortData([...searched], selectedSort);
    const filteredByGenre = filterByGenres(sortedMemoizedData, selectedGenre);
    return filteredByGenre?.length > 0 ? filteredByGenre : Podcasts.data;
  }, [Podcasts, searchedTitle, selectedSort, selectedGenre]);

  return (
    <div className="explore-page">
      <div className="podcasts-container">
        <div className="custom-selects">
          <select value={selectedSort} onChange={handleSortChange}>
            <option value="a-z"> A-Z</option>
            <option value="z-a"> Z-A</option>
            <option value="newest"> Newest</option>
            <option value="oldest"> Oldest</option>
          </select>
        </div>
        <FilterButton
          className="filter-button"
          searchedTitle={searchedTitle}
          setSearchedTitle={setSearchedTitle}
          selectedFilter={selectedGenre}
          setSelectedFilter={setSelectedGenre}
        />
        <div className="custom-selects">
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option disabled value="all">
              Select Genres
            </option>
            <option value="personal growth">Personal Growth</option>
            <option value="investigative">Investigative</option>
            <option value="history">History</option>
            <option value="comedy">Comedy</option>
            <option value="entertainment">Entertainment</option>
            <option value="business">Business</option>
            <option value="fiction">Fiction</option>
            <option value="news">News</option>
            <option value="kids and family">Kids and Family</option>
          </select>
        </div>

        {Podcasts.isLoading ? (
          <LoadingPage />
        ) : (
          <div className="podcasts-content">
            <div>
              <h1>{Podcasts.response ? "" : Podcasts.message}</h1>
            </div>
            {memorizedPodcasts?.map((podcast) => {
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
    </div>
  );
};

export default AllPodcasts;
