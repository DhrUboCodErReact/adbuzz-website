import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  EyeIcon,
  HeartIcon,
  MessageCircleIcon,
  MousePointerClickIcon,
  PlayIcon,
  SearchIcon,
  SmileIcon,
  SparklesIcon,
  TargetIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getReadingTime, insights } from '@/lib/insights';

function ReelsGrowthDiagram() {
  const stages = [
    {
      title: 'Create a Reel',
      copy: 'Useful, entertaining or clear content earns attention.',
      impact: 'The viewer stops scrolling.',
      icon: PlayIcon,
    },
    {
      title: 'Reach New People',
      copy: 'Relevant content can travel beyond your followers.',
      impact: 'More people discover you.',
      icon: SearchIcon,
    },
    {
      title: 'Be Remembered',
      copy: 'Consistent topics, visuals and voice build familiarity.',
      impact: 'Your brand feels familiar.',
      icon: SmileIcon,
    },
    {
      title: 'Drive Action',
      copy: 'Clear next steps turn interest into messages or enquiries.',
      impact: 'Attention becomes opportunity.',
      icon: MessageCircleIcon,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
      <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <li key={stage.title}>
              <Card className="h-full border-border bg-card">
                <CardHeader>
                  <div className="flex size-13 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-7" />
                  </div>
                  <CardTitle className="mt-6 text-xl">
                    {index + 1}. {stage.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7">{stage.copy}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-border bg-secondary/50 pt-4 text-sm font-semibold text-primary">
                  {stage.impact}
                </CardFooter>
              </Card>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function LegacyReelsGrowthDiagramV2() {
  const stages = [
    {
      title: 'Create a Reel',
      copy: 'Useful, entertaining or clear content earns attention.',
      impact: 'The viewer stops scrolling.',
      icon: PlayIcon,
    },
    {
      title: 'Reach New People',
      copy: 'Strong signals can help relevant content travel beyond followers.',
      impact: 'More people discover you.',
      icon: SearchIcon,
    },
    {
      title: 'Be Remembered',
      copy: 'Consistent topics, visuals and voice build familiarity over time.',
      impact: 'Your brand feels familiar.',
      icon: SmileIcon,
    },
    {
      title: 'Drive Action',
      copy: 'Clear next steps turn interest into messages, visits or enquiries.',
      impact: 'Attention becomes opportunity.',
      icon: MessageCircleIcon,
    },
  ];

  return (
    <section className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-bold tracking-[0.16em] text-primary">THE REELS GROWTH PATH</p>
        <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.06em] md:text-5xl">
          How Instagram Reels build reach and brand recognition.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
          One useful Reel can create a journey from attention to meaningful business action.
        </p>
        <ol className="relative mt-10 grid gap-4 lg:grid-cols-4 lg:gap-16">
          <div
            className="absolute top-1/2 right-18 left-18 hidden h-px bg-primary lg:block"
            aria-hidden="true"
          />
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li key={stage.title} className="relative z-10">
                <Card className="h-full border-white/15 bg-white/6 text-[var(--paper)] ring-0">
                  <CardHeader>
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="size-7" />
                    </div>
                    <CardTitle className="mt-6 text-xl text-[var(--paper)]">
                      {index + 1}. {stage.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-white/75">
                      {stage.copy}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto border-white/10 bg-transparent pt-4 text-sm font-semibold text-primary">
                    {stage.impact}
                  </CardFooter>
                </Card>
              </li>
            );
          })}
        </ol>
        <Card className="mt-10 border-white/15 bg-white/6 text-[var(--paper)] ring-0">
          <CardHeader>
            <CardTitle className="text-center text-xl text-[var(--paper)]">
              The business impact
            </CardTitle>
            <CardDescription className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-3 text-base text-white/75">
              <span>• More visibility</span>
              <span>• Stronger recognition</span>
              <span>• Greater trust</span>
              <span>• More enquiry opportunities</span>
            </CardDescription>
          </CardHeader>
        </Card>
        <p className="mt-8 text-center text-sm text-white/65">
          Reach gets attention. Consistency turns attention into recognition.
        </p>
      </div>
    </section>
  );
}

function LegacyReelsGrowthDiagram() {
  const stages = [
    {
      title: 'Discovery',
      copy: 'Relevant Reels introduce the brand to new people.',
      icon: EyeIcon,
    },
    {
      title: 'Interest',
      copy: 'Useful stories give viewers a reason to stay.',
      icon: SparklesIcon,
    },
    {
      title: 'Recognition',
      copy: 'Consistent cues make the brand easier to remember.',
      icon: HeartIcon,
    },
    {
      title: 'Action',
      copy: 'A clear next step turns attention into a useful conversation.',
      icon: MessageCircleIcon,
    },
  ];

  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <p className="text-xs font-bold tracking-[0.16em] text-primary">THE REELS GROWTH LOOP</p>
        <div className="mt-7 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex aspect-square max-w-70 items-center justify-center rounded-full bg-card p-6 text-center ring-1 ring-primary/20">
            <div>
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <TargetIcon className="size-7" />
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.05em]">Instagram Reels</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Discover → engage → recognise → act
              </p>
            </div>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <li key={stage.title} className="rounded-xl bg-card p-5 ring-1 ring-border">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-ember/15 text-ember">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-bold tracking-[0.16em] text-primary">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-bold">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.copy}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <Card className="mt-8 border-primary/25 bg-card">
          <CardHeader>
            <CardTitle>The takeaway</CardTitle>
            <CardDescription className="text-base leading-7">
              Reels can help you reach new people and build recognition when the content stays
              relevant, consistent and connected to a credible customer experience.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

