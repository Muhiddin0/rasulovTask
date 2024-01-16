import '@/app/ui/global.css';
import '@/app/loader.css';

import { NunitoSans } from '@/app/ui/fonts';
import { Header } from './ui/header/header';
import { Navbar } from './ui/navbar/Navbar';
import { Footer } from './ui/footer/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${NunitoSans.className} bg-[#EFF2F6] antialiased dark:text-slate-100`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
