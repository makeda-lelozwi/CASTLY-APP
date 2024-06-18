import { Outlet } from "react-router-dom";
import Header from "./Header";
import MediaPlayer from "./MediaPlayer";
import Footer from "./Footer";
import { PodcastContext } from "../context/PodcastContext";
import { useState } from "react";

const Layout = () => {
  const [mediaFile, setMediaFile] = useState({sound:String, title:String});
  return (
    <div className="layout">
      <Header />
      <main>
        <PodcastContext.Provider value={{ mediaFile, setMediaFile }}>
          <Outlet />
          <MediaPlayer />
        </PodcastContext.Provider>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
