'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "./header.constant";
import { NavLinkType } from "./header.type";
import './header.modules.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {

        if (window.location.pathname !== '/') {
            window.location.href = '/' + href;
            return;
        }

        e.preventDefault();

        setMenuOpen(false);

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
    };


    return (
        <>
            <header className="vh-header">
                <div className="vh-header-inner">
                    <div className="vh-logo vh-logo-desktop">
                        <a href="#home" onClick={(e) => handleScroll(e, '#home')}>
                            <Image
                                src="/logo.svg"
                                alt="InteriorByPranajali"
                                className="vh-logo-image"
                                width={540}
                                height={180}
                                priority
                            />
                        </a>
                    </div>
                    <div className="vh-logo-mobile-wrap">
                        <a href="#home" onClick={(e) =>
                            handleScroll(e, '#home')}>
                            <Image
                                src="/logo.svg"
                                alt="InteriorByPranajali"
                                className="vh-logo-image-mobile"
                                width={180}
                                height={75}
                                priority
                            />
                        </a>
                    </div>

                    <div className="vh-nav-auth vh-nav-desktop">
                        <nav className="vh-nav">
                            {NAV_LINKS.map((link: NavLinkType) => (
                                <a key={link.href} href={link.href}
                                    className="vh-nav-link"

                                    onClick={(e) => handleScroll(e, link.href)}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <button
                        className="vh-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu">
                        <span className={`vh-menu-icon ${menuOpen ? 'vh-menu-icon-open' : ''}`} />
                    </button>
                </div>
                {menuOpen && (
                    <div className="vh-mobile-menu" onClick={() =>
                        setMenuOpen(false)}>
                        <div className="vh-mobile-menu-inner" onClick={e => e.stopPropagation()}>
                            <nav className="vh-mobile-menu-nav">
                                {NAV_LINKS.map((link: NavLinkType) => (
                                    <a key={link.href}
                                        href={link.href}
                                        className="vh-mobile-menu-link"
                                        onClick={(e) => handleScroll(e, link.href)}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}

            </header>
        </>
    )

}

export default Header;