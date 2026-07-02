'use client'

import React, { useState, useEffect } from "react"
import { STICKY_NAV_DATA } from "./stickyNav.constant"
import "./stickyNav.modules.css"
import { group } from "console";

const StickyNav = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const section = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            })
        }, { rootMargin: "-20% 0px -60% 0px" });

        section.forEach((section) =>
            observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const activeGroup = STICKY_NAV_DATA.find((group) =>
        group.links.some((link) => link.id == activeSection)
    )?.groupId || "services"


    return (

        <div className={`vh-sticky-nav-container ${isVisible ? 'vh-sticky-visible' : ''}`}>
            <div className="vh-sticky-nav-inner">
                {STICKY_NAV_DATA.map((group) => (
                    group.groupId == activeGroup && (
                        <div key={group.groupId} className="vh-sticky-pill-group">
                            {group.links.map((link) => (
                                <a key={link.id}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.id)}
                                    className={`vh-sticky-link ${activeSection === link.id ? 'active' : ''}`}>{link.label}</a>
                            ))}
                        </div>
                    )
                ))}
            </div>
        </div>
    )
};

export default StickyNav;
