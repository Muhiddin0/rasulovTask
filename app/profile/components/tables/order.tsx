import Link from 'next/link';
import React from 'react'

import { IoMdCheckmark } from "react-icons/io";

type Props = {}

export const OrderTable = (props: Props) => {
    return (
        <table className="checkout-table mt-10 w-full ">
            <thead>
                <tr>
                    <th className='uppercase text-start'>order</th>
                    <th className='uppercase text-start'>STATUS</th>
                    <th className='uppercase text-start'>DELIVERY METHOD</th>
                    <th className='uppercase text-start'>DATE</th>
                    <th className='uppercase text-start'>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text-blue-500'>
                        <Link href={'/'}>Fitbit Sense Advanced Smartwatch</Link>
                    </td>
                    <td className=''>
                        <div className='flex'>
                            <span className='flex items-center gap-1 rounded-md text-sm bg-blue-500 text-white py-1 px-2'>
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className='text-sm'>Cash on delivery</td>
                    <td className='text-sm'>Dec 12, 12:56 PM</td>
                    <td className='text-sm'>$87</td>
                </tr>
                <tr>
                    <td className='text-blue-500'>
                        #2453
                    </td>
                    <td className=''>
                        <div className='flex'>
                            <span className='flex items-center gap-1 rounded-md text-sm bg-blue-500 text-white py-1 px-2'>
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className='text-sm'>Cash on delivery</td>
                    <td className='text-sm'>Dec 12, 12:56 PM</td>
                    <td className='text-sm'>$87</td>
                </tr>
                <tr>
                    <td className='text-blue-500'>
                        #2453
                    </td>
                    <td className=''>
                        <div className='flex'>
                            <span className='flex items-center gap-1 rounded-md text-sm bg-blue-500 text-white py-1 px-2'>
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className='text-sm'>Cash on delivery</td>
                    <td className='text-sm'>Dec 12, 12:56 PM</td>
                    <td className='text-sm'>$87</td>
                </tr>
                <tr>
                    <td className='text-blue-500'>
                        #2453
                    </td>
                    <td className=''>
                        <div className='flex'>
                            <span className='flex items-center gap-1 rounded-md text-sm bg-blue-500 text-white py-1 px-2'>
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className='text-sm'>Cash on delivery</td>
                    <td className='text-sm'>Dec 12, 12:56 PM</td>
                    <td className='text-sm'>$87</td>
                </tr>
            </tbody>
        </table>
    )
}