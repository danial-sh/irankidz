import { React, useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Sidemenucategory from "./sidemenucategory";
export default function Sidemenu({
  show,
  handleclose,
  chengebar,
  handlebarchenge,
  handleacountbar,
  activeicon,
  activemodal,
}) {
  const acount = [
    { text: "ورود به حساب" },
    { text: "یک حساب کاربری ایجاد کنید" },
  ];
  const [img, setimg] = useState(false);
  const information = [
    {
      text: "دخترانه",
      icon: AiOutlineDown,
      title: "دخترانه",
      img: "/images/girl.webp",
      open: false,
      exist: true,
      showimg: true,
      items: [
        {
          text: "پوشاک",
          icon: AiOutlineDown,
          title: "پوشاک",
          activeicon: true,
          itemaction: false,
          itemslist: [
            { listtext: "بلوز و شلوار " },
            { listtext: "پولیور " },
            { listtext: "سرهمی " },
            { listtext: "پیراهن " },
          ],
        },
        {
          text: "اسباب بازی",
          icon: AiOutlineDown,
          title: "اسباب بازی",
          activeicon: true,
          itemaction: false,
          itemslist: [{ listtext: "عروسک" }, { listtext: "ست ها" }],
        },
        {
          text: "شلوار",
          icon: AiOutlineDown,
          title: "شلوار",
          activeicon: true,
          itemaction: false,
          itemslist: [
            { listtext: "شلوار جین " },
            { listtext: "شلوار خانگی " },
            { listtext: "شلوار پیشبندی " },
          ],
        },
        {
          text: "کفش",
          icon: AiOutlineDown,
          itemaction: false,
          title: "کفش",
          activeicon: true,
          itemslist: [{ listtext: "کفش پیاده روی " }],
        },
      ],
    },
    {
      text: "پسرانه",
      icon: AiOutlineDown,
      title: "پسرانه",
      open: false,
      img: "/images/boy.webp",
      showimg: true,
      items: [
        {
          text: "شلوار",
          icon: AiOutlineDown,
          title: "شلوار",
          itemaction: false,
          activeicon: true,
          itemslist: [
            { listtext: "شلوار جین " },
            { listtext: "شلوار پیشبندی " },
            { listtext: "شلوار خانگی " },
          ],
        },
        {
          text: "کفش",
          icon: AiOutlineDown,
          title: "کفش",
          activeicon: true,
          itemaction: false,
          itemslist: [
            { listtext: "کفش کتونی " },
            { listtext: "کفش پیاده روی " },
          ],
        },
        {
          text: "پوشاک",
          icon: AiOutlineDown,
          title: "پوشاک",
          itemaction: false,
          activeicon: true,
          itemslist: [
            { listtext: "سرهمی " },
            { listtext: "پولیور " },
            { listtext: "مایو " },
            { listtext: "بلوز " },
            { listtext: "پیراهن مجلسی" },
            { listtext: "تیشرت " },
          ],
        },
        {
          text: "اسباب‌بازی",
          icon: AiOutlineDown,
          title: "اسباب‌بازی",
          activeicon: true,
          itemaction: false,
          itemslist: [
            { listtext: " تفنگ و لوازم جنگی" },
            { listtext: " ساختنی" },
            { listtext: " ماشین، هواپیما و قطار" },
          ],
        },
      ],
    },
    {
      text: "اسباب‌بازی و سرگرمی",
      icon: AiOutlineDown,
      title: "اسباب‌بازی و سرگرمی",
      open: false,
      img: "/images/toy.webp",
      showimg: true,
      items: [
        {
          text: "ماشین، هواپیما و قطار",
          exist: true,
          icon: AiOutlineDown,
          title: "ماشین، هواپیما و قطار",
          itemaction: false,
          activeicon: true,
          itemslist: [
            { listtext: "ماشین ساده" },
            { listtext: "هواپیما" },
            { listtext: "کوادکوپتر" },
            { listtext: "ماشین کنترلی" },
          ],
        },
        {
          text: "عروسک",
          icon: AiOutlineDown,
          title: "عروسک",
          itemaction: false,
          activeicon: true,
          itemslist: [{ listtext: "فیگور" }],
        },
      ],
    },
    {
      text: "ماشین، هواپیما، قطار، قایق",
      icon: AiOutlineDown,
      open: false,
      itemaction: false,
      items: [
        { text: "ماشین ساده" },
        { text: "ماشین کنترلی" },
        { text: "هواپیما" },
        { text: "کوادکوپتر" },
      ],
    },
    {
      text: "کفش",
      icon: AiOutlineDown,
      open: false,
      items: [{ text: "کفش پیاده روی" }, { text: "کفش ورزشی" }],
    },
    {
      text: "کیف و کوله پشتی",
      icon: AiOutlineDown,
      open: false,
      items: [{ text: "کوله پشتی" }],
    },
    {
      text: "دیجیتال",
      icon: AiOutlineDown,
      open: false,
      items: [{ text: "تبلت" }, { text: "بازی های کنسول خانگی" }],
    },
  ];
  const [data, setdata] = useState(information);
  const handleSelect = (event, index, value) => {
    setdata(
      data.map((v, i) => {
        if (value.open === false) {
          value.open = true;
        } else {
          value.open = false;
        }
        return v;
      })
    );
  };
  const handleitems = (event, v, i, value, index) => {
    setdata(
      data.map((item, itemnumber) => {
        if (v.itemaction == false) {
          v.itemaction = true;
        } else {
          v.itemaction = false;
        }
        return item;
      })
    );
  };
  return (
    <div
      className={show ? "quick-view d-flex model" : "quick-none d-flex model"}>
      <div
        style={{
          height: "100%",
          width: "100%",
          zIndex: "0",
          position: "absolute",
        }}
        onClick={handleclose}></div>
      <div
        className={
          show ? "irankids-sidemenu-show " : "irankids-sidemenu-hide "
        }>
        <div className="sidemenu-menus d-flex">
          <div
            className={
              chengebar
                ? "side-menu-title-deactive d-flex cursor model"
                : "side-menu-title-active d-flex cursor model"
            }
            onClick={handlebarchenge}>
            <p>منو ها</p>
          </div>
          <div
            className={
              chengebar
                ? "side-menu-title-active d-flex  cursor model"
                : "side-menu-title-deactive d-flex cursor model"
            }
            onClick={handleacountbar}>
            <p>حساب</p>
          </div>
        </div>
        <Sidemenucategory
          data={activemodal ? data : acount}
          handlebarchenge={handlebarchenge}
          activeicon={activeicon}
          update={activeicon}
          activemodal={activemodal}
          handleSelect={(event, index, value) =>
            handleSelect(event, index, value)
          }
          handleitems={(event, valid, i, value, index) =>
            handleitems(event, valid, i, value, index)
          }
        />
      </div>
    </div>
  );
}
