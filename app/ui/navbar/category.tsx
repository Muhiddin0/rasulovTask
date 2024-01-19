'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// *** utils ***
import clsx from 'clsx';

// *** Data ***
import { categoryItems, navItems } from './nav-items';

// *** UI ***
import ActiveLink from '../common/ActiveLink';

// *** Icons ***
import { IoMenuOutline } from 'react-icons/io5';
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

type Props = {};

export const Category = (props: Props) => {
  const [categoryIsOpen, setCategoryIsOpen] = useState<boolean>(false);

  const handleToggleCateogry = () => setCategoryIsOpen(!categoryIsOpen);

  return (
    <>
      <div
        onClick={() => setCategoryIsOpen(!categoryIsOpen)}
        className="hidden cursor-pointer items-center gap-2 lg:flex"
      >
        <IoMenuOutline />
        <b className="text-[12px]">Category</b>
      </div>

      <div
        className={clsx(
          'filter-sm container fixed top-[40px] z-[1000] w-full rounded-lg border-[1px] border-slate-400 bg-white px-10 dark:bg-[#141824] max-[640px]:h-screen max-[640px]:overflow-auto sm:absolute sm:top-[70px] sm:w-auto',
          {
            active: categoryIsOpen,
            block: categoryIsOpen,
            hidden: !categoryIsOpen,
          },
        )}
      >
        <span className="first-letter: absolute left-[240px] top-[-12px] h-[1.5rem] w-[1.5rem] rotate-45 border-l-[1px] border-t-[1px] border-slate-400 bg-white dark:bg-[#141824]"></span>

        <ul className="mt-4 grid grid-cols-1">
          {navItems.map((e, i) => (
            <li className={e.xClass} key={i}>
              <ActiveLink
                handleToggleCateogry={handleToggleCateogry}
                href={e.link}
              >
                {e.title}
              </ActiveLink>
            </li>
          ))}
        </ul>

        {/* SM Filter */}
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-x-28 gap-y-10 py-10 sm:hidden sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full items-center justify-end">
            <button
              className="transition-all hover:scale-105 active:scale-75"
              onClick={() => setCategoryIsOpen(!categoryIsOpen)}
            >
              <IoMdClose size={25} />
            </button>
          </div>
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

        {/* LG Filter */}
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

        {/* xl Filter */}
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
    </>
  );
};
