import React from "react";

export default function Adress({ data }) {
  return data.map((v, i) => {
    return (
      <div  key={i} className="adress-icons-text d-flex">
        <div className="adress-icon">
            <div className="footer-icon d-flex">
          <v.icon />
            </div>
        </div>
        <div className="addres-text">
          <p>{v.text}</p>
        </div>
      </div>
    );
  });
}
