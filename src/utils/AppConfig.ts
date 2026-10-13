import type { LocalePrefixMode } from 'next-intl/routing';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'AdBuzz Digital',
  i18n: { locales: ['en'], defaultLocale: 'en', localePrefix },
};
