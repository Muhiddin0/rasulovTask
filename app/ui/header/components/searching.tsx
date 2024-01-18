import React from 'react';

import { CiSearch } from 'react-icons/ci';

const Searching = () => {
  return (
    <label
      className="relative order-3 w-[100%] lg:order-none lg:w-[400px] xl:w-[500px]"
      htmlFor=""
    >
      <input
        placeholder="Searching..."
        className="border- h-full w-full rounded-full  border-[1px] border-slate-400 px-4 dark:bg-[#141824]"
      />
      <button className="absolute right-[15px] top-[25%] transition-all hover:opacity-70">
        <CiSearch size={22} />
      </button>
    </label>
  );
};

export default Searching;
