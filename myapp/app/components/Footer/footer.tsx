'use client'

import React from "react";
import { FOOTER_COMPANY_LINKS, FOOTER_LEGAL_LINKS, FOOTER_SERVICES_LINKS } from "./footer.constant";
import { FooterLinkType } from "./footer.type";
import './footer.modules.css'

const Footer = () => {
    const year = new Date().getFullYear();


    return (
        <footer className="vh-footer">
            <div className="vh-footer-inner">
                <div className="vh-footer-grid">
                    {/* NAP – critical for local SEO */}
                    <div className="vh-footer-brand">
                        <span className="vh-footer-logo">Interior By Pranjali</span>
                        <p className="vh-footer-tagline">
                            Transforming spaces and creating exceptional real estate experience  since 2020.
                        </p>
                    </div>
                    <div className="vh-footer-col" >
                        <h3 className="vh-footer-col-heading">Services</h3>
                        <ul className="vh-footer-nav-list">
                            {FOOTER_SERVICES_LINKS.map((link: FooterLinkType) => (
                                <li key={link.href}>
                                    <a href={link.href}>
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
                                    <a href={link.href}>
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
                                    <a href={link.href}>
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
