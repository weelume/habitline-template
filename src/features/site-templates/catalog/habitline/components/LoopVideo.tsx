'use client';
import { useReducedMotion } from 'framer-motion';
import { asset, t, type Locale } from '../config/brand';
import { copy } from '../content/data';
// 减少动态设置时不自动播放；始终保留原生控件供用户暂停或主动播放。
export function LoopVideo({ locale }: {
    locale: Locale;
}) { const reduced = useReducedMotion(); return <video className="hl-landscape-video" src={asset('yjuD7GFXupvQlqYR8xjXBuh5oc.mp4')} controls muted playsInline loop autoPlay={!reduced} preload="metadata" aria-label={t(copy('Habitline 动态场景', 'Habitline animated scene'), locale)}/>; }
