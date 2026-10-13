import { CookieConsent } from '@/components/CookieConsent';
import { SiteFrame } from '@/components/SiteFrame';
import { Env } from '@/libs/Env';

export default function MarketingLayout(props: { children: React.ReactNode }) {
  return (
    <SiteFrame whatsAppNumber={Env.NEXT_PUBLIC_WHATSAPP_NUMBER}>
      {props.children}
      <CookieConsent />
    </SiteFrame>
  );
}
