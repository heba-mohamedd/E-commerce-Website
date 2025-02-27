import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "./Login.module.css";
import * as Yup from "yup";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../redux/Slice/authSlice";
import { UserContext } from "../../Component/Context/UserContext";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginError } = useSelector((state) => state.auth);
  const { userLogin, setUserLogin } = useContext(UserContext);

  function handleLogin(values) {
    dispatch(fetchLogin(values))
      .unwrap()
      .then(() => {
        // alert("User logged in successfully");
        toast.success("User logged in successfully");
        setUserLogin(localStorage.getItem("token"));
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  }

  let registerSchema = Yup.object().shape({
    email: Yup.string().email("Email Invaild").required("email is Required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "Password must start uppercase letter then lowercase letter and one number"
      )
      .required("Password is Required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleLogin,
  });
  // const onSubmit = (data) => {
  //   dispatch(fetchLogin(data))
  //     .unwrap()
  //     .then(() => {
  //       alert("user logged in successfully");
  //     })
  //     .catch((rejectedValueOrSerializedError) => {
  //       console.log(rejectedValueOrSerializedError);
  //     });
  // };

  return (
    <>
      <form
        className={`m-auto  mt-5 ${Style.login}`}
        onSubmit={formik.handleSubmit}
      >
        <h1 className="mb-4">Login</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter your Email address
          </label>

          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formik.values.email}
            aria-describedby="emailHelp"
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.email}
          </div>
        ) : null}

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formik.values.password}
            aria-describedby="emailHelp"
          />
        </div>
        {/* {formik.errors.password && formik.touched.password ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.password}
          </div>
        ) : null} */}
        {loginError && <p className="text-danger">{loginError}</p>}

        <button type="submit" className="submitbtn">
          Login
        </button>
        <p className="ml-3">
          Don't have an account?{" "}
          <span>
            <b>
              <Link to="/register">Sign up</Link>
            </b>
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
