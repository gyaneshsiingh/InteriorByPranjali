export interface StickyNavLinkType {
    id: string;
    label: string;
    href: string;
}

export interface StickyNavGroupType {
    groupId: string;
    links: StickyNavLinkType[];
}


