import React from "react";
import Button from "../button";

export default function Setstartcontain(props) {
  return (
    <div className="set-start">
      <div className="clothset-title">
        <h2>{props.title}</h2>
      </div>
      <div className="clothset-main-image-content cursor">
        <div className="background-sets"></div>
        <div className="bg-set "></div>
        <div className="clothset-img">
          <img
            src={`images/set-start-${props.img}.webp`}
            alt="qwe"
            className="object-fit"
          />
        </div>
        <Button extracss={"clothset-butt cursor"} text={props.text} />
      </div>
    </div>
  );
}
