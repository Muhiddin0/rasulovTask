'use client';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { ProductItems } from './products-items';
import { CiFilter } from 'react-icons/ci';
import { useAppSelector } from '@/app/hooks';
type Props = {};

export const Products = async (props: Props) => {
  const { products } = useAppSelector((state) => state.products);
  const { loading } = useAppSelector((state) => state.products.status);

  const toggler = () => {
    document.querySelector('.filter')?.classList.toggle('active');
  };

  return (
    <div className="w-full">
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
      <div className="grid w-full flex-grow-[2] grid-cols-2 grid-rows-1 gap-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((e, i) => (
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
              data-aos="fade-up"
            />
          ))}

        {loading && (
          <>
            <div className="col-span-1">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-sm animate-pulse overflow-hidden rounded shadow-lg">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                  <div className="mb-2 h-6 bg-gray-300"></div>
                  <div className="h-4 w-2/3 bg-gray-300"></div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  <div className="mb-2 h-4 w-1/4 bg-gray-300"></div>
                  <div className="h-4 w-1/2 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
