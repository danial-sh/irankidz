import { React, useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../button";
import Adress from "./footer-address";
import Combine from "./links/combine";
export default function Footer() {
  const info = [
    {
      icon: HiOutlineLocationMarker,
      text: "جنت آباد – مجتمع اداری تجاری سمرقند – طبقه ۵ – واحد ۵۰۶",
    },
    { icon: AiOutlinePhone, text: "۰۲۱-۴۶۱۳۵۵۱۷" },
    { icon: AiOutlineMail, text: "INFO@IRANKIDZ.COM" },
  ];
  const [mudale1, setmudale1] = useState(false);
  const [mudale2, setmudale2] = useState(false);
  const action1 = () => {
    if (mudale1 == false) {
      setmudale1(true);
    } else {
      setmudale1(false);
    }
  };
  const action2 = () => {
    if (mudale2 == false) {
      setmudale2(true);
    } else {
      setmudale2(false);
    }
  };
  const about = [
    {
      title: "صفحات دیگر",
      action: action1,
      mudale: mudale1,
      iconact: mudale1,
      links: [
        { text: "برند ها" },
        { text: "وبلاگ" },
        { text: "با ما تماس بگیرید" },
      ],
    },
    {
      title: "لینک های سریع",
      action: action2,
      mudale: mudale2,
      iconact: mudale2,
      links: [
        { text: "ورود به حساب کاربری" },
        { text: "حساب کاربری ایجاد کنید" },
        { text: "مقایسه محصولات" },
      ],
    },
  ];

  return (
    <div className="margin-couple footer d-flex">
      <div className="adress-message d-flex">
        <div className="adress">
          <div className="addres-images d-flex ">
            <div className="header-icon cursor">
              <img
                src="images/irankidz_5.03104838.png"
                alt="qe"
                className="object-fit"
              />
            </div>
            <div className="adress-logo cursor">
              <img src="images/logo.png" alt="qwe" className="object-fit" />
            </div>
          </div>
          <div className="adress-content ">
            <Adress data={info} />
          </div>
        </div>
        <div className="message">
          <input
            type="email"
            className="enter-email"
            placeholder="ایمیل خود را وارد کنید"
          />
          <textarea
            className="enter-message"
            placeholder=" پیام خود را بنویسید "></textarea>
          <Button text={"ارسال پیام"} extracss={"message-submit"} />
        </div>
      </div>
      <div className="links-pages d-flex ">
        <Combine data={about} action1={action1} mudale={mudale1} />
      </div>
    </div>
  );
}
