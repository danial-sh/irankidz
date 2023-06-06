import React from "react";
import Combine from "../main-latestproduct/combine";
export default function Contains({ title, contain }) {
  return (
    <div className="the-most-contains">
      <div className="the-most-contain-title">
        <h2>{title}</h2>
      </div>
      <div className="most-items">
        {contain}
      </div>
    </div>
  );
}
