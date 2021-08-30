import React, { useState } from "react";
import "./ProductFeed.css";
import StarIcon from "@material-ui/icons/Star";
import Currency from "react-currency-formatter";
import { useStateValue } from "./store";

const MAX_rating = 5;
const MIN_rating = 1;

const ProductFeed = ({ id, title, image, category, price, description }) => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("This is my bakset>>>>", basket);

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_rating - MIN_rating) + 1) - MIN_rating
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="productFeed">
      <div className="productFeed_Content">
        <p className="category">{category}</p>
        <img className="product_image" src={image} />
        <h4 className="title">{title}</h4>
        <div className="ratingStar">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="starIcon" />
            ))}
        </div>
        <p className="description">{description}</p>
        <div className="currency">
          <Currency className="price" quantity={price} currency="EUR" />
        </div>
        {hasPrime && <p>has Prime Del</p>}
        <button className="basketButton" type="submit" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductFeed;
