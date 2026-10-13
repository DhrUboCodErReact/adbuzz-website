import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HeroBrandVideo } from '@/components/HeroBrandVideo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Creative, Marketing & Website Development Agency | AdBuzz Digital',
  description:
    'AdBuzz Digital helps ambitious businesses build visibility, create better content, run focused campaigns and launch websites that turn attention into enquiries.',
};
const services = [
  [
    'Social Media & Digital Marketing',
    'A practical plan for maintaining visibility, communicating your offer and supporting growth.',
    '/social-media-digital-marketing',
  ],
  [
    'Branding & Designing',
    'A clear visual identity and creative system that makes your business easier to recognise and trust.',
    '/branding-designing',
  ],
  [
    'Content Creation & Copywriting',
    'Social-first video concepts and promotional design for your brand.',
    '/content-creation-copywriting',
  ],
  [
    'Website & Tech Solutions',
    'Modern, mobile-friendly websites built around clarity and conversion.',
    '/website-tech-solutions',
  ],
  [
    'E-commerce & Digital Solutions',
    'E-commerce journeys, digital workflows and practical tools that make the next action easier.',
    '/ecommerce-digital-solutions',
  ],
] as const;
const faqs = [
  [
    'What types of businesses do you work with?',
    'We are especially suited to owner-led local businesses, service businesses and growing brands that need sharper digital execution.',
  ],
  [
    'Can you help with both content and a website?',
    'Yes. Where it supports your goal, we can plan creative, website messaging and campaign journeys together.',
  ],
  [
    'Do you guarantee leads or rankings?',
    'No responsible agency can guarantee a specific result. We focus on clear strategy, strong execution and transparent discussion of what can be measured.',
  ],
  [
    'How do we start?',
    'Tell us what you want to improve, what you currently have and your timeline. We will recommend the most useful starting scope.',
  ],
] as const;
const buildItems = [
  [
    'A clearer brand presence',
    'Creative that looks intentional and communicates what your business actually offers.',
  ],
  [
    'Content people want to stop for',
    'Reels and business creatives shaped around your offer, audience and current attention patterns.',
  ],
  [
    'Campaigns with a purpose',
    'Paid activity built around an objective—such as enquiries, leads, launches or local reach.',
  ],
  [
    'A website that makes the next step easy',
    'Responsive pages with clear information, stronger messaging and direct routes to enquiry.',
  ],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-white dark:bg-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_.8fr] md:px-8 md:py-28">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-[var(--acid)]">
              CREATIVE • MARKETING • DIGITAL SOLUTIONS
            </p>
            <h1 className="max-w-3xl text-5xl leading-[0.94] font-black tracking-[-0.075em] md:text-7xl">
              Create Buzz.
              <br />
              Make Brand.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--site-muted)]">
              Marketing, creative and websites built to move your business forward.
            </p>
            <p className="mt-2 max-w-2xl text-lg leading-8 text-[var(--site-muted)]">
              AdBuzz Digital helps growing businesses turn scattered online activity into a clear
              digital presence—through social-first content, performance campaigns,
              conversion-focused websites and practical digital solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={buttonVariants({ size: 'lg', className: 'rounded-none px-6' })}
              >
                Discuss your project
              </Link>
              <Link
                href="/services"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'rounded-none px-6',
                })}
              >
                Explore services
              </Link>
            </div>
          </div>
          <HeroBrandVideo />
        </div>
      </section>
      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--acid)]">THE GAP</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-5xl">
              When your business is good—but your digital presence does not show it.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--site-muted)]">
              Customers look online before they call, visit or enquire. If your content is
              inconsistent, your website is unclear or your campaigns do not lead anywhere useful,
              opportunities can slip away. We help you bring the important pieces together.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-[var(--line)] bg-[var(--card)] shadow-xl">
            <Image
              fill
              alt="Creative Campaigns & Events service banner"
              className="object-cover"
              sizes="(max-width: 1023px) min(100vw - 2.5rem, 28rem), 35vw"
              src="/images/services/creative-campaigns-events.png"
            />
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--line)] bg-white dark:bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--acid)]">
            WHAT WE HELP YOU BUILD
          </p>
          <div className="mt-10 grid gap-px bg-[var(--line)] md:grid-cols-2">
            {buildItems.map(([title, copy], index) => (
              <article key={title} className="bg-white p-7 dark:bg-[var(--card)]">
                <p className="text-sm text-[var(--acid)]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--site-muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--acid)]">OUR SERVICES</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em]">
              Start with the challenge in front of you.
            </h2>
          </div>
          <Link
            href="/services"
            className={buttonVariants({ variant: 'link', className: 'font-bold' })}
          >
            Explore all services
          </Link>
        </div>
        <div className="mt-10 divide-y divide-[var(--line)]">
          {services.map(([title, copy, href], index) => (
            <Link
              key={title}
              href={href}
              className="group grid gap-4 py-6 md:grid-cols-[60px_1fr_2fr_auto]"
            >
              <span className="text-sm text-[var(--acid)]">0{index + 1}</span>
              <h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3>
              <p className="leading-7 text-[var(--site-muted)]">{copy}</p>
              <span className="font-bold transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--acid)]">
              WHY WORK WITH ADBUZZ DIGITAL?
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em]">
              Built around the work that matters next.
            </h2>
          </div>
          <div className="grid gap-7">
            <div>
              <h3 className="font-bold">Business-first thinking</h3>
              <p className="mt-2 leading-7 text-[var(--site-muted)]">
                We start with your offer, audience and next business objective—not a generic content
                calendar.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Connected execution</h3>
              <p className="mt-2 leading-7 text-[var(--site-muted)]">
                Creative, campaigns and website journeys can be planned to support the same goal.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Clear collaboration</h3>
              <p className="mt-2 leading-7 text-[var(--site-muted)]">
                You will know what we are working on, what we need from you and what happens next.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--acid)]">HOW WE WORK</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em]">
              Straightforward from first conversation to launch.
            </h2>
          </div>
          <ol className="grid gap-6">
            {[
              [
                'Understand',
                'Learn about your business, audience, goal and current digital presence.',
              ],
              ['Plan', 'Define a focused scope, priorities and deliverables.'],
              ['Create or build', 'Develop the content, campaign assets, website or solution.'],
              ['Review', 'Refine agreed work at clear review points.'],
              ['Launch and improve', 'Put the work into action and discuss the next useful move.'],
            ].map(([title, copy], index) => (
              <li key={title} className="border-t border-stone-600 pt-4">
                <span className="text-[var(--acid)]">0{index + 1}</span>
                <h3 className="mt-1 text-xl font-bold">{title}</h3>
                <p className="mt-1 text-stone-300">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <p className="text-xs font-bold tracking-[0.2em] text-[var(--acid)]">COMMON QUESTIONS</p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.06em]">A clearer way to start.</h2>
        <Accordion className="mt-8" multiple>
          {faqs.map(([question, answer]) => (
            <AccordionItem key={question} value={question} className="border-[var(--line)]">
              <AccordionTrigger className="py-5 text-base font-bold">{question}</AccordionTrigger>
              <AccordionContent className="max-w-2xl leading-7 text-[var(--site-muted)]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="mx-5 mb-5 bg-[var(--acid)] md:mx-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em]">NEXT STEP</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
              Ready to make your next digital move clearer?
            </h2>
            <p className="mt-4 max-w-xl">
              Tell us what you are building, promoting or trying to improve.
            </p>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'rounded-none px-6',
            })}
          >
            Discuss your project
          </Link>
        </div>
      </section>
    </>
  );
}
