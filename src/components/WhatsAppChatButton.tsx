'use client';

import { XIcon } from 'lucide-react';
import { useState } from 'react';

const defaultMessage = "Hi AdBuzz Digital, I'm interested in your digital marketing services.";

function WhatsAppIcon(props: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={props.className}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M19.11 17.21c-.17-.09-1-.49-1.16-.54-.16-.06-.28-.09-.4.09-.12.17-.46.54-.57.65-.1.12-.21.13-.38.04a4.66 4.66 0 0 1-1.37-.85 5.16 5.16 0 0 1-.95-1.19c-.1-.17 0-.26.08-.35.08-.08.17-.21.25-.31.09-.1.12-.18.17-.3.06-.12.03-.22-.01-.31-.05-.09-.4-.97-.55-1.33-.15-.35-.3-.3-.4-.3h-.34c-.12 0-.31.04-.47.21-.16.18-.62.61-.62 1.49s.64 1.72.73 1.84c.09.12 1.25 1.9 3.02 2.67.42.18.75.29 1.01.37.43.13.83.11 1.14.07.35-.05 1-.41 1.15-.81.14-.4.14-.74.1-.81-.04-.08-.15-.12-.32-.21Z" />
      <path d="M16 3.2a12.76 12.76 0 0 0-10.94 19.34L3.2 28.8l6.42-1.82A12.8 12.8 0 1 0 16 3.2Zm0 23.25a10.46 10.46 0 0 1-5.33-1.46l-.38-.23-3.81 1.08 1.1-3.71-.25-.38A10.45 10.45 0 1 1 16 26.45Z" />
    </svg>
  );
}

export function WhatsAppChatButton(props: { phoneNumber?: string }) {
  const [isCtaVisible, setIsCtaVisible] = useState(true);
  const phoneNumber = props.phoneNumber?.replace(/\D/g, '');

  if (!phoneNumber) {
    return null;
  }

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
      {isCtaVisible ? (
        <div className="absolute right-0 bottom-[calc(100%+1rem)] w-60 max-w-[calc(100vw-2.5rem)] border border-border bg-background p-4 shadow-lg">
          <button
            aria-label="Dismiss WhatsApp message"
            className="absolute top-2 right-2 rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setIsCtaVisible(false)}
            type="button"
          >
            <XIcon aria-hidden="true" className="size-3.5" />
          </button>
          <a className="block pr-5" href={href} rel="noreferrer" target="_blank">
            <p className="text-sm font-bold">Looking for more leads?</p>
            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Chat with AdBuzz Digital and plan your next useful move.
            </p>
          </a>
          <span aria-hidden="true" className="absolute -bottom-2 right-5 size-4 rotate-45 border-r border-b border-border bg-background" />
        </div>
      ) : null}
      <a
        aria-label="Chat with AdBuzz Digital on WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-[#25D366] text-white shadow-[0_16px_36px_-14px_rgba(37,211,102,0.8)] ring-4 ring-background transition-[transform,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
        href={href}
        rel="noreferrer"
        target="_blank"
        title="Chat on WhatsApp"
      >
        <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg border border-border bg-foreground px-3 py-2 text-xs font-semibold text-background opacity-0 shadow-lg transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
          Chat on WhatsApp
        </span>
        <span aria-hidden="true" className="absolute inset-[5px] rounded-xl border border-white/20 bg-white/10" />
        <WhatsAppIcon className="relative size-7" />
      </a>
    </div>
  );
}
