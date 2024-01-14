import React, { useState } from 'react';
import { Filter } from './components/filter/filter';
import { Products } from './components/products/Products';

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="bg-white dark:bg-[var(--dark-bg)]">
      <div className="container flex gap-3 !py-10 dark:text-slate-50">
        <Filter />
        <Products />
      </div>
    </section>
  );
};

export default Page;
