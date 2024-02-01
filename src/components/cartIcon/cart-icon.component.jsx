import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import React from "react";
import "./cart-icon.styles.css";
import { cartSelector } from "../../redux/productreducer";
import { useSelector } from "react-redux";
export const CartIcon = () => {
  // const cartCount = useSelector(selectCartCount);
  const cartCount = useSelector(cartSelector);
  return (
    <div className="cart-icon-container">
      <ShoppingSvg className="shopping-icon" />
      <span className="item-count">{cartCount.length}</span>
    </div>
  );
}


