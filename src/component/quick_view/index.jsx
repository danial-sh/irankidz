import { React, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../button";
export default function Quick_view({
  show,
  handleClose,
  data,
  showname,
  productbuylist,
}) {
  const [minus, setminus] = useState(1);
  const numbers = () => {
    if (minus == 1) {
      setminus(1);
    } else {
      setminus(minus - 1);
    }
  };
  return (
    <div>
      <div
        className={
          show ? "quick-view d-flex model" : "quick-none d-flex model"
        }>
        <div
          style={{
            height: "100%",
            width: "100%",
            zIndex: "0",
            position: "absolute",
          }}
          onClick={handleClose}></div>
        <div
          className={
            show
              ? "quick-contain d-flex  model"
              : "quick-contain-none d-flex model"
          }>
          <div className="quick-img">
            <img
              src={`/images/${data.img}.webp`}
              alt="qwe"
              className="object-fit"
            />
          </div>
          <div className="quick-content">
            <div>
              <h2 className="quick-content-title">{data.name}</h2>
              <p
                className={
                  showname
                    ? "quick-content-name-little cursor model"
                    : "quick-content-name-little-hide model"
                }>
                {data.name}
              </p>
            </div>
            <div>
              <h2 className="quick-content-price">
                {data.price}
                {data.number?.toLocaleString()}
              </h2>
            </div>
            <div className="quick-content-name">
              <p>{data.name}</p>
            </div>
            <div className="quick-btn-count d-flex">
              <div>
                <Button
                  text={"افزودن به سبد خرید"}
                  extracss={"quick-content-btn cursor"}
                  action={(eve) => productbuylist(eve)}
                />
              </div>
              <div className="quick-content-count d-flex model">
                <p
                  onClick={() => setminus(minus + 1)}
                  className="quick-counter cursor">
                  +
                </p>
                <p>{minus}</p>
                <p onClick={() => numbers()} className="quick-counter cursor">
                  -
                </p>
              </div>
            </div>
          </div>
          <div className="close-btn d-flex" onClick={handleClose}>
            <AiOutlineClose className="model quick-content-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
