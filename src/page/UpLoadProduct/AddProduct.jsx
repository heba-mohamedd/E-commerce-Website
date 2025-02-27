import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import Style from "./UpLoadProduct.module.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState("");

  let productSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required"),
    imgURL: Yup.string().required("Image is required"),
  });

  async function handleAddProduct(values, { resetForm }) {
    try {
      const response = await axiosInstance.post("/products", values);
      console.log("Product added successfully:", response.data);
      resetForm();
      navigate("/ProductsWithThunk");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: 1,
      imgURL: "",
    },
    validationSchema: productSchema,
    onSubmit: handleAddProduct,
  });

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "jcstfr9t");

    fetch("https://api.cloudinary.com/v1_1/dmpwwgl8m/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        formik.setFieldValue("imgURL", data.secure_url);
        setPreviewImage(data.secure_url);
      })
      .catch((error) => console.error("Upload error:", error));
  };

  return (
    <div className="container">
      <form
        className={`m-5 p-4 shadow ${Style.productStyle}`}
        onSubmit={formik.handleSubmit}
      >
        <h1 className="mb-4 text-center">Add Product</h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="alert alert-danger mt-2">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price && (
            <div className="alert alert-danger mt-2">{formik.errors.price}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="imgURL" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="imgURL"
            name="imgURL"
            onChange={(e) => uploadImage(e.target.files)}
          />
          {formik.errors.imgURL && formik.touched.imgURL && (
            <div className="alert alert-danger mt-2">
              {formik.errors.imgURL}
            </div>
          )}
        </div>

        {previewImage && (
          <div className="mb-3 text-center">
            <img
              src={previewImage}
              alt="Preview"
              className="img-thumbnail"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
