import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
export default function Signupprop({
  title,
  action,
  number,
  alert,
  handleaction,
  Icon,
}) {
  return (
    <div className="cart model cursor" title={title}>
      <div className="cart-container">
        <Icon className="cart-icon model cursor" />
        {number}
      </div>
      <div className="cart-title model">
        <p>{alert}</p>
      </div>
    </div>
  );
}
