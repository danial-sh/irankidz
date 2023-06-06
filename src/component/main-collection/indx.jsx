import React from "react";
import Button from "../button";
import Categorymap from "./Categorymap";

export default function Colection() {
  const info = [
    { img: "1", title: "group-digital" },
    { img: "2", title: "اسباب بازی" },
    { img: "3", title: "عروسک" },
  ];
  return (
    <div className="margin-couple d-flex start-buying">
      <div className="collection-begin cursor d-flex">
        <div className="collection-begin-img">
          <img src="/images/collection-begin.webp" alt="qwe" />
        </div>
        <Button title={"شروع به خرید"} text={"شروع به خرید"} />
      </div>
      <div className="collection-category d-flex">
        <Categorymap data={info} />
      </div>
    </div>
  );
}
