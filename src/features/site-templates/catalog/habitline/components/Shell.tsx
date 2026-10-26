'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { brand, t, type Locale } from '../config/brand';
import { copy } from '../content/data';
import { useHabitlineHost } from '../host';
import { DemoForm } from './Forms';
import { Button, Clouds, Download } from './Primitives';
import '../theme.css';
const pages = [['', '首页', 'Home'], ['home-2', '首页二', 'Home 2'], ['about', '关于我们', 'About'], ['waitlist', '候补名单', 'Waitlist'], ['changelog', '更新日志', 'Changelog'], ['faqs', '常见问题', 'FAQs'], ['contact', '联系我们', 'Contact'], ['legal-pages/privacy-policy', '隐私政策', 'Privacy Policy'], ['legal-pages/terms-conditions', '服务条款', 'Terms & Conditions']];
export function Shell({ children, locale, basePath, hero = false }: {
    children: ReactNode;
    locale: Locale;
    basePath: string;
    hero?: boolean;
}) {
    const host = useHabitlineHost();
    const pathname = usePathname();
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);
    const root = locale === 'en' ? basePath.replace(/\/en$/, '') : basePath;
    const home = (basePath || '') + '/';
    const nav = [['features', '功能一览', 'What’s inside'], ['use-case', '应用场景', 'Use case'], ['metrics', '真实成果', 'Metrics'], ['smart-assist', '智能建议', 'Smart Assist']];
    useEffect(() => { document.documentElement.lang = locale === 'en' ? 'en' : 'zh-CN'; }, [locale]);
    function closeMenu() { setMenu(false); menuButton.current?.focus(); }
    function languageHref() { const suffix = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname; return (locale === 'en' ? root : root + '/en') + (suffix || '/'); }
    return <MotionConfig reducedMotion="user"><div className="hl" lang={locale === 'en' ? 'en' : 'zh-CN'}><a className="hl-skip" href="#hl-main">{t(copy('跳转正文', 'Skip to content'), locale)}</a><header className={'hl-header ' + (hero ? 'hl-header-hero' : '')}><Link className="hl-brand" href={home}>{host.logo && <img src={host.logo} alt=""/>}<span>{t(host.brandName, locale)}</span></Link><nav aria-label={t(copy('主导航', 'Main navigation'), locale)}>{nav.map(([id, zh, en]) => <Link key={id} href={home + '#' + id}>{locale === 'zh' ? zh : en}</Link>)}</nav><div className="hl-nav-right"><Link href={languageHref()} onClick={event => { event.preventDefault(); router.push(languageHref() + window.location.search + window.location.hash); }} aria-label={locale === 'zh' ? 'Switch to English' : '切换为中文'}>{locale === 'zh' ? 'EN' : '中文'}</Link><button ref={menuButton} onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="hl-mobile-menu" className="hl-menu-button">{t(copy(menu ? '关闭' : '菜单', menu ? 'Close' : 'Menu'), locale)}</button></div><AnimatePresence>{menu && <motion.nav id="hl-mobile-menu" className="hl-mobile-menu" aria-label={t(copy('全部页面', 'All pages'), locale)} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} onKeyDown={e => {
                if (e.key === 'Escape')
                    closeMenu();
            }}>{pages.map(([slug, zh, en]) => <Link key={slug} onClick={closeMenu} href={home + slug}>{locale === 'zh' ? zh : en}</Link>)}</motion.nav>}</AnimatePresence></header><main id="hl-main">{children}</main><footer className="hl-footer"><div><Link href={home} className="hl-brand">{host.logo && <img src={host.logo} alt=""/>}<span>{t(host.brandName, locale)}</span></Link><h3>{t(copy('让每一个小习惯延续下去', 'Stay on top of your habits'), locale)}</h3><p>{t(copy('只分享简单实用的坚持建议', 'No spam. Just simple advice for staying consistent.'), locale)}</p><DemoForm locale={locale} kind="subscribe"/></div><div><h3>{t(copy('快速链接', 'Quick links'), locale)}</h3>{nav.map(([id, zh, en]) => <Link key={id} href={home + '#' + id}>{locale === 'zh' ? zh : en}</Link>)}</div><div><h3>{t(copy('全部页面', 'Pages'), locale)}</h3>{pages.slice(0, 5).map(([slug, zh, en]) => <Link key={slug} href={home + slug}>{locale === 'zh' ? zh : en}</Link>)}</div><div><h3>{t(copy('支持', 'Support'), locale)}</h3>{pages.slice(5).map(([slug, zh, en]) => <Link key={slug} href={home + slug}>{locale === 'zh' ? zh : en}</Link>)}</div><div className="hl-footer-bottom"><span>© {brand.year} {t(host.brandName, locale)} · {t(copy('让好习惯自然延续', 'Make a good day easier to repeat'), locale)}</span>{host.filing}</div></footer>{host.marketplaceHref && <Link className="hl-marketplace" aria-label={host.marketplaceAriaLabel ? t(host.marketplaceAriaLabel, locale) : t(copy('打开模板市场', 'Open template marketplace'), locale)} href={host.marketplaceHref}>{(host.lightLogo || host.logo) && <img src={host.lightLogo || host.logo} alt=""/>}<span>{host.marketplaceLabel ? t(host.marketplaceLabel, locale) : t(host.brandName, locale)}</span></Link>}</div></MotionConfig>;
}
export function Cta({ locale }: {
    locale: Locale;
}) { return <section className="hl-cta hl-section"><Clouds /><div><h2>{t(copy('用更少力气\n培养更好的习惯', 'Build better habits with less effort'), locale)}</h2><p>{t(copy('记录重要的事，让每一天有条不紊，按自己的节奏进步。', 'Track what matters, stay organized, and improve at your own pace.'), locale)}</p><Download locale={locale}/></div><div className="hl-qr"><p>{t(copy('从今天的一个小习惯开始', 'Start with one small habit today'), locale)}</p><Button light>{t(copy('应用下载展示', 'App download preview'), locale)}</Button></div></section>; }
