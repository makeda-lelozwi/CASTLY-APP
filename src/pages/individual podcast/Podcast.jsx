import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Episode from "./Episodes";

const Podcast = () => {
  const initialState = {
    id: Number,
    title: String,
    description: String,
    image: String,
    seasons: [],
    genres: [],
    updated: String,
  };

  const params = useParams();

  const [podcast, setPodcast] = useState(initialState);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPodcast(data);
      });
  }, [params.id]);

  return (
    <div className="podcast-info">
      <h1 className="podcast-name">{podcast.title}</h1>
      <div className="podcast-desc">
        <div className="podcast-image-container">
          <img className="podcast-image" src={podcast.image} alt={podcast.title} />
        </div>
        <p>{podcast.description}</p>
      </div>
      <div className="podcast-genre">
        <p>{podcast.genres.join(", ")}</p>
      </div>

      {podcast.seasons.map((season) => {
        return season.episodes.map((episode) => {
          return (
            <div key={episode.id}>
              <Episode data={episode} />
            </div>
          );
        });
      })}
    </div>
  );
};

export default Podcast;