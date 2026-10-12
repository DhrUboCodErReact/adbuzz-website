'use client';

import { Lottie } from 'lottie-react';
import { LoaderCircleIcon } from 'lucide-react';
import animationData from '@/components/adbuzz-loader.json';

export function BrandLoader() {
  return <div className="fixed inset-0 z-[100] flex min-h-[100dvh] w-screen items-center justify-center bg-[var(--paper)] p-6 text-[var(--ink)]" role="status" aria-live="polite">
    <div className="flex flex-col items-center gap-4">
      <Lottie src={animationData} loop className="size-20" aria-hidden="true" />
      <LoaderCircleIcon className="size-5 animate-spin text-[var(--acid)]" aria-hidden="true" />
      <p className="text-xs font-bold tracking-[0.2em] text-[var(--acid)]">LOADING ADBUZZ DIGITAL</p>
    </div>
  </div>;
}
