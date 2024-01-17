import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-regular',
  display: 'swap',
});
export const htRakik = localFont({
  src: './assets/fonts/HTRakik-Bold.woff2',
  variable: '--font-bold',
  display: 'swap',
});