function AuditFlowDiagram() {
  const stages = [
    {
      title: 'Check the offer',
      copy: 'Can a new visitor understand what you do, who it is for and the next step?',
      impact: 'Clarity before clicks.',
      icon: SearchIcon,
    },
    {
      title: 'Review the destination',
      copy: 'Make sure the landing page matches the ad message and works on mobile.',
      impact: 'A useful first impression.',
      icon: MousePointerClickIcon,
    },
    {
      title: 'Test the enquiry flow',
      copy: 'Submit a test enquiry yourself and confirm that the right person receives it.',
      impact: 'Fewer lost opportunities.',
      icon: MessageCircleIcon,
    },
    {
      title: 'Prioritise the fixes',
      copy: 'Start with high-impact, low-effort changes before increasing spend.',
      impact: 'Ready for a controlled test.',
      icon: CheckCircleIcon,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
      <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <li key={stage.title}>
              <Card className="h-full border-border bg-card">
                <CardHeader>
                  <div className="flex size-13 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-7" />
                  </div>
                  <CardTitle className="mt-6 text-xl">
                    {index + 1}. {stage.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7">{stage.copy}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-border bg-secondary/50 pt-4 text-sm font-semibold text-primary">
                  {stage.impact}
                </CardFooter>
              </Card>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.seoTitle,
      description: article.seoDescription,
      images: [{ url: article.coverImage, alt: article.coverImageAlt }],
    },
  };
}

export default async function InsightArticlePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = insights
    .filter((item) => item.slug !== article.slug && item.category !== article.category)
    .slice(0, 2);
  const publishedDate = new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(
    new Date(article.publishedAt),
  );
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: article.author },
    mainEntityOfPage: `https://adbuzzdigital.com/insights/${article.slug}`,
  };
  const hasReelsDiagram = article.slug === 'instagram-reels-reach-recognizable-brand';
  const hasAuditDiagram = article.slug === 'practical-marketing-audit-before-ads';
  const ReelsDiagram = article.slug.endsWith('legacy-v2')
    ? LegacyReelsGrowthDiagramV2
    : article.slug.endsWith('legacy')
      ? LegacyReelsGrowthDiagram
      : ReelsGrowthDiagram;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link href="/insights" className="hover:text-primary">
              Insights
            </Link>{' '}
            <span aria-hidden="true">/</span> <span>{article.category}</span>
          </nav>
          <p className="mt-8 text-xs font-bold tracking-[0.2em] text-primary">
            {article.category.toUpperCase()}
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.07em] md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">
            {article.excerpt}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            By {article.author} · {publishedDate} · {getReadingTime(article)} min read
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 pt-8 md:px-8">
        <div className="relative aspect-[16/7] overflow-hidden rounded-xl bg-secondary">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>
      {hasReelsDiagram ? <ReelsDiagram /> : null}
      {hasAuditDiagram ? <AuditFlowDiagram /> : null}
      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[13rem_1fr]">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <p className="text-xs font-bold tracking-[0.16em] text-primary">ON THIS PAGE</p>
          <ol className="mt-4 grid gap-3 text-sm">
            {(article.fullToc ?? article.sections.map((section) => ({ heading: section.heading, id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-') }))).map((section) => (
              <li key={section.heading}>
                <a
                  href={`#${section.id}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="min-w-0">
          <div className="grid gap-10">
            {article.fullHtml ? (
              <div dangerouslySetInnerHTML={{ __html: article.fullHtml }} />
            ) : article.sections.map((section) => (
              <section
                key={section.heading}
                id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              >
                <h2 className="text-3xl font-black tracking-[-0.05em]">{section.heading}</h2>
                <div className="mt-5 grid gap-5 text-lg leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="grid list-disc gap-2 pl-6">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.quote ? (
                    <blockquote className="border-l-4 border-primary pl-5 font-medium text-foreground">
                      {section.quote}
                    </blockquote>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
          <p className="text-xs font-bold tracking-[0.16em] text-primary">KEEP READING</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">Related insights</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Card key={item.slug}>
                <CardHeader>
                  <p className="text-xs font-bold tracking-[0.16em] text-primary">
                    {item.category.toUpperCase()}
                  </p>
                  <CardTitle className="mt-3">{item.title}</CardTitle>
                  <CardDescription>{item.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={`/insights/${item.slug}`}
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Read article
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-6 px-5 py-12 md:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-primary-foreground/75">
              NEXT STEP
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Ready to turn useful thinking into useful action?
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
