import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import AllPodcasts from "./pages/explore/AllPodcasts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/explore" element={<Layout />} >
        <Route index element={<AllPodcasts />} />
      </Route>
    </Routes>
  );
}

export default App;
