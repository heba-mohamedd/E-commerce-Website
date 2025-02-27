import React, { useContext } from "react";
import Style from "./account.module.css";
import { useSelector } from "react-redux";
import profileImage from "../../assets/profileimg.jpg";
import { FaImagePortrait } from "react-icons/fa6";
import { UserContext } from "../../Component/Context/UserContext";

const Account = () => {
  const { user } = useSelector((state) => state.auth);
  const { userLogin } = useContext(UserContext);

  console.log(user);
  return (
    userLogin && (
      <div>
        <div className={Style.contain}>
          <img src={profileImage} alt="" className={Style.profileImage} />

          <h3>{user?.name}</h3>

          <span>{user?.email}</span>
        </div>
      </div>
    )
  );
};

export default Account;
