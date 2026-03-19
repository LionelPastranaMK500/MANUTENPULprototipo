export type Language = "IT" | "ES" | "EN";

export interface NavigationLink {
  id: string;
  label: string;
  href?: string;
  subLinks?: {
    label: string;
    href: string;
  }[];
}

export interface ContentLocale {
  navigation: {
    logo: string;
    tagline: string;
    links: NavigationLink[];
    cta: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleDivider: string;
    titleSecondary: string;
    description: string;
    cta: string;
  };
  services: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
}
