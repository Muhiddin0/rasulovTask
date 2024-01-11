import '@/app/ui/global.css';
import { NunitoSans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${NunitoSans.className} bg-[#EFF2F6] antialiased`}>
        {children}
      </body>
    </html>
  );
}
