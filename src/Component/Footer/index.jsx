import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <footer
      className={`footer ${
        theme === "dark"
          ? "navbar-dark bg-dark text-light"
          : "navbar-light bg-light text-dark"
      }`}
    >
      <ul>
        <li>
          <a href="sms:00201224350493">Send massage</a>
        </li>
        <li>
          <a href="tel:00201224350493">Phone number</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
