'use client';

// import { ProductType } from "@/interfaces"
import { ProductType } from '@/app/interfaces/index';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import CustomImage from '@/app/ui/common/image';
import { useParams } from 'next/navigation';
import { StarIcon as StarIconOutlined } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link className="w-56" href={`/product/${product.id}`}>
      <div className="group flex h-96 flex-col overflow-hidden rounded-lg border-gray-200 border-opacity-60 transition-transform duration-200 ease-out">
        <div className="relative mb-1 flex h-80 w-56 flex-1 items-center justify-center rounded-lg border dark:border-slate-700">
          <div className="relative flex h-52 w-28 items-center justify-center ">
            <CustomImage product={product} fill />
          </div>
        </div>
        <div className="flex flex-col px-1 py-1">
          <h1 className="mb-2 truncate text-sm font-medium dark:text-gray-200">
            {product.title}
          </h1>
          <div className="mb-4 flex items-center gap-1">
            <div className="flex w-16 text-xs">
              {Array.from(
                {
                  length: Math.floor(product.rating.rate),
                },
                (_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
                ),
              )}
              {Array.from(
                {
                  length: 5 - Math.floor(product.rating.rate),
                },
                (_, i) => (
                  <StarIconOutlined
                    key={i}
                    className="h-4 w-4 text-yellow-500"
                  />
                ),
              )}
            </div>
            <p className="text-xs dark:text-gray-400">
              ({product.rating.count} people rated)
            </p>
          </div>
          <p className="mb-2 text-xs dark:text-gray-200">{product.category}</p>
          <div className="flex items-center justify-start gap-2">
            <p className="text-base dark:text-gray-500">$1200</p>
            <p className="text-2xl font-semibold dark:text-gray-100">
              ${product.price}
            </p>
          </div>
          <p className="text-xs font-medium dark:text-gray-400">7 colors</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
