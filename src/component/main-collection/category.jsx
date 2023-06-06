import React from "react";

export default function Category({ img ,title}) {
  return (
    <div className="collection-kinds bg-1">
      <img
        src={`images/collection-category-${img}.webp`}
        alt="qwe"
        className="kinds-img"
      />
      <div className="blur-contain model cursor" title={title}>
        <p>شروع به خرید</p>
      </div>
    </div>
  );
}
