import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Episode from "./Episodes";
const episode = {
  title: String,
  description: String,
  episode: Number,
  file: String,
};

const season = {
  season: Number,
  title: String,
  image: String,
  episodes: [episode],
};

const Podcast = () => {
  const initialState = {
    id: Number,
    title: String,
    description: String,
    image: String,
    seasons: [season],
    genres: [Number],
    updated: String,
  };

  const params = useParams();

  const [podcast, setPodcast] = useState(initialState);
  /**
   * Initial State is season because we want to display season 1 episodes by default
   * State to store selected season
   * Every time selected season changes
   * set the season title based on the selected season
   */
  const [seasonSelected, setSeasonSelected] = useState("");

  /**
   * Fetch the podcast based on the id
   * Set the podcast state
   */

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSeasonSelected(data.seasons[0].title || "");
        setPodcast(data);
      });
  }, []);

  console.log(seasonSelected);

  const selectedSeasonFunc = (e, title) => {
    e.preventDefault();
    setSeasonSelected(title);
  };

  /**
   * Loop through the seasons
   * Store episodes based season(title)
   * So its a value pair of season title and episodes
   * E.g {season 1 : [episodes], season 2 : [episodes]}
   */
  const episodes = { seasonTitle: [episode] };
  podcast.seasons.forEach((season) => {
    episodes[season.title] = season.episodes;
  });

  return (
    <div className="podcast-info">
      <h1 className="podcast-name">{podcast.title}</h1>
      <div className="podcast-desc">
        <div className="indiv-podcast-image-container">
          <img
            className="indiv-podcast-image"
            src={podcast.image}
            alt={podcast.title}
          />
        </div>
        <div>
          <p className="podcast-details">{podcast.description}</p>
          <div className="genres">
            {podcast.genres.map((genre) => {
              return (
                <span key={genre} className="genre-tag">
                  {genre}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="podcast-episodes">
        <div className="season-container">
          <h3>Seasons</h3>
          {
            /**
             * Display the seasons by title
             */
            podcast.seasons.map((season) => {
              return (
                <NavLink
                  to={{ season }}
                  key={season.id}
                  className="season-link"
                  onClick={(e) => selectedSeasonFunc(e, season.title)}
                  style={{
                    textDecoration: "none",
                    fontWeight:
                      season.title === seasonSelected ? "bold" : "normal",
                  }}
                >
                  <p>{season.title}</p>
                </NavLink>
              );
            })
          }
        </div>

        <div className="episodes-container">
          {
            /**
             * display season 1 episodes by default
             * display episodes based on selected season
             */
            episodes[seasonSelected]?.map((episode) => {
              return (
                <div key={episode.id}>
                  <Episode data={episode} />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Podcast;
