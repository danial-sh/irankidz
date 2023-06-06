import React from "react";
import Button from "../button";

export default function Product({
  contain,
  img,
  title,
  name,
  price,
  class1,
  text,
  dropdown,
  productbuylist,
  number,
}) {
  return (
    <div className={`${contain || ""} product-container d-flex cursor model`}>
      <div className="product-img">
        <img src={`images/${img}.webp`} alt="qwe" className="object-fit" />
      </div>
      <div className="product-content d-flex">
        <p title={title}>{name}</p>
        <h2 className="cprice">
          {price}
          {number}
        </h2>
        <Button
          extracss={class1}
          text={text}
          action={(event) => productbuylist(event)}
        />
      </div>
      {dropdown}
    </div>
  );
}
