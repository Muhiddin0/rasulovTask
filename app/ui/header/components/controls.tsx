import React from 'react';

// *** Icons ***
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';

// *** Utils ***
import { ThemeToggle } from '../../swith-mode/mode-button';

type Props = {};

export const Controls = (props: Props) => {
  return (
    <div className="flex gap-3 dark:text-[#fff]">
      <ThemeToggle />
      <button className="relative">
        <span className="absolute right-[-30%] top-[-7%] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-blue-500 text-[14px] text-white">
          2
        </span>
        <FiShoppingCart size={20} />
      </button>
      <button className="">
        <IoMdNotificationsOutline size={20} />
      </button>
      <button className="">
        <FaRegUser size={20} />
      </button>
    </div>
  );
};
