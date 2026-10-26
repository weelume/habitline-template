'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { brand, type Copy } from './config/brand';
export interface HabitlineHostConfig {
    brandName: Copy;
    logo?: string;
    lightLogo?: string;
    marketplaceHref?: string;
    marketplaceLabel?: Copy;
    marketplaceAriaLabel?: Copy;
    filing?: ReactNode;
}
const Context = createContext<HabitlineHostConfig>({ brandName: brand.name, logo: brand.logo });
export function HabitlineHostProvider({ children, ...config }: HabitlineHostConfig & {
    children: ReactNode;
}) { return <Context.Provider value={config}>{children}</Context.Provider>; }
export const useHabitlineHost = () => useContext(Context);
