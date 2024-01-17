'use client';

import { ProductType } from '@/app/interfaces';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SliderButtons } from '../slider/slider-buttons';
import { catalogItem } from './catalog.data';

const CatalogPage = () => {
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const [swiper, setSwiper] = useState<typeof Swiper>();

  return (
    <section className="py-4">
      <div className="container">
        <div className="mx-auto max-w-[1200px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            className="!pb-14 !pt-4"
            breakpoints={{
              380: {
                width: 380,
                slidesPerView: 4,
              },
              497: {
                width: 497,
                slidesPerView: 7,
              },
              769: {
                width: 769,
                slidesPerView: 9,
              },
              1179: {
                width: 1179,
                slidesPerView: 10,
              },
            }}
          >
            {catalogItem.map((e, i) => (
              <SwiperSlide
                key={i}
                className="!flex items-center justify-center"
              >
                <Link
                  className="inline-block rounded-md bg-slate-100 p-3 transition-all hover:bg-blue-400 hover:text-white"
                  href={e.link}
                >
                  <e.icon size={30} />
                </Link>
              </SwiperSlide>
            ))}
            <div className="absolute top-[23px] w-full">
              <SliderButtons />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
