import Link from 'next/link';
import Image from 'next/image';

// *** Components ***
import NextBreadcrumb from '../../ui/Breadcrump';
import { Detailing } from '../../ui/detailing/detailing';
import { More } from '../../ui/more/more';
import { SmilerProducts } from '../../ui/smiler-products/smiler-products';
import MySwiper from '@/app/ui/slider/slider';

export default function Page() {
  return (
    <>
      <div className="container !mb-4 !mt-6 dark:text-slate-300 ">
        <NextBreadcrumb
          capitalizeLinks
          activeClasses="bradcrump-active"
          separator={''}
          homeElement={'home'}
        />
      </div>
      <Detailing />
      <More />
      <MySwiper />
      {/* <SmilerProducts /> */}
    </>
  );
}
