import React from 'react';
import NextBreadcrumb from '../ui/Breadcrump';
import Image from 'next/image';

// *** Assets ***
import pc from '@/assets/images/pc.png';

// *** Icons ***
import { CiUser } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlinePhone } from 'react-icons/md';
import Link from 'next/link';

type Props = {};

const Page = (props: Props) => {
  return (
    <section>
      <div className="container !py-10 dark:text-slate-500">
        <div>
          <NextBreadcrumb
            capitalizeLinks
            activeClasses="bradcrump-active"
            separator={''}
            homeElement={'Home'}
          />
          <h1 className="mt-2 text-2xl font-bold">Order #234 Status</h1>
        </div>

        <div className="grid w-full grid-cols-5 gap-x-2 gap-y-6">
          <div className="col-span-5 my-4 lg:col-span-3">
            <div>
              <h1 className="text-2xl font-bold">Shipping Details</h1>
              <table className="checkout-table mt-4 w-full ">
                <thead>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>
                          <CiUser />
                        </span>
                        <b>Name</b>
                      </div>
                    </td>
                    <td>:</td>
                    <td>Shatinon Mekalan</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>
                          <CiLocationOn />
                        </span>
                        <b>Address</b>
                      </div>
                    </td>
                    <td>:</td>
                    <td>
                      Apt: 6/B, 192 Edsel Road, Van Nuys California, USA 96580
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>
                          <MdOutlinePhone />
                        </span>
                        <b>Address</b>
                      </div>
                    </td>
                    <td>:</td>
                    <td>818-414-4092</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-6">
              <hr />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Shipping Details</h1>
              <table className="checkout-table mt-4 w-full ">
                <thead>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>
                          <CiUser />
                        </span>
                        <b>Name</b>
                      </div>
                    </td>
                    <td>:</td>
                    <td>Shatinon Mekalan</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>
                          <CiLocationOn />
                        </span>
                        <b>Address</b>
                      </div>
                    </td>
                    <td>:</td>
                    <td>
                      Apt: 6/B, 192 Edsel Road, Van Nuys California, USA 96580
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <span>
                          <MdOutlinePhone />
                        </span>
                        <b>Address</b>
                      </div>
                    </td>
                    <td>:</td>
                    <td>818-414-4092</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-6">
              <hr />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Delivery Type</h1>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex gap-2">
                  <input type="radio" />
                  <div>
                    <b>Free Shipping $0.00</b>
                    <p className="mt-4">Est. delivery: $Jun 21 – Jul 20</p>
                    <Link className="text-blue-500" href={'/'}>
                      Get Free Shipped products in Time!
                    </Link>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input type="radio" />
                  <div>
                    <b>Free Shipping $0.00</b>
                    <p className="mt-4">Est. delivery: $Jun 21 – Jul 20</p>
                    <Link className="text-blue-500" href={'/'}>
                      Get Free Shipped products in Time!
                    </Link>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input type="radio" />
                  <div>
                    <b>Free Shipping $0.00</b>
                    <p className="mt-4">Est. delivery: $Jun 21 – Jul 20</p>
                    <Link className="text-blue-500" href={'/'}>
                      Get Free Shipped products in Time!
                    </Link>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input type="radio" />
                  <div>
                    <b>Free Shipping $0.00</b>
                    <p className="mt-4">Est. delivery: $Jun 21 – Jul 20</p>
                    <Link className="text-blue-500" href={'/'}>
                      Get Free Shipped products in Time!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
