import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// *** Icons ***
import { IoMdCheckmark } from 'react-icons/io'
import { MdDelete } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";

// *** Images ***
import pc from '@/assets/images/pc.png'

type Props = {}

export const Wishlist = (props: Props) => {
  return (
        <table className="checkout-table mt-10 w-full ">
            <thead>
                <tr>
                    <th className='uppercase text-start'>products</th>
                    <th className='uppercase text-start'>color</th>
                    <th className='uppercase text-start'>size</th>
                    <th className='uppercase text-start'>price</th>
                    <th className='uppercase text-start'></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text-blue-500'>
                      <div className='flex gap-3 items-center'>
                          <Image width={50} height={50} className='p-2 object-contain rounded-md border-[1px] border-slate-400' src={pc} alt=''/>
                          <Link className='text-sm text-blue-500' href={'/'}>
                            Fitbit Sense Advanced Smartwatch with
                          </Link>
                        </div>
                    </td>
                    <td className='text-sm'>
                        Pure matte black
                    </td>
                    <td className='text-sm'>42</td>
                    <td className='text-sm'>$87</td>
                  <td className='text-sm'>
                      <div className='flex items-center justify-end gap-4'>
                          <button className='text-slate-500'>
                              <MdDelete size={20} />
                          </button>
                          <button className='flex gap-2 items-center py-2 px-4 rounded-md bg-blue-500 text-white'>
                              <LuShoppingCart />
                              Add to card
                          </button>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
  )
}