import Link from 'next/link';
import React from 'react';

import { IoMdCheckmark } from 'react-icons/io';

type Props = {};

export const OrderTable = (props: Props) => {
  return (
    <table className="checkout-table mt-10 w-full ">
      <thead>
        <tr>
          <th className="text-start uppercase">order</th>
          <th className="text-start uppercase">STATUS</th>
          <th className="text-start uppercase">DELIVERY METHOD</th>
          <th className="text-start uppercase">DATE</th>
          <th className="text-start uppercase">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-blue-500">#2453</td>
          <td className="">
            <div className="flex">
              <span className="flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
                shipped
                <IoMdCheckmark />
              </span>
            </div>
          </td>
          <td className="text-sm">Cash on delivery</td>
          <td className="text-sm">Dec 12, 12:56 PM</td>
          <td className="text-sm">$87</td>
        </tr>
        <tr>
          <td className="text-blue-500">#2453</td>
          <td className="">
            <div className="flex">
              <span className="flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
                shipped
                <IoMdCheckmark />
              </span>
            </div>
          </td>
          <td className="text-sm">Cash on delivery</td>
          <td className="text-sm">Dec 12, 12:56 PM</td>
          <td className="text-sm">$87</td>
        </tr>
        <tr>
          <td className="text-blue-500">#2453</td>
          <td className="">
            <div className="flex">
              <span className="flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
                shipped
                <IoMdCheckmark />
              </span>
            </div>
          </td>
          <td className="text-sm">Cash on delivery</td>
          <td className="text-sm">Dec 12, 12:56 PM</td>
          <td className="text-sm">$87</td>
        </tr>
      </tbody>
    </table>
  );
};
