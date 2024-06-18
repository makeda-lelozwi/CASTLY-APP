import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import AllPodcasts from "./pages/explore/AllPodcasts";
import Podcast from "./pages/individual podcast/Podcast";
import FavouriteEpisodes from "./pages/favourites/FavouriteEpisodes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="explore" element={<Layout />}>
        <Route index element={<AllPodcasts />} />
        <Route path=":id" element={<Podcast />} />
        <Route path="favorites" element={<FavouriteEpisodes />} />
      </Route>
      
    </Routes>
  );
}

export default App;
