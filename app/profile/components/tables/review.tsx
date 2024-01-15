import React from 'react'

import { IoMdCheckmark } from "react-icons/io";

type Props = {}

export const OrderTable = (props: Props) => {
    return (
        <table className="checkout-table mt-10 w-full ">
            <thead>
                <tr>
                    <th className='uppercase text-start'>products</th>
                    <th className='uppercase text-start'>rating</th>
                    <th className='uppercase text-start'>review</th>
                    <th className='uppercase text-start'>status</th>
                    <th className='uppercase text-start'>data</th>
                </tr>
            </thead>
            <tbody>
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