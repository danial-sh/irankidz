import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import Menumap from "./menu-map";
export default function Navbar() {
  const info = [
    {
      title: "دخترانه",
      text: "دخترانه",
      dropdown: [
        {
          bartitle1: "پوشاک",
          bartitle2: "پوشاک",
          content: [
            { baritemtitle: "بلوز و شلوار ", baritemtext: "بلوز و شلوار " },
            { baritemtitle: "پولیور ", baritemtext: "پولیور " },
            { baritemtitle: "سرهمی ", baritemtext: "سرهمی " },
            { baritemtitle: "پیراهن ", baritemtext: "پیراهن " },
          ],
        },
        {
          bartitle1: "اسباب بازی",
          bartitle2: "اسباب بازی",
          content: [
            { baritemtitle: "عروسک", baritemtext: "عروسک" },
            { baritemtitle: "ست ها", baritemtext: "ست ها" },
          ],
        },
        {
          bartitle1: "شلوار",
          bartitle2: "شلوار",
          content: [
            { baritemtitle: "شلوار جین ", baritemtext: "شلوار جین " },
            { baritemtitle: "شلوار خانگی ", baritemtext: "شلوار خانگی " },
            { baritemtitle: "شلوار پیشبندی ", baritemtext: "شلوار پیشبندی " },
          ],
        },
        {
          bartitle1: "کفش",
          bartitle2: "کفش",
          content: [
            { baritemtitle: "کفش پیاده روی ", baritemtext: "کفش پیاده روی " },
          ],
        },
      ],
      img: "girl.webp",
    },
    {
      title: "پسرانه",
      text: "پسرانه",
      dropdown: [
        {
          bartitle1: "شلوار",
          bartitle2: "شلوار",
          content: [
            { baritemtitle: "شلوار جین ", baritemtext: "شلوار جین " },
            { baritemtitle: "شلوار پیشبندی ", baritemtext: "شلوار پیشبندی " },
            { baritemtitle: "شلوار خانگی ", baritemtext: "شلوار خانگی " },
          ],
        },
        {
          bartitle1: "کفش",
          bartitle2: "کفش",
          content: [
            { baritemtitle: "کفش کتونی ", baritemtext: "کفش کتونی " },
            { baritemtitle: "کفش پیاده روی ", baritemtext: "کفش پیاده روی " },
          ],
        },
        {
          bartitle1: "پوشاک",
          bartitle2: "پوشاک",
          content: [
            { baritemtitle: "سرهمی ", baritemtext: "سرهمی " },
            { baritemtitle: "پولیور ", baritemtext: "پولیور " },
            { baritemtitle: "مایو ", baritemtext: "مایو " },
            { baritemtitle: "بلوز ", baritemtext: "بلوز " },
            { baritemtitle: "پیراهن مجلسی", baritemtext: "پیراهن مجلسی" },
            { baritemtitle: "تیشرت ", baritemtext: "تیشرت " },
          ],
        },
        {
          bartitle1: "اسباب‌بازی",
          bartitle2: "اسباب‌بازی",
          content: [
            {
              baritemtitle: "تفنگ و لوازم جنگی",
              baritemtext: "تفنگ و لوازم جنگی",
            },
            { baritemtitle: "ساختنی", baritemtext: "ساختنی" },
            {
              baritemtitle: "ماشین، هواپیما و قطار",
              baritemtext: "ماشین، هواپیما و قطار",
            },
          ],
        },
      ],
      img: "boy.webp",
    },
    {
      title: "اسباب‌بازی و سرگرمی",
      text: "اسباب‌بازی و سرگرمی",
      dropdown: [
        {
          bartitle1: "ماشین، هواپیما و قطار",
          bartitle2: "ماشین، هواپیما و قطار",
          content: [
            { baritemtitle: "ماشین ساده", baritemtext: "ماشین ساده" },
            { baritemtitle: "هواپیما", baritemtext: "هواپیما" },
            { baritemtitle: "کوادکوپتر", baritemtext: "کوادکوپتر" },
            { baritemtitle: "ماشین کنترلی", baritemtext: "ماشین کنترلی" },
          ],
        },
        {
          bartitle1: "عروسک",
          bartitle2: "عروسک",
          content: [{ baritemtitle: "فیگور", baritemtext: "فیگور" }],
        },
      ],
      img: "toy.webp",
    },
    {
      title: "ماشین، هواپیما، قطار، قایق",
      text: "ماشین، هواپیما، قطار، قایق",
      dropdown: [
        {
          content: [
            { baritemtitle: "ماشین ساده", baritemtext: "ماشین ساده" },
            { baritemtitle: "ماشین کنترلی", baritemtext: "ماشین کنترلی" },
            { baritemtitle: "هواپیما", baritemtext: "هواپیما" },
            { baritemtitle: "کوادکوپتر", baritemtext: "کوادکوپتر" },
          ],
        },
      ],
      myclass: "diff",
    },
    {
      title: "کفش",
      text: "کفش",
      dropdown: [
        {
          content: [
            { baritemtitle: "کفش پیاده روی", baritemtext: "کفش پیاده روی" },
            { baritemtitle: "کفش ورزشی", baritemtext: "کفش ورزشی" },
          ],
        },
      ],
      myclass: "diff",
    },
    {
      title: "کیف و کوله پشتی",
      text: "کیف و کوله پشتی",
      dropdown: [
        { content: [{ baritemtitle: "کوله پشتی", baritemtext: "کوله پشتی" }] },
      ],
      myclass:"diff"
    },
    {
      title: "دیجیتال",
      text: "دیجیتال",
      dropdown: [
        {
          content: [
            { baritemtitle: "تبلت", baritemtext: "تبلت" },
            { baritemtitle: "بازی های کنسول خانگی", baritemtext: "بازی های کنسول خانگی" },
          ],
          myclass:"diff"
        },
      ],
    },
  ];
  const nvbaritems = [
    {
      title: "پوشاک",
      item: [
        { text: "بلوز و شلوار ", itemtitle: "بلوز و شلوار " },
        { text: "پولیور ", itemtitle: "پولیور " },
        { text: "سرهمی ", itemtitle: "سرهمی " },
        { text: "پیراهن ", itemtitle: "پیراهن " },
      ],
    },
    {
      title: "اسباب بازی",
      item: [
        { text: "عروسک", itemtitle: "عروسک" },
        { text: "ست ها", itemtitle: "ست ها" },
      ],
    },
    {
      title: "شلوار",
      item: [
        { text: "شلوار جین ", itemtitle: "شلوار جین " },
        { text: "شلوار خانگی ", itemtitle: "شلوار خانگی " },
        { text: "شلوار پیشبندی ", itemtitle: "شلوار پیشبندی " },
      ],
    },
    {
      titl: "گفش",
      item: [{ text: "کفش پیاده روی ", itemtitle: "" }],
    },
  ];
  return (
    <div className="navbar-menu margin-couple d-flex">
      <Menumap data={info} />
    </div>
  );
}
