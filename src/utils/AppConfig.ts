import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS } from '@clerk/localizations';
import type { LocalizationResource } from '@clerk/shared/types';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'AdBuzz Digital',
  i18n: { locales: ['en'], defaultLocale: 'en', localePrefix },
};

export const ClerkLocalizations: { defaultLocale: LocalizationResource; supportedLocales: Record<string, LocalizationResource> } = { defaultLocale: enUS, supportedLocales: { en: enUS } };
