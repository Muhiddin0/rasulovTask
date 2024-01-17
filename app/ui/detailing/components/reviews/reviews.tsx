import React from 'react';

// *** Icons ***
import { IoIosStar } from 'react-icons/io';
import { Rate } from './rates/rate';

type Props = {};

export const Reviews = (props: Props) => {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex items-baseline">
          <span className="text-[25px]">4.9</span>
          <b className="text-slate-400">/5</b>
        </span>

        <div className="flex gap-2 text-orange-500">
          <IoIosStar size={30} />
          <IoIosStar size={30} />
          <IoIosStar size={30} />
          <IoIosStar size={30} />
          <IoIosStar size={30} />
        </div>
        <span>6548 ratings and 567 reviews</span>
        <button className="self-end rounded-full bg-blue-500 px-5 py-3 text-center text-white transition-all hover:bg-blue-400">
          Rate this product
        </button>
      </div>

      {/* rates */}
      <div className="my-8 flex flex-col gap-8 rounded-md border-[1px] border-slate-300 bg-white p-5">
        <Rate />
        <Rate />
        <Rate />
        <Rate />
        <Rate />
        <Rate />
        <Rate />
        <Rate />
      </div>
    </div>
  );
};
