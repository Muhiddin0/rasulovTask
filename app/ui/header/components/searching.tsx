import React from 'react';

const Searching = () => {
  return (
    <label
      className="order-3 w-[100%] md:order-none md:w-[300px] lg:w-[500px]"
      htmlFor=""
    >
      <input
        placeholder="Searching..."
        className="border- h-full w-full rounded-full  border-[1px] border-slate-400 px-4 dark:bg-[#141824]"
      />
    </label>
  );
};

export default Searching;
