'use client';

import React, { useState } from 'react';
import { FilterWrapper } from './filterWrapper';

// *** Icons ***
import { GrClose } from 'react-icons/gr';

// *** Items ***
import { filterItems } from './filter-item.data';

type Props = {};

export const Filter = (props: Props) => {
  function toggler() {
    document.querySelector('.filter')?.classList.toggle('active');
  }

  return (
    <div
      className={`absolute left-0 top-0 flex h-screen w-full bg-[var(--transparent)] filter lg:relative lg:h-screen lg:w-[500px] lg:bg-transparent`}
    >
      <div className="flex h-screen w-[300px] flex-col overflow-auto bg-white p-4 dark:bg-gray-900 lg:w-full lg:bg-transparent lg:p-0 lg:dark:bg-transparent">
        <div className="mb-6 flex justify-end lg:hidden">
          <button onClick={toggler}>
            <GrClose size={25} />
          </button>
        </div>

        <h1 className="text-2xl font-bold">Filter</h1>

        {filterItems.map((e, i) => (
          <FilterWrapper height="100px" title={e.title} key={i}>
            <ul>
              {e.items.map((e, i) => (
                <li className="flex items-center gap-2" key={i}>
                  <input id="in-stosk" type="checkbox" value="" />
                  <label htmlFor="">{e}</label>
                </li>
              ))}
            </ul>
          </FilterWrapper>
        ))}
      </div>

      <div onClick={toggler} className="block h-screen w-full lg:hidden"></div>
    </div>
  );
};
