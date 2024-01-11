'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { SmillerProductItem } from './item';
import Link from 'next/link';

type Props = {};

export const SmilerProducts = (props: Props) => {
  return (
    <section>
      <div className="container !py-12 dark:text-slate-300">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-[30px] font-bold">Similar Products</h1>
            <p className="text-slate-500">Essential for a better life</p>
          </div>
          <Link
            className="rounded-md border-[1px] border-slate-300 px-5 py-2 text-blue-500 hover:opacity-80"
            href={'/'}
          >
            View all
          </Link>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            500: {
              width: 500,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <SmillerProductItem />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </section>
  );
};
