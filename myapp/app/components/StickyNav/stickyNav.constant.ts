import { StickyNavGroupType } from "./stickyNav.type";

export const STICKY_NAV_DATA: StickyNavGroupType[] = [
    {
        groupId: "services",
        links: [
            { id: "services", label: "Our Design", href: "#services" },
            { id: "included", label: "Included", href: "#included" },
            { id: "portfolio", label: "Portfolio", href: "#portfolio" }
        ]
    }, {
        groupId: "company",
        links: [
            { id: "about", label: "About Us", href: "#about" },
            { id: "contact", label: "Contact Us", href: "#contact" }
        ]
    }
];