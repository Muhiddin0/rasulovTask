import React from 'react';
import Image from 'next/image';

// *** Assets ***
import pc from '@/assets/images/pc.png';
import { IoStar } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

type Props = {};

export const SmillerProductItem = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-3">
      <button className="absolute right-[12px] top-[12px] z-10 rounded-full border-[1px] border-blue-500 p-2 text-blue-500">
        <CiHeart />
      </button>
      <Image
        className="w-full rounded-md border-[1px] border-slate-300 p-3"
        src={pc}
        alt=""
      />
      <p>Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</p>
      <div className="flex gap-2">
        <div className="flex items-center text-orange-500">
          <IoStar size={13} />
          <IoStar size={13} />
          <IoStar size={13} />
          <IoStar size={13} />
          <IoStar size={13} />
        </div>
        <p className="text-[14px]">(59) people reated</p>
      </div>

      <div className="mt-[70px]">
        <b className="text-[20px]">$59</b>
        <p className="text-sm text-slate-400">2 colos</p>
      </div>
    </div>
  );
};
