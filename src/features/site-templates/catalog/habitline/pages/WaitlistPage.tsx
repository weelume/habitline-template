'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { t } from '../config/brand';
import { copy } from '../content/data';
import { Shell } from '../components/Shell';
import { HabitDemo } from '../components/HabitDemo';
import { DemoForm } from '../components/Forms';
export default function WaitlistPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="hl-section hl-waitlist"><div><span className="hl-kicker">{t(copy('即将开启', 'Coming soon'), locale)}</span><h1>{t(copy('加入 Habitline\n候补名单', 'Join the Habitline waitlist'), locale)}</h1><p>{t(copy('我们正在准备一款围绕真实生活打造、更清晰也更从容的习惯应用。', 'We’re getting ready to launch a cleaner, calmer habit app built around real life.'), locale)}</p><DemoForm locale={locale} kind="waitlist"/></div><HabitDemo locale={locale}/></section></Shell>; }
