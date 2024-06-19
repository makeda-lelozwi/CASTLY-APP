import { Outlet } from "react-router-dom";
import Header from "./Header";
import MediaPlayer from "./MediaPlayer";
import Footer from "./Footer";
import { PodcastContext } from "../context/PodcastContext";
import {  useState } from "react";
import { episode, favouritesEpisodes } from "../constants/Constants";

const Layout = () => {
  const [mediaFile, setMediaFile] = useState({sound:String, title:String});
  const [favoritesEpisodes,setToFavouritesEpisodes]= useState([]);
  return (
    <div className="layout">
      <Header />
      <main>
        <PodcastContext.Provider value={{ mediaFile, setMediaFile ,favoritesEpisodes, setToFavouritesEpisodes}}>
          <Outlet />
          <MediaPlayer />
        </PodcastContext.Provider>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
