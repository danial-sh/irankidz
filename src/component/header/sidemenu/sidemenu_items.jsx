import React, { useState } from "react";

export default function Sidemenu_items({
  data1,
  showmodal,
  showimg,
  img,
  color,
  handleitems,
  itemaction,
}) {
  return (
    <div
      className={showmodal ? "side-menu-items-show" : "side-menu-item-hiden "}>
      {data1.map((valid, i) => {
        return (
          <div key={i}>
            <div
              className={
                showmodal
                  ? "side-menu-item-content-show d-flex model "
                  : "side-menu-item-content-hiden d-flex model "
              }>
              <div className={color ? "lotus cursor" : "cursor"}>
                <p title={valid.text} className="model">
                  {valid.text}
                </p>
              </div>
              {valid.activeicon ? (
                <div
                  onClick={(event) => handleitems(event, valid, i)}
                  className={
                    valid.itemaction
                      ? "sidemenu-category-icon sidemenu-category-icon-action sidemneu-items-icon d-flex model cursor"
                      : " sidemenu-category-icon sidemneu-items-icon d-flex model cursor"
                  }>
                  <valid.icon className="model" />
                </div>
              ) : null}
            </div>
            {valid.activeicon ? (
              <div
                className={
                  valid.itemaction
                    ? "side-menu-items-list-show model"
                    : "side-menu-items-list-hide  model"
                }>
                {valid.itemslist.map((v, i) => {
                  return (
                    <div
                      className={
                        valid.itemaction
                          ? "d-flex addres-content-show model"
                          : "d-flex addres-content-hide model"
                      }
                      key={i}>
                      <p title={v.listtext} className="cursor">
                        {v.listtext}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
      {showimg ? (
        <div
          className={
            showmodal
              ? "sidem-menu-items-img model"
              : "side-menu-item-content-hiden model"
          }>
          <img src={img} alt="qwe" className="object-fit" />
        </div>
      ) : null}
    </div>
  );
}
