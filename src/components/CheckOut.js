import React from "react";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./store";
import Subtotal from "./Subtotal";

const CheckOut = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="chechout_title">your shopping basket</h2>

          {/**CheckoutProduct */}
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              price={item.price}
              image={item.image}
              title={item.title}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckOut;
