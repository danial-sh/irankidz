import React from "react";

export default function Brandtems({ data }) {
  return data.map((v, i) => {
    return (
      <div key={i} className="logo model cursor" title={v.title}>
        <img
          src={`images/${v.img}.webp`}
          alt="qe"
          className="object-fit model  logo-img"
        />
      </div>
    );
  });
}
