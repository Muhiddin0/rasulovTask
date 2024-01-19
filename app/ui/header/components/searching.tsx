'use client';

import React, { useEffect } from 'react';

// *** Icons ***
import { IoIosMenu } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

// *** Utils ***
import { clickEffectButton } from '../../utility.class';

// RTK Query
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';

const Searching = () => {
  const counter = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    console.log(counter);
  });

  return (
    <div className="order-3 my-3 flex w-[100%] gap-2 lg:order-none lg:w-[400px] xl:w-[500px]">
      <label className="relative flex-grow-[1]" htmlFor="">
        <input
          placeholder="Searching..."
          className="border- h-full w-full rounded-full  border-[1px] border-slate-400 px-4 dark:bg-[#141824]"
        />
        <button className="absolute right-[15px] top-[25%] transition-all hover:opacity-70">
          <CiSearch size={22} />
        </button>
      </label>
      <button className={`block lg:hidden ${clickEffectButton}`}>
        <IoIosMenu size={35} />
      </button>
    </div>
  );
};

export default Searching;
