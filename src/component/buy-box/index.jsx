import React from "react";
import Signupprop from "../header/signupprop";
import { RiShoppingBagLine } from "react-icons/ri";
export default function Buyerbox({ productbuylistshow, productcount }) {
  const info = [{ icon: RiShoppingBagLine, number: "۰" }];
  return (
    <div
      className="buy-box d-flex cursor"
      onClick={(event) => productbuylistshow(event)}>
      <div className="count-box d-flex">
        <p>{productcount}</p>
      </div>
      <div className="box-icon ">
        <RiShoppingBagLine className="box-icon" />
      </div>
    </div>
  );
}
