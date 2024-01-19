'use client';

// components/ActiveLink.js
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const ActiveLink = ({
  href,
  children,
  handleToggleCateogry,
}: {
  href: string;
  children: string;
  handleToggleCateogry: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={clsx('transition-all hover:text-blue-300', {
        'text-blue-500': isActive,
      })}
      href={href}
      onClick={handleToggleCateogry}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
