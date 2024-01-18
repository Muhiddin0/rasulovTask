'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { SliderButtons } from '../slider/slider-buttons';
import Image from 'next/image';

type Props = {};

export const HomeSliderDestop = (props: Props) => {
  return (
    <div className="container hidden lg:block">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        className="!pb-12 !pt-4"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {[1, 1, 1, 1, 1].map((e, i) => (
          <SwiperSlide
            className="!flex items-center justify-center shadow-lg"
            key={i}
          >
            <Image
              width={1200}
              height={500}
              alt="gallery"
              className="block h-auto !w-full object-cover object-center"
              src="https://dummyimage.com/1201x400"
            />
          </SwiperSlide>
        ))}
        <div className="absolute top-[40%] z-50 w-full translate-y-[-45%] xl:top-[50%]">
          <SliderButtons />
        </div>
      </Swiper>
    </div>
  );
};
