'use client'

import React from "react";
import { FOOTER_COMPANY_LINKS, FOOTER_LEGAL_LINKS, FOOTER_SERVICES_LINKS } from "./footer.constant";
import { FooterLinkType } from "./footer.type";
import './footer.modules.css'
import Image from "next/image";

const Footer = () => {
    const year = new Date().getFullYear();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (href.startsWith('#')) {
            if (window.location.pathname !== '/') {
                window.location.href = '/' + href;
                return;
            }

            e.preventDefault();

            const element = document.querySelector(href);

            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <footer className="vh-footer">
            <div className="vh-footer-inner">
                <div className="vh-footer-grid">
                    {/* NAP – critical for local SEO */}
                    <div className="vh-footer-brand">
                        {/* <span className="vh-footer-logo">Interior By Pranjali</span> */}
                        <Image
                            src="/logo.svg"
                            alt="InteriorByPranjali"
                            width={150}
                            height={80}
                            className="vh-footer-logo-img"
                        />
                        <p className="vh-footer-tagline">
                            Transforming spaces and creating exceptional real estate experience  since 2021.
                        </p>
                    </div>
                    <div className="vh-footer-col" >
                        <h3 className="vh-footer-col-heading">Services</h3>
                        <ul className="vh-footer-nav-list">
                            {FOOTER_SERVICES_LINKS.map((link: FooterLinkType) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="vh-footer-col" >
                        <h3 className="vh-footer-col-heading">Company</h3>
                        <ul className="vh-footer-nav-list">
                            {FOOTER_COMPANY_LINKS.map((link: FooterLinkType) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="vh-footer-col" >
                        <h3 className="vh-footer-col-heading">Legal</h3>
                        <ul className="vh-footer-nav-list">
                            {FOOTER_LEGAL_LINKS.map((link: FooterLinkType) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="vh-footer-divider">
                {/* hhh */}
            </div>

            <div className="vh-footer-bottom">
                <span>© {year} Interior By Pranjali. All rights reserved.</span>
                <span className="vh-footer-bottom-meta"> trusted interior design experts</span>
            </div>
        </footer>
    )
}

export default Footer;
