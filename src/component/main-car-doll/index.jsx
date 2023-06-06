import React from "react";
import Button from "../button";
import Contains from "./contains";

export default function Dollandcar() {
  const info = [
    { img: "dollandcar1", titletext: "زیباترین عروسک‌ها", title: "زیباترین عروسک‌ها"},
    { img: "dollandcar", titletext: "ماشین و هواپیمای کنترلی", title: "ماشین و هواپیمای کنترلی"},
  ];
  return (
    <div className="margin-couple">
      <div className="Dollandcar d-flex ">
        <Contains data={info} />
      </div>
    </div>
  );
}
