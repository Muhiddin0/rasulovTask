'use client';

import clsx from 'clsx';
import { title } from 'process';
import React, { useState } from 'react';

// *** Icons ***
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  height: string;
}

export const FilterWrapper = ({ children, title, height }: Props) => {
  const [showItem, setShowItem] = useState<boolean>(false);
  return (
    <div>
      <div
        onClick={() => setShowItem(!showItem)}
        className="my-3 flex w-full cursor-pointer items-center justify-between"
      >
        <b>{title}</b>
        <span className="rotate-90">
          <MdKeyboardArrowRight />
        </span>
      </div>
      <div
        style={{ transition: '200ms' }}
        className={clsx(`overflow-hidden transition-all h-[${height}px]`, {
          '!h-[0px]': showItem,
        })}
      >
        {children}
      </div>
    </div>
  );
};
