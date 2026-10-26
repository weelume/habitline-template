'use client';
import { useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { asset, t, type Locale } from '../config/brand';
import { copy } from '../content/data';
export function Reveal({ children, className = '', delay = 0 }: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) { const reduced = useReducedMotion(); return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 32, filter: 'blur(7px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: .12 }} transition={{ duration: .75, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>; }
export function Button({ children, href, onClick, light = false }: {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    light?: boolean;
}) { const content = <span className="hl-button-clip"><span>{children}</span><span aria-hidden="true">{children}</span></span>; return href ? <Link href={href} className={'hl-button ' + (light ? 'hl-light' : '')}>{content}</Link> : <button type="button" onClick={onClick} className={'hl-button ' + (light ? 'hl-light' : '')}>{content}</button>; }
export function Heading({ eyebrow, title, body, center = false }: {
    eyebrow?: string;
    title: string;
    body?: string;
    center?: boolean;
}) { return <Reveal className={'hl-heading ' + (center ? 'hl-center' : '')}>{eyebrow && <span className="hl-kicker">{eyebrow}</span>}<h2>{title}</h2>{body && <p>{body}</p>}</Reveal>; }
export function Download({ locale }: {
    locale: Locale;
}) { return <div className="hl-download"><Button light>{t(copy('下载 iPhone 版', 'Download for iPhone'), locale)}</Button><Button light>{t(copy('获取 Android 版', 'Get it on Android'), locale)}</Button><small>{t(copy('应用下载展示 · 暂未接入下载服务', 'App download preview · no download service connected'), locale)}</small></div>; }
export function Clouds() { return <div className="hl-clouds" aria-hidden="true"><img src={asset('c5yKOUxAULPtn3CoxX5b92vgJ8U.png')} alt=""/><img src={asset('vK1naOOAfBeOfzjSqlloxH7w.png')} alt=""/></div>; }
export function ParallaxPhone() { const ref = useRef<HTMLDivElement>(null); const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] }); const reduced = useReducedMotion(); const rotate = useTransform(scrollYProgress, [0, 1], [-14, 10]); const y = useTransform(scrollYProgress, [0, 1], [50, -50]); return <div className="hl-ai-art" ref={ref}><motion.img style={reduced ? {} : { rotate, y }} src={asset('HOI14HQm9TteAT5Gus0apcpG1o.png')} alt="Habitline"/></div>; }
export function Counter({ value, suffix = '' }: {
    value: number;
    suffix?: string;
}) { const reduced = useReducedMotion(); return <span className="hl-counter" aria-label={String(value) + suffix}>{String(value).split('').map((digit, i) => <span className="hl-digit" key={i}><motion.span aria-hidden="true" initial={reduced ? false : { y: '0%' }} whileInView={{ y: `-${Number(digit) * 10}%` }} viewport={{ once: true }} transition={{ duration: 1.6, delay: i * .12, ease: [.22, 1, .36, 1] }}>{Array.from({ length: 10 }, (_, j) => <span key={j}>{j}</span>)}</motion.span></span>)}<span aria-hidden="true">{suffix}</span></span>; }
