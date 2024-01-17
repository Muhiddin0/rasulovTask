'use client';

import React from 'react';
import NextBreadcrumb from '../ui/Breadcrump';
import Link from 'next/link';

// *** Icons ***
import { IoMdCall } from 'react-icons/io';

// *** Components ***
import { ListItem } from './list-item';

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

type Props = {};

const Page = (props: Props) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <section>
      <div className="container !py-10 dark:text-slate-500">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <NextBreadcrumb
              capitalizeLinks
              activeClasses="bradcrump-active"
              separator={''}
              homeElement={'Home'}
            />
            <h1 className="mt-2 text-2xl font-bold">Order #234 Status</h1>
            <p>
              Payment Via{' '}
              <Link className="text-blue-500" href={'/'}>
                Cash on delivery
              </Link>{' '}
              ,Nov 12, 2021, 8:54AM.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-md border-[1px] border-blue-500 px-4 py-2 text-blue-500 ">
            <span>
              <IoMdCall />
            </span>
            <span>Call Support</span>
          </button>
        </div>

        <div className="my-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyCLf_fM1Kb9rZhY_iGB01i95wy5bsvDmwE',
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent text="My Marker" />
            </GoogleMapReact>
          </div>
          <div className="flex flex-col gap-0">
            <ListItem
              data="23 August, 2023"
              time="10:30 AM"
              param="Your package is ready for the seller to prepare."
              title="Order is processing"
              icon={<IoMdCall />}
              color="green"
            />
            <ListItem
              data="23 August, 2023"
              time="10:30 AM"
              param="Your package is ready for the seller to prepare."
              title="Order is processing"
              icon={<IoMdCall />}
              color="green"
            />
            <ListItem
              data="23 August, 2023"
              time="10:30 AM"
              param="Your package is ready for the seller to prepare."
              title="Order is processing"
              icon={<IoMdCall />}
              color="green"
            />
            <ListItem
              data="23 August, 2023"
              time="10:30 AM"
              param="Your package is ready for the seller to prepare."
              title="Order is processing"
              icon={<IoMdCall />}
              color="green"
            />
            <ListItem
              data="23 August, 2023"
              time="10:30 AM"
              param="Your package is ready for the seller to prepare."
              title="Order is processing"
              icon={<IoMdCall />}
              color="green"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
