export type Locale = 'zh' | 'en';
export type Copy = {
    zh: string;
    en: string;
};
export const t = (value: Copy, locale: Locale) => value[locale];
export const brand = { name: { zh: 'Habitline', en: 'Habitline' }, logo: '/templates/habitline/media/3AsTMGQpJ4jcC8fwNEWoVEO0k.svg', year: 2026 };
export const asset = (file: string) => '/templates/habitline/media/' + file;
