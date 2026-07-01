import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Pradip Tiruwa
      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;