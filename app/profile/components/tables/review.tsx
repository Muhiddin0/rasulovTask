import Link from 'next/link';
import React from 'react';

import { IoMdCheckmark } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { MoreButton } from '@/app/ui/common/morebutton';

type Props = {};

export const ReviewTable = (props: Props) => {
    return (
        <table className="checkout-table mt-10 w-full ">
            <thead>
                <tr>
                    <th className="text-start uppercase">products</th>
                    <th className="text-start uppercase">rating</th>
                    <th className="text-start uppercase">review</th>
                    <th className="text-start uppercase">status</th>
                    <th className="text-start uppercase">data</th>
                    <th className="text-start uppercase"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Link className="text-sm text-blue-500" href={'/'}>
                            Fitbit Sense Advanced Smartwatch with Tools fo...
                        </Link>
                    </td>
                    <td className="">
                        <div className="flex gap-1 text-orange-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </td>
                    <td className="text-sm">
                        This Fitbit is fantastic! I was trying to be in better shape and
                        needed some motivation, so I decided to treat myself to a new
                        Fitbit.
                    </td>
                    <td className="text-sm">
                        <div className="flex">
                            <span className="flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className="text-sm text-center">$87</td>
                    <td className="text-sm text-center">
                        <MoreButton />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link className="text-sm text-blue-500" href={'/'}>
                            Fitbit Sense Advanced Smartwatch with Tools fo...
                        </Link>
                    </td>
                    <td className="">
                        <div className="flex gap-1 text-orange-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </td>
                    <td className="text-sm">
                        This Fitbit is fantastic! I was trying to be in better shape and
                        needed some motivation, so I decided to treat myself to a new
                        Fitbit.
                    </td>
                    <td className="text-sm">
                        <div className="flex">
                            <span className="flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className="text-sm text-center">$87</td>
                    <td className="text-sm text-center">
                        <MoreButton />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link className="text-sm text-blue-500" href={'/'}>
                            Fitbit Sense Advanced Smartwatch with Tools fo...
                        </Link>
                    </td>
                    <td className="">
                        <div className="flex gap-1 text-orange-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </td>
                    <td className="text-sm">
                        This Fitbit is fantastic! I was trying to be in better shape and
                        needed some motivation, so I decided to treat myself to a new
                        Fitbit.
                    </td>
                    <td className="text-sm">
                        <div className="flex">
                            <span className="flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className="text-sm text-center">$87</td>
                    <td className="text-sm text-center">
                        <MoreButton />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link className="text-sm text-blue-500" href={'/'}>
                            Fitbit Sense Advanced Smartwatch with Tools fo...
                        </Link>
                    </td>
                    <td className="">
                        <div className="flex gap-1 text-orange-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </td>
                    <td className="text-sm">
                        This Fitbit is fantastic! I was trying to be in better shape and
                        needed some motivation, so I decided to treat myself to a new
                        Fitbit.
                    </td>
                    <td className="text-sm">
                        <div className="flex">
                            <span className="flex items-center gap-1 rounded-md bg-blue-500 px-2 py-1 text-sm text-white">
                                shipped
                                <IoMdCheckmark />
                            </span>
                        </div>
                    </td>
                    <td className="text-sm text-center">$87</td>
                    <td className="text-sm text-center">
                        <MoreButton />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
