import React from "react";
import { useGetProductsQuery } from "../services/api";

const ProductList = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  if (isLoading) return <p>Loading products....</p>;
  if (error) return <p>Error fetching products</p>;
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data?.products &&
          data.products.map((prod) => <li key={prod.id}>{prod.title}</li>)}
      </ul>
    </div>
  );
};

export default ProductList;
