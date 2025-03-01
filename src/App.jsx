import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Component/Layout";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";

import Contact from "./page/Contact";
import Notfound from "./page/NotFound/Notfound";
import { ThemeProvider } from "./Component/Context/ThemeContext";
import { LanguageProvider } from "./Component/Context/LanguageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./page/ProductDetails/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./page/Cart/Cart";
import Favourites from "./page/Favourites/Favourites";
import ProductsWithThunk from "./page/ProductsWithThunk/ProductsWithThunk";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import Account from "./page/Account";

import AddProduct from "./page/UpLoadProduct/AddProduct";
import UserContextProvider from "./Component/Context/UserContext";
import { Toaster } from "react-hot-toast";
import ProductedRoute from "./Component/ProductRoute/ProductedRoute";

const routes = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProductedRoute>
            <Home />
          </ProductedRoute>
        ),
      },
      {
        path: "/account",
        element: (
          <ProductedRoute>
            <Account />
          </ProductedRoute>
        ),
      },
      // { path: "/products", element: <Products /> },
      {
        path: "/contact",
        element: (
          <ProductedRoute>
            <Contact />
          </ProductedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProductedRoute>
            <Cart />
          </ProductedRoute>
        ),
      },
      {
        path: "/favourites",
        element: (
          <ProductedRoute>
            <Favourites />
          </ProductedRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <ProductedRoute>
            <ProductDetails />
          </ProductedRoute>
        ),
      },
      { path: "*", element: <Notfound /> },
      {
        path: "/ProductsWithThunk",
        element: (
          <ProductedRoute>
            <ProductsWithThunk />
          </ProductedRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      // { path: "/uploadproduct", element: <UpLoadProduct /> },
      {
        path: "/addProduct",
        element: (
          <ProductedRoute>
            <AddProduct />
          </ProductedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryclient}>
          <UserContextProvider>
            <ThemeProvider>
              <LanguageProvider>
                <RouterProvider router={routes} />
              </LanguageProvider>
            </ThemeProvider>
          </UserContextProvider>
        </QueryClientProvider>
      </Provider>
      <Toaster />
    </>
  );
}

export default App;
