import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/images/logo.png';

const Logo = () => {
  return (
    <Link href={'/'} className="gap flex items-center gap-2">
      <Image width={160} src={logo} alt="" />
    </Link>
  );
};

export default Logo;
