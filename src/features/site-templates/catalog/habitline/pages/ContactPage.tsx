'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { t } from '../config/brand';
import { copy } from '../content/data';
import { Shell } from '../components/Shell';
import { Heading } from '../components/Primitives';
import { DemoForm } from '../components/Forms';
import { Faq } from '../components/Faq';
export default function ContactPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="hl-section hl-page-hero"><span className="hl-kicker">{t(copy('联系我们', 'Contact us'), locale)}</span><h1>{t(copy('我们在这里\n倾听你的想法', 'We’re here to help'), locale)}</h1><p>{t(copy('无论问题、建议还是支持需求，都欢迎在这里告诉我们。', 'If you have questions, feedback, or need support, reach out and we’ll get back to you as soon as we can.'), locale)}</p></section><section className="hl-section hl-contact-layout"><DemoForm locale={locale}/><aside className="hl-contact-aside"><Heading title={t(copy('直接联系', 'Reach us directly'), locale)}/><h3>{t(copy('产品支持', 'Support email'), locale)}</h3><p>support@habitline.example</p><h3>{t(copy('商务与合作', 'Business / Partnerships'), locale)}</h3><p>hello@habitline.example</p><small>{t(copy('以上为演示邮箱，不接受真实邮件。', 'These are demonstration addresses and do not receive mail.'), locale)}</small></aside></section><section className="hl-section hl-faq-layout"><Heading eyebrow={t(copy('常见问题', 'Common questions'), locale)} title={t(copy('先看看这些解答', 'Frequently asked questions'), locale)}/><Faq locale={locale}/></section></Shell>; }
