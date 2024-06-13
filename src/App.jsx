import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/explore" element={<Layout />} >
        
      </Route>
    </Routes>
  );
}

export default App;
