import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Swiper_prop({ data, view }) {
  return (
    <Swiper slidesPerView={view}>
      {data.map((v, i) => {
        return <SwiperSlide key={i}>{v.card}</SwiperSlide>;
      })}
    </Swiper>
  );
}
