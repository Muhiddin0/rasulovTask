'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ProductType } from '@/app/interfaces';
import Product from '../common/product/product';
import Link from 'next/link';

// *** Icons ***
import { IoIosArrowForward } from 'react-icons/io';
import { IoFlash } from 'react-icons/io5';

type Props = {};

export const SliderBanner = (props: Props) => {
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

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
        // onSwiper={(swiper) => setSwiper(swiper)}
        className="!pb-6 !pt-2"
        breakpoints={{
          450: {
            width: 450,
            slidesPerView: 2,
          },
          800: {
            width: 800,
            slidesPerView: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
