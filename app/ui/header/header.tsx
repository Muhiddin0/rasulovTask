'use client';

import React, { useEffect, useState } from 'react';

// *** Components ***
import Logo from '../logo';
import Searching from './components/searching';
import { Controls } from './components/controls';

// Theme button
import DayNightToggle from 'react-day-and-night-toggle';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="">
      <div className="container flex flex-wrap items-center justify-center gap-4 !py-5 dark:text-slate-50 sm:justify-between">
        <div className="inline-flex w-full items-center justify-between sm:w-auto">
          <Logo />
          <DayNightToggle
            shadows={false}
            onChange={toggleTheme}
            checked={isDarkMode}
            className="block sm:hidden"
          />
        </div>

        <Searching />
        <Controls isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};
