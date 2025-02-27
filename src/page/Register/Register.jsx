import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Register.module.css";
import * as Yup from "yup";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/Slice/authSlice";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleRegister(values) {
    dispatch(fetchRegister(values));
    // alert("user registered successfully");
    toast.success("user registered successfully");
    resetForm();
    navigate("/login");
  }
  let registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(20, "Name must not exceed 20 characters")
      .required("Name is Required"),
    email: Yup.string().email("Email Invaild").required("email is Required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "Password must start uppercase letter then lowercase letter and one number"
      )
      .required("Password is Required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleRegister,
  });
  return (
    <>
      <form className={`m-5 ${Style.register}`} onSubmit={formik.handleSubmit}>
        <h1 className="mb-4">Register Now</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter your Name
          </label>

          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formik.values.name}
            aria-describedby="emailHelp"
          />
        </div>
        {formik.errors.name && formik.touched.name ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.name}
          </div>
        ) : null}

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
        {formik.errors.password && formik.touched.password ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.password}
          </div>
        ) : null}

        <div className="mb-3">
          <label htmlFor="rePassword" className="form-label">
            Confirm Password
          </label>

          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            className="form-control"
            id="rePassword"
            name="rePassword"
            value={formik.values.rePassword}
            aria-describedby="rePasswordHelp"
          />
        </div>
        {formik.errors.rePassword && formik.touched.rePassword ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.rePassword}
          </div>
        ) : null}

        <button type="submit" className="submitbtn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
