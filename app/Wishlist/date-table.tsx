import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// *** Assets ***
import pc from '@/assets/images/pc.png';

// *** Icons ***
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {};

export const DataTable = (props: Props) => {
  return (
    <div className="my-6 w-full">
      <table className="w-full">
        <thead>
          <tr className="border-y-[1px] border-slate-400">
            <td></td>
            <td>PRODUCTS</td>
            <td>COLOR</td>
            <td>SIZE</td>
            <td>PRICE</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white shadow-md shadow-md shadow-blue-500 shadow-blue-500 transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white shadow-md shadow-blue-500 transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="table-style">
              <Image
                className="rounded-md border-[1px] border-slate-300 p-2"
                width={50}
                height={50}
                src={pc}
                alt=""
              />
            </td>
            <td className="table-style">
              <Link className="text-blue-500" href="/">
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </td>
            <td className="table-style">Pure matte black</td>
            <td className="table-style">42</td>
            <td className="table-style">$23</td>
            <td className="flex items-center justify-end gap-2 border-b-[1px] border-slate-300 py-4">
              <button className="text-slate-500 transition-all hover:opacity-80">
                <MdDelete size={25} />
              </button>
              <button className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition-all hover:opacity-80">
                <MdOutlineShoppingCart />
                <span>add to card</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-8">
          <p>
            <b>1</b> to 5 items of <b>9</b>
          </p>
          <Link className="flex items-center gap-1 text-blue-500" href={'/'}>
            <span>View all</span>
            <span>
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button className="rotate-180">
            <IoIosArrowForward />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-blue-500 p-2 text-white">
              1
            </div>
            <div className="rounded-md p-2">2</div>
            <div className="rounded-md p-2">3</div>
            <div className="rounded-md p-2">4</div>
          </div>

          <button>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
