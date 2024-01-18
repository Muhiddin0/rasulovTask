import React from 'react';
import Hero from './ui/hero';
import CatalogPage from './ui/catalog/catalog';
import { ProductPiece } from './ui/product-piece/product-piece';
import { Banner } from './ui/banner';
import MySlider from './ui/slider/slider';
import { SliderBanner } from './ui/slider/slider-with-banner';
import Image from 'next/image';

// *** Assets ***
import homeBanner from '@/assets/images/banner-home.png';
import { HomeSliderDestop } from './ui/home-slider/home-slider-desktop';
import { HomeSliderMobile } from './ui/home-slider/home-slider-mobile';

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="bg-white  dark:bg-[var(--dark-bg)]">
      <div className="container!py-10">
        <CatalogPage />
        {/* <Hero /> */}
        <HomeSliderMobile />
        <HomeSliderDestop />
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-9">
              <SliderBanner />
            </div>
            <div className="col-span-3 hidden items-center justify-center p-2 xl:flex">
              <Image src={homeBanner} alt="" />
            </div>
          </div>
        </div>
        <MySlider />
        {/* <ProductPiece /> */}
        <Banner />
      </div>
    </section>
  );
};

export default Page;
