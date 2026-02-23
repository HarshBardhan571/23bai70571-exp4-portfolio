import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const context = useContext(AppContext);
  const darkMode = context?.darkMode ?? true;
  const toggleTheme = context?.toggleTheme ?? (() => {});

  const navStyle = {
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    marginLeft: "30px",
    letterSpacing: "0.02em",
  };

  const activeStyle = {
    borderBottom: "2px solid #3b82f6",
    paddingBottom: "4px",
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
        background: darkMode
          ? "rgba(15, 23, 42, 0.85)"
          : "rgba(255,255,255,0.85)",
        borderBottom: darkMode
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: darkMode ? "white" : "black",
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>
          Harsh Bardhan Singh
        </div>

        {/* Navigation Links */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...navStyle,
              color: darkMode ? "white" : "black",
              ...(isActive ? activeStyle : {}),
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              ...navStyle,
              color: darkMode ? "white" : "black",
              ...(isActive ? activeStyle : {}),
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            style={({ isActive }) => ({
              ...navStyle,
              color: darkMode ? "white" : "black",
              ...(isActive ? activeStyle : {}),
            })}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              ...navStyle,
              color: darkMode ? "white" : "black",
              ...(isActive ? activeStyle : {}),
            })}
          >
            Contact
          </NavLink>

          <NavLink
            to="/analytics"
            style={({ isActive }) => ({
              ...navStyle,
              color: darkMode ? "white" : "black",
              ...(isActive ? activeStyle : {}),
            })}
          >
            Analytics
          </NavLink>

          <button
            onClick={toggleTheme}
            style={{
              marginLeft: "30px",
              padding: "6px 14px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: "#3b82f6",
              color: "white",
              fontSize: "0.8rem",
            }}
          >
            Theme
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;