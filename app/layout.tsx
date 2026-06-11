import './globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';
import { Merriweather, Poppins, Roboto } from 'next/font/google';

import { Toaster } from '@/app/_components/ui/sonner';
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

const merriweather = Merriweather({
  subsets: ['latin-ext'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
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
      className={cn(
        'antialiased',
        poppins.variable,
        roboto.variable,
        merriweather.variable,
      )}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <TanstackProvider>
          <HeaderComponent />
          <main className="flex-1">{children}</main>
          <FooterComponent />
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </TanstackProvider>
      </body>
    </html>
  );
}
