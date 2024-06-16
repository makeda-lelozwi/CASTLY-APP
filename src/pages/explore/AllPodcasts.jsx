import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    fetch("https:/podcast-api.netlify.app")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPodcasts(data);
      });
  }, []);

  return (
    <div className="podcasts-container">
      {podcasts.map((podcast) => {
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
              <h3 className="podcast-title">{podcast.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllPodcasts;
