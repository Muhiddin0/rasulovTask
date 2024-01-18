import React from 'react';
import NextBreadcrumb from '../ui/Breadcrump';
import Image from 'next/image';
import Link from 'next/link';

// *** Assets ***
import hp from '@/assets/images/hp.png';

// *** Assets ***
import { IoIosStar } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {};

const Page = (props: Props) => {
  return (
    <section>
      <div className="container !py-10 dark:text-slate-50">
        <div>
          <NextBreadcrumb
            capitalizeLinks
            activeClasses="bradcrump-active"
            separator={''}
            homeElement={'Home'}
          />
          <h1 className="mt-2 text-2xl font-bold">My Favorite Stores</h1>
          <p className="text-slate-500">Essential for a better life</p>
        </div>

        <div className="mt-12 grid grid-cols-2 grid-rows-1 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="flex flex-col">
            <Image
              className="w-full rounded-md border-[1px] border-slate-300 object-contain p-3"
              src={hp}
              alt=""
            />
            <h1 className="mt-3">HP Global Store</h1>
            <div className="flex gap-1 text-orange-500">
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
              <IoIosStar size={14} />
            </div>
            <p className="text-sm text-slate-500">(562 people rated)</p>

            <Link
              className="mt-2 flex items-center gap-1 text-blue-500"
              href={'/'}
            >
              <span>Visit Store</span>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
