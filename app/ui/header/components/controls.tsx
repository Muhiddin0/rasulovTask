'use client'

import React, { useState } from 'react';

// *** Icons ***
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';

// *** */ Assets ***
import user from '@/assets/images/user.webp';

// *** Utils ***
import { ThemeToggle } from '../../swith-mode/mode-button';
import Image from 'next/image';

// *** Icons ***
import { CiUser } from 'react-icons/ci';
import { FiLogOut } from "react-icons/fi";
import { TfiDashboard } from "react-icons/tfi";
import { GrSecure } from "react-icons/gr";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';

type Props = {};

export const Controls = (props: Props) => {

  const [profileIsOpnen, setProfileIsOpen] = useState<boolean>(false)


  return (
    <div className="flex gap-3 dark:text-[#fff]">
      {/* theme toggler button */}
      <ThemeToggle />

      {/* Shoping card */}
      <button className="relative">
        <span className="absolute right-[-30%] top-[-7%] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-blue-500 text-[14px] text-white">
          2
        </span>
        <FiShoppingCart size={20} />
      </button>

      {/* Notifications */}
      <button className="">
        <IoMdNotificationsOutline size={20} />
      </button>

      <div className="relative flex items-center">
        {/* User */}
        <button onClick={() => setProfileIsOpen(!profileIsOpnen)}>
          <FaRegUser size={20} />
        </button>

        <div className={`${profileIsOpnen && 'active'} profile-bar absolute right-[-20px] top-[42px] z-10 w-[300px] rounded-md border-[1px] border-slate-400 bg-white px-5 py-2`}>
          <span className="absolute right-[19px] top-[-11px] h-[20px] w-[20px] rotate-45 border-l-[1px] border-t-[1px] border-slate-400 bg-white"></span>

          <div>
            <div className="flex flex-col items-center justify-center gap-1">
              <Image
                width={60}
                height={60}
                className="rounded-full"
                src={user}
                alt=""
              />
              <b>Jerry Seinfield</b>
            </div>
          </div>

          <input
            className="my-4 w-full rounded-md border-[1px] border-slate-400 px-2 py-1"
            type="text"
            placeholder="Update your status"
          />

          <ul className="flex flex-col gap-3 text-sm">
            <li className="">
              <Link className='flex items-center gap-1' href={'/profile'}>
                <span>
                  <CiUser />
                </span>
                <span>Profile</span>
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <span>
                <TfiDashboard />
              </span>
              <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-1">
              <span>
                <GrSecure />
              </span>
              <span>Post & Activite</span>
            </li>
            <li className="flex items-center gap-1">
              <span>
                <IoIosHelpCircleOutline />
              </span>
              <span>Help center</span>
            </li>
          </ul>

          <div className='flex gap-1 py-3 border-y-[1px] border-slate-400 items-center my-2'>
            <span>
              <IoMdPersonAdd />
            </span>
            <span>Add another account</span>
          </div>


          <button className='w-full my-2 justify-center px-2 py-2 rounded-md bg-slate-200 gap-2 text-black dark:text-slate-500 flex items-center'>
            <FiLogOut />
            <span>Sign out</span>
          </button>

          <ul className='flex items-start justify-center text-slate-500 text-sm'>
            <li>privacy•</li>
            <li>policy</li>
            <li>•cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
