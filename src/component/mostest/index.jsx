import { useState, React } from "react";
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineEye } from "react-icons/ai";
import Containcall from "./contain-call";
import Quick_view from "../quick_view";
export default function Most({ productbuylist }) {
  const info = [
    {
      title: "پربازدید ترین ها",
      contain: [
        {
          img: "gurdian",
          contain: "most-items-products",
          name: "ست سگ های نگهبان 9 عددی",
          title: "ست سگ های نگهبان 9 عددی",
          price: " تومان",
          id: "index-40",
          number: 670000,
          class: "most-butt product-butt",
          settingaction: false,
          delete_menu: false,
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
        {
          img: "woody",
          contain: "most-items-products",
          name: "عروسک دیزنی وودی مدل Woody Talking اورجینال",
          title: "عروسک دیزنی وودی مدل Woody Talking اورجینال",
          price: " تومان",
          settingaction: false,
          delete_menu: false,
          id: "index-41",
          number: 2400000,
          class: "most-butt product-butt",
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
        {
          img: "horse",
          contain: "most-items-products",
          name: "اسب بولسای داستان اسباب بازی ها پولیشی",
          title: "اسب بولسای داستان اسباب بازی ها پولیشی",
          price: " تومان",
          id: "index-42",
          settingaction: false,
          delete_menu: false,
          number: 1916000,
          class: "most-butt product-butt",
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
      ],
    },
    {
      title: "پرفروش ترین ها",
      contain: [
        {
          img: "cloth-3",
          contain: "most-items-products",
          name: "پیراهن و شلوار به همراه جلیقه پسرانه",
          title: "پیراهن و شلوار به همراه جلیقه پسرانه",
          price: " تومان",
          id: "index-43",
          settingaction: false,
          delete_menu: false,
          number: 2500000,
          class: "most-butt product-butt",
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
        {
          img: "cloth-4",
          contain: "most-items-products",
          name: "ست پیراهن و شلوار پسرانه",
          title: "ست پیراهن و شلوار پسرانه",
          price: " تومان",
          settingaction: false,
          delete_menu: false,
          id: "index-44",
          number: 2500000,
          class: "most-butt product-butt",
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
        {
          img: "farm",
          contain: "most-items-products",
          name: "لگو مزرعه قرمز 799 تکه کودک",
          title: "لگو مزرعه قرمز 799 تکه کودک",
          price: "تومان",
          number: 5200000,
          settingaction: false,
          delete_menu: false,
          id: "index-45",
          class: "most-butt product-butt",
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
      ],
    },
  ];
  const info2 = [
    {
      title: "محبوب ترین ها",
      contain: [
        {
          img: "cloth-3",
          contain: "most-items-products",
          name: "پیراهن و شلوار به همراه جلیقه پسرانه",
          title: "پیراهن و شلوار به همراه جلیقه پسرانه",
          price: " تومان",
          number: 2500000,
          id: "index-37",
          class: "most-butt product-butt",
          settingaction: false,
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
        {
          img: "cloth-4",
          contain: "most-items-products",
          name: "ست پیراهن و شلوار پسرانه",
          title: "ست پیراهن و شلوار پسرانه",
          price: " تومان",
          settingaction: false,
          number: 2500000,
          id: "index-38",
          class: "most-butt product-butt",
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
        {
          img: "farm",
          contain: "most-items-products",
          name: "لگو مزرعه قرمز 799 تکه کودک",
          title: "لگو مزرعه قرمز 799 تکه کودک",
          price: " تومان",
          id: "index-39",
          settingaction: false,
          number: 5200000,
          class: "most-butt product-butt",
          text: "افزودن به سبد خرید",
          dropdown: [
            { icon: AiOutlineHeart, text: "علاقه مندیها" },
            {
              icon: AiOutlineRetweet,
              text: "مقایسه کردن",
              extra: "border-couple",
            },
            { icon: AiOutlineEye, text: "مشاهده سریع" },
          ],
        },
      ],
    },
  ];
  const [mydata, setmydata] = useState({});
  const [showmodal, setshowmodal] = useState(false);
  const handleAction = (item, index, v, i, value, ind) => {
    setshowmodal(true);
    setmydata(v);
  };
  const handleclose = () => {
    setshowmodal(false);
  };

  return (
    <div className="margin-couple the-most d-flex">
      <Quick_view
        data={mydata}
        handleClose={handleclose}
        show={showmodal}
        showname={() => setmydata(false)}
      />
      <div className="most-first-contain d-flex">
        <Containcall
          data={info}
          handleAction={handleAction}
          productbuylist={(event, v, i, value, ind) =>
            productbuylist(event, v, i, value, ind)
          }
        />
      </div>
      <div className="most-second-contain d-flex">
        <Containcall
          data={info2}
          handleAction={handleAction}
          productbuylist={(event, v, i, value, ind) =>
            productbuylist(event, v, i, value, ind)
          }
        />
        <div className="the-most-img">
          <div className="border-1"></div>
          <div className="border-2"></div>
          <div className="most-img">
            <img
              src="images/irankidz-most.webp"
              alt="qwe"
              className="object-fit"
            />
          </div>
          <div className="border-3"></div>
          <div className="border-4"></div>
        </div>
      </div>
    </div>
  );
}
