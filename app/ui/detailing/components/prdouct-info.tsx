import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// *** Assets ***
import pc from '@/assets/images/pc.png';

// *** Icons ***
import { IoIosStar } from 'react-icons/io';
import { FiShare2 } from 'react-icons/fi';

export const ProductInfo = () => {
  return (
    <div className="w-full xl:w-[50%]">
      <div className="flex gap-4">
        <div className="flex text-orange-500">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p className="text-blue-500">6548 People rated and reviewed</p>
      </div>
      <h1 className="mt-4 text-[25px] font-bold sm:text-lg md:text-4xl">
        24" iMac® with Retina 4.5K display - Apple M1 8GB Memory - 256GB SSD -
        w/Touch ID (Latest Model) - Blue
      </h1>

      <div className="my-4">
        <span className="rounded-full bg-green-500 px-3 py-1 text-center text-white">
          #1 Best seller
        </span>
        <Link className="ml-3 font-bold text-blue-500" href={'/'}>
          in Phoenix sell analytics 2021
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 text-[40px]">
        <b>$1,349.99</b>
        <s className="text-decoration-line-through mb-0 me-3 text-slate-400">
          $1,499.99
        </s>
        <b className="text-blue-500">10% off</b>
      </div>

      <p className="text-[25px] text-green-500">In stock</p>

      <p>
        <b>Do you want it on Saturday, July 29th?</b> Choose{' '}
        <b>Saturday Delivery</b>
        at checkout if you want your order delivered within 12 hours 43 minutes,
        <Link href={'/'} className="text-blue-500">
          {' '}
          <b>Details.</b>{' '}
        </Link>{' '}
        Gift wrapping is available.
      </p>

      <p className="my-4 font-bold text-red-500">
        Special offer ends in 23:00:45 hours
      </p>

      <p>Color : Green</p>

      <div className="mt-3 flex gap-3">
        <div className="rounded-1 border-primary nav-link border p-0">
          <Image width={38} height={38} src={pc} alt="" />
        </div>
        <div className="rounded-1 border-primary nav-link border p-0">
          <Image width={38} height={38} src={pc} alt="" />
        </div>
        <div className="rounded-1 border-primary nav-link border p-0">
          <Image width={38} height={38} src={pc} alt="" />
        </div>
        <div className="rounded-1 border-primary nav-link border p-0">
          <Image width={38} height={38} src={pc} alt="" />
        </div>
        <div className="rounded-1 border-primary nav-link border p-0">
          <Image width={38} height={38} src={pc} alt="" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-6 lg:gap-12">
          <div className="flex flex-col">
            <b>Size:</b>
            <div className="mt-2 flex items-center gap-2">
              <select className="rounded-md">
                <option value="18">18</option>
                <option value="22">22</option>
                <option value="44">44</option>
              </select>
              <Link className="text-blue-500" href={'/'}>
                Size chart
              </Link>
            </div>
          </div>
          <div>
            <b>Quantity:</b>
            <div className="mt-2 flex items-center">
              <button className="h-[40px] w-[40px] rounded-md border-[1px] border-slate-400 text-center text-[20px] text-blue-500">
                -
              </button>
              <span className="w-[60px] text-center">8</span>
              <button className="h-[40px] w-[40px] rounded-md border-[1px] border-slate-400 text-center text-[20px] text-blue-500">
                +
              </button>
            </div>
          </div>
        </div>
        <button className="self-center text-blue-500">
          <FiShare2 />
        </button>
      </div>
    </div>
  );
};
