import clsx from 'clsx';
import React from 'react';

type Props = {
  data: string;
  time: string;
  title: string;
  param: string;
  icon: any;
  color: string;
};

export const ListItem = ({ data, param, time, title, color, icon }: Props) => {
  return (
    <div className="flex gap-6">
      <div className="hidden lg:block">
        <p className="text-end text-sm text-slate-500">{data}</p>
        <p className="text-end">{time}</p>
      </div>
      <div className="relative order-[-2] h-[100px] pt-4 lg:order-none">
        <span
          className={`absolute right-[-12px] top-[0%] z-40 flex h-[25px] w-[25px] items-center justify-center rounded-full text-white bg-${color}-500`}
        >
          {icon}
        </span>
        <p
          className={`relative h-full w-[1px] border-[1px] border-${color}-500`}
        ></p>
      </div>
      <div className="w-full">
        <h1 className="text-lg font-bold">{title}</h1>
        <p>{param}</p>

        <div className="block lg:hidden">
          <p className="text-end text-sm text-slate-500">{data}</p>
          <p className="text-end">{time}</p>
        </div>
      </div>
    </div>
  );
};
