import './globals.css';

import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';

import { cn } from '@/app/_lib/utils';

import FooterComponent from './_components/footer';
import HeaderComponent from './_components/header';
import TanstackProvider from './_providers/tanstack-provider';

const poppins = Poppins({
  subsets: ['latin-ext'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin-ext'],
  variable: '--font-roboto',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Bikcraft',
  description:
    'Bikcraft é uma empresa especializada na fabricação de bicicletas personalizadas, oferecendo uma ampla variedade de modelos e opções de customização para atender às necessidades e preferências dos ciclistas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn('antialiased', poppins.variable, roboto.variable)}
    >
      <body className="flex min-h-screen flex-col">
        <TanstackProvider>
          <HeaderComponent />
          <main className="flex-1">{children}</main>
          <FooterComponent />
        </TanstackProvider>
      </body>
    </html>
  );
}
