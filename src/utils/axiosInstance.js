import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://db-server-nu.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});

export default axiosInstance;

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://fakestoreapi.com/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosInstance;
