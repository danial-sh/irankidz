import React from "react";
import { AiOutlineSetting, AiOutlineClose } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import Button from "../button";
export default function Shopingcard({
  data,
  activated,
  exsist,
  price_count,
  productaction,
  product_count,
  close,
  setting_active,
}) {
  return (
    <div
      className={
        activated
          ? "shoping-card-show d-flex model"
          : "shoping-card-hiden d-flex model"
      }>
      <div
        className="close-card d-flex model cursor"
        onClick={(event) => close(event)}>
        <AiOutlineClose />
      </div>
      {exsist ? (
        <div className="d-flex exist-product">
          <div className="shoping-card-count-price d-flex">
            <div className="d-flex">
              <p>جمع محصولات :</p>
              <p>{price_count} تومان</p>
            </div>
            <Button text={"ادامه دهید"} extracss={"shopingcard-butt cursor"} />
          </div>
          <div className="shoping-card-products d-flex">
            {data.map((v, i) => {
              return (
                <div
                  className="shoping-cards d-flex model"
                  style={
                    v.settingaction ? { width: "200px" } : { width: "100px" }
                  }
                  key={i}>
                  <img
                    src={`/images/${v.img}.webp`}
                    alt="qew"
                    className="object-fit"
                  />
                  <div
                    className="product-setting d-flex cursor model"
                    onClick={(event) => {
                      productaction(event, v, i);
                    }}>
                    {v.settingaction ? (
                      <AiOutlineClose />
                    ) : (
                      <AiOutlineSetting />
                    )}
                  </div>
                  <div className="card-count-product d-flex">
                    {product_count}
                  </div>
                  <div
                    className={"product-setting-option-active d-flex model"}
                    style={
                      v.settingaction
                        ? { right: "47%", zIndex: -1 }
                        : { right: "0", zIndex: -1 }
                    }>
                    <input
                      type="text"
                      name="qe"
                      id="ox"
                      defaultValue={product_count}
                    />
                    <div className="product-setting-remove-and-view d-flex">
                      <div className="product-setting-view">
                        <AiOutlineSetting />
                      </div>
                      <div className="product-setting-remove">
                        <BiTrashAlt />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="empty-card d-flex">
          <p>در کارت خرید شما گزینه ای وجود ندارد.</p>
        </div>
      )}
    </div>
  );
}
