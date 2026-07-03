import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PARENT_BRAND, PRODUCT_NAME, TAGLINE, publicUrl } from '@/lib/site';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl('/')),
  title: {
    default: `${PRODUCT_NAME} by ${PARENT_BRAND} — ${TAGLINE}`,
    template: `%s | ${PRODUCT_NAME}`
  },
  description:
    'CauseBrief prepares a polished campaign package from one structured brief — emails, social posts, landing page copy, flyer copy, press release, subject lines, CTAs, and a posting schedule. Prepared and human-reviewed by Racoben, delivered within 48 hours.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-icon.png'
  }
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf6ef'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
      </body>
    </html>
  );
}
