import React, { useContext } from "react";
import logo from "../../assets/homeImage.jpg";
// import HomeImage1 from "../../assets/Homepage1.jpg";
// import HomeImage2 from "../../assets/Homepage2.jpg";
import Style from "./Home.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import { UserContext } from "../../Component/Context/UserContext";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { userLogin } = useContext(UserContext);
  console.log(user);

  return (
    userLogin && (
      <>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-5 d-flex align-items-center justify-content-center ">
              <Link to="/ProductsWithThunk">
                <button className={Style.shopNowBtn}>SHOP NOW</button>
              </Link>
            </div>
            <div className="col-7 ">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active "
                    data-bs-interval="3000"
                  >
                    <img
                      className={`d-block img-fluid w-100  object-fit-cover ${Style.x}`}
                      src={logo}
                      alt="First slide"
                      // style={styles.img}
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img
                      className={`d-block img-fluid w-100  object-fit-cover ${Style.x}`}
                      src={image1}
                      alt="Second slide"
                      // style={styles.img}
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img
                      className={`d-block img-fluid w-100  object-fit-cover ${Style.x}`}
                      src={image2}
                      alt="Third slide"
                      // style={styles.img}
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img
                      className={`d-block img-fluid w-100  object-fit-cover ${Style.x}`}
                      src={image3}
                      alt="Third slide"
                      // style={styles.img}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Home;
