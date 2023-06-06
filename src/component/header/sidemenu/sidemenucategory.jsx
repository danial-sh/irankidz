import { React, useState } from "react";
import Sidemenu_items from "./sidemenu_items";
import { AiOutlineDown } from "react-icons/ai";
export default function Sidemenucategory({
  data,
  update,
  activeicon,
  handleitems,
  handleSelect,
}) {
  return (
    <div>
      {data.map((value, index) => {
        return (
          <div className="sidemenu-category  model " key={index}>
            <div
              className="d-flex side-menu-category-title cursor"
              onClick={(event) => handleSelect(event, index, value)}>
              <div className={value.open ? "lotus" : ""}>
                <p className="model" title={value.text}>
                  {value.text}
                </p>
              </div>
              {activeicon ? (
                <div
                  className={
                    value.open
                      ? "sidemenu-category-icon sidemenu-category-icon-action d-flex model"
                      : " sidemenu-category-icon  d-flex model"
                  }>
                  <value.icon className="model" />
                </div>
              ) : null}
            </div>
            {update ? (
              <Sidemenu_items
                data1={value.items}
                img={value.img}
                showimg={value.showimg}
                showmodal={value.open}
                exist={value.exist}
                handleitems={(event, valid, i, value, index) =>
                  handleitems(event, valid, i, value, index)
                }
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
