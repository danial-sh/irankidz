import React from "react";

export default function Button({ text, title, extracss, action }) {
  return (
    <div
      className={`${extracss} about-start d-flex model`}
      title={title}
      onClick={(eve) => action(eve)}>
      <p className="color-red">{text}</p>
    </div>
  );
}
