import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Slice/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLogin, setUserLogin } = useContext(UserContext);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setUserLogin(null);
      dispatch(logout());

      navigate("/login");
    }

    // alert("user logged out successfully");
  };

  return (
    userLogin && (
      <div>
        <aside className="sidebar">
          <ul>
            <Link to="/account">
              <li>Profile</li>
            </Link>
            <Link to="/ProductsWithThunk">
              <li>products</li>
            </Link>
            {/* <li>types</li> */}
            {/* <li>settings</li> */}
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </aside>
      </div>
    )
  );
};

export default SideBar;
