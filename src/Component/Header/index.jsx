import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import ThemeContext from "../Context/ThemeContext.jsx";
import LanguageContext from "../Context/LanguageContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import routes from "./header.js";

const Header = ({ sidebar, setSideBar }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  function toggleLanguage() {
    let newLanguage = language === "En" ? "Ar" : "En";
    setLanguage(newLanguage);
  }

  function toggleTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme === "dark"
          ? "navbar-dark bg-dark text-light"
          : "navbar-light bg-light text-dark"
      } shadow`}
    >
      <div className="container-fluid">
        {localStorage.getItem("token") && (
          <button
            className="btn btn-outline-primary me-3"
            onClick={() => setSideBar(!sidebar)}
          >
            ☰
          </button>
        )}

        <h1 style={Style.logo}>Heba</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {localStorage.getItem("token") ? (
              routes.map((route) => (
                <li className="nav-item p-3" key={route.href}>
                  <NavLink className="nav-link" to={route.href}>
                    {route.element}
                  </NavLink>
                </li>
              ))
            ) : (
              <>
                <li className="nav-item p-3">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item p-3">
                  <NavLink className="nav-link" to="/">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={toggleTheme}
            >
              {theme === "light" ? <MdLightMode /> : <MdOutlineLightMode />}
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={toggleLanguage}
            >
              {language === "En" ? "Ar" : "En"} <GrLanguage />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Style = {
  logo: {
    fontFamily: "Arial, sans-serif",
    fontSize: "50px",
    fontWeight: "bold",
    background: "linear-gradient(to right,rgb(15, 15, 15),rgb(56, 172, 255))",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    letterSpacing: "2px",
    display: "inline-block",
  },
};

export default React.memo(Header);
