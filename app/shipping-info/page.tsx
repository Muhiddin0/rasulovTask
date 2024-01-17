import React from 'react';
import NextBreadcrumb from '../ui/Breadcrump';
import Image from 'next/image';

// *** Assets ***
import pc from '@/assets/images/pc.png';

type Props = {};

const Page = (props: Props) => {
  return (
    <section>
      <div className="container !py-12 dark:text-slate-500">
        <div>
          <NextBreadcrumb
            capitalizeLinks
            activeClasses="bradcrump-active"
            separator={''}
            homeElement={'Home'}
          />
          <h1 className="mt-2 text-2xl font-bold">Check out</h1>
        </div>
        <div className="grid w-full grid-cols-5 gap-x-2 gap-y-6">
          <form className="col-span-5 my-4 lg:col-span-3" action="">
            <div className="my-4 flex flex-col gap-2 md:flex-row">
              <label className="flex-grow-[1]" htmlFor="">
                <b>First name</b>
                <input
                  className="mt-1 w-full flex-grow-[1] rounded-md border-[1px] border-slate-300 p-1 dark:bg-gray-900"
                  placeholder="First name"
                  type="email"
                />
              </label>
              <label className="flex-grow-[1]" htmlFor="">
                <b>Last name</b>
                <input
                  className="mt-1 w-full flex-grow-[1] rounded-md border-[1px] border-slate-300 p-1  dark:bg-gray-900"
                  placeholder="Last name"
                  type="text"
                />
              </label>
            </div>

            <label className="my-4 w-full " htmlFor="">
              <b>Addres line 1</b>
              <input
                className="mt-1 w-full rounded-md border-[1px] border-slate-300 p-1  dark:bg-gray-900"
                placeholder="Addres line 1"
                type="text"
              />
            </label>
            <div className="my-4 w-full ">
              <label className="" htmlFor="">
                <b>Addres line 2</b>
                <input
                  className="mt-1 w-full rounded-md border-[1px] border-slate-300 p-1  dark:bg-gray-900"
                  placeholder="Addres line 2"
                  type="text"
                />
              </label>
            </div>

            <div className="col-span-1 my-4 grid gap-4 md:grid-cols-3 ">
              <label className="col-span-1" htmlFor="">
                <b>City</b>
                <select
                  className="mt-1 w-full rounded-md border-[1px] border-slate-300 px-2 py-1  dark:bg-gray-900"
                  name=""
                  id=""
                >
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                </select>
              </label>
              <label className="col-span-1" htmlFor="">
                <b>State</b>
                <select
                  className="mt-1 w-full rounded-md border-[1px] border-slate-300 px-2 py-1  dark:bg-gray-900"
                  name=""
                  id=""
                >
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                </select>
              </label>
              <label className="col-span-1" htmlFor="">
                <b>Zip code</b>
                <select
                  className="mt-1 w-full rounded-md border-[1px] border-slate-300 px-2 py-1  dark:bg-gray-900"
                  name=""
                  id=""
                >
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                </select>
              </label>
            </div>

            <div className="my-4 grid grid-cols-3 gap-4 ">
              <label className="col-span-3 sm:col-span-1" htmlFor="">
                <b>Country</b>
                <select
                  className="mt-1 w-full rounded-md border-[1px] border-slate-300 px-2 py-1 dark:bg-gray-900"
                  name=""
                  id=""
                >
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                  <option value="">value 1</option>
                </select>
              </label>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <button className="min-w-[200px] rounded-md bg-blue-500 p-2 text-center text-white shadow-md shadow-md shadow-blue-500 shadow-blue-500 transition-all hover:opacity-70">
                save
              </button>
              <button className="min-w-[200px] rounded-md border-[1px] border-slate-500 p-2 text-center text-slate-500 transition-all hover:opacity-70">
                exit without save
              </button>
            </div>
          </form>
          <div className="col-span-5 lg:col-span-2 lg:p-8">
            <div className="flex flex-col gap-2 rounded-md border-[1px] border-slate-400 bg-white p-4 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Summary</h1>
                <button className="text-blue-500">Edit card</button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <Image width={50} height={50} src={pc} alt="" />
                  <p className="max-w-[300px] overflow-hidden">
                    Fitbit Sense Advanced Smartwatch with Tools for
                  </p>
                  <p>x1</p>
                  <p>$398</p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Image width={50} height={50} src={pc} alt="" />
                  <p className="max-w-[300px] overflow-hidden">
                    Fitbit Sense Advanced Smartwatch with Tools for
                  </p>
                  <p>x1</p>
                  <p>$398</p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Image width={50} height={50} src={pc} alt="" />
                  <p className="max-w-[300px] overflow-hidden">
                    Fitbit Sense Advanced Smartwatch with Tools for
                  </p>
                  <p>x1</p>
                  <p>$398</p>
                </div>
              </div>

              <div className="my-5">
                <hr />
              </div>

              <ul>
                <li className="flex justify-between text-lg font-bold">
                  <span>Items subtotal:</span>
                  <span>$691</span>
                </li>
                <li className="flex justify-between text-lg font-bold">
                  <span>Discount:</span>
                  <span>$691</span>
                </li>
                <li className="flex justify-between text-lg font-bold">
                  <span>Tax:</span>
                  <span>$691</span>
                </li>
                <li className="flex justify-between text-lg font-bold">
                  <span>Subtotal:</span>
                  <span>$691</span>
                </li>
                <li className="flex justify-between text-lg font-bold">
                  <span>Shipping Cost:</span>
                  <span>$691</span>
                </li>
              </ul>

              <div className="my-5">
                <hr />
              </div>

              <div className="flex justify-between text-2xl font-bold">
                <span>Total:</span>
                <span>$695.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
