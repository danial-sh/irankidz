import React from "react";

export default function Links({ data, mudale }) {
  return (
    <div
      className={
        mudale ? "links-text-show model cursor" : "links-text-hide model cursor"
      }>
      {data.map((v, i) => {
        return (
          <div className="links-text d-flex cursor" key={i} title={v.text}>
            <div className="links-circle"></div>
            <p>{v.text}</p>
          </div>
        );
      })}
    </div>
  );
}
