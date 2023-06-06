import React from "react";
import Categorydata from "./categorydata";
import { useEffect } from "react";
import Swiper_prop from "../../swiper";
export default function Categoryslider() {
  // const [me,setme]=useEffect(true);
  const info = [
    { card: <Categorydata data={{ name: "کیف", title: "کیف", img: "1" }} /> },
    { card: <Categorydata data={ { img: "2", name: "عروسک", title: "عروسک" }} /> },
    { card: <Categorydata data={ { img: "3", name: "مبارزه ای", title: "مبارزه ای" }} /> },
    {card:<Categorydata data={{ img: "4", name: "موزیکال", title: "موزکال" }}/>},
    {card:<Categorydata data={

      { img: "5", name: "ست ها", title: "ست ها" }
    }/>},
    {card:<Categorydata data={
      {
        img: "6",
        name: "ماشین، هواپیما، قطار، قایق",
        title: "ماشین، هواپیما، قطار، قایق",
      }
    }/>},
    {card:<Categorydata data={

      { img: "7", name: "ساختنی", title: "ساختنی" }
    }/>},
    {card:<Categorydata data={
      { img: "8", name: "متفرقه - پوشاک", title: "متفرقه - پوشاک" }
    }/>},
    {card:<Categorydata data={
      { img: "9", name: "کفش", title: "کفش" }
    }/>},
    {card:<Categorydata data={

      { img: "10", name: "دامن", title: "دامن" }
    }/>},
    {card:<Categorydata data={

      { img: "11", name: "شلوار", title: "شلوار" }
    }/>},
    {card:<Categorydata data={

      { img: "12", name: "پیراهن", title: "پیراهن" }
    }/>},
    {card:<Categorydata data={
      { img: "13", name: "تبلت", title: "تبلت" }
    }/>},
    {card:<Categorydata data={

      { img: "14", name: "متفرقه - اسباب بازی", title: "متفرقه - اسباب بازی" }
    }/>},
    {card:<Categorydata data={

      { img: "15", name: "کنسول بازی", title: "کنسول بازی" }
    }/>},
    {card:<Categorydata data={

      { img: "16", name: "لباس زیر", title: "لباس زیر" }
    }/>},
    {card:<Categorydata data={

      { img: "17", name: "هدفون، هدست، هندزفری", title: "هدفون، هدست، هندزفری" }
    }/>},
    {card:<Categorydata data={

      { img: "18", name: "موبایل", title: "موبایل" }
    }/>},
    {card:<Categorydata data={

      { img: "19", name: "بازی بادی", title: "بازی بادی" }
    }/>},
    {card:<Categorydata data={

      { img: "20", name: "آموزشی", title: "آموزشی" }
    }/>},
  ];
  return (
    <div className="category margin-couple d-flex">
      <div className="category-container d-flex">
        <Swiper_prop data={info} view={7}/>
      </div>
    </div>
  );
}
