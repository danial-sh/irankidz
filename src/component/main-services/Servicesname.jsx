import React from "react";

export default function Servicesname({ img, title, text, servclass }) {
  return (
    <div className="services-contain d-flex model ">
      <div className={`${servclass} service-contain-img }`}>
        <img src={`images/service-${img}.webp`} alt="qwe" />
      </div>
      <div>
        <h3 className="service-title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
