import React from "react";
import DPm from "./DPm";
import Product from "./product";

export default function Combine({ data, handleAction, productbuylist }) {
  return data?.map((v, i) => {
    let num = v.number.toLocaleString();
    return (
      <React.Fragment key={i}>
        <Product
          img={v.img}
          name={v.name}
          price={v.price}
          class1={v.class}
          text={v.text}
          contain={v.contain}
          number={num}
          productbuylist={(event) => productbuylist(event, v, i)}
          dropdown={
            <DPm
              data={v.dropdown}
              handleAction={(item, index) => handleAction(item, index, v, i)}
            />
          }
        />
      </React.Fragment>
    );
  });
}
