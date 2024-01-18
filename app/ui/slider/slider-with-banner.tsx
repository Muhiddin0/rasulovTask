'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { ProductType } from '@/app/interfaces';
import Product from '../common/product/product';
import Link from 'next/link';

// *** Icons ***
import { IoIosArrowForward } from 'react-icons/io';
import { IoFlash } from 'react-icons/io5';

// *** UI ***
import { SliderButtons } from './slider-buttons';

type Props = {};

export const SliderBanner = (props: Props) => {
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const [swiper, setSwiper] = useState<typeof Swiper>();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 py-2">
        <h1 className="flex items-center gap-2 text-lg font-bold">
          <span className="text-orange-500">
            <IoFlash />
          </span>
          Top Deals today
          <span className="text-orange-500">
            <IoFlash />
          </span>
        </h1>
        <div className="flex items-center justify-center text-blue-600 transition-all hover:underline dark:text-blue-300">
          <Link href={'/deals'}>
            <p className="text-sm font-medium">Explore more</p>
          </Link>

          <IoIosArrowForward />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="!pb-16 !pt-2 sm:!pb-12"
        loop={true}
        initialSlide={1}
        breakpoints={{
          450: {
            width: 450,
            slidesPerView: 2,
          },
          800: {
            width: 800,
            slidesPerView: 3,
          },
          1000: {
            width: 1000,
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            className="!flex items-center justify-center"
            key={product.id}
          >
            <Product product={product} />
          </SwiperSlide>
        ))}
        <SliderButtons />
      </Swiper>
    </div>
  );
};
