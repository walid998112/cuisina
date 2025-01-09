import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleDarkMode, darkMode, language, toggleLanguage }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <img
          src="https://www.ideerecette.fr/wp-content/uploads/2020/06/photo_2020-06-24_15-07-22.jpg"
          alt="Logo"
        />
      </h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <button>{language === "en" ? "Home" : "Accueil"} </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
