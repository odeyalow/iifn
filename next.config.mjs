import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

const nextConfig = {
  reactCompiler: true,
  output: 'standalone'
};

export default withNextIntl(nextConfig);