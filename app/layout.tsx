import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/organisms/header';
import { Footer } from '@/components/organisms/footer';
import './globals.css';

/**
 * Roobert - Primary font
 * Place font files in app/fonts/ directory
 */
const roobert = localFont({
  src: [
    {
      path: './fonts/RoobertTRIAL-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/RoobertTRIAL-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/RoobertTRIAL-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/RoobertTRIAL-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-roobert',
});

/**
 * Neue Montreal - Secondary font
 * Place font files in app/fonts/ directory
 */
const neueMontreal = localFont({
  src: [
    {
      path: './fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Moniveo',
    default: 'Moniveo',
  },
  description: '',
  keywords: [],
  authors: [{ name: 'Moniveo Team' }],
  creator: 'Moniveo',
  publisher: 'Moniveo',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {},
  twitter: {},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roobert.variable} ${neueMontreal.variable} antialiased`}>
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
