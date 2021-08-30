import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./store";

const CheckOutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the items from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkOutProduct">
      <img className="checkPoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="chechoutProduct_title">{title}</p>
        <p className="chechoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="chechoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="remove_button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
