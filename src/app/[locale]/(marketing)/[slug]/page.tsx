import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRightIcon,
  CameraIcon,
  MegaphoneIcon,
  MonitorSmartphoneIcon,
  PaletteIcon,
  PenToolIcon,
  ShoppingBagIcon,
  SparklesIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { LegalPage } from '@/components/LegalPage';
import { Env } from '@/libs/Env';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Service = {
  slug: string;
  name: string;
  bannerSrc: string;
  headline: string;
  description: string;
  meaning: string;
  deliverables: string[];
  outcomes: string[];
  problems: string[];
  audience: string;
  faq: readonly [string, string][];
};
const services: Service[] = [
  {
    slug: 'branding-designing',
    name: 'Branding & Designing',
    bannerSrc: '/images/services/branding-designing.png',
    headline: 'A visual identity that makes your business easier to recognise and trust.',
    description: 'Branding and design services for businesses ready to grow with clarity.',
    meaning:
      'Branding is more than a logo. It is the visual style, tone and consistency that help customers recognise your business and understand what it stands for.',
    deliverables: [
      'Brand identity direction',
      'Logo usage guidance',
      'Colour and typography direction',
      'Social-media visual style',
      'Marketing and campaign creatives',
    ],
    outcomes: [
      'A stronger first impression',
      'More consistent recognition',
      'A more professional presentation',
      'Clearer communication across channels',
    ],
    problems: [
      'Customers do not clearly understand what you offer',
      'Your business looks inconsistent online',
      'Your offers do not get enough attention',
    ],
    audience:
      'Restaurants, salons, clinics, retailers, professional services and growing local brands.',
    faq: [
      [
        'Do you only create logos?',
        'No. We look at the wider visual system that helps your business stay recognisable.',
      ],
      [
        'Can you work with an existing logo?',
        'Yes. We can strengthen how your existing identity is used.',
      ],
      [
        'Will I receive files for future use?',
        'The agreed deliverables and usable formats are confirmed with your project scope.',
      ],
      [
        'Can this support a launch?',
        'Yes. We can shape campaign assets around a launch, offer or new direction.',
      ],
    ],
  },
  {
    slug: 'social-media-digital-marketing',
    name: 'Social Media & Digital Marketing',
    bannerSrc: '/images/services/social-media-digital-marketing.png',
    headline:
      'Planned content and campaigns that keep your business visible for the right reasons.',
    description: 'Social media and digital marketing for ambitious businesses worldwide.',
    meaning:
      'Social media marketing is not only posting content. It is a planned way to communicate offers, build trust and guide people towards a useful next action.',
    deliverables: [
      'Content direction and calendars',
      'Instagram and Facebook creatives',
      'Reels concepts',
      'Captions and campaign messaging',
      'Paid campaign support and reviews',
    ],
    outcomes: [
      'More consistent visibility',
      'Stronger brand recall',
      'Clearer offers',
      'Better campaign support',
    ],
    problems: [
      'Your social media looks inactive',
      'Posting feels random',
      'Offers are not reaching enough people',
    ],
    audience:
      'Local businesses, cafés, restaurants, retailers, service providers and growing brands.',
    faq: [
      [
        'Do you manage Instagram and Facebook?',
        'The channels are selected around your audience and agreed scope.',
      ],
      [
        'Can you help with paid ads?',
        'Yes, where paid support fits the objective and landing journey.',
      ],
      [
        'Do you guarantee leads?',
        'No. We focus on clear planning, strong execution and useful measurement conversations.',
      ],
      [
        'Can you create monthly content?',
        'Yes. Content volume and format are agreed around your needs.',
      ],
    ],
  },
  {
    slug: 'website-tech-solutions',
    name: 'Website & Tech Solutions',
    bannerSrc: '/images/services/website-app-development.png',
    headline: 'A digital home that helps customers understand, trust and contact your business.',
    description: 'Website development and technology solutions for modern businesses.',
    meaning:
      'A website is a 24/7 digital representative of your business. It should make your offer clear, build confidence and make the next step easy.',
    deliverables: [
      'Website strategy and sitemap',
      'Responsive page design and development',
      'Service and product pages',
      'Contact and enquiry forms',
      'Basic on-page SEO and custom features',
    ],
    outcomes: [
      'More credibility',
      'Easier enquiries',
      'A clearer customer journey',
      'Better Google visibility potential',
    ],
    problems: [
      'Your website does not generate enquiries',
      'Customers cannot quickly understand your services',
      'Your digital process is too manual',
    ],
    audience:
      'Professional services, clinics, retailers, startups, e-commerce businesses and local brands.',
    faq: [
      [
        'Can you redesign an existing website?',
        'Yes. We can assess whether a focused refresh or full rebuild is more useful.',
      ],
      ['Will the site work on mobile?', 'Yes. Responsive behaviour is part of the build approach.'],
      ['Do you add WhatsApp?', 'WhatsApp and enquiry journeys can be included where useful.'],
      ['Can you maintain the website?', 'Ongoing support can be scoped after launch.'],
    ],
  },
  {
    slug: 'content-creation-copywriting',
    name: 'Content Creation & Copywriting',
    bannerSrc: '/images/services/content-creation-copywriting.png',
    headline: 'Useful words and ideas that make your offer easier to understand and remember.',
    description: 'Content creation and copywriting that makes your message clear and memorable.',
    meaning:
      'Content gives a brand something useful to say. Copywriting turns business information into messages customers can quickly understand and act on.',
    deliverables: [
      'Content pillars',
      'Social captions',
      'Website and product copy',
      'Campaign messaging',
      'Reel scripts and calls to action',
    ],
    outcomes: [
      'Clearer offers',
      'More consistent brand voice',
      'Stronger campaigns',
      'Easier customer decisions',
    ],
    problems: [
      'Your business has useful information but no clear message',
      'Captions take too long to write',
      'Your website copy feels unclear',
    ],
    audience:
      'Businesses with services, products, offers, launches or stories worth communicating well.',
    faq: [
      [
        'Can you write website copy?',
        'Yes. We can shape page messaging around your audience and next action.',
      ],
      ['Do you create captions?', 'Yes, as part of an agreed content direction.'],
      [
        'Can you improve existing copy?',
        'Yes. We can clarify and strengthen useful existing material.',
      ],
      ['Do you write scripts?', 'Yes, including practical hooks and reel concepts.'],
    ],
  },
  {
    slug: 'video-production-photography',
    name: 'Video Production & Photography',
    bannerSrc: '/images/services/video-production-photography.png',
    headline: 'Visual content that helps your business look credible, professional and memorable.',
    description: 'Business photography and video production designed to earn attention and trust.',
    meaning:
      'Photography and video show products, people, spaces and services in ways that text alone cannot. Good visuals help people understand the value behind your business.',
    deliverables: [
      'Product and business photography',
      'Social-media video content',
      'Reels footage',
      'Service showcase videos',
      'Editing and post-production',
    ],
    outcomes: [
      'Better product presentation',
      'Higher perceived value',
      'More engaging social content',
      'Stronger customer trust',
    ],
    problems: [
      'Your products are hard to present online',
      'You need fresh social content',
      'Your business does not look as professional online as it is',
    ],
    audience:
      'Restaurants, cafés, salons, fashion and jewellery brands, clinics, retailers and event-led businesses.',
    faq: [
      [
        'Can you shoot at our location?',
        'Location, access and production needs are planned in the project scope.',
      ],
      [
        'Do you edit the footage?',
        'Yes. Editing and delivery formats are agreed before production.',
      ],
      ['Can you create reels?', 'Yes. Short-form social content can be planned around your offer.'],
      [
        'Do you cover events?',
        'Event coverage can be scoped around the occasion and intended use.',
      ],
    ],
  },
  {
    slug: 'creative-campaigns-events',
    name: 'Creative Campaigns & Events',
    bannerSrc: '/images/services/creative-campaigns-events.png',
    headline:
      'Coordinated creative for launches, offers, events and moments that deserve attention.',
    description: 'Creative campaigns and event promotion built around moments that matter.',
    meaning:
      'Campaigns bring focus to important business moments—new launches, seasonal offers, festive promotions and events—so your message arrives as one connected experience.',
    deliverables: [
      'Campaign concept and messaging',
      'Creative direction',
      'Promotional posters and videos',
      'Launch social assets',
      'Event branding and promotion support',
    ],
    outcomes: [
      'Stronger launch visibility',
      'Clearer promotion',
      'Better campaign recall',
      'A more coordinated brand experience',
    ],
    problems: [
      'A launch has no clear promotion plan',
      'Your event communication feels scattered',
      'Seasonal offers need more attention',
    ],
    audience:
      'Retailers, restaurants, venues, brands and businesses planning a launch, promotion or event.',
    faq: [
      [
        'Can you plan a campaign from scratch?',
        'Yes. We can start with the business moment and audience.',
      ],
      [
        'Do you handle both online and on-ground assets?',
        'Where useful, the scope can connect digital and physical touchpoints.',
      ],
      [
        'Can you support festive promotions?',
        'Yes. Timely offers and seasonal campaigns can be planned early.',
      ],
      [
        'Do you create event content after the event?',
        'Post-event edits and content planning can be included.',
      ],
    ],
  },
  {
    slug: 'ecommerce-digital-solutions',
    name: 'E-commerce & Digital Solutions',
    bannerSrc: '/images/services/ecommerce-digital-solutions.png',
    headline: 'Digital journeys that make buying, booking and follow-up easier.',
    description: 'E-commerce websites and digital solutions that make the buying journey easier.',
    meaning:
      'E-commerce and digital solutions help businesses make buying, booking, managing and following up easier online, with a setup that supports real daily work.',
    deliverables: [
      'E-commerce website design',
      'Product catalogue setup',
      'Product-page content',
      'Cart and checkout setup',
      'Workflow tools and digital process recommendations',
    ],
    outcomes: [
      'An easier buying journey',
      'Stronger product presentation',
      'Better online sales potential',
      'Less manual work where relevant',
    ],
    problems: [
      'Customers cannot easily buy or enquire online',
      'Product information is scattered',
      'Your team repeats too many manual tasks',
    ],
    audience:
      'Retailers, product brands, restaurants, booking-led services, startups and e-commerce businesses.',
    faq: [
      [
        'Can you build an online store?',
        'Yes. The right platform and scope depend on products, operations and goals.',
      ],
      ['Can you add payment gateways?', 'Payment setup can be included where applicable.'],
      [
        'Can you help with product content?',
        'Yes. Product structure, descriptions and imagery direction can be scoped.',
      ],
      [
        'Do you build custom dashboards?',
        'We can assess practical workflow tools where off-the-shelf options do not fit.',
      ],
    ],
  },
];
const serviceOptions = [...services.map((service) => service.name), 'Not Sure — Need Guidance'];
const timelineOptions = ['Immediately', 'Within 1 Month', '1–3 Months', 'Just Exploring'];
const budgetOptions = [
  'Not Sure Yet',
  'Under ₹10,000',
  '₹10,000–₹25,000',
  '₹25,000–₹50,000',
  '₹50,000+',
];

