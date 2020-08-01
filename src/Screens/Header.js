import React from "react";
import "../Screens/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useStateValue } from '../StateProvider'

function Header() {
  //rfce - short snippet
  const [{basket}, dispatch ] = useStateValue()

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="headerSearch">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="headerOption">
        <Link className="headerLink" to="/login">
          <div className="headerItem">
            <span className="headerl1">Hello</span>
            <span className="headerl2">SignIn</span>
          </div>
        </Link>

        <Link className="headerLink" to="/login">
          <div className="headerItem">
            <span className="headerl1">Returns </span>
            <span className="headerl2">&Orders</span>
          </div>
        </Link>

        <Link className="headerLink" to="/login">
          <div className="headerItem">
            <span className="headerl1">Your</span>
            <span className="headerl2">Prime</span>
          </div>
        </Link>

        <Link className="headerLink" to="/checkout">
          <div className="headerBasket headerBasketCount">
            <ShoppingCartIcon />
            <span className="headerl2">{basket?.length}</span>   
            {/* bacause sometimes basket takes a fraction of a second to initilize, 
            so undefined error will be there, to avaid this, ?. used */}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
