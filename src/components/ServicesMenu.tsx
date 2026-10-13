'use client';

import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const services = [
  { href: '/branding-designing', label: 'Branding & Designing' },
  { href: '/social-media-digital-marketing', label: 'Social Media & Digital Marketing' },
  { href: '/website-tech-solutions', label: 'Website & Tech Solutions' },
  { href: '/content-creation-copywriting', label: 'Content Creation & Copywriting' },
  { href: '/video-production-photography', label: 'Video Production & Photography' },
  { href: '/creative-campaigns-events', label: 'Creative Campaigns & Events' },
  { href: '/ecommerce-digital-solutions', label: 'E-commerce & Digital Solutions' },
];

export function ServicesMenu() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        openOnHover
        className="group flex items-center gap-1.5 rounded-md px-1 py-2 font-semibold transition-colors outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
      >
        Services
        <ChevronDownIcon className="size-4 transition-transform duration-150 ease-out group-data-[popup-open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-2" sideOffset={8}>
        <DropdownMenuGroup>
          {services.map((service) => (
            <DropdownMenuItem
              key={service.href}
              className="cursor-pointer px-3 py-2.5 font-medium"
              render={<Link href={service.href} />}
            >
              {service.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
