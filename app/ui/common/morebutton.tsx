import React from 'react'

import { IoIosMore } from "react-icons/io";


type Props = {}

export const MoreButton = (props: Props) => {
  return (
      <button className='py-2 px-3 hover:bg-slate-200 transition-all rounded-md border-[1px] border-transparent hover:border-slate-500 '>
        <IoIosMore />
    </button>
  )
}