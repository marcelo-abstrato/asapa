export interface NavigationLink {
    href: string;
    label: string;
    submenu?: {
        href: string;
        label: string;
    }[];
}

export interface NavigationProps {
    links: NavigationLink[];
}
