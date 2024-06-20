import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    color: "#E6901A",
  };

  return (
    <header className="header-container">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="50"
          height="50"
        >
          <rect width="200" height="200" fill="#0e0308" />

          <path
            d="M100,10c42.7,0,77.3,34.6,77.3,77.3c0,42.7-34.6,77.3-77.3,77.3c-42.7,0-77.3-34.6-77.3-77.3C22.7,44.6,57.3,10,100,10z M100,105 c11,0,20-9,20-20s-9-20-20-20s-20,9-20,20S89,105,100,105z"
            fill="#e6901a"
          />
        </svg>
      </div>
      <nav className="header">
        <NavLink
          to="./"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="nav-link"
        >
          Explore
        </NavLink>
        <NavLink
          to="favorites"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="nav-link"
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
