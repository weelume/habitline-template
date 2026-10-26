import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { habitlineTemplate } from '../../features/site-templates/catalog/habitline/meta';
export const dynamicParams = false;
export function generateStaticParams() { return habitlineTemplate.surfaces[0].pages.flatMap(p => [{ slug: p.slug ? p.slug.split('/') : [] }, { slug: ['en', ...(p.slug ? p.slug.split('/') : [])] }]); }
export default async function Page({ params }: {
    params: Promise<{
        slug?: string[];
    }>;
}) {
    const { slug = [] } = await params;
    const locale = slug[0] === 'en' ? 'en' : 'zh';
    const path = (locale === 'en' ? slug.slice(1) : slug).join('/');
    const page = habitlineTemplate.surfaces[0].pages.find(p => p.slug === path);
    if (!page)
        notFound();
    const { default: Component } = await page.load();
    return <Suspense><Component locale={locale} basePath={locale === 'en' ? '/en' : ''}/></Suspense>;
}
