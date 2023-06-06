import React from "react";

export default function DPm({ data, handleAction }) {
  return (
    <div className="product-dropdown d-flex model">
      {data.map((item, index) => {
        return (
          <div
            className={`product-dp-items d-flex model ${item.extra}`}
            key={index}
            onClick={
              item.text == "مشاهده سریع"
                ? () => handleAction(item, index)
                : null
            }>
            <p>{item.text}</p>
            <item.icon className="product-dp-icon" />
          </div>
        );
      })}
    </div>
  );
}
