import { React, useState } from "react";
import Combine from "./combine";
import Setstartcontain from "./setstartcontain";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineEye } from "react-icons/ai";
import Items from "../main-newest/items";
import Quick_view from "../quick_view";
export default function Clothsets({ productbuylist }) {
  const info1 = [{ title: "پوشاک", img: "1", text: "مشاهده همه" }];
  const info2 = [
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-1",
      price: "تومان",
      id: "index-17",
      number: 2500000,
      cimg: "cloth-img cimg",
      name: "پیراهن و شلوار پسرانه ",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-2",
      price: "تومان",
      id: "index-18",
      number: 2900000,
      cimg: "cloth-img cimg",
      name: "پیراهن و شلوار کارگو پسرانه",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-3",
      price: "تومان",
      number: 2500000,
      id: "index-19",
      cimg: "cloth-img cimg",
      name: "پیراهن و شلوار به همراه جلیقه پسرانه",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-4",
      price: "تومان",
      number: 2500000,
      id: "index-20",
      cimg: "cloth-img cimg",
      name: "ست پیراهن و شلوار پسرانه",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-5",
      price: "تومان",
      id: "index-21",
      number: 2200000,
      cimg: "cloth-img cimg",
      name: "لباس بتمن بهمراه ماسک و دستکش",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-6",
      price: "تومان",
      id: "index-22",
      number: 2200000,
      cimg: "cloth-img cimg",
      name: "لباس السا فروزن با تاج طلایی",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-7",
      price: "تومان",
      number: 2200000,
      id: "index-23",
      cimg: "cloth-img cimg",
      name: "لباس سوپرمن",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
    {
      firstclass: "cloth-items newestitem",
      img: "cloth-8",
      price: " تومان",
      id: "index-24",
      number: 2200000,
      cimg: "cloth-img cimg",
      name: "لباس گربه سیاه برند ایرانی",
      cname: "cname",
      cprice: "cprice",
      secondclass: "set-button newest-butt",
      butt: "افزودن به سبد خرید",
      drop: [
        { icon: <AiOutlineHeart />, text: "علاقه مندیها" },
        { icon: <AiOutlineRetweet />, text: "مقایسه کردن" },
        { icon: <AiOutlineEye />, text: "مشاهده سریع" },
      ],
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [myData, setMyData] = useState({});
  const handleaction = (item, index, v, i) => {
    setShowModal(true);
    setMyData(v);
  };
  const [showname, setshowname] = useState(true);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="margin-couple">
      <Quick_view
        data={myData}
        show={showModal}
        handleClose={handleClose}
        showname={() => setshowname(false)}
      />
      <div className="cloth-sets d-flex">
        <Combine data={info1} />
        <div className="cloth-container ">
          <div className="clothset-title d-flex"></div>
          <div className="d-flex toy-container">
            <Items
              data={info2}
              handleAction={handleaction}
              productbuylist={(event, v, i) => productbuylist(event, v, i)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
