import React from "react";

export default function Contains({ data }) {
  return data.map((v, i) => {
    return (
      <div key={i} className="doll cursor d-flex">
        <div className="doll-text d-flex">
          <h3>{v.titletext}</h3>
          <a className="doll-link model" href="#" title={v.title}>
            {" "}
            شروع به خربد{" "}
          </a>
        </div>
        <div className="doll-img">
          <img src={`images/${v.img}.webp`} alt="qwe" />
        </div>
      </div>
    );
  });
}
