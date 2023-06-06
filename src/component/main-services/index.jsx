import React from "react";
import Servicesmap from "./servicesmap";

export default function Services() {
  const info = [
    {
      img: "1",
      title: "حمل نقل رایگان",
      text: "حمل رایگان در تمام سفارشات",
      servclass: "service-img",
    },
    {
      img: "2",
      title: "تضمین بازگشت وجه",
      text: "برگشت وجه در صورت معیوب بودن کالا",
      servclass: "",
    },
    { img: "3", title: "ضمانت", text: "ضمانت اصل بودن کالا", servclass: "" },
  ];
  return (
    <div className="margin-couple d-flex services">
      {/* <div className='services-contain d-flex'>
            <div className='service-contain-img'>
                <img src="images/service-1.webp" alt="qwe" />
            </div>
            <div>
                <h3>حمل نقل رایگان</h3>
                <p>حمل رایگان در تمام سفارشات</p>
            </div>
        </div> */}
      <Servicesmap data={info} />
    </div>
  );
}
