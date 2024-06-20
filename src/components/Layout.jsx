import { Outlet } from "react-router-dom";
import Header from "./Header";
import MediaPlayer from "./MediaPlayer";
import Footer from "./Footer";
import { PodcastContext } from "../context/PodcastContext";
import {  useEffect, useState } from "react";
import {  favouritesEpisodesKey } from "../constants/Constants";
import { extractFromLocalStorage, setToLocalStorage } from "../constants/LocalStorage";

const Layout = () => {
  const [mediaFile, setMediaFile] = useState({sound:String, title:String});
  const initialFavouritesEpisodes = extractFromLocalStorage(favouritesEpisodesKey)||[];
  const [favoritesEpisodes,setToFavouritesEpisodes]= useState(initialFavouritesEpisodes);
  /**
   * If there are any changes in the favourites episodes
   * then update the state of the favourites episodes local storage
   */
  useEffect(() => {
    setToLocalStorage(favouritesEpisodesKey,favoritesEpisodes)
  } ,[favoritesEpisodes])
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
