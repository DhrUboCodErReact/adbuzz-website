'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const consentCookieName = 'adbuzz-cookie-consent';
const consentMaxAge = 60 * 60 * 24 * 365;

function hasSavedConsent() {
  return document.cookie.split('; ').some((item) => item.startsWith(`${consentCookieName}=`));
}

function saveConsent(value: 'accepted' | 'rejected') {
  document.cookie = `${consentCookieName}=${value}; Max-Age=${consentMaxAge}; Path=/; SameSite=Lax`;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!hasSavedConsent());
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleConsent = (value: 'accepted' | 'rejected') => {
    saveConsent(value);
    setIsVisible(false);
  };

  return (
    <section
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-5 py-4 backdrop-blur-sm md:px-8"
      role="region"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p id="cookie-consent-title" className="text-sm font-semibold">
            We use cookies
          </p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            We use essential cookies to keep this site working and optional analytics cookies to
            understand website use. Read our{' '}
            <Link className="font-medium text-foreground underline underline-offset-4" href="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={() => handleConsent('rejected')}>
            Reject optional
          </Button>
          <Button onClick={() => handleConsent('accepted')}>Accept all</Button>
        </div>
      </div>
    </section>
  );
}
