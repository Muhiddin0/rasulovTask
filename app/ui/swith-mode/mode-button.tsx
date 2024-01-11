'use client';

import { useEffect, useState } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a preference for dark mode
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-orange-100 p-2 text-orange-500 transition-all hover:bg-orange-500 hover:text-white dark:bg-blue-50 dark:text-blue-500"
    >
      <IoSunnyOutline size={20} />
    </button>
  );
};
