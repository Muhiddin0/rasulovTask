import React from 'react';
import NextBreadcrumb from '../ui/Breadcrump';
import Image from 'next/image';

// *** Icons ***
import { MdDelete } from 'react-icons/md';
import { IoKeySharp } from 'react-icons/io5';
import { CiLinkedin } from 'react-icons/ci';
import { CiFacebook } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';

// *** Assets ***
import user from '@/assets/images/user.webp';
import Link from 'next/link';
import { Table } from './components/data-table';

type Props = {};

function BorderLink() {
  return (
    <>
      <br />
      <div className="w-full border-[1px] border-dashed border-slate-300"></div>
      <br />
    </>
  );
}

const Page = (props: Props) => {
  return (
    <section>
      <div className="container !py-12 dark:text-slate-500">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-5">
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

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-md border-[1px] border-red-500  px-2 py-1 text-red-500 transition-all hover:opacity-70">
              <span>
                <MdDelete />
              </span>
              <span>Delete account</span>
            </button>
            <button className="flex items-center gap-2 rounded-md border-[1px] border-slate-400 px-2 py-1 transition-all hover:opacity-70">
              <span>
                <IoKeySharp />
              </span>
              <span>Resset Password</span>
            </button>
          </div>
        </div>

        {/* body */}
        <div className="col-span-5 my-8 grid gap-6 xl:grid-cols-8">
          <div className="dark:bg col-span-5 rounded-md border-[1px] border-slate-400 bg-white p-6 dark:bg-[var(--dark-bg)]">
            <div className="flex flex-col items-center gap-6 min-[500px]:flex-row min-[500px]:text-center">
              <div>
                <Image
                  className="h-[130px] w-[130px] rounded-full"
                  src={user}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-center text-2xl font-bold min-[500px]:text-start">
                  Ansolo Lazinatov
                </h1>
                <p className="text-center text-slate-400 min-[500px]:text-start">
                  Joined 3 months ago
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 min-[500px]:justify-start">
                  <Link href={'/'}>
                    <CiLinkedin size={25} />
                  </Link>
                  <Link href={'/'}>
                    <CiFacebook size={25} />
                  </Link>
                  <Link href={'/'}>
                    <CiTwitter size={25} />
                  </Link>
                </div>
              </div>
            </div>

            <BorderLink />

            <div className="grid grid-cols-1 gap-x-3 gap-y-6 min-[500px]:grid-cols-3">
              <div className="flex flex-col items-center justify-start gap-2">
                <b>Total Spent</b>
                <b className="text-2xl">$894</b>
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <b>Last Order</b>
                <b className="text-2xl">1 week ago</b>
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <b>Total Orders</b>
                <b className="text-2xl">97</b>
              </div>
            </div>
          </div>

          <div className="col-span-5 rounded-md border-[1px] border-slate-400 bg-white p-6 dark:bg-[var(--dark-bg)] xl:col-span-3">
            <h1 className="text-2xl font-bold">Default Address</h1>
            <BorderLink />

            <div className="flex justify-between">
              <span className="text-lg font-bold">Addres</span>
              <p className="text-bold text-slate-500">
                Vancouver, British Columbia Canada
              </p>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-bold">Email</span>
              <Link className="text-bold text-blue-500" href={'/'}>
                shatinon@jeemail.com
              </Link>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-bold">Phone</span>
              <Link className="text-bold" href={'/'}>
                +1234567890
              </Link>
            </div>
          </div>
        </div>

        <Table />
      </div>
    </section>
  );
};

export default Page;
