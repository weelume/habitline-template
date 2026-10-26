'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { t } from '../config/brand';
import { copy } from '../content/data';
import { Shell } from '../components/Shell';
import { Reveal } from '../components/Primitives';
export default function ChangelogPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="hl-section hl-page-hero"><h1>{t(copy('更新日志', 'Changelog'), locale)}</h1><p>{t(copy('了解最新功能、性能改进与 AI 能力更新。', 'Explore the latest features, performance updates, and AI enhancements.'), locale)}</p></section><section className="hl-section hl-changelog"><Reveal><span>Version 1.1.0</span><article><h2>{t(copy('新增页面', 'New Page Added'), locale)}</h2><p>Home 2</p><h3>{t(copy('本次更新', 'Updates'), locale)}</h3><ul><li>{t(copy('更新循环滚动组件', 'Updated old Framer ticker to the new one'), locale)}</li><li>{t(copy('优化组件组织结构', 'Updated component organization'), locale)}</li><li>{t(copy('支持标题文本平衡换行', 'Added text balance for cleaner headings'), locale)}</li></ul></article></Reveal><Reveal><span>Version 1.0.0</span><article><h2>{t(copy('首次发布', 'Initial release'), locale)}</h2></article></Reveal></section></Shell>; }
