import { FaRegStar } from 'react-icons/fa';
import { AiTwotoneShopping } from 'react-icons/ai';
import { TiWatch } from 'react-icons/ti';
import { CiMobile3 } from 'react-icons/ci';
import { LiaTvSolid } from 'react-icons/lia';
import { IoHomeOutline } from 'react-icons/io5';
import { LuLamp } from 'react-icons/lu';
import { LiaGiftSolid } from 'react-icons/lia';
import { VscTools } from 'react-icons/vsc';
import { SiYourtraveldottv } from 'react-icons/si';
import { MdOtherHouses } from 'react-icons/md';

export type TCatalog = {
  title: string;
  icon: string;
  link: string;
};

export const catalogItem: TCatalog[] = [
  {
    icon: FaRegStar,
    link: 'Deals',
    title: 'products?category=deals',
  },
  {
    icon: AiTwotoneShopping,
    link: 'Grecoreu',
    title: 'products?category=Grecoreu',
  },
  {
    icon: TiWatch,
    link: 'Fashion',
    title: 'products?category=Fashion',
  },
  {
    icon: CiMobile3,
    link: 'Mobile',
    title: 'products?category=Mobile',
  },
  {
    icon: LiaTvSolid,
    link: 'Electronic',
    title: 'products?category=Electronic',
  },
  {
    icon: IoHomeOutline,
    link: 'Home',
    title: 'products?category=Home',
  },
  {
    icon: LuLamp,
    link: 'Dining',
    title: 'products?category=Dining',
  },
  {
    icon: LiaGiftSolid,
    link: 'Gifts',
    title: 'products?category=Gifts',
  },
  {
    icon: VscTools,
    link: 'Tools',
    title: 'products?category=Tools',
  },
  {
    icon: SiYourtraveldottv,
    link: 'Travel',
    title: 'products?category=Travel',
  },
  {
    icon: MdOtherHouses,
    link: 'Other',
    title: 'products?category=Other',
  },
];
