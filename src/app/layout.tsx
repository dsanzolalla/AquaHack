import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { MainLayout } from '@/components/layout/main-layout';
import { Toaster } from '@/components/ui/toaster';
import { FlowiseChatbot } from '@/components/flowise-chatbot';
import { TranslationsProvider } from '@/hooks/use-translations';

import { DataProvider } from '@/hooks/use-data';

export const metadata: Metadata = {
  title: 'AquaHack',
  description: 'Reporting water contamination issues instantly.',

  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <TranslationsProvider>
          <DataProvider>
            <MainLayout>{children}</MainLayout>
            <FlowiseChatbot />
            <Toaster />
          </DataProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
