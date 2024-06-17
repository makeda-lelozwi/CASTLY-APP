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
    <div className="explore-page">
    <div className="podcasts-container">
      <div className="podcasts-content">
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
                <h2 className="podcast-title">{podcast.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    <div className="carousel-container">
        <h1>Carousel</h1>
    </div>
    </div>
  );
};

export default AllPodcasts;
