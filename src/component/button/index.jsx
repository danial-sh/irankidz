import React from "react";

export default function Button({ text, title, extracss, action }) {
  return (
    <div
      className={`${extracss} about-start model d-flex`}
      title={title}
      onClick={(eve) => action(eve)}>
      <p>{text}</p>
    </div>
  );
}
