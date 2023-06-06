import React from "react";
import Signupprop from "./signupprop";
import { AiOutlineSearch } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
export default function Signupmap({ data, handleshow, handleaction }) {
  return (
    <div className="header-signup d-flex">
      <div className="search model">
        <input
          type="text"
          className="search-bar large"
          placeholder="جستوجو کنید..."
        />
        <AiOutlineSearch className="search-icon model cursor" />
      </div>
      <div className="header-menu-option d-flex">
        <div className="login d-flex">
          <div className="cursor login-text model">
            <p title="ثبت نام">ثبت نام</p>
          </div>
          <div className="login-space"></div>
          <div className="cursor login-text model">
            <p title="ورود">ورود</p>
          </div>
        </div>

        {data?.map((v, i) => {
          return (
            <React.Fragment key={i}>
              <Signupprop
                title={v.title}
                Icon={v.icon}
                number={v.number}
                alert={v.alert}
                action={v.action}
                handleaction={(event) => handleaction(event, v, i)}
              />
            </React.Fragment>
          );
        })}
        <div className="irankidz-header-buy-cart cursor">
          <div className="cart-container">
            <GiShoppingBag className="cart-icon model cursor" />
            <div className="cart-number d-flex">0</div>
          </div>
        </div>
        <div className="login-space quick-content-name-little-hide"></div>
        <div className="menu-bar d-flex cursor" onClick={handleshow}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}
