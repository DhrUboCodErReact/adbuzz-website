import Link from 'next/link';

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

const privacySections: LegalSection[] = [
  {
    heading: '1. Information we collect',
    paragraphs: [
      'We may collect information that you provide directly to us, including:',
      'When you use our website, we may also collect limited technical information such as:',
      'Please do not submit passwords, banking details, Aadhaar details, health information or other sensitive personal information through our website forms.',
    ],
    items: [
      'Your name',
      'Business or brand name',
      'Email address',
      'Phone number or WhatsApp number',
      'Service requirement',
      'Project brief, business information, timeline and optional budget range',
      'Information shared through website forms, email, WhatsApp, social media or meetings',
      'IP address',
      'Browser and device type',
      'Pages viewed and time spent on the website',
      'Referring website or source',
      'Cookie and analytics data, where enabled',
    ],
  },
  {
    heading: '2. How we use your information',
    paragraphs: ['We may use your information to:', 'We do not sell your personal information.'],
    items: [
      'Respond to enquiries and requests',
      'Understand your business needs',
      'Prepare a quotation, proposal or project scope',
      'Contact you by phone, WhatsApp or email',
      'Deliver agreed services',
      'Send project-related communication',
      'Improve our website, services and customer experience',
      'Measure website traffic, campaign activity and website performance',
      'Meet legal, accounting, security or record-keeping obligations',
    ],
  },
  {
    heading: '3. Marketing communication',
    paragraphs: [
      'If you contact us, request information or choose to receive updates, we may send relevant communication about our services, content, campaigns or offers.',
      'You can ask us to stop marketing communication at any time by:',
      'Stopping marketing communication will not affect essential project-related communication.',
    ],
    items: [
      'Replying “STOP” to a WhatsApp message where applicable',
      'Clicking an unsubscribe link in an email, where available',
      'Emailing us at connect@adbuzzdigital.com',
    ],
  },
  {
    heading: '4. How we share information',
    paragraphs: ['We may share personal information only when reasonably required for our business operations, including:', 'We expect third-party providers to handle information appropriately for the services they provide.'],
    items: [
      'Team members and authorised contractors working on your project',
      'Website hosting, analytics, email, CRM, communication or cloud-storage providers',
      'Payment, domain, hosting, advertising or software providers where relevant to your project',
      'Professional advisers, government bodies or law-enforcement agencies where required by law',
      'A buyer, successor or affiliated entity in the event of a business restructuring, sale or transfer',
    ],
  },
  {
    heading: '5. Cookies and analytics',
    paragraphs: [
      'Our website may use cookies and similar technologies to improve website functionality, understand visitor behaviour and measure marketing performance.',
      'You can manage or disable cookies through your browser settings. Some website features may not work properly if you disable certain cookies.',
      'Where required, we will provide a cookie notice or consent option before using non-essential cookies.',
    ],
  },
  { heading: '6. Data security', paragraphs: ['We use reasonable administrative, technical and organisational measures to protect personal information from unauthorised access, loss, misuse, alteration or disclosure.', 'However, no website, online platform or data transmission can be guaranteed to be completely secure. You provide information at your own discretion.'] },
  { heading: '7. Data retention', paragraphs: ['We retain personal information only for as long as reasonably necessary to:', 'When information is no longer required, we may securely delete or anonymise it.'], items: ['Respond to your enquiry', 'Deliver services', 'Maintain project and business records', 'Resolve disputes', 'Meet legal, tax, accounting or security requirements'] },
  { heading: '8. Your rights and choices', paragraphs: ['Subject to applicable law, you may request to:', 'To make a request, email connect@adbuzzdigital.com. We may need to verify your identity before processing your request.'], items: ['Access personal information we hold about you', 'Correct inaccurate or incomplete information', 'Withdraw consent where processing is based on consent', 'Ask us to delete information that is no longer required', 'Raise a privacy concern or complaint'] },
  { heading: '9. Third-party links', paragraphs: ['Our website may contain links to third-party websites, social-media platforms, payment providers or external tools. We are not responsible for their content, privacy practices or security. Please review their policies before sharing information with them.'] },
  { heading: '10. Children’s privacy', paragraphs: ['Our website and services are not intended for children. We do not knowingly collect personal information from children without appropriate parent or guardian consent.'] },
  { heading: '11. Changes to this Privacy Policy', paragraphs: ['We may update this Privacy Policy when our website, services, processes or legal obligations change. The revised version will be published on this page with an updated “Last updated” date.'] },
];

