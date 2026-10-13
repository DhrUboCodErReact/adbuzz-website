'use client';

import { SearchIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { insights, insightCategories } from '@/lib/insights';

export function InsightsBrowser() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const normalizedQuery = query.trim().toLowerCase();
  const matchingArticles = insights.filter(
    (article) =>
      (category === 'All' || article.category === category) &&
      (!normalizedQuery ||
        [article.title, article.category, article.excerpt, ...article.tags]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)),
  );

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block lg:w-96">
          <span className="sr-only">Search Insights</span>
          <SearchIcon
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="pl-9"
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
          <Button
            variant={category === 'All' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCategory('All')}
          >
            All
          </Button>
          {insightCategories.map((item) => (
            <Button
              key={item}
              variant={category === item ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      {matchingArticles.length ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {matchingArticles.map((article) => (
            <Card key={article.slug} className="min-h-76">
              <CardHeader>
                <p className="text-xs font-bold tracking-[0.16em] text-primary">
                  {article.category.toUpperCase()}
                </p>
                <CardTitle className="mt-3 text-xl">{article.title}</CardTitle>
                <CardDescription className="leading-6">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto text-sm text-muted-foreground">
                {article.tags.slice(0, 2).join(' · ')}
              </CardContent>
              <CardFooter>
                <Link
                  href={`/insights/${article.slug}`}
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Read article
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>No articles match that search.</CardTitle>
            <CardDescription>Try a different phrase or reset the active filters.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              variant="outline"
              onClick={() => {
                setQuery('');
                setCategory('All');
              }}
            >
              <XIcon data-icon="inline-start" />
              Reset filters
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
