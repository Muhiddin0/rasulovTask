import Image from 'next/image';
import React from 'react';

// *** Assets ***
import pc from '@/assets/images/pc.png';

// *** Icons ***
import { CiHeart } from 'react-icons/ci';

import { FiShoppingCart } from 'react-icons/fi';

type Props = {};

export const ProductView = (props: Props) => {
  return (
    <div className="w-full p-5 xl:w-[50%]">
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <div className="flex h-auto w-full flex-wrap content-start gap-3 sm:w-[80px]">
          <Image
            className="h-[80px] w-[80px] rounded-md border-[1px] border-slate-300 object-contain p-1"
            width={80}
            height={80}
            src={pc}
            alt=""
          />
          <Image
            className="h-[80px] w-[80px] rounded-md border-[1px] border-slate-300 object-contain p-1"
            width={80}
            height={80}
            src={pc}
            alt=""
          />
          <Image
            className="h-[80px] w-[80px] rounded-md border-[1px] border-slate-300 object-contain p-1"
            width={80}
            height={80}
            src={pc}
            alt=""
          />
        </div>
        <div className="flex h-full w-[100%] items-center justify-center rounded-md border-[1px] border-slate-300 p-6">
          <Image className="w-full sm:max-w-[400px]" src={pc} alt="" />
        </div>
      </div>
      <div className="my-4 flex flex-wrap gap-5">
        <button className="flex flex-grow-[1] items-center justify-center gap-2 rounded-full border-[1px] border-blue-500 px-5 py-3 text-center  text-xl text-blue-500 transition-all hover:opacity-70">
          <span>
            <CiHeart />
          </span>
          <span>Add to wishlist</span>
        </button>
        <button className="flex flex-grow-[1] items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3  text-center text-xl text-white transition-all hover:opacity-70">
          <span>
            <FiShoppingCart />
          </span>
          <span>Add to wishlist</span>
        </button>
      </div>
    </div>
  );
};
