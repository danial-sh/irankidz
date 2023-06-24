import { React, useState } from "react";
import Items from "../main-newest/items";
import Combine from "../main-sets-clothes/combine";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineEye } from "react-icons/ai";
import Quick_view from "../quick_view";
export default function Toysset({ productbuylist }) {
  const info1 = [{ title: " ست ها", img: "2", text: "مشاهده همه" }];
  const info2 = [
    {
      firstclass: "cloth-items newestitem",
      img: "toy-1",
      price: " تومان",
      number: 370000,
      cimg: "cloth-img cimg",
      settingaction: false,
      id: "index-30",
      name: "سبد میکس ساندویچ اسلایسی",
      title: "سبد میکس ساندویچ اسلایسی",
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
      img: "toy-2",
      price: " تومان ",
      number: 370000,
      settingaction: false,
      cimg: "cloth-img cimg",
      id: "index-31",
      name: "ست سبد سبزیجات اسلایسی ",
      title: "ست سبد سبزیجات اسلایسی ",
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
      img: "toy-3",
      price: " تومان",
      settingaction: false,
      number: 370000,
      cimg: "cloth-img cimg",
      name: "ست پیتزا اسلایسی ",
      id: "index-32",
      title: "ست پیتزا اسلایسی ",
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
      img: "toy-4",
      price: " تومان",
      settingaction: false,
      number: 370000,
      cimg: "cloth-img cimg",
      id: "index-33",
      name: "سبد میوه های تابستانی اسلایسی ",
      title: "سبد میوه های تابستانی اسلایسی ",
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
      img: "toy-5",
      price: " تومان",
      settingaction: false,
      number: 800000,
      cimg: "cloth-img cimg",
      id: "index-34",
      name: " سبد میوه های تابستانی اسلایسی ",
      title: "سبد میوه های تابستانی اسلایسی ",
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
  const settoys = [
    {
      firstclass: "cloth-items newestitem",
      img: "guardian",
      price: " تومان",
      number: 520000,
      cimg: "cloth-img cimg",
      name: "ست سگ های نگهبان 7 عددی",
      title: "ست سگ های نگهبان 7 عددی",
      settingaction: false,
      id: "index-35",
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
      img: "gurdian",
      price: " تومان",
      number: 670000,
      settingaction: false,
      cimg: "cloth-img cimg",
      id: "index-36",
      name: "ست سگ های نگهبان 9 عددی",
      title: "ست سگ های نگهبان 9 عددی",
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
  const [myobj, setmyobj] = useState(true);
  const handlechengedata = () => {
    setmyobj(false);
  };
  const handlechengedata2 = () => {
    setmyobj(true);
  };
  return (
    <div className="margin-couple">
      <Quick_view
        data={myData}
        handleClose={handleClose}
        show={showModal}
        showname={() => setshowname(false)}
      />
      <div className="cloth-sets d-flex">
        <Combine data={info1} />
        <div className="cloth-container ">
          <div className="clothset-title d-flex">
            <p
              className={
                myobj
                  ? "set-toy-butt model cursor"
                  : "set-food-butt model cursor"
              }
              onClick={handlechengedata}>
              <a>ست اسباب بازی</a>
            </p>
            <p
              className={
                myobj
                  ? "set-food-butt model cursor"
                  : "set-toy-butt model cursor"
              }
              onClick={handlechengedata2}>
              <a>ست خوراکی</a>
            </p>
          </div>
          <div className="d-flex toy-container">
            <Items
              data={myobj ? info2 : settoys}
              handleAction={handleaction}
              productbuylist={(event, v, i) => {
                productbuylist(event, v, i);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
