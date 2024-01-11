'use client';

import React, { useState } from 'react';

import { Description } from '../detailing/components/description';
import { UsulyProducts } from '../detailing/components/usulyProducts';
import { Specificator } from '../detailing/components/specificator/specificator';
import { Reviews } from '../detailing/components/reviews/reviews';

// *** utils ***
import clsx from 'clsx';

type Props = {};

export const More = (props: Props) => {
  const [activeComponent, setActiveComponent] = useState<number>(1);

  return (
    <section>
      <div className="container dark:text-slate-300">
        <ul className="my-4 flex flex-wrap gap-3 font-bold">
          <li
            onClick={() => setActiveComponent(1)}
            className={clsx('more-item cursor-pointer', {
              active: activeComponent === 1,
            })}
          >
            Description
          </li>
          <li
            onClick={() => setActiveComponent(2)}
            className={clsx('more-item cursor-pointer', {
              active: activeComponent === 2,
            })}
          >
            Specification
          </li>
          <li
            onClick={() => setActiveComponent(3)}
            className={clsx('more-item cursor-pointer', {
              active: activeComponent == 3,
            })}
          >
            Ratings & reviews
          </li>
        </ul>

        <div className="!my-8 grid grid-cols-6 grid-rows-1 gap-4">
          <div className="col-span-6 my-4 xl:col-span-4">
            {activeComponent == 1 && <Description />}
            {activeComponent == 2 && <Specificator />}
            {activeComponent == 3 && <Reviews />}
          </div>
          <div className="order-[-2] col-span-6 xl:order-[2] xl:col-span-2 xl:px-6">
            <UsulyProducts />
          </div>
        </div>
      </div>
    </section>
  );
};
