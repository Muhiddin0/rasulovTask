import { ProductType } from '@/app/interfaces';
import { ProductItems } from '@/app/products/components/products/products-items';
import React from 'react';
import Product from '../common/product/product';
import Link from 'next/link';

type Props = {};

export const ProductPiece = async (props: Props) => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: ProductType[] = await res.json();

  return (
    <section>
      <div className="container flex flex-col space-y-12 !py-8 ">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="orange"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              Top Deals today
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="orange"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center text-blue-600 transition-all hover:underline dark:text-blue-300">
            <Link href={'/deals'}>
              <p className="text-sm font-medium">Explore more</p>
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-grow-[2] grid-cols-1 grid-rows-1 flex-col items-center justify-center gap-4 gap-y-12 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