const termsSections: LegalSection[] = [
  { heading: '1. About AdBuzz Digital', paragraphs: ['AdBuzz Digital provides services that may include:', 'The exact scope, timelines, deliverables, fees and responsibilities for every project will be confirmed separately through a quotation, proposal, invoice, statement of work or written agreement.'], items: ['Branding and designing', 'Social media and digital marketing', 'Website and technology solutions', 'Content creation and copywriting', 'Video production and photography', 'Creative campaigns and events', 'E-commerce and digital solutions'] },
  { heading: '2. Website information', paragraphs: ['The content on this website is provided for general information only. It does not create a client relationship, guarantee any result or constitute legal, financial, advertising-platform or business advice.', 'We may update, remove or change website content, services or features at any time.'] },
  { heading: '3. Enquiries and proposals', paragraphs: ['Submitting a contact form, calling, emailing or messaging AdBuzz Digital does not create a binding agreement.', 'A project begins only after the scope is agreed in writing and any required approval, advance payment or agreement is completed.'] },
  { heading: '4. Client responsibilities', paragraphs: ['You agree to provide accurate, complete and timely information needed for your project, including:', 'Delays in receiving required information, feedback or approval may affect project timelines.'], items: ['Business information', 'Brand materials', 'Product or service details', 'Feedback and approvals', 'Website, advertising or social-media access where required', 'Images, videos, copy and other project materials'] },
  { heading: '5. Fees, payments and third-party costs', paragraphs: ['Project fees, payment stages, taxes and due dates will be mentioned in the relevant quotation or invoice.', 'Unless explicitly included in writing, third-party costs are separate. These may include:', 'Late payment may result in a pause to work, delivery, support, access or project launch until payments are cleared.'], items: ['Advertising spend', 'Domain name and hosting charges', 'Stock images, music, fonts or other licensed assets', 'Payment gateway charges', 'Software, plugin or platform subscriptions', 'Printing, production, travel or event costs'] },
  { heading: '6. Revisions and scope changes', paragraphs: ['Any included revisions will be stated in the relevant proposal or agreement.', 'Requests outside the agreed scope—such as additional pages, new services, extra edits, new campaign assets, new website features or additional video changes—may require a revised quotation and timeline.'] },
  { heading: '7. Client content and permissions', paragraphs: ['You confirm that you own, control or have permission to use all content, materials and data you provide to us. This includes logos, images, videos, music, trademarks, product information, customer data, copy and brand assets.', 'You are responsible for ensuring that your products, services, offers, claims and supplied materials are accurate, lawful and non-infringing.', 'AdBuzz Digital may refuse to use or publish material that appears unlawful, misleading, harmful, offensive or likely to infringe another person’s rights.'] },
  { heading: '8. Intellectual property', paragraphs: ['Unless a written agreement states otherwise:'], items: ['AdBuzz Digital retains ownership of its pre-existing methods, templates, processes, tools, concepts and working files.', 'Ownership or permitted use of final approved deliverables transfers only after full payment for the applicable project.', 'Third-party assets remain subject to their own licences and usage terms.', 'Source files, editable files, raw footage and working files are provided only when included in the agreed scope.', 'We may showcase completed public work in our portfolio or social media only with your approval.'] },
  { heading: '9. Marketing, advertising and performance', paragraphs: ['Marketing results depend on many factors outside our control, including audience behaviour, competition, budgets, offer quality, website performance, client response time and platform policies.', 'AdBuzz Digital does not guarantee:', 'Advertising platforms, search engines and social-media platforms may change their algorithms, policies, pricing or account rules at any time. We are not responsible for third-party platform decisions.'], items: ['Search-engine rankings', 'Leads, sales or revenue', 'Social-media reach, followers or engagement', 'Advertising approval', 'Campaign performance', 'Website traffic', 'A specific business result'] },
  { heading: '10. Websites, hosting and third-party services', paragraphs: ['Where a project uses hosting, domains, plugins, payment providers, ad platforms, social-media platforms, software or other third-party services, their availability, security, pricing, policies and performance are outside our control.', 'We are not responsible for third-party outages, suspended accounts, policy changes, security incidents, lost data or service interruptions.'] },
  { heading: '11. Confidentiality', paragraphs: ['We will treat non-public project information shared with us as confidential and use it only to provide services, except where disclosure is required by law or where the information becomes public through no fault of ours.'] },
  { heading: '12. Limitation of liability', paragraphs: ['To the maximum extent permitted by law, AdBuzz Digital will not be liable for indirect, incidental, special or consequential losses, including lost profits, lost sales, loss of data, loss of business opportunity or damage to reputation.', 'Our total liability relating to a specific project will not exceed the amount actually paid to AdBuzz Digital for that specific project.'] },
  { heading: '13. Suspension or termination', paragraphs: ['Either party may end a project according to the agreed project terms.', 'If a project is paused or terminated, you remain responsible for payment for:'], items: ['Work already completed', 'Approved work in progress', 'Committed production costs', 'Non-refundable third-party expenses', 'Any other fees due under the agreed scope'] },
  { heading: '14. Governing law', paragraphs: ['These Terms are governed by the laws of India. Any dispute will be subject to the appropriate courts in West Bengal, India.'] },
  { heading: '15. Changes to these Terms', paragraphs: ['We may update these Terms & Conditions when our website, services or business practices change. The current version will be published on this page with an updated date.'] },
];

