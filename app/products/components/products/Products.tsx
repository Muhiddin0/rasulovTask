'use client';

import React, { useEffect, useState } from 'react';
import { ProductItems } from './products-items';
import { CiFilter } from 'react-icons/ci';
import { ProductType } from '@/app/interfaces';

type Props = {};

export const Products = (props: Props) => {
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  const toggler = () => {
    document.querySelector('.filter')?.classList.toggle('active');
  };

  return (
    <div>
      <div className="my-5 flex w-full justify-end lg:hidden">
        <button
          onClick={toggler}
          className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-bold dark:bg-gray-900"
        >
          <span>
            <CiFilter />
          </span>
          Filter
        </button>
      </div>
      <div className="grid flex-grow-[2] grid-cols-2 grid-rows-1 gap-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {products.map((e, i) => (
          <ProductItems
            title={e.title}
            price={e.price}
            quantity={e.quantity}
            rating={e.rating}
            category={e.category}
            description={e.description}
            id={e.id}
            image={e.image}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
