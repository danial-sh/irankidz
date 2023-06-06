import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
export default function Categorydata({ data }) {
  return (
    // data.map((v, i) => {
    //   return (
    <div
      // key={i}
      className="category-slider d-flex model cursor"
      title={data.title}
    >
      <div className="category-img">
        <img src={`images/slider-${data.img}.webp`} alt="qwe" />
      </div>
      <div className="category-name">
        <p>{data.name}</p>
      </div>
    </div>

    // );
    // })
  );
}
