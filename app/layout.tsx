// Import Swiper styles
import '@/app/ui/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// *** Store install ***
import { Provider } from 'react-redux';
import { store } from './store';

import { NunitoSans } from '@/app/ui/fonts';
import { Header } from './ui/header/header';
import { Navbar } from './ui/navbar/Navbar';
import { Footer } from './ui/footer/footer';
import { ProviderWrapper } from './lib/Provider';

// *** React ***
// import { ProductType } from '@/app/interfaces';
// import { useAppDispatch, useAppSelector } from '@/app/hooks';
// import { fetchProducts } from '@/app/lib/features/products/ActionCreator';
// import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  return (
    <html lang="en">
      <body
        className={`${NunitoSans.className} bg-[#EFF2F6] antialiased dark:text-slate-100`}
      >
        <ProviderWrapper>
          <Header />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
