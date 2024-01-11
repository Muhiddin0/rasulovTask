import React from 'react';

import { IoIosStar } from 'react-icons/io';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { IoIosMore } from 'react-icons/io';

type Props = {};

export const Rate = (props: Props) => {
  return (
    <div className="w-full">
      <div className="review-header flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-2 text-orange-500">
            <IoIosStar size={22} />
            <IoIosStar size={22} />
            <IoIosStar size={22} />
            <IoIosStar size={22} />
            <IoIosStar size={22} />
          </div>
          <b>byPiere Auguste Renoir</b>
        </div>

        <div className="flex gap-3">
          <button className="header-button flex h-[30px] w-[45px] items-center justify-center rounded-md border-[1px] border-slate-300 bg-slate-100 transition-all hover:opacity-70">
            <AiFillLike />
          </button>
          <button className="header-button flex h-[30px] w-[45px] items-center justify-center rounded-md border-[1px] border-slate-300 bg-slate-100 transition-all hover:opacity-70">
            <AiFillDislike />
          </button>
          <button className="header-button flex h-[30px] w-[45px] items-center justify-center rounded-md  bg-slate-100 transition-all hover:opacity-70">
            <IoIosMore />
          </button>
        </div>
      </div>
      <span className="text-[12px] text-slate-400">23 Oct, 12:09 PM</span>
      <p className="text-slate-500">
        Since the spring loaded event, I've been wanting an iMac, and it's
        exceeded my expectations. The screen is clear, the colors are vibrant (I
        got the blue one! ), and the performance is more than adequate for my
        needs as a college student. That's how good it is.
      </p>
    </div>
  );
};
