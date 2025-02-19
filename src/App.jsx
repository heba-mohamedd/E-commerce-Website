import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Component/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
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

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/favourites", element: <Favourites /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryclient}>
          <ThemeProvider>
            <LanguageProvider>
              <RouterProvider router={routes} />
            </LanguageProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
