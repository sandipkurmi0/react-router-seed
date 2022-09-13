import React from "react";
import { css } from "@emotion/css";
import { Routes, Route } from "react-router-dom";
import ProductsIndex from "./ProductsIndex";
import Product from "./Product";

const ProductsStyles = css`
  display: flex;
  flex-direction: column;

  .Logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

const Products = () => {
  return (
    <div className={ProductsStyles}>
      <img src="/assets/img/logo.svg" alt="Ultimate Burger" className="Logo" />
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
        <Route path=":id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Products;
