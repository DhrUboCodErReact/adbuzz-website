'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ServicesMenu } from '@/components/ServicesMenu';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WhatsAppChatButton } from '@/components/WhatsAppChatButton';
import { usePathname } from '@/libs/I18nNavigation';
import { buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/insights', label: 'Insights' },
];
const services = [
  { href: '/branding-designing', label: 'Branding & Designing' },
  { href: '/social-media-digital-marketing', label: 'Social Media & Digital Marketing' },
  { href: '/website-tech-solutions', label: 'Website & Tech Solutions' },
  { href: '/content-creation-copywriting', label: 'Content Creation & Copywriting' },
  { href: '/video-production-photography', label: 'Video Production & Photography' },
  { href: '/creative-campaigns-events', label: 'Creative Campaigns & Events' },
  { href: '/ecommerce-digital-solutions', label: 'E-commerce & Digital Solutions' },
];

export function SiteFrame(props: { children: React.ReactNode; whatsAppNumber?: string }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen overflow-x-hidden">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:p-3 focus:text-primary-foreground"
    >
      Skip to content
    </a>
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/icon.png"
            alt=""
            width={128}
            height={128}
            priority
            className="size-16 object-contain md:size-18"
          />
          <span className="block w-32 md:w-40">
            <Image
              src="/brand/logo-light.png"
              alt="AdBuzz Digital"
              width={860}
              height={231}
              priority
              className="h-auto w-full dark:hidden"
            />
            <Image
              src="/brand/logo-dark.png"
              alt="AdBuzz Digital"
              width={850}
              height={230}
              priority
              className="hidden h-auto w-full dark:block"
            />
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm font-semibold md:flex"
        >
          <ServicesMenu />
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact Us
          </Link>
          <ThemeToggle />
          <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
            Discuss your project
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              className={buttonVariants({ variant: 'outline', size: 'icon-lg' })}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background" showCloseButton={false}>
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Explore AdBuzz Digital.</SheetDescription>
              </SheetHeader>
              <SheetClose
                aria-label="Close navigation"
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'icon-sm',
                  className: 'absolute top-3 right-3 z-10',
                })}
              >
                <XIcon />
              </SheetClose>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4 pt-12">
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/services"
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'lg',
                        className: 'justify-start font-bold',
                      })}
                    />
                  }
                >
                  Services
                </SheetClose>
                <div className="mb-2 ml-3 border-l-2 border-primary/60 py-1 pl-3">
                  {services.map((service) => (
                    <SheetClose
                      key={service.href}
                      nativeButton={false}
                      render={
                        <Link
                          href={service.href}
                          className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                            className:
                              'h-auto min-h-8 w-full justify-start px-2 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground',
                          })}
                        />
                      }
                    >
                      {service.label}
                    </SheetClose>
                  ))}
                </div>
                <div className="my-1 border-t border-border" />
                {links.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'lg',
                          className: `justify-start ${pathname === link.href ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : ''}`,
                        })}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/contact" className={buttonVariants({ size: 'lg', className: 'mt-3' })} />}
                >
                  Discuss your project
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    <main id="main">{props.children}</main>
    <footer className="border-t border-[var(--line)] bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8">
        <div>
          <span className="block w-64">
            <Image
              src="/brand/logo-light.png"
              alt="AdBuzz Digital"
              width={860}
              height={231}
              className="h-auto w-full dark:hidden"
            />
            <Image
              src="/brand/logo-dark.png"
              alt="AdBuzz Digital"
              width={850}
              height={230}
              className="hidden h-auto w-full dark:block"
            />
          </span>
          <p className="mt-4 max-w-md text-[var(--site-muted)]">
            Marketing, creative and websites built around the next useful move for your business.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="mb-3 font-bold text-primary">Explore</p>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="mb-2 block hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="mb-3 font-bold text-primary">Start a conversation</p>
            <Link href="/contact" className="hover:text-primary">
              Contact AdBuzz Digital
            </Link>
            <Link href="/privacy-policy" className="mt-2 block hover:text-primary">
              Privacy policy
            </Link>
            <Link href="/terms-and-conditions" className="mt-2 block hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
    <WhatsAppChatButton phoneNumber={props.whatsAppNumber} />
    </div>
  );
}
