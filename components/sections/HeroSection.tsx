"use client";

import Image from "next/image";
import Slider from "@/components/sliders/Slider";
import { SwiperSlide } from "swiper/react";
import { HERO_DATA } from "@/lib/data";
import { Button } from "../ui/Button";

export default function HeroSection() {
  return (
    <Slider
      swiperProps={{
        navigation: false,
        spaceBetween: 15,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        breakpoints: {
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1.09 },
        },
      }}
    >
      {HERO_DATA.map((item, index) => (
        <SwiperSlide key={index} className="">
          <section className="grid lg:grid-cols-2 gap-1 items-center  bg-[#E7FAFE] md:bg-transparent rounded-[40px] overflow-hidden mt-10 mx-2  ">
            {/* Left Side */}
            <div className="flex-1 p-6 lg:pl-18 lg:py-12 lg:pr-3 bg-[#E7FAFE] h-full">
              <div className="flex flex-col h-full justify-between ">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center bg-white px-6 py-3 rounded-full mb-6 shadow-sm ">
                    <Image
                      src="/images/hot-recipes.svg"
                      alt="Hot Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span className="text-sm font-semibold text-black">
                      {item.tag}
                    </span>
                  </div>

                  <h1 className="text-3xl  md:text-5xl lg:text-[64px] font-semibold text-black mb-4">
                    {item.title}
                  </h1>
                  <p className="text-black/60 text-sm sm:text-base mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center bg-black/5 px-4 py-2 rounded-full text-sm text-black/60 min-w-[120px] text-center justify-center">
                      <Image
                        src="/images/Timer.svg"
                        alt="Time Icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center bg-black/5 px-4 py-2 rounded-full text-sm text-black/60 min-w-[120px] text-center justify-center">
                      <Image
                        src="/images/ForkKnife.svg"
                        alt="Chicken Icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 sm:flex-row items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={item.author.image}
                      alt={item.author.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {item.author.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.author.date}
                      </p>
                    </div>
                  </div>

                  <Button variant="default"  size="default">
                    View Recipes
                    <span className="cursor-pointer">
                      <Image src="/images/play.svg" alt="play" width={20} height={20}/>
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="relative flex-1 bg-white hidden lg:block">
              <div className="absolute top-10 -left-4 bg-black text-white  rounded-full z-10 text-sm font-medium tracking-wide">
                <Image src={item.badge} width={150} height={150} alt="" />
              </div>

              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={640}
                className="object-cover w-full h-full max-h-[640px]"
              />
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Slider>
  );
}
