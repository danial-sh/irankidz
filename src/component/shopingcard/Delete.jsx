import React from "react";
import style from "./Delete.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../button";
export default function Delete({
  delete_menu,
  accept_delete_product,
  close_menu,
}) {
  return (
    <div
      className={
        delete_menu
          ? `${style.delete_container} d-flex`
          : `${style.delete_container} ${style.delete_container_none} d-flex`
      }>
      <div
        className={style.delete_container_bg}
        onClick={() => close_menu()}></div>
      <div
        className={
          delete_menu
            ? `${style.Delete_content_active} d-flex model`
            : `${style.Delete_content_active} ${style.Delete_content_none} d-flex `
        }>
        <div
          className={`${style.close_menu} d-flex cursor`}
          onClick={() => close_menu()}>
          <AiOutlineClose />
        </div>
        <p className={style.delete_content_text}>
          آیا مطمئن هستید که می خواهید این مورد را از سبد خرید حذف کنید؟
        </p>
        <div className={`${style.accses} d-flex`}>
          <div className={style.succes_delete}>
            <Button
              action={() => accept_delete_product()}
              text={"بله"}
              extracss={`${style.accses_delete_butt} cursor ${style.center}`}
            />
          </div>
          <div
            className={`${style.accses_delete_butt} ${style.cancel_delete} cursor model d-flex ${style.center}`}
            onClick={() => close_menu()}>
            <p>خیر</p>
          </div>
        </div>
      </div>
    </div>
  );
}
