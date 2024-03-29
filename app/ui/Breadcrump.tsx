// /components/NextBreadcrumb.tsx
'use client';

import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

// *** Icons ***
import { IoIosArrowForward } from 'react-icons/io';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div>
      <ul className="flex items-center gap-0">
        <li className={listClasses}>
          <Link className="flex items-center gap-1" href={'/'}>
            {homeElement}
          </Link>
        </li>
        {pathNames.length > 0 && <IoIosArrowForward />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
