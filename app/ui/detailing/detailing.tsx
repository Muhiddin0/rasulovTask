import React from 'react';

// *** Comments
import { ProductInfo } from './components/prdouct-info';
import { ProductView } from './components/product-view';

type Props = {};

export const Detailing = (props: Props) => {
  return (
    <section className="dark:text-slate-300">
      <div className="container flex flex-col-reverse justify-between gap-4 xl:flex-row">
        <ProductView />
        <ProductInfo />
      </div>
    </section>
  );
};
