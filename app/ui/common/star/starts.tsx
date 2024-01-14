import React from 'react';
import { FaStar } from 'react-icons/fa6';

type Props = {};

export const Star = (props: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex gap-1 text-orange-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <p className="text-slate-500">(45 people rated)</p>
    </div>
  );
};
