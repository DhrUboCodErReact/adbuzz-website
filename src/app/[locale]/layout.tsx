import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://adbuzzdigital.com'),
  title: { default: 'AdBuzz Digital | Create Buzz. Make Brand.', template: '%s | AdBuzz Digital' },
  description:
    'Digital marketing, creative and website development for ambitious businesses worldwide.',
  icons: { icon: '/brand/favicon-64.png', apple: '/brand/icon-180.png' },
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'AdBuzz Digital' },
  twitter: { card: 'summary' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#ff5a1f' };
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>{props.children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
