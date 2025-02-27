import React, { useState } from "react";

const UpLoadProduct = () => {
  const [image, setImage] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "ptknqfzo");
    fetch("https://api.cloudinary.com/v1_1/dumhajjym/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        setImage(data.secure_url);
      });
  };
  return (
    <div>
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />
      {image && <img src={image} alt="uploaded image" />}
    </div>
  );
};

export default UpLoadProduct;
