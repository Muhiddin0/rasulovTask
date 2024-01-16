"use client"

import React, { useState } from 'react'

// *** Icons ***
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { OrderTable } from './tables/order';
import { ReviewTable } from './tables/review';
import { Wishlist } from './tables/wishlist';
import { PersonalInfo } from './personal-info';
import clsx from 'clsx';


type Props = {}

export const Table = (props: Props) => {

    const [activeTable, setActiveTable] = useState<number>(1)
    
    return (
        <div className='mt-12'>
            <div className='flex gap-x-10 gap-y-4 flex-wrap'>
                <button onClick={() => setActiveTable(1)} className={clsx('flex items-center gap-2',{
                    "text-blue-500 transition-all": activeTable == 1
                })}>
                    <LuShoppingCart />
                    <span className='flex items-center'>
                        <b>Order</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button onClick={() => setActiveTable(2)} className={clsx('flex items-center gap-2',{
                    "text-blue-500 transition-all": activeTable == 2
                })}>
                    <FaStar />
                    <span className='flex items-center'>
                        <b>Reviews</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button onClick={() => setActiveTable(3)} className={clsx('flex items-center gap-2',{
                    "text-blue-500 transition-all": activeTable == 3
                })}>
                    <FaHeart />
                    <span className='flex items-center'>
                        <b>Wishlist</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button  onClick={() => setActiveTable(4)} className={clsx('flex items-center gap-2',{
                    "text-blue-500 transition-all": activeTable == 4
                })}>
                    <FaHome />
                    <span className='flex items-center'>
                        <b>Store</b>
                        <p>(43)</p>
                    </span>
                </button>
                <button  onClick={() => setActiveTable(5)} className={clsx('flex items-center gap-2',{
                    "text-blue-500 transition-all": activeTable == 5
                })}>
                    <IoMdPerson />
                    <span className='flex items-center'>
                        <b>Personal info</b>
                        <p>(43)</p>
                    </span>
                </button>
            </div>
            {activeTable == 1 && <OrderTable />}
            {activeTable == 2 && <ReviewTable />}
            {activeTable == 3 && <Wishlist />}
            {activeTable == 4 && <Wishlist />}
            {activeTable == 5 && <PersonalInfo />}
        </div>
    )
}