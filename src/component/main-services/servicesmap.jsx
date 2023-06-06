import React from "react";
import Servicesname from "./Servicesname";

export default function Servicesmap({ data }) {
  return data.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <Servicesname
          img={v.img}
          title={v.title}
          text={v.text}
          servclass={v.servclass}
        />
      </React.Fragment>
    );
  });
}
