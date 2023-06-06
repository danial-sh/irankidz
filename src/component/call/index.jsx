import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import Numbers from "./numbers";
export default function Call() {
  const info = [
    { number: "۰۹۹۰۶۸۰۰۰۴۸" },
    { number: "۰۲۱-۴۶۱۳۵۵۱۷", number2: "۰۹۹۰۶۸۰۰۰۴۸" },
  ];
  return (
    <div className="d-flex call">
      <div className="phone-adress d-flex">
        <div className="phone-adres-content d-flex">
          <Numbers data={info} />
        </div>
      </div>
      <div className="about d-flex">
        <div className="about-content  d-flex">
          <p>
            نوآوری ، خلاقیت ، کیفیت عالی و قیمتی باورنکردنی را تنها با ما و
            مجموعه ما تجربه کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
