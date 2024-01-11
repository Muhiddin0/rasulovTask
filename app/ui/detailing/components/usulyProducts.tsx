import Image from 'next/image';
import React from 'react';

import pr from '@/assets/images/pc.png';
import { FiShoppingCart } from 'react-icons/fi';

type Props = {};

export const UsulyProducts = (props: Props) => {
  return (
    <div className="flex w-full flex-col rounded-md border-[1px]  border-slate-400 bg-white p-6 dark:bg-[#141824]">
      <div className="flex flex-col">
        <b className="text-[20px]">Usually Bought Together</b>
        <b className="text-[16px]">
          with 24" iMac® with Retina 4.5K display...
        </b>
      </div>

      <br />
      <hr />
      <br />

      <div className="my-6 flex items-center gap-3">
        <input className="self-center" type="checkbox" />
        <Image
          className="h-[50px] w-[50px] rounded-md border-[1px] border-slate-300 p-1"
          src={pr}
          width={100}
          height={100}
          alt=""
        />
        <div className="flex flex-col">
          <b className="text-[16px] text-blue-500">
            iPhone 13 pro max-Pacific Blue- 128GB
          </b>
          <b className="text-[20px]">$899.99</b>
        </div>
      </div>
      <div className="my-6 flex items-center gap-3">
        <input className="self-center" type="checkbox" />
        <Image
          className="h-[50px] w-[50px] rounded-md border-[1px] border-slate-300 p-1"
          src={pr}
          width={100}
          height={100}
          alt=""
        />
        <div className="flex flex-col">
          <b className="text-[16px] text-blue-500">
            iPhone 13 pro max-Pacific Blue- 128GB
          </b>
          <b className="text-[20px]">$899.99</b>
        </div>
      </div>
      <div className="my-6 flex items-center gap-3">
        <input className="self-center" type="checkbox" />
        <Image
          className="h-[50px] w-[50px] rounded-md border-[1px] border-slate-300 p-1"
          src={pr}
          width={100}
          height={100}
          alt=""
        />
        <div className="flex flex-col">
          <b className="text-[16px] text-blue-500">
            iPhone 13 pro max-Pacific Blue- 128GB
          </b>
          <b className="text-[20px]">$899.99</b>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-col">
          <p className="text-slate-400">Total</p>
          <b>$958.99</b>
        </div>

        <button className="flex w-[240px] items-center justify-center gap-2 rounded-md border-[1px] border-orange-500 px-2 py-2 text-orange-500">
          Add 3 items to card
          <span>
            <FiShoppingCart />
          </span>
        </button>
      </div>
    </div>
  );
};
