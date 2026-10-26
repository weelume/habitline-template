'use client';
import { useEffect, useRef } from 'react';
import { asset, t, type Locale } from '../config/brand';
import { copy } from '../content/data';
// 原生模态对话框提供焦点限制、Escape 关闭和关闭后的焦点恢复。
export function VideoModal({ locale, onClose }: {
    locale: Locale;
    onClose: () => void;
}) { const ref = useRef<HTMLDialogElement>(null); useEffect(() => { const dialog = ref.current; dialog?.showModal(); return () => dialog?.close(); }, []); return <dialog ref={ref} className="hl-video-dialog" onCancel={onClose} aria-label={t(copy('视频演示', 'Video demo'), locale)}><button onClick={onClose} className="hl-modal-close">{t(copy('关闭', 'Close'), locale)} ×</button><video src={asset('PRGg2Q31L3cBm9aIlNsOfMD8QL8.mp4')} controls autoPlay playsInline/></dialog>; }
