import { NextIntlClientProvider } from 'next-intl';
import { routing } from '../../i18n/routing';
import getRequestConfig from '../../i18n/request';

import "../../globals.css";

export const metadata = {
  title: "Институт Информационных Фундаментальных Наук",
  description: "ИИФН - здесь собрано все, что вам нужно узнать о нас!",
};

export async function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}) {
  const { locale } = await params;
  // const typedLocale = locale[number];
  const { messages } = await getRequestConfig({
    requestLocale: Promise.resolve(locale),
  }); 

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
