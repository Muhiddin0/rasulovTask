// *** Icons ***
import buss from '@/assets/icons/buss.svg';
import collect from '@/assets/icons/collect.svg';
import cube from '@/assets/icons/cube.svg';
import earth from '@/assets/icons/earth.svg';
import home from '@/assets/icons/home.svg';
import music from '@/assets/icons/music.svg';
import pc from '@/assets/icons/pc.svg';
import toys from '@/assets/icons/toys.svg';
import watcher from '@/assets/icons/watch.svg';

export const navItems: {
  link: string;
  title: string;
  xClass: string;
  yClass: string;
}[] = [
  {
    link: '/',
    title: 'Home',
    xClass: 'hidden min-[350px]:block',
    yClass: 'block min-[350px]:hidden',
  },
  {
    link: '/favorites',
    title: 'My Favorite Stores',
    xClass: 'hidden min-[500px]:block',
    yClass: 'block min-[500px]:hidden',
  },
  {
    link: '/products',
    title: 'Products',
    xClass: 'hidden md:block',
    yClass: 'block md:hidden',
  },
  {
    link: '/shipping-info',
    title: 'Shipping Info',
    xClass: 'hidden lg:block',
    yClass: 'block lg:hidden',
  },
  {
    link: '/track-order',
    title: 'Track order',
    xClass: 'hidden lg:block',
    yClass: 'block lg:hidden',
  },
  {
    link: '/checkout',
    title: 'Checkout',
    xClass: 'hidden lg:block',
    yClass: 'block lg:hidden',
  },
];

export const categoryItems: {
  title: {
    icon: string;
    title: string;
  };
  items: {
    link: string;
    title: string;
  }[];
}[] = [
  {
    title: {
      icon: collect,
      title: 'Collectibles & Art',
    },
    items: [
      {
        link: '',
        title: 'Collectibils',
      },
      {
        link: '',
        title: 'Antiques',
      },
      {
        link: '',
        title: 'Sports memorabilia',
      },
      {
        link: '',
        title: 'Art',
      },
    ],
  },

  {
    title: {
      icon: home,
      title: 'Home & Gardan',
    },
    items: [
      {
        link: '',
        title: 'Yard, Garden & Outdoor',
      },
      {
        link: '',
        title: 'Crafts',
      },
      {
        link: '',
        title: 'Home Improvement',
      },
      {
        link: '',
        title: 'Pet Supplies',
      },
    ],
  },

  {
    title: {
      icon: earth,
      title: 'Sporting Goods',
    },
    items: [
      {
        link: '',
        title: 'Outdoor Sports',
      },
      {
        link: '',
        title: 'Team Sports',
      },
      {
        link: '',
        title: 'Exercise & Fitness',
      },
      {
        link: '',
        title: 'Golf',
      },
    ],
  },

  {
    title: {
      icon: earth,
      title: 'Sporting Goods',
    },
    items: [
      {
        link: '',
        title: 'Outdoor Sports',
      },
      {
        link: '',
        title: 'Team Sports',
      },
      {
        link: '',
        title: 'Exercise & Fitness',
      },
      {
        link: '',
        title: 'Golf',
      },
    ],
  },

  {
    title: {
      icon: earth,
      title: 'Sporting Goods',
    },
    items: [
      {
        link: '',
        title: 'Outdoor Sports',
      },
      {
        link: '',
        title: 'Team Sports',
      },
      {
        link: '',
        title: 'Exercise & Fitness',
      },
      {
        link: '',
        title: 'Golf',
      },
    ],
  },

  {
    title: {
      icon: earth,
      title: 'Sporting Goods',
    },
    items: [
      {
        link: '',
        title: 'Outdoor Sports',
      },
      {
        link: '',
        title: 'Team Sports',
      },
      {
        link: '',
        title: 'Exercise & Fitness',
      },
      {
        link: '',
        title: 'Golf',
      },
    ],
  },

  {
    title: {
      icon: earth,
      title: 'Sporting Goods',
    },
    items: [
      {
        link: '',
        title: 'Outdoor Sports',
      },
      {
        link: '',
        title: 'Team Sports',
      },
      {
        link: '',
        title: 'Exercise & Fitness',
      },
      {
        link: '',
        title: 'Golf',
      },
    ],
  },

  {
    title: {
      icon: earth,
      title: 'Sporting Goods',
    },
    items: [
      {
        link: '',
        title: 'Outdoor Sports',
      },
      {
        link: '',
        title: 'Team Sports',
      },
      {
        link: '',
        title: 'Exercise & Fitness',
      },
      {
        link: '',
        title: 'Golf',
      },
    ],
  },

  {
    title: {
      icon: earth,
      title: 'Sporting Goods',
    },
    items: [
      {
        link: '',
        title: 'Outdoor Sports',
      },
      {
        link: '',
        title: 'Team Sports',
      },
      {
        link: '',
        title: 'Exercise & Fitness',
      },
      {
        link: '',
        title: 'Golf',
      },
    ],
  },
];
