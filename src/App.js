import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Products from "./Products/Products";
import Admin from "./Admin/Admin";
import { css } from "@emotion/css";
import Nav from "./Common/Nav";
import ScrollToTop from "./Common/ScrollToTop";
import PrivateRoute from "./Common/PrivateRoute";
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

  return (
    <div className={AppStyles}>
      <Router>
        <ScrollToTop />
        <div className="Container">
          <Nav />
          <Routes>
            <Route path="/*" element={<Products />} />
            <Route
              path="/admin/*"
              element={<PrivateRoute authenticated={authenticated} />}
            >
              <Route path="/admin/*" element={<Admin />} />
            </Route>
            <Route path="/new" element={<ProductEdit isEdit={false} />} />
            <Route path="/update/:id" element={<ProductEdit isEdit={true} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
