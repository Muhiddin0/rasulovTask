import React from 'react';

// *** Components ***
import Logo from '../logo';
import Searching from './components/searching';
import { Controls } from './components/controls';

export const Header = () => {
  return (
    <header className="">
      <div className="container flex flex-wrap items-center justify-between gap-4 !py-5">
        <Logo />
        <Searching />
        <Controls />
      </div>
    </header>
  );
};
