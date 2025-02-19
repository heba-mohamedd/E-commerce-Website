import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";
import LanguageContext from "../Context/LanguageContext";
import SideBar from "../SideBar";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    document.documentElement.dir = language === "Ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <div className={`layout-container `}>
      <Header sidebar={sidebar} setSideBar={setSideBar} />
      <div className="d-flex">
        {sidebar && <SideBar />}
        <main
          className={`main ${
            theme == "light" ? "bg-dark text-light" : "bg-light"
          }`}
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
