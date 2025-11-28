import { NextResponse } from 'next/server';

const LOCALES = ['kz', 'ru', 'en'];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const localeInPath = pathname.split('/')[1];
  
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => locale !== localeInPath
  );

  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/kz${pathname}`;
    const res = NextResponse.redirect(url);
    res.headers.set('x-next-intl-locale', 'kz');
    return res;
  }

  const res = NextResponse.next();
  res.headers.set('x-next-intl-locale', localeInPath);

  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'
  ]
};