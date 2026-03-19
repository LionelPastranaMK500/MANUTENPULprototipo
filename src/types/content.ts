export type Language = 'IT' | 'ES';

export interface SubLink {
    label: string;
    href: string;
}

export interface NavLink {
    id: string;
    label: string;
    href?: string;
    subLinks?: SubLink[];
}

export interface NavigationData {
    logo: string;
    tagline: string;
    links: NavLink[];
    cta: string;
}

export interface HeroData {
    badge: string;
    titleMain: string;
    titleDivider: string;
    titleSecondary: string;
    description: string;
    cta: string;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface PresenceData {
    title: string;
    highlight: string;
    description: string;
    locations: Array<{
        country: string;
        status: string;
        description: string;
    }>;
}

export interface ContentLocale {
    navigation: NavigationData;
    hero: HeroData;
    services: ServiceItem[]; 
    presence: PresenceData;
}