"use client";

import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@/components/ui/button";

import ObstacleCard from "./obstacle-card";
import obstacles from "./obstacles.data";

import "swiper/css";

const ObstaclesSwiper = () => {
  return (
    <div className="relative mx-auto mt-9 w-full max-w-7xl overflow-hidden pr-2 lg:mt-5 lg:px-12">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".obstacles-swiper-prev",
          nextEl: ".obstacles-swiper-next",
        }}
        loop={false}
        rewind
        centeredSlides={false}
        slidesPerView={1.15}
        spaceBetween={16}
        breakpoints={{
          480: {
            slidesPerView: 1.35,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="obstacles-swiper overflow-hidden!"
      >
        {obstacles.map((obstacle) => (
          <SwiperSlide key={obstacle.title} className="h-auto">
            <ObstacleCard {...obstacle} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="ghost"
        size="icon"
        aria-label="اسلاید قبلی"
        className="obstacles-swiper-next absolute left-8 top-1/2 z-10 hidden size-8 -translate-y-1/2 rounded-lg lg:flex"
      >
        <ArrowLeft2 aria-hidden="true" size={16} color="currentColor" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        aria-label="اسلاید بعدی"
        className="obstacles-swiper-prev absolute right-8 top-1/2 z-10 hidden size-8 -translate-y-1/2 rounded-lg  lg:flex"
      >
        <ArrowRight2 aria-hidden="true" size={16} color="currentColor" />
      </Button>
    </div>
  );
};

export default ObstaclesSwiper;
