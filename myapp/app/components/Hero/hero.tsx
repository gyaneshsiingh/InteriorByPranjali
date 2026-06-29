'use client'
import React, { useEffect, useState } from "react";
import { HERO_BUTTONS, HERO_CONTENT } from "./hero.constant";
import './hero.modules.css';
import Image from "next/image";
import { HeroButtonType } from "./hero.type";


const Hero = () => {
    const [shouldPreloadPDF, setShouldPreloadPDF] = useState(false);
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
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
    };

    setTimeout(() => {
        setShouldPreloadPDF(true);
    }, 500);

    return (

        <section className="vh-hero" id="home">
            {shouldPreloadPDF && (
                <iframe
                    src="https://docs.google.com/gview?url=https://myapp-theta-ruby.vercel.app/portfolio.pdf&embedded=true"
                    style={{
                        position: "absolute",
                        width: 1,
                        height: 1,
                        opacity: 0,
                        pointerEvents: "none",
                    }}
                />
            )}
            <div className="vh-hero-inner">
                <div className="vh-hero-content">
                    <h1 className="vh-title">
                        {HERO_CONTENT.title}
                        <br className="vh-mobile-break" />
                        {HERO_CONTENT.titleBreak}<br />
                        <span className="vh-title-highlight">{HERO_CONTENT.titleHighlight}</span>
                    </h1>
                    <p className="vh-subtitle">
                        {HERO_CONTENT.subtitle}
                    </p>
                </div>

                <div className="vh-hero-visual" aria-hidden="true">
                    <div className="vh-card-main">
                        <div className="vh-card-image-wrapper">
                            <Image
                                src="/center.png"
                                alt="interior design"
                                className="vh-card-img-fit"
                                width={520}
                                height={400}
                                priority
                                quality={75}
                            />
                        </div>
                    </div>
                </div>

                <div className="vh-actions">
                    {HERO_BUTTONS.map((btn: HeroButtonType) => (
                        <a key={btn.label}
                            href={btn.href}
                            onClick={(e) => handleScroll(e, btn.href)}
                            className={`vh-btn vh-btn-${btn.style}`}
                        >
                            {btn.label}
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Hero;