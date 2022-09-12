import React, { useState, useEffect } from "react";
import { listProducts } from "./ProductsService";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const ProductsIndex = () => {
  const { state } = useLocation();
  const [products, setProduct] = useState(null);

  useEffect(() => {
    if (state) {
      console.warn(`this id ${state.id} is not found`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProduct(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsIndex;
