"use client";

import { Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactNode } from "react";

type SliderProps = {
  children: ReactNode;
  swiperProps?: object;
};

export default function Slider({ children, swiperProps = {} }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      pagination={false}
      autoplay={{ 
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      speed={800}
      effect="fade"
      fadeEffect={{
        crossFade: true
      }}
      navigation={false}
      {...swiperProps}
      className="w-full"
    >
      {children}
    </Swiper>
  );
}
