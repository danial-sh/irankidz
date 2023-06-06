import React from "react";
import DPm from "./DPm";

export default function Items({ data, handleAction, productbuylist }) {
  return data.map((v, i) => {
    let num = v.number.toLocaleString();
    return (
      <div key={i} className={`new-doll d-flex ${v.firstclass} model`}>
        <div className={`new-doll-img cursor ${v.cimg} d-flex`}>
          <img src={`images/${v.img}.webp`} alt="qwe" className="object-fit" />
          {
            <DPm
              data={v.drop}
              handleAction={(item, index) => handleAction(item, index, v, i)}
            />
          }
        </div>
        <div className={`newet-detail ${v.thirdclass} model`}>
          <h3 className="newest-type">{v.model}</h3>
          <a href="#" className={`${v.cname} newest-name `} title={v.title}>
            <h2>{v.name}</h2>
          </a>
          <h2 className={`newest-price ${v.cprice} model`}>
            {num}
            {v.price}
          </h2>
          <div
            className={`newest-buy-button ${v.secondclass} cursor d-flex`}
            onClick={(event) => productbuylist(event, v, i)}>
            <p>{v.butt}</p>
          </div>
        </div>
      </div>
    );
  });
}
