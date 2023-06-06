import { React, useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineFork } from "react-icons/ai";
import Signupmap from "./signupmap";
import Sidemenu from "./sidemenu/sidemenu";
export default function Header() {
  const info = [
    {
      icon: AiOutlineHeart,
      title: "لیست علاقه مندی ",
      alert: "لیست علاقه مندی ",
    },
    {
      icon: AiOutlineFork,
      title: "لیست مقایسه کردن",
      number: <div className="cart-number d-flex">0</div>,
      alert: "لیست مقایسه کردن",
    },
    {
      icon: RiShoppingBagLine,
      title: "سبد خرید شما",
      number: <div className="cart-number d-flex">0</div>,
      alert: "سبد خرید شما",
    },
  ];

  const [showmodal, setshowmodal] = useState(false);
  const [showbar, setshowbar] = useState(false);
  const [icon, seticon] = useState(true);
  const handleclose = () => {
    setshowmodal(false);
  };
  const handleshow = () => {
    setshowmodal(true);
  };
  const handlechengebar = () => {
    setshowbar(false);
    seticon(true);
  };
  const handleacountbar = () => {
    setshowbar(true);
    seticon(false);
  };
  return (
    <div className="header-meunu margin-couple d-flex">
      <div className="header-icon cursor">
        <img
          src="images/irankidz_5.03104838.png"
          alt="qwe"
          title="فروشگاه اینترنتی ایران کیدز"
        />
      </div>
      {/* <div className="search model">
        <input
          type="text"
          className="search-bar large"
          placeholder="جستوجو کنید..."
        />
        <AiOutlineSearch className="search-icon model cursor" />
      </div> */}
      <Signupmap data={info} handleshow={handleshow} />
      <Sidemenu
        handleclose={handleclose}
        show={showmodal}
        chengebar={showbar}
        handlebarchenge={handlechengebar}
        handleacountbar={handleacountbar}
        menuchenge={showbar}
        activemodal={icon}
        activeicon={icon}
      />
    </div>
  );
}
