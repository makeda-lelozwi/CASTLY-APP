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
