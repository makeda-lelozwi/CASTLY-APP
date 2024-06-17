import { Outlet } from "react-router-dom";
import Header from "./Header";
import MediaPlayer from "./MediaPlayer";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
        <MediaPlayer />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
