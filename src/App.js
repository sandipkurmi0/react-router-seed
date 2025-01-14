import React, { useState } from "react";
import { BrowserRouter as Router, Navigate, useRoutes } from "react-router-dom";
import Products from "./Products/Products";
import Admin from "./Admin/Admin";
import { css } from "@emotion/css";
import Nav from "./Common/Nav";
import ScrollToTop from "./Common/ScrollToTop";
import ProductsIndex from "./Products/ProductsIndex";
import Product from "./Products/Product";
import ProductEdit from "./Products/ProductEdit";

const AppStyles = css`
  margin: 50px auto;
  width: 380px;
  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`;

const App = () => {
  const [authenticated] = useState(true);

  const routes = useRoutes([
    {
      path: "/",
      element: <Products />,
      children: [
        {
          path: "/",
          element: <ProductsIndex />,
        },
        {
          path: "/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/admin",
      element: authenticated ? <Admin /> : <Navigate to="/" />,
      children: [
        {
          path: "/admin",
          element: <ProductsIndex />,
        },
        {
          path: "/admin/new",
          element: <ProductEdit isEdit={false} />,
        },
        {
          path: "/admin/:id",
          element: <ProductEdit isEdit={true} />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};

const AppWrapper = () => (
  <div className={AppStyles}>
    <Router>
      <ScrollToTop />
      <div className="Container">
        <Nav />
        <App />
      </div>
    </Router>
  </div>
);

export default AppWrapper;
