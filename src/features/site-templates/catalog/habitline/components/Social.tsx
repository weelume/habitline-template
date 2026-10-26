'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { asset, t, type Locale } from '../config/brand';
import { audiences, copy, reviews } from '../content/data';
import { Button, Heading, Reveal } from './Primitives';
export function UseCases({ locale }: {
    locale: Locale;
}) {
    const [active, setActive] = useState(0);
    return <section id="use-case" className="hl-section"><div className="hl-use-cases"><Heading center eyebrow={t(copy('适合每一种生活方式', 'Fits every lifestyle'), locale)} title={t(copy('为你的生活与工作\n找到合适的节奏', 'Adapted for the way you live and work'), locale)}/><div className="hl-tabs" role="tablist" aria-label={t(copy('选择生活场景', 'Choose lifestyle'), locale)}>{audiences.map((a, i) => <button key={a.name.en} role="tab" aria-selected={active === i} aria-controls="hl-use-panel" id={'hl-tab-' + i} onKeyDown={e => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + audiences.length) % audiences.length;
                    setActive(next);
                    document.getElementById('hl-tab-' + next)?.focus();
                }
            }} onClick={() => setActive(i)}>{t(a.name, locale)}</button>)}</div><AnimatePresence mode="wait"><motion.div className="hl-case-image" id="hl-use-panel" role="tabpanel" aria-labelledby={'hl-tab-' + active} key={active} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}><img src={asset(audiences[active].image)} alt={t(audiences[active].name, locale)}/><div><p>{t(audiences[active].body, locale)}</p><strong>{audiences[active].value}</strong><small>{t(copy('每周坚持率 · 演示数据', 'Weekly consistency · demo data'), locale)}</small></div></motion.div></AnimatePresence><p className="hl-center">#fitness enthusiasts　#creatives　#entrepreneurs　#freelancers</p></div></section>;
}
const videos = ['PRGg2Q31L3cBm9aIlNsOfMD8QL8.mp4', 'TwMQMPf1H0P9cYfxE88cxOnb0qU.mp4', 'nG8aNSXF9bVc3wia1eVPP35Z5c8.mp4', 'wBHfmVdBC9k7z6MAlqRq6AD7ZWw.mp4'];
export function Social({ locale }: {
    locale: Locale;
}) { const [video, setVideo] = useState(0); const [expanded, setExpanded] = useState(false); return <section className="hl-section"><Heading center eyebrow={t(copy('更近距离的真实体验', 'A closer look'), locale)} title={t(copy('看看大家如何\n把习惯融入每一天', 'How people use Habitline every day'), locale)}/><p className="hl-center">4.5/5 <span className="hl-stars">★★★★★</span> {t(copy('（1582+ 位用户的信任）', '(Trusted by 1582+ users)'), locale)}</p><div className="hl-video-carousel"><video key={video} src={asset(videos[video])} controls playsInline preload="metadata" aria-label={t(copy('用户评价视频', 'User testimonial video'), locale)}/><div className="hl-carousel-controls"><button onClick={() => setVideo((video + videos.length - 1) % videos.length)} aria-label={t(copy('上一段视频', 'Previous video'), locale)}>‹</button><button onClick={() => setVideo((video + 1) % videos.length)} aria-label={t(copy('下一段视频', 'Next video'), locale)}>›</button></div></div><div className={'hl-reviews ' + (expanded ? 'hl-reviews-expanded' : '')}>{reviews.map((review, i) => <Reveal className="hl-review" key={review.name} delay={i % 3 * .1}><p>{t(review.body, locale)}</p><div><span className="hl-avatar">{review.name[0]}</span><span><b>{review.name}</b><small>{t(review.role, locale)}</small></span></div></Reveal>)}</div><div className="hl-center"><Button onClick={() => setExpanded(!expanded)}>{t(copy(expanded ? '收起评价' : '查看全部评价', expanded ? 'Show fewer reviews' : 'View all Reviews'), locale)}</Button></div></section>; }
