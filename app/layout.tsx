import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Technocrats.info - IT Solutions for Business Growth',
  description: 'We deliver cutting-edge IT solutions that empower businesses to thrive in a digital world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
     
      <body

        className={cn(
          'min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900',
          fontSans.variable
        )}
      >
         <Header />
        {children}
      </body>
    </html>
  );
}