import { Suspense, type ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Habitline · 让好习惯自然延续', description: '一款贴近真实生活节奏的双语健康与习惯管理网站模板' };
export default function Layout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN"><body><Suspense>{children}</Suspense></body></html>; }
