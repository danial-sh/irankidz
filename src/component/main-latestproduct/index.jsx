import { React, useState } from "react";
import Combine from "./combine";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineEye } from "react-icons/ai";
import Quick_view from "../quick_view";
export default function Latestproducts({ productbuylist }) {
  const info = [
    {
      img: "product-1",
      name: "سرهمی نوزادی پاپوشدار برند کارترز",
      title: "سرهمی نوزادی پاپوشدار برند کارترز",
      price: " تومان",
      number: 1675000,
      class: "product-butt",
      id: "index-9",
      text: "افزودن به سبد خرید",
      extra: "",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-2",
      name: "ست سرهمی نوزادی سه تکه",
      title: "ست سرهمی نوزادی سه تکه",
      price: " تومان",
      id: "index-2",
      number: 2900000,
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-3",
      name: "کفش دخترانه قرمز برند پوما",
      title: "کفش دخترانه قرمز برند پوما",
      price: " تومان",
      id: "index-10",
      number: 4500000,
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-4",
      name: "کفش کتونی مدل پوما",
      title: "کفش کتونی مدل پوما",
      price: " تومان",
      number: 2700000,
      id: "index-11",
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-5",
      name: "پیراهن مجلسی جین پسرانه",
      title: "پیراهن مجلسی جین پسرانه",
      price: " تومان",
      id: "index-12",
      number: 1900000,
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-6",
      name: "بلوز مجلسی دخترانه",
      title: "بلوز مجلسی دخترانه",
      price: " تومان",
      id: "index-13",
      number: 2500000,
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-7",
      name: "شلوار جین دمپا گشاد دخترانه برند زارا",
      title: "شلوار جین دمپا گشاد دخترانه برند زارا",
      price: " تومان",
      number: 2100000,
      id: "index-14",
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-8",
      name: "شلوار جین دمپا گشاد برشدار دخترانه",
      title: "شلوار جین دمپا گشاد برشدار دخترانه",
      price: " تومان",
      id: "index-15",
      number: 2100000,
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
    {
      img: "product-9",
      name: "سارافون جین پیشبندی مدل دامن زارا",
      title: "سارافون جین پیشبندی مدل دامن زارا",
      price: " تومان",
      number: 2100000,
      id: "index-16",
      class: "product-butt",
      text: "افزودن به سبد خرید",
      dropdown: [
        { icon: AiOutlineHeart, text: "علاقه مندیها" },
        { icon: AiOutlineRetweet, text: "مقایسه کردن", extra: "border-couple" },
        { icon: AiOutlineEye, text: "مشاهده سریع" },
      ],
    },
  ];
  const [showmodal, setshowmodal] = useState(false);
  const [mydata, setmydata] = useState({});
  const handleAction = (item, index, v, i) => {
    setmydata(v);
    setshowmodal(true);
  };
  const handeclose = () => {
    setshowmodal(false);
  };
  return (
    <div className="latest-product-container">
      <Quick_view
        data={mydata}
        show={showmodal}
        handleClose={handeclose}
        showname={true}
      />
      <div className="margin-couple ">
        <div className="latest-product-head d-flex">
          <h2> جدیدترین محصولات </h2>
          <p className="cursor">مشاهده همه</p>
        </div>
        <div className="latest-product">
          <div className="newest-overflow d-flex">
            <Combine
              data={info}
              handleAction={handleAction}
              productbuylist={(event, v, i) => productbuylist(event, v, i)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
