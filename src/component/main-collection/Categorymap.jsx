import React from "react";
import Category from "./category";

export default function Categorymap({ data }) {
  return data.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <Category img={v.img} title={v.title} />
      </React.Fragment>
    );
  });
}
