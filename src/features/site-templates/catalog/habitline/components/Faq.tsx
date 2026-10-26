'use client';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { t, type Locale, type Copy } from '../config/brand';
import { homeFaq } from '../content/data';
export function Faq({ locale, items = homeFaq }: {
    locale: Locale;
    items?: {
        q: Copy;
        a: Copy;
    }[];
}) { const [open, setOpen] = useState<number | null>(0); const reduced = useReducedMotion(); return <div className="hl-faq">{items.map((item, i) => <div key={item.q.en} className="hl-faq-item"><h3><button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{t(item.q, locale)}</span><span aria-hidden="true">{open === i ? '×' : '+'}</span></button></h3><AnimatePresence initial={false}>{open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .3 }}><p>{t(item.a, locale)}</p></motion.div>}</AnimatePresence></div>)}</div>; }
