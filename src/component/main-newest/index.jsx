import React, { useState } from "react";
import Items from "./items";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineEye } from "react-icons/ai";
import Quick_view from "../quick_view";
export default function Newestirankidz({ productbuylist }) {
  const [showModal, setShowModal] = useState(false);
  const [myData, setMyData] = useState({});
  const handleAction = (item, index, v, i) => {
    setShowModal(true);
    setMyData(v);
  };
  const woody = [
    {
      firstclass: "woody",
      img: "woody",
      name: "عروسک دیزنی وودی مدل Woody Talking اورجینال",
      price: "تومان",
      number: 2400000,
      secondclass: "woody-button",
      model: "مدل",
      fourthclass: "woody-img",
      cimg: "woody-img",
      butt: "هم اکنون خریداری کنید",
    },
  ];
  const info = [
    {
      firstclass: "newestitem",
      img: "girlshoe",
      price: "تومان",
      number: 2500000,
      cimg: "cimg",
      name: "کفش صورتی دخترانه",
      id: "index-1",
      cname: "cname",
      settingaction: false,
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: " افزودن به سبد خرید ",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "newestitem",
      img: "boyshoe",
      price: "تومان",
      number: 2300000,
      cimg: "cimg",
      id: "index-2",
      settingaction: false,
      name: "کفش کتونی پسرانه مدل پوما",
      cname: "cname",
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "newestitem",
      img: "boyshirt",
      price: " تومان",
      number: 1500000,
      settingaction: false,
      cimg: "cimg",
      id: "index-3",
      name: "مایو استخری پسرانه ـ برند کارترز",
      cname: "cname",
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "newestitem",
      img: "boy-jacket",
      price: " تومان",
      number: 3300000,
      settingaction: false,
      cimg: "cimg",
      name: "کاپشن مدل بارونی پسرانه",
      id: "index-4",
      cname: "cname",
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "newestitem",
      img: "girl-jacket",
      price: " تومان",
      number: 3350000,
      id: "index-5",
      cimg: "cimg",
      settingaction: false,
      name: "کاپشن مدل بارونی دخترانه",
      cname: "cname",
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "newestitem",
      img: "girljacket",
      price: " تومان",
      number: 3350000,
      id: "index-6",
      settingaction: false,
      cimg: "cimg",
      name: "کاپشن کلاه دار بچه گانه",
      cname: "cname",
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "newestitem",
      img: "boypants",
      price: " تومان",
      number: 1200000,
      id: "index-7",
      settingaction: false,
      cimg: "cimg",
      name: "شلوار مخمل کبریتی بچه گانه زارا",
      cname: "cname",
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "newestitem",
      img: "girlshirt",
      price: " تومان",
      number: 1600000,
      settingaction: false,
      cimg: "cimg",
      id: "index-8",
      name: "بلوز آستین بلند طوسی دخترانه ",
      cname: "cname",
      cprice: "cprice",
      secondclass: "newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
  ];
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="margin-couple newest">
      <Quick_view
        show={showModal}
        data={myData}
        handleClose={handleClose}
        productbuylist={(eve) => productbuylist(eve, myData)}
      />
      <div className="news-title">
        <h2> جدیدترین ایران کیدز</h2>
      </div>
      <div className="d-flex newest-items-contain">
        <Items data={woody} />
        <div className="newest-items ">
          <div className="newest-overflow d-flex">
            <Items
              data={info}
              showname={true}
              handleAction={handleAction}
              productbuylist={(event, v, i) => productbuylist(event, v, i)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
