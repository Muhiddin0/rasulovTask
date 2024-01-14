import React from 'react';

// *** Icons ***
import banner from '@/assets/images/banner.png';
import Image from 'next/image';

type Props = {};

export const Banner = (props: Props) => {
  return (
    <section>
      <div className="container flex items-center justify-center !py-12 dark:text-slate-500">
        <Image width={300} className="w-[300px]" src={banner} alt="" />
        <div>
          <h1 className="text-md font-bold">
            Want to have the ultimate customer experience?
          </h1>
          <h1 className="text-2xl font-bold">
            Become a <span className="text-blue-500">member</span> today!
          </h1>
          <button className="mt-3 rounded-md bg-blue-500 px-4 py-2 text-center text-white">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};
