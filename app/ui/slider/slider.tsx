'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

import { ProductType } from '@/app/interfaces';
import Product from '../common/product/product';
import Link from 'next/link';

// *** Icons ***
import { IoFlash } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { SliderButtons } from './slider-buttons';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const MySwiper = () => {
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section>
      <div className="container !py-12">
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
          loop={true}
          pagination={{ clickable: true }}
          className="!pb-16 !pt-4 sm:!pb-12"
          onSlideChange={() => {
            console.log('slide change');
          }}
          centeredSlides={true}
          breakpoints={{
            450: {
              width: 450,
              slidesPerView: 2,
            },
            800: {
              width: 800,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
            1280: {
              width: 1280,
              slidesPerView: 5,
            },
            1536: {
              width: 1536,
              slidesPerView: 5,
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
    </section>
  );
};
export default MySwiper;
