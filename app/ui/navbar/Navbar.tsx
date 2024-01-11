'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// utils
import clsx from 'clsx';

// *** Data ***
import { navItems, categoryItems } from './nav-items';

// *** Icons ***
import { IoMenuOutline } from 'react-icons/io5';
import { MdExpandMore } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {};

export const Navbar = (props: Props) => {
  const [navIsActivate, setNavIsActive] = useState<boolean>(false);
  const [categoryIsOpen, setCategoryIsOpen] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<number>(3);

  return (
    <div className="bg-white py-3 dark:bg-[#141824] dark:text-slate-300">
      <div className="container relative flex justify-between">
        <div
          onClick={() => setCategoryIsOpen(!categoryIsOpen)}
          className="flex cursor-pointer items-center gap-2"
        >
          <IoMenuOutline />
          <b className="text-[12px]">Category</b>
        </div>

        <div
          className={clsx(
            'absolute top-[35px] z-40 w-auto rounded-lg border-[1px] border-slate-400 bg-white px-10 dark:bg-[#141824]',
            {
              block: categoryIsOpen,
              hidden: !categoryIsOpen,
            },
          )}
        >
          <span className="first-letter: absolute top-[-12px] h-[1.5rem] w-[1.5rem] rotate-45 border-l-[1px] border-t-[1px] border-slate-400 bg-white dark:bg-[#141824]"></span>

          <div className="grid w-full grid-cols-1 grid-rows-1 gap-x-28 gap-y-10 py-10 sm:hidden sm:grid-cols-2 lg:grid-cols-3">
            {categoryItems.slice(0, 3).map((e, i) => (
              <ul className={'flex flex-col gap-2'} key={i}>
                <li className="flex items-center gap-3">
                  <strong className="text-blue-500">
                    <TbWorld />
                  </strong>
                  <b>{e.title.title}</b>
                </li>
                {e.items.map((e, i) => (
                  <li key={i}>{e.title}</li>
                ))}
              </ul>
            ))}
          </div>

          <div className="hidden w-full grid-cols-1 grid-rows-1 gap-x-28 gap-y-10 py-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
            {categoryItems.slice(0, 6).map((e, i) => (
              <ul className={'flex flex-col gap-2'} key={i}>
                <li className="flex items-center gap-3">
                  <strong className="text-blue-500">
                    <TbWorld />
                  </strong>
                  <b>{e.title.title}</b>
                </li>
                {e.items.map((e, i) => (
                  <li key={i}>{e.title}</li>
                ))}
              </ul>
            ))}
          </div>

          <div className="hidden w-full grid-cols-1 grid-rows-1 gap-x-28 gap-y-10 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid">
            {categoryItems.slice(0, 9).map((e, i) => (
              <ul className={'flex flex-col gap-2'} key={i}>
                <li className="flex items-center gap-3">
                  <strong className="text-blue-500">
                    <TbWorld />
                  </strong>
                  <b>{e.title.title}</b>
                </li>
                {e.items.map((e, i) => (
                  <li key={i}>{e.title}</li>
                ))}
              </ul>
            ))}
          </div>

          <Link
            href={'/'}
            className="flex w-full items-center justify-center gap-2 border-t-[1px] border-slate-400 py-5 text-center text-blue-500 transition-all hover:text-blue-400"
          >
            <strong>See All Categories</strong>
            <IoIosArrowForward />
          </Link>
        </div>

        <nav>
          <ul className="flex gap-6">
            {navItems.map((e, i) => (
              <li className={e.xClass} key={i}>
                <Link href={'/'}>{e.title}</Link>
              </li>
            ))}

            <div className="relative">
              <button
                onClick={() => setNavIsActive(!navIsActivate)}
                className="flex items-center gap-1 lg:hidden"
              >
                <b>More</b>
                <span>
                  <MdExpandMore />
                </span>
              </button>
              <ul
                className={clsx(
                  'absolute right-0 top-[30px] z-50  rounded-md border-[1px] border-slate-300 bg-white  px-5 py-2 dark:bg-[#141824]',
                  {
                    'block lg:hidden': navIsActivate,
                    'hidden lg:hidden': !navIsActivate,
                  },
                )}
              >
                {navItems.map((e, i) => (
                  <li className={`${e.yClass} my-3 w-[200px]`} key={i}>
                    <Link href={'/'}>{e.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
