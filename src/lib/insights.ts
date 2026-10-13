export const insightCategories = [
  'Brand Strategy',
  'Social Media Marketing',
  'Digital Marketing',
  'Content Strategy',
  'Business Growth',
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
};

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  publishedAt: string;
  author: string;
  seoTitle: string;
  seoDescription: string;
  sections: InsightSection[];
};

export const insights: InsightArticle[] = [
  {
    slug: 'instagram-reels-reach-recognizable-brand',
    title: 'How Instagram Reels Can Expand Your Reach and Build a Recognizable Brand',
    excerpt:
      'A practical way to use short-form video to make your business easier to notice, understand and remember.',
    category: 'Social Media Marketing',
    tags: ['Instagram Reels', 'Brand consistency', 'Short-form video'],
    coverImage: '/images/insights/instagram-reels-supplied-cover.png',
    coverImageAlt: 'A smartphone on a warm studio desk showing a short-form video interface',
    publishedAt: '2026-10-13',
    author: 'AdBuzz Digital',
    seoTitle: 'How Instagram Reels Build Brand Recognition | AdBuzz Digital',
    seoDescription:
      'Practical guidance for using Instagram Reels to help customers recognise and remember your brand.',
    sections: [
      {
        heading: 'Why Instagram Reels matter for businesses',
        paragraphs: [
          'Short-form video is not only about going viral. It is an opportunity to introduce your business to new audiences, communicate what makes you different and build a brand people remember.',
          'A potential customer may discover your business through a 15-second video before they visit your website, walk into your store or speak to your team. That first interaction can be a product demonstration, a behind-the-scenes moment, a useful tip or a story that resonates with a real need.',
          'Organic distribution is not guaranteed. The useful goal is to create relevant content that gives the right audience a reason to watch, share and remember your business.',
        ],
      },
      {
        heading: 'Turn attention into brand growth',
        paragraphs: [
          'Discovery creates an opportunity. Relevant content encourages interest. Consistent brand cues build recognition. A credible customer experience helps turn interest into action.',
          'These stages reinforce one another, but they do not happen automatically. Each Reel should give viewers a reason to move one useful step forward.',
        ],
        bullets: [
          'Use an immediate hook that shows why the subject matters.',
          'Make the benefit or lesson clear before the video ends.',
          'Keep visual and verbal cues connected to the brand.',
          'Choose a next step that fits the viewer’s level of interest.',
        ],
      },
      {
        heading: 'Expand your reach beyond existing followers',
        paragraphs: [
          'Instagram may recommend eligible Reels to people who do not already follow your account. To make that opportunity count, focus on content that communicates its relevance immediately.',
          'A clothing boutique can show three ways to style one outfit. A restaurant can show how a signature dish is prepared. A service business can answer a question customers regularly ask before they purchase. These ideas give a new viewer a reason to stop scrolling and understand the offer.',
        ],
        quote:
          'Before filming, ask: why would someone who has never heard of us care about this video?',
      },
      {
        heading: 'Build recognition through consistency',
        paragraphs: [
          'Reach introduces your business to people. Recognition helps them connect what they see today with what they saw yesterday. A recognisable brand does not need every video to look identical, but it does need a consistent identity across different formats and topics.',
          'Use recurring visual cues, an identifiable tone of voice, content themes that reflect your expertise and an honest message about what the business offers. Repeated cues make the brand easier to recognise and recall over time.',
        ],
      },
      {
        heading: 'Create content people have a reason to share',
        paragraphs: [
          'A useful Reel gives someone something worth passing along: a practical tip, a clear explanation, an interesting demonstration or a relatable experience. This is more sustainable than relying only on trends.',
        ],
        bullets: [
          'What do customers regularly ask us?',
          'What mistakes can we help them avoid?',
          'What can we demonstrate better than we can explain in a caption?',
          'What would be useful enough to share with someone else?',
        ],
      },
      {
        heading: 'Measure what helps people take the next step',
        paragraphs: [
          'Views indicate exposure, not the complete business outcome. Review reach and non-follower views for discovery; watch time, shares and saves for engagement; and profile visits, enquiries, bookings or sales for business outcomes.',
          'Attribution will not always be perfect. A customer may discover you through a Reel and return later through search or a recommendation. Use platform insights alongside website analytics and enquiry records, then improve the next piece of content from what you learn.',
        ],
      },
    ],
  },
  {
    slug: 'brand-identity-before-advertising',
    title: 'Brand Identity Before Advertising: Why Strategy Should Come First',
    excerpt:
      'Advertising can create attention. Brand strategy helps that attention turn into understanding and trust.',
    category: 'Brand Strategy',
    tags: ['Brand identity', 'Positioning', 'Creative direction'],
    coverImage: '/images/insights/brand-identity-strategy-cover.png',
    coverImageAlt: 'A brand strategy workshop reviewing visual identity boards',
    publishedAt: '2026-10-08',
    author: 'AdBuzz Digital',
    seoTitle: 'Why Brand Strategy Comes Before Advertising | AdBuzz Digital',
    seoDescription:
      'Understand why a clear brand identity and strategy make advertising more useful for growing businesses.',
    sections: [
      {
        heading: 'Attention is not the same as understanding',
        paragraphs: [
          'An advert can place your business in front of new people. But if the offer, point of difference and visual identity are unclear, that attention has little to hold on to.',
          'Strategy gives creative work a job. It helps decide what the business should be known for, who needs to hear it and what action matters most.',
        ],
      },
      {
        heading: 'Start with the decisions customers need to make',
        paragraphs: [
          'Useful brand work begins with the customer. What are they trying to solve? What information do they need before they can trust you? What makes one option feel more appropriate than another?',
        ],
        bullets: [
          'Clarify the business offer in everyday language.',
          'Identify the audience and the moments that matter.',
          'Choose a position you can genuinely support.',
          'Create visual and verbal rules that help the team stay consistent.',
        ],
      },
      {
        heading: 'A stronger brief creates stronger advertising',
        paragraphs: [
          'Once the foundations are clear, advertising can become more specific. The campaign can lead with a relevant message, use consistent creative and direct people to a next step that matches the promise.',
          'That does not make advertising automatic. It makes the testing and learning more useful because the work is tied to a defined identity.',
        ],
        quote:
          'Strategy does not slow creative down. It prevents the team from repeatedly solving the same basic question.',
      },
      {
        heading: 'Make the identity usable',
        paragraphs: [
          'A brand system should help everyday decisions, not sit unused in a folder. Give the people creating posts, presentations, signage and campaigns enough direction to make the business feel coherent wherever customers meet it.',
        ],
      },
    ],
  },
  {
    slug: 'practical-marketing-audit-before-ads',
    title: 'Before You Spend on Ads: A Practical Marketing Audit for Small Businesses',
    excerpt:
      'A focused audit can show what needs fixing before paid attention is sent to your website, profile or enquiry flow.',
    category: 'Digital Marketing',
    tags: ['Marketing audit', 'Paid advertising', 'Customer journey'],
    coverImage: '/images/insights/marketing-audit-cover.png',
    coverImageAlt:
      'A marketing audit workspace showing customer journey, landing page and lead-flow checks',
    publishedAt: '2026-10-01',
    author: 'AdBuzz Digital',
    seoTitle: 'A Practical Marketing Audit Before Paid Ads | AdBuzz Digital',
    seoDescription:
      'A practical marketing audit checklist for small businesses before investing in paid advertising.',
    sections: [
      {
        heading: 'Audit the path after the click',
        paragraphs: [
          'Paid advertising brings people to a destination. Before increasing spend, review what happens when they arrive. Can they understand the offer? Is the key information easy to find? Is the contact or buying step obvious?',
          'Small gaps can create friction: an outdated profile, a vague landing page, slow follow-up or an enquiry form that asks for too much.',
        ],
      },
      {
        heading: 'Check the essential building blocks',
        paragraphs: [
          'The audit does not need to be complicated. Start with the customer journey you want the campaign to support.',
        ],
        bullets: [
          'A clear offer and a focused audience.',
          'A page or profile that matches the ad message.',
          'Current proof, useful visuals and accurate contact details.',
          'A simple route to enquire, book or buy.',
          'A way to record what happens after a lead arrives.',
        ],
      },
      {
        heading: 'Choose one objective at a time',
        paragraphs: [
          'An ad campaign is easier to assess when it has one primary job. That might be introducing a new service, generating enquiries for a defined offer or bringing people to a useful piece of content.',
          'Trying to achieve every outcome in one campaign makes decisions harder and reporting less meaningful.',
        ],
        quote:
          'The best first improvement is often the one that makes the next customer action easier.',
      },
      {
        heading: 'Use the audit as a working document',
        paragraphs: [
          'Keep the findings visible. As campaigns run, update the audit with new questions, feedback and changes to the offer. It becomes a practical record of what the business has learned, not a one-time checklist.',
        ],
      },
    ],
  },
];

export function getReadingTime(article: InsightArticle) {
  const words = article.sections
    .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])])
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
