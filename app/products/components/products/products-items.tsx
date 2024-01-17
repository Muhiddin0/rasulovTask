'use client';

import Image from 'next/image';
import React from 'react';

// *** Assets ***
import playConsole from '@/assets/images/console.png';

// *** Icons ***
import { FaStar } from 'react-icons/fa';

// *** Components ***
import { Star } from '@/app/ui/common';
import { ProductType } from '@/app/interfaces';
import Link from 'next/link';

export const ProductItems = ({
  category,
  description,
  id,
  image,
  price,
  quantity,
  rating,
  title,
}: ProductType) => {
  return (
    <Link href={'/products/' + id} className="product-hover flex flex-col">
      <div className="h-[200px] w-full rounded-md border-[1px] border-slate-300 p-3">
        <Image
          width={150}
          height={150}
          className="h-full w-full object-contain"
          src={image}
          alt=""
        />
      </div>
      <p className="my-3 text-sm">
        PlayStation 5 DualSense Wireless Controller
      </p>
      <Star />
      <div className="mt-6">
        <p className="font-bold">dbrand skin available</p>
        <div className="my-1 flex items-center gap-3">
          <p className="text-md">$125</p>
          <p className="text-lg font-bold">$89</p>
        </div>
        <p className="text-slate-500">2 colors</p>
      </div>
    </Link>
  );
};
