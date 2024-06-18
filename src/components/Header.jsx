import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    color: "#E6901A",
  };

  return (
    <header className="header-container">
      <div>Logo</div>
      <nav className="header">
        <NavLink
          to="/explore"
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
        <NavLink
          to="/search"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="nav-link"
        >
          Search
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
