'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BrandLoader } from '@/components/BrandLoader';

const minimumNavigationLoaderTime = 350;
const navigationFallbackTime = 5000;

export function PageLoadGate(props: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const navigationStartedAtRef = useRef<number | null>(null);

  useEffect(() => {
    let documentReady = document.readyState === 'complete';
    const heroVideo = document.querySelector<HTMLVideoElement>('[data-brand-hero-video]');
    let heroReady = !heroVideo || heroVideo.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;
    const reveal = () => {
      if (documentReady && heroReady) setIsLoading(false);
    };
    const onDocumentLoad = () => {
      documentReady = true;
      reveal();
    };
    const onVideoReady = () => {
      heroReady = true;
      reveal();
    };
    const fallbackTimer = window.setTimeout(() => setIsLoading(false), 3000);

    window.addEventListener('load', onDocumentLoad, { once: true });
    heroVideo?.addEventListener('canplay', onVideoReady, { once: true });
    reveal();

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener('load', onDocumentLoad);
      heroVideo?.removeEventListener('canplay', onVideoReady);
    };
  }, []);

  useEffect(() => {
    const startNavigation = () => {
      navigationStartedAtRef.current = performance.now();
      setIsLoading(true);
      window.setTimeout(() => {
        if (navigationStartedAtRef.current) {
          navigationStartedAtRef.current = null;
          setIsLoading(false);
        }
      }, navigationFallbackTime);
    };
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      if (destination.origin !== current.origin || (destination.pathname === current.pathname && destination.search === current.search)) return;
      startNavigation();
    };

    document.addEventListener('click', onDocumentClick, true);
    window.addEventListener('popstate', startNavigation);
    return () => {
      document.removeEventListener('click', onDocumentClick, true);
      window.removeEventListener('popstate', startNavigation);
    };
  }, []);

  useEffect(() => {
    const startedAt = navigationStartedAtRef.current;
    if (!startedAt) return;
    const remainingTime = Math.max(0, minimumNavigationLoaderTime - (performance.now() - startedAt));
    const finishTimer = window.setTimeout(() => {
      navigationStartedAtRef.current = null;
      setIsLoading(false);
    }, remainingTime);
    return () => window.clearTimeout(finishTimer);
  }, [pathname]);

  return <>{props.children}{isLoading ? <BrandLoader /> : null}</>;
}
