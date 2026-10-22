import { ArrowUpRightIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { InsightsBrowser } from '@/components/InsightsBrowser';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getReadingTime, insights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights & Digital Marketing Guides',
  description:
    'Practical perspectives on brand strategy, digital marketing, content and business growth.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  const featured = insights[0]!;
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">INSIGHTS</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.07em] md:text-7xl">
              Useful thinking for your next digital move.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Practical articles for business owners and growing teams making clearer choices about
              brand, content and marketing.
            </p>
          </div>
          <Card className="border-primary/25 bg-secondary/50">
            <CardHeader>
              <p className="text-xs font-bold tracking-[0.16em] text-primary">
                FEATURED / {featured.category.toUpperCase()}
              </p>
              <CardTitle className="mt-3 text-2xl">{featured.title}</CardTitle>
              <CardDescription className="text-base leading-7">{featured.excerpt}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-between gap-4">
              <span className="text-sm text-muted-foreground">
                {getReadingTime(featured)} min read
              </span>
              <Link
                href={`/insights/${featured.slug}`}
                className={buttonVariants({ variant: 'outline' })}
              >
                Read article <ArrowUpRightIcon data-icon="inline-end" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <InsightsBrowser />
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 md:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary-foreground/75">
              NEXT STEP
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Need help applying an idea to your business?
            </h2>
          </div>
          <Link href="/contact" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
            Discuss your project <ArrowUpRightIcon data-icon="inline-end" />
          </Link>
        </div>
      </section>
    </>
  );
}
