import React from 'react'
import NextBreadcrumb from '../ui/Breadcrump'
import Image from 'next/image';

// *** Icons ***
import { MdDelete } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


// *** Assets ***
import user from '@/assets/images/user.webp'
import Link from 'next/link';
import { Table } from './components/data-table';

type Props = {}

function BorderLink() {
  return (
    <>
      <br />
      <div className='border-[1px] border-dashed border-slate-300 w-full'></div>
      <br />
    </>
  )
}

const Page = (props: Props) => {
  return (
    <section>
      <div className="container !py-12">

        {/* Header */}
        <div className='flex items-end flex-wrap gap-5 justify-between'>
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

          <div className='flex gap-2 items-center'>
            <button className='flex gap-2 hover:opacity-70 transition-all items-center text-red-500  py-1 px-2 rounded-md border-[1px] border-red-500'>
              <span><MdDelete /></span>
              <span>Delete account</span>
            </button>
            <button className='flex gap-2 hover:opacity-70 transition-all items-center py-1 px-2 rounded-md border-[1px] border-slate-400'>
              <span><IoKeySharp /></span>
              <span>Resset Password</span>
            </button>
          </div>

        </div>

        {/* body */}
        <div className='grid col-span-5 xl:grid-cols-8 my-8 gap-6'>
          <div className='col-span-5 p-6 rounded-md border-[1px] border-slate-400 bg-white'>

            <div className='flex gap-6 items-center'>
              <div>
                <Image className='rounded-full w-[130px] h-[130px]' src={user} alt='' />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Ansolo Lazinatov</h1>
                <p className='text-slate-400'>Joined 3 months ago</p>
                <div className='flex gap-2 mt-4'>
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

            <div className='grid grid-cols-3'>
              <div className='flex flex-col items-center justify-start gap-2'>
                <b>Total Spent</b>
                <b className='text-2xl'>$894</b>
              </div>
              <div className='flex flex-col items-center justify-start gap-2'>
                <b>Last Order</b>
                <b className='text-2xl'>1 week ago</b>
              </div>
              <div className='flex flex-col items-center justify-start gap-2'>
                <b>Total Orders</b>
                <b className='text-2xl'>97</b>
              </div>
            </div>
          </div>

          <div className='col-span-5 xl:col-span-3 p-6 rounded-md border-[1px] border-slate-400 bg-white'>
            <h1 className='font-bold text-2xl'>Default Address</h1>
            <BorderLink />

            <div className='flex justify-between'>
              <span className='font-bold text-lg'>Addres</span>
              <p className='text-bold text-slate-500'>
                Vancouver, British Columbia
                Canada
              </p>
            </div>
            <div className='flex justify-between'>
              <span className='font-bold text-lg'>Email</span>
              <Link className='text-bold text-blue-500' href={'/'}>shatinon@jeemail.com</Link>
            </div>
            <div className='flex justify-between'>
              <span className='font-bold text-lg'>Phone</span>
              <Link className='text-bold' href={'/'}>+1234567890</Link>
            </div>
          </div>
        </div>

        <Table />

      </div>
    </section>
  )
}

export default Page