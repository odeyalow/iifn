import { NextResponse } from 'next/server';

const LOCALES = ['kz', 'ru', 'en'];
const DEFAULT_LOCALE = 'kz';

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(request);

    const redirectPath = `/${locale}${pathname}`;
    const redirectURL = new URL(request.url);
    redirectURL.pathname = redirectPath;
    redirectURL.search = search;

    return NextResponse.redirect(redirectURL);
  }

  return NextResponse.next();
}

function getPreferredLocale(request) {
  const header = request.headers.get('accept-language');
  if (!header) return DEFAULT_LOCALE;

  const accepted = header.split(',').map((l) => l.split(';')[0].trim());
  const matched = accepted.find((lang) =>
    LOCALES.includes(lang.split('-')[0])
  );

  return matched ? matched.split('-')[0] : DEFAULT_LOCALE;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|.*\\..*).*)',
  ],
};
