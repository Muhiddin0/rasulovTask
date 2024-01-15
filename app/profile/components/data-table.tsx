"use client"

import React, { useState } from 'react'

// *** Icons ***
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { OrderTable } from './tables/order';


type Props = {}

export const Table = (props: Props) => {

    const [activeTable, setActiveTable] = useState<number>(1)
    
    return (
        <div className='mt-12'>
            <div className='flex gap-10'>
                <button className='flex items-center gap-2'>
                    <LuShoppingCart />
                    <span className='flex items-center'>
                        <b>Order</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button className='flex items-center gap-2'>
                    <FaStar />
                    <span className='flex items-center'>
                        <b>Reviews</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button className='flex items-center gap-2'>
                    <FaHeart />
                    <span className='flex items-center'>
                        <b>Wishlist</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button className='flex items-center gap-2'>
                    <FaHome />
                    <span className='flex items-center'>
                        <b>Store</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button className='flex items-center gap-2'>
                    <IoMdPerson />
                    <span className='flex items-center'>
                        <b>Store</b>
                        <p>(43)</p>
                    </span>
                </button>
            </div>
            {activeTable == 1 && <OrderTable />}
            {activeTable == 1 && <OrderTable />}
        </div>
    )
}