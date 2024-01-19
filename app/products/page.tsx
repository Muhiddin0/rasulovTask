'use client';

import React, { useEffect, useState } from 'react';
import { Filter } from './components/filter/filter';
import { Products } from './components/products/Products';

// *** Hooks ***
import { useAppDispatch } from '@/app/hooks';
import { fetchProducts } from '@/app/lib/features/products/ActionCreator';

type Props = {};

const Page = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