function ContactDetails(props: { heading: string }) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-2xl font-bold tracking-tight">{props.heading}</h2>
      <div className="mt-4 space-y-1 text-muted-foreground">
        <p className="font-medium text-foreground">AdBuzz Digital</p>
        <p>Website: https://adbuzzdigital.com</p>
        <p>Email: connect@adbuzzdigital.com</p>
        <p>Phone / WhatsApp: +91 74329 41371</p>
        <p>Service area: West Bengal, India</p>
      </div>
    </section>
  );
}

export function LegalPage(props: { type: 'privacy' | 'terms' }) {
  const isPrivacy = props.type === 'privacy';
  const title = isPrivacy ? 'Privacy policy' : 'Terms and conditions';
  const intro = isPrivacy
    ? 'AdBuzz Digital (“AdBuzz Digital”, “we”, “us” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, store and protect personal information when you visit https://adbuzzdigital.com, contact us, submit an enquiry or use our services.'
    : 'Welcome to https://adbuzzdigital.com. These Terms & Conditions govern your use of this website and your engagement with AdBuzz Digital. By accessing our website, submitting an enquiry or engaging our services, you agree to these Terms.';
  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-bold tracking-[0.2em] text-primary">ADBUZZ DIGITAL / LEGAL</p>
      <h1 className="mt-4 text-5xl font-black tracking-[-0.07em] md:text-6xl">{title}</h1>
      <p className="mt-6 text-sm font-medium text-muted-foreground">Last updated: 14 October 2026</p>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">{intro}</p>

      <div className="mt-14 space-y-12">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-bold tracking-tight">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {section.items ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted-foreground marker:text-primary">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <ContactDetails heading={isPrivacy ? '12. Contact us' : '16. Contact us'} />
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        <Link className="font-medium text-foreground underline underline-offset-4" href="/contact">
          Contact AdBuzz Digital
        </Link>{' '}
        if you have any questions about this page.
      </p>
    </section>
  );
}
