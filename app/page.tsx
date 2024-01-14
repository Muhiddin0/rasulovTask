import React from 'react';
import Hero from './ui/hero';
import CatalogPage from './ui/catalog';
import { ProductPiece } from './ui/product-piece/product-piece';
import { Banner } from './ui/banner';

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="bg-white  dark:bg-[var(--dark-bg)]">
      <div className="container!py-10">
        <CatalogPage />
        <Hero />
        <ProductPiece />
        <Banner />
      </div>
    </section>
  );
};

export default Page;
