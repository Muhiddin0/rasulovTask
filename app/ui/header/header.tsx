import React from 'react';

// *** Components ***
import Logo from '../logo';
import Searching from './components/searching';
import { Controls } from './components/controls';

export const Header = () => {
  return (
    <header className="">
      <div className="container flex flex-wrap items-center justify-center gap-4 !py-5 dark:text-slate-50 sm:justify-between">
        <Logo />
        <Searching />
        <Controls />
      </div>
    </header>
  );
};
