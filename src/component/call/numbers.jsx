import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
export default function Numbers({ data }) {
  return data.map((v, i) => {
    return (
      <div key={i} className="call-number-logo d-flex">
        <div className="phone-logo d-flex">
          <AiOutlinePhone />
        </div>
        <div>
          <p className="phone-text">برای پشتیبانی تماس بگیرید </p>
          <p className="phone-number">{v.number}</p>
          <p className="phone-number2">{v.number2}</p>
        </div>
      </div>
    );
  });
}
