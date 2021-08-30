import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useStateValue } from "./store";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const logout = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
  };
  return (
    <header>
      <div className="header">
        {/** Header left */}
        <Link to="/">
          <div className="header_left">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          </div>
        </Link>

        {/** Header Middle */}
        <div className="header_middle">
          <p className="pTag">
            All
            <ExpandMoreIcon />
          </p>
          <input placeholder="search" />
          <SearchIcon className="searchIcon" />
        </div>

        {/** Header right */}
        <div className="header_right">
          <div className="firstDiv">
            {/* <Link to="/login"> */}
            <p className="signIN">
              {user ? (
                <p onClick={logout}>{user?.email}</p>
              ) : (
                <Link to="/login">Hello! Sign IN</Link>
              )}
            </p>
            {/* </Link> */}
            <span>
              <p>Accounts & Lists</p>
              <ExpandMoreIcon />
            </span>
          </div>
          <div className="secondDiv">
            <p>Return</p>
            <p>& Orders</p>
          </div>
          <Link to="/checkout">
            <div className="thirdDiv">
              <ShoppingCartIcon />
              <sup>{basket?.length}</sup>
              <p>cart</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="header_bottom">
        <div className="header_bottomLeft">
          <MenuIcon />
          <p>All</p>
          <p>Today's Deal</p>
          <p>Costumer Service</p>
          <p>Gift Cards</p>
          <p>Registry</p>
          <p>Sell</p>
        </div>
        <div className="header_bottomRight">
          <p>Amazon's response to COVID-19</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
