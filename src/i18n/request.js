import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { notFound } from 'next/navigation';

const NAMESPACES = [
  'common',
  'home',
  'header',
  'footer',
  'aboutUs',
  'conferences',
  'journals',
  'notFound'
];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? routing.defaultLocale;

  if (!routing.locales.includes(locale)) notFound();

  const messages = {};

  await Promise.all(
    NAMESPACES.map(async (ns) => {
      try {
        const mod = await import(`../../public/locales/${locale}/${ns}.json`);
        messages[ns] = mod.default ?? {};
      } catch (e) {
        messages[ns] = {};
      }
    })
  );

  return {
    locale,
    messages,
  };
});
