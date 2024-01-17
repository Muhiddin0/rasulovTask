import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// *** Icons ***
import { IoMdCheckmark } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { LuShoppingCart } from 'react-icons/lu';

// *** Images ***
import pc from '@/assets/images/pc.png';

type Props = {};

export const Wishlist = (props: Props) => {
  return (
    <table className="checkout-table mt-10 w-full ">
      <thead>
        <tr>
          <th className="text-start uppercase">products</th>
          <th className="text-start uppercase">color</th>
          <th className="text-start uppercase">size</th>
          <th className="text-start uppercase">price</th>
          <th className="text-start uppercase"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-blue-500">
            <div className="flex items-center gap-3">
              <Image
                width={50}
                height={50}
                className="rounded-md border-[1px] border-slate-400 object-contain p-2"
                src={pc}
                alt=""
              />
              <Link className="text-sm text-blue-500" href={'/'}>
                Fitbit Sense Advanced Smartwatch with
              </Link>
            </div>
          </td>
          <td className="text-sm">Pure matte black</td>
          <td className="text-sm">42</td>
          <td className="text-sm">$87</td>
          <td className="text-sm">
            <div className="flex items-center justify-end gap-4 transition-all hover:opacity-80">
              <button className="text-slate-500">
                <MdDelete size={20} />
              </button>
              <button className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-all hover:!bg-blue-300">
                <LuShoppingCart />
                Add to card
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
