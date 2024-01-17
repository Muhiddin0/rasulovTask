import React from 'react';
import Logo from '../logo';
import Link from 'next/link';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <>
      <footer className="bg-slate-200 py-16 dark:bg-[#141824] dark:text-slate-300">
        <div className="container">
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-8 2xl:col-span-4">
              <Logo />
              <p className="mt-3">
                Phoenix is an admin dashboard template with fascinating features
                and amazing layout. The template is responsive to all major
                browsers and is compatible with all available devices and screen
                sizes.
              </p>
            </div>
            <div className="col-span-8 px-3 sm:col-span-4 md:col-span-2 2xl:col-span-1">
              <b>About Phoenix</b>
              <ul className="mt-2">
                <li>
                  <Link href={'/'}>Careers</Link>
                </li>
                <li>
                  <Link href={'/'}>Affiliate Program</Link>
                </li>
                <li>
                  <Link href={'/'}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={'/'}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-8 px-3 sm:col-span-4 md:col-span-2 2xl:col-span-1">
              <b>About Phoenix</b>
              <ul className="mt-2">
                <li>
                  <Link href={'/'}>Careers</Link>
                </li>
                <li>
                  <Link href={'/'}>Affiliate Program</Link>
                </li>
                <li>
                  <Link href={'/'}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={'/'}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-8 px-3 sm:col-span-4 md:col-span-2 2xl:col-span-1">
              <b>About Phoenix</b>
              <ul className="mt-2">
                <li>
                  <Link href={'/'}>Careers</Link>
                </li>
                <li>
                  <Link href={'/'}>Affiliate Program</Link>
                </li>
                <li>
                  <Link href={'/'}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={'/'}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-8 px-3 sm:col-span-4 md:col-span-2 2xl:col-span-1">
              <b>About Phoenix</b>
              <ul className="mt-2">
                <li>
                  <Link href={'/'}>Careers</Link>
                </li>
                <li>
                  <Link href={'/'}>Affiliate Program</Link>
                </li>
                <li>
                  <Link href={'/'}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={'/'}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
