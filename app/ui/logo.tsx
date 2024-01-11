import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/images/logo.png';

const Logo = () => {
  return (
    <Link href={'/'} className="gap flex items-center gap-2">
      <Image width={30} src={logo} alt="" />
      <strong className="text-lg font-bold text-gray-400">phoenix</strong>
    </Link>
  );
};

export default Logo;
