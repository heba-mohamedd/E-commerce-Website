import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import routes from "./header.js";
// import { Button } from "react-bootstrap";
import ThemeContext from "../Context/ThemeContext.jsx";
import "./Header.css";
import LanguageContext from "../Context/LanguageContext.jsx";
import "../../index.css";
import SideBar from "../SideBar/index.jsx";

const Header = ({ sidebar, setSideBar }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  // const [isSideBarOpen, setSidebar] = useState(false);

  // function toggleSidebar() {
  //   setSidebar(!isSideBarOpen);
  //   console.log(isSideBarOpen);
  // }

  function toggleLanguage() {
    let newLanguage = language === "En" ? "Ar" : "En";
    setLanguage(newLanguage);
  }

  function toggleTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);

  return (
    <div className="header">
      <button
        className="m-2 sidebtn"
        onClick={() => {
          setSideBar(!sidebar);
        }}
      >
        ☰
      </button>
      <h1>Heba's Brand</h1>
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.href}>
              <NavLink to={route.href}>{route.element}</NavLink>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={toggleTheme} className="bgMode">
          {theme == "light" ? "🌙" : "☀"}
        </button>
        <button onClick={toggleLanguage} className=" bgMode">
          {language === "En" ? "🌐Ar" : "🌐En"}
        </button>
      </div>

      {/* <div>
        <button onClick={toggleSidebar}>☰</button>
        <SideBar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />
      </div> */}
    </div>
  );
};

export default Header;
