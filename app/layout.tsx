import '@/app/ui/global.css';
import { inter, htRakik } from '@/app/ui/fonts';
import { clsx } from 'clsx';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, htRakik.variable, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