const serviceIcons: Record<string, LucideIcon> = {
  'branding-designing': PaletteIcon,
  'social-media-digital-marketing': MegaphoneIcon,
  'website-tech-solutions': MonitorSmartphoneIcon,
  'content-creation-copywriting': PenToolIcon,
  'video-production-photography': CameraIcon,
  'creative-campaigns-events': SparklesIcon,
  'ecommerce-digital-solutions': ShoppingBagIcon,
};

function ServiceIcon(props: { slug: string; className?: string }) {
  const Icon = serviceIcons[props.slug] ?? SparklesIcon;

  return <Icon aria-hidden="true" className={props.className} />;
}

export function generateStaticParams() {
  return [
    'services',
    'about',
    'resources',
    'contact',
    'privacy-policy',
    'terms-and-conditions',
    ...services.map((service) => service.slug),
  ].map((slug) => ({ slug }));
}
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((item) => item.slug === slug);
  if (service) {
    return {
      title: `${service.name} | AdBuzz Digital`,
      description: service.description,
      alternates: { canonical: `/${slug}` },
    };
  }
  return {
    title: slug === 'contact' ? 'Contact AdBuzz Digital' : 'AdBuzz Digital',
    alternates: { canonical: `/${slug}` },
  };
}

function ServicePage(props: { service: Service }) {
  const related = services.filter((item) => item.slug !== props.service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-[radial-gradient(circle_at_85%_12%,color-mix(in_oklab,var(--primary)_15%,transparent),transparent_25rem)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              ADBUZZ DIGITAL / {props.service.name.toUpperCase()}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.07em] md:text-7xl">
              {props.service.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {props.service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#enquiry" className={buttonVariants({ size: 'lg' })}>
                Discuss Your Project
                <ArrowUpRightIcon data-icon="inline-end" />
              </Link>
              <Link href="/services" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                Explore All Services
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-primary/25 bg-card shadow-xl">
            <Image
              fill
              preload
              alt={`${props.service.name} service banner`}
              className="object-cover"
              sizes="(max-width: 1023px) min(100vw - 2.5rem, 28rem), 35vw"
              src={props.service.bannerSrc}
            />
          </div>
          {/* <Card className="border-primary/25 bg-card/90">
            <CardHeader>
              <div className="flex size-14 items-center justify-center rounded-full bg-ember/15 text-ember ring-1 ring-ember/25">
                <ServiceIcon slug={props.service.slug} className="size-7" />
              </div>
              <CardTitle className="mt-6 text-2xl">Built around the next useful move.</CardTitle>
              <CardDescription className="text-base leading-7">
                Practical strategy, considered creative and clear delivery—shaped around the outcome
                your business needs next.
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <p className="text-xs font-bold tracking-[0.2em] text-ember">WHAT THIS UNLOCKS</p>
          <div>
            <h2 className="text-4xl font-black tracking-[-0.06em] md:text-5xl">
              More than an individual deliverable.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {props.service.meaning}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-primary">OUR APPROACH</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-5xl">
                Clear from first conversation to launch.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              A simple, visible path that keeps decisions connected to the goal.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              'Understand Your Business',
              'Define the Goal',
              'Plan the Strategy',
              'Create and Execute',
              'Review and Improve',
            ].map((step, index) => (
              <Card key={step} className="border-border bg-card">
                <CardHeader>
                  <CardDescription className="font-bold tracking-[0.18em] text-primary">
                    0{index + 1}
                  </CardDescription>
                  <CardTitle className="mt-3">{step}</CardTitle>
                </CardHeader>
                <CardContent className="leading-6 text-muted-foreground">
                  We shape this stage around your business, audience and the agreed service scope.
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-bold tracking-[0.2em] text-primary">THE PRACTICAL IMPACT</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-5xl">
          How {props.service.name} supports a stronger business presence.
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {props.service.outcomes.map((outcome) => (
            <Card key={outcome} className="border-l-4 border-l-primary bg-card">
              <CardHeader>
                <CardTitle>{outcome}</CardTitle>
                <CardDescription>
                  Built through clear, practical execution—not generic packages or empty promises.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-ember">WHEN TO CALL US</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-5xl">
              Is this the move your business needs now?
            </h2>
          </div>
          <div className="grid gap-3">
            {props.service.problems.map((problem) => (
              <Card key={problem} className="bg-white/6 text-[var(--paper)] ring-white/10">
                <CardContent className="flex items-start gap-4 text-lg leading-7">
                  <span
                    className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {problem}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">WHAT IS INCLUDED</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
              Work that is useful after it is delivered.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {props.service.deliverables.map((item) => (
              <Card key={item} className="bg-secondary/60">
                <CardContent className="font-medium">{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Card className="mt-10 border-ember/30 bg-ember/10">
          <CardHeader>
            <CardTitle>Built for businesses ready to show up better.</CardTitle>
            <CardDescription className="max-w-3xl text-base leading-7 text-foreground/75">
              {props.service.audience}
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <p className="text-xs font-bold tracking-[0.2em] text-primary">GOOD TO KNOW</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
            Common questions
          </h2>
          <Accordion className="mt-8">
            {props.service.faq.map(([question, answer]) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-bold tracking-[0.2em] text-primary">MORE WAYS WE CAN HELP</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
          Related services
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {related.map((service) => (
            <Card
              key={service.slug}
              className="transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <ServiceIcon slug={service.slug} className="size-5" />
                </div>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.headline}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/${service.slug}`} className={buttonVariants({ variant: 'outline' })}>
                  Explore service
                  <ArrowUpRightIcon data-icon="inline-end" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary-foreground/75">
              NEXT STEP
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.06em]">
              Ready to Create More Buzz for Your Business?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/85">
              Tell us what you want to improve, promote or build. We’ll help you identify the most
              useful next step.
            </p>
          </div>
          <Link href="#enquiry" className={buttonVariants({ size: 'lg', variant: 'secondary' })}>
            Discuss Your Project
            <ArrowUpRightIcon data-icon="inline-end" />
          </Link>
        </div>
      </section>

      <section id="enquiry" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <h2 className="text-4xl font-black tracking-[-0.06em]">Start your enquiry</h2>
        <div className="mt-8 max-w-3xl">
          <ContactForm
            accessKey={Env.WEB3FORMS_ACCESS_KEY}
            budgetOptions={budgetOptions}
            serviceOptions={serviceOptions}
            timelineOptions={timelineOptions}
          />
        </div>
      </section>
    </>
  );
}

function LegacyServicePage(props: { service: Service }) {
  const related = services.filter((item) => item.slug !== props.service.slug).slice(0, 3);
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            {props.service.name.toUpperCase()}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.07em] md:text-7xl">
            {props.service.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {props.service.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#enquiry" className={buttonVariants({ size: 'lg' })}>
              Discuss Your Project
            </Link>
            <Link href="/services" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-4xl font-black tracking-[-0.06em]">
          What Does {props.service.name} Actually Mean?
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {props.service.meaning}
        </p>
      </section>
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="text-4xl font-black tracking-[-0.06em]">How does it work?</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              'Understand Your Business',
              'Define the Goal',
              'Plan the Strategy',
              'Create and Execute',
              'Review and Improve',
            ].map((step, index) => (
              <Card key={step}>
                <CardHeader>
                  <CardTitle>0{index + 1}</CardTitle>
                  <CardDescription>{step}</CardDescription>
                </CardHeader>
                <CardContent>
                  We shape this stage around your business, audience and the agreed service scope.
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-4xl font-black tracking-[-0.06em]">
          How {props.service.name} Helps Your Business Grow
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {props.service.outcomes.map((outcome) => (
            <Card key={outcome}>
              <CardHeader>
                <CardTitle>{outcome}</CardTitle>
                <CardDescription>
                  Potential business impact shaped by clear, practical execution—not promises or
                  guaranteed results.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="text-4xl font-black tracking-[-0.06em]">
            Is This Service Right for Your Business?
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {props.service.problems.map((problem) => (
              <Card key={problem}>
                <CardContent>{problem}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-4xl font-black tracking-[-0.06em]">
          What You Can Get From AdBuzz Digital
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {props.service.deliverables.map((item) => (
            <Card key={item}>
              <CardContent>{item}</CardContent>
            </Card>
          ))}
        </div>
        <h2 className="mt-20 text-4xl font-black tracking-[-0.06em]">
          Built for Businesses Ready to Show Up Better
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {props.service.audience}
        </p>
      </section>
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="text-4xl font-black tracking-[-0.06em]">Common questions</h2>
          <Accordion className="mt-8">
            {props.service.faq.map(([question, answer]) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-4xl font-black tracking-[-0.06em]">Related services</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {related.map((service) => (
            <Card key={service.slug}>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.headline}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/${service.slug}`} className={buttonVariants({ variant: 'outline' })}>
                  Explore service
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-primary">NEXT STEP</p>
          <h2 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.06em]">
            Ready to Create More Buzz for Your Business?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--site-muted)]">
            Tell us what you want to improve, promote or build. We’ll help you identify the most
            useful next step.
          </p>
          <Link href="#enquiry" className={buttonVariants({ size: 'lg', className: 'mt-8' })}>
            Discuss Your Project
          </Link>
        </div>
      </section>
      <section id="enquiry" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-4xl font-black tracking-[-0.06em]">Start your enquiry</h2>
        <div className="mt-8 max-w-3xl">
          <ContactForm
            accessKey={Env.WEB3FORMS_ACCESS_KEY}
            budgetOptions={budgetOptions}
            serviceOptions={serviceOptions}
            timelineOptions={timelineOptions}
          />
        </div>
      </section>
    </>
  );
}

void LegacyServicePage;

export default async function DetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = services.find((item) => item.slug === slug);
  if (service) {
    return <ServicePage service={service} />;
  }
  if (slug === 'services') {
    return (
      <>
        <section className="border-b border-border bg-[radial-gradient(circle_at_80%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_28rem)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                ADBUZZ DIGITAL SERVICES
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.07em] md:text-7xl">
                The right mix of creative, marketing and technology for what comes next.
              </h1>
            </div>
            <Card className="border-ember/30 bg-ember/10">
              <CardHeader>
                <CardTitle>Start with the challenge in front of you.</CardTitle>
                <CardDescription className="text-base leading-7 text-foreground/75">
                  We do not force every business into the same package. Pick a direction below, or
                  tell us where you are stuck and we will help define the useful first scope.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/contact" className={buttonVariants({ variant: 'outline' })}>
                  Start a conversation
                  <ArrowUpRightIcon data-icon="inline-end" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => (
              <Card
                key={item.slug}
                className="min-h-72 overflow-hidden transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] bg-secondary">
                  <Image
                    fill
                    alt={`${item.name} service banner`}
                    className="object-cover object-top"
                    sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(50vw - 2.5rem), 26rem"
                    src={item.bannerSrc}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary ring-1 ring-primary/15">
                      <ServiceIcon slug={item.slug} className="size-6" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.18em] text-ember">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="mt-6 text-xl">{item.name}</CardTitle>
                  <CardDescription className="leading-6">{item.headline}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Link href={`/${item.slug}`} className={buttonVariants({ variant: 'outline' })}>
                    Explore service
                    <ArrowUpRightIcon data-icon="inline-end" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </>
    );
  }
  if (slug === 'contact') {
    return (
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">CONTACT</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.07em] md:text-6xl">
          Let’s talk about the next useful move for your business.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
          Tell us what you want to improve, promote or build. We’ll use that context to guide the
          conversation.
        </p>
          </div>
          <div className="lg:pt-2">
          <ContactForm
            accessKey={Env.WEB3FORMS_ACCESS_KEY}
            budgetOptions={budgetOptions}
            serviceOptions={serviceOptions}
            timelineOptions={timelineOptions}
          />
          </div>
        </div>
      </section>
    );
  }
  if (slug === 'work') {
    notFound();
  }
  if (slug === 'privacy-policy') {
    return <LegalPage type="privacy" />;
  }
  if (slug === 'terms') {
    redirect('/terms-and-conditions');
  }
  if (slug === 'terms-and-conditions') {
    return <LegalPage type="terms" />;
  }
  const pages: Record<string, { title: string; copy: string }> = {
    about: {
      title: 'Built for businesses ready to show up with more clarity.',
      copy: 'AdBuzz Digital combines marketing, creative and technology thinking to make the next useful move easier to see and act on.',
    },
    work: {
      title: 'Ideas are useful when they make the next step easier.',
      copy: 'We publish approved real work. Until then, every project begins with your goal, audience and path from attention to action.',
    },
    resources: {
      title: 'Useful thinking for a stronger digital presence.',
      copy: 'Practical guides will be added when they can offer genuine value to businesses building their next move.',
    },
  };
  const page = pages[slug];
  if (!page) {
    notFound();
  }
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <h1 className="max-w-3xl text-5xl font-black tracking-[-0.07em] md:text-6xl">{page.title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{page.copy}</p>
    </section>
  );
}
