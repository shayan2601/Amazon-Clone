import React, { useEffect, useState } from "react";
import ProductFeed from "./ProductFeed";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function request() {
      const url = "https://fakestoreapi.com/products";
      const fakeData = await fetch(url);
      const data = await fakeData.json();
      setProducts(data);
      // console.log(data);
    }
    request();
  }, [products]);

  return (
    <div className="products">
      {products
        // .slice(1, 4)
        .map(({ title, id, image, category, price, description }) => (
          <ProductFeed
            title={title}
            price={price}
            description={description}
            key={id}
            id={id}
            image={image}
            category={category}
          />
        ))}
    </div>
  );
};

export default Products;
