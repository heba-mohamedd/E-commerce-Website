import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";
import LanguageContext from "../Context/LanguageContext";
import SideBar from "../SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUser } from "../../redux/Slice/authSlice";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [sidebar, setSideBar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLoggedInUser);
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === "Ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <div className={`layout-container  d-flex flex-column min-vh-100`}>
      <Header sidebar={sidebar} setSideBar={setSideBar} />
      <div className="d-flex flex-grow-1">
        {sidebar && localStorage.getItem("token") && <SideBar />}
        <main
          className={`main ${
            theme == "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          <Outlet />
        </main>
      </div>

      {localStorage.getItem("token") && <Footer />}
    </div>
  );
};

export default Layout;
