import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adbuzzdigital.com';
  return [
    '',
    '/services',
    '/branding-designing',
    '/social-media-digital-marketing',
    '/website-tech-solutions',
    '/content-creation-copywriting',
    '/video-production-photography',
    '/creative-campaigns-events',
    '/ecommerce-digital-solutions',
    '/about',
    '/insights',
    '/insights/instagram-reels-reach-recognizable-brand',
    '/insights/brand-identity-before-advertising',
    '/insights/practical-marketing-audit-before-ads',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
