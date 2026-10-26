'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { t } from '../config/brand';
import { copy, faqGroups } from '../content/data';
import { Shell } from '../components/Shell';
import { Button } from '../components/Primitives';
import { Faq } from '../components/Faq';
export default function FaqPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="hl-section hl-page-hero"><span className="hl-kicker">{t(copy('常见问题', 'Common Questions'), locale)}</span><h1>{t(copy('你可能想知道', 'Frequently asked questions'), locale)}</h1></section><section className="hl-section hl-faq-page">{faqGroups.map(group => <section className="hl-faq-layout" key={group.name.en}><h2>{t(group.name, locale)}</h2><Faq locale={locale} items={group.items}/></section>)}<div className="hl-center"><h2>{t(copy('还有其他问题？', 'Didn’t find what you’re looking for?'), locale)}</h2><Button href={basePath + '/contact'}>{t(copy('联系我们', 'Get in touch'), locale)}</Button></div></section></Shell>; }
