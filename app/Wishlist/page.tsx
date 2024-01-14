import React from 'react';
import NextBreadcrumb from '../ui/Breadcrump';
import { DataTable } from './date-table';

type Props = {};

const Page = (props: Props) => {
  return (
    <section>
      <div className="container !py-10 dark:text-slate-50">
        <div>
          <NextBreadcrumb
            capitalizeLinks
            activeClasses="bradcrump-active"
            separator={''}
            homeElement={'Home'}
          />
          <h1 className="mt-2 text-2xl font-bold">Wishlist(43)</h1>
        </div>

        <DataTable />
      </div>
    </section>
  );
};

export default Page;
