import React from "react";
import Setstartcontain from "./setstartcontain";

export default function Combine({ data }) {
  return data.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <Setstartcontain title={v.title} img={v.img} text={v.text} />
      </React.Fragment>
    );
  });
}
