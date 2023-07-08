import { React, useState } from "react";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineEye } from "react-icons/ai";
import Combine from "../main-sets-clothes/combine";
import Items from "../main-newest/items";
import Quick_view from "../quick_view";
export default function Games({ productbuylist }) {
  const info1 = [{ title: " کنسول بازی", img: "3", text: "مشاهده همه" }];
  const info2 = [
    {
      firstclass: "cloth-items newestitem",
      img: "games-1",
      price: "تومان",
      number: 1500000,
      cimg: "cloth-img cimg",
      name: "بازی Resident Evil 8 : Village مخصوص PS5",
      settingaction: false,
      delete_menu: false,
      cname: "cname",
      id: "index-25",
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
      img: "games-2",
      price: "تومان",
      number: 1500000,
      cimg: "cloth-img cimg",
      settingaction: false,
      delete_menu: false,
      name: "بازی Horizon Forbidden West مخصوص PS5",
      cname: "cname",
      cprice: "cprice",
      id: "index-26",
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
      img: "games-3",
      price: " تومان",
      number: 2292000,
      cimg: "cloth-img cimg",
      settingaction: false,
      delete_menu: false,
      name: "بازی فیفا 23 مخصوص PS5",
      cname: "cname",
      id: "index-27",
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
      img: "games-4",
      price: " تومان",
      number: 1740000,
      settingaction: false,
      delete_menu: false,
      id: "index-28",
      cimg: "cloth-img cimg",
      name: "بازی Call of Duty: Vanguard مخصوص PS5",
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
      img: "games-5",
      price: " تومان",
      number: 1675000,
      cimg: "cloth-img cimg ",
      settingaction: false,
      delete_menu: false,
      id: "index-29",
      name: "بازی Stray مخصوص PS5",
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
  const [mydata, setMyData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleaction = (item, index, v, i) => {
    let num = new Number(v.number);
    setMyData(v);
    setShowModal(true);
  };
  const handleclose = () => {
    setShowModal(false);
  };
  const [active, setactive] = useState(true);
  return (
    <div className="margin-couple">
      <Quick_view
        data={mydata}
        handleClose={handleclose}
        showname={() => setactive(false)}
        show={showModal}
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
