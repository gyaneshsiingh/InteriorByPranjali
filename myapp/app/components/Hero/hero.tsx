'use client'
import React from "react";
import { HERO_BUTTONS, HERO_CONTENT } from "./hero.constant";
import './hero.modules.css';
import Image from "next/image";
import { HeroButtonType } from "./hero.type";


const Hero = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();

        const element = document.querySelector(href);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
    return (

        <section className="vh-hero" id="home">
            <div className="vh-hero-inner">
                <div className="vh-hero-content">
                    <h1 className="vh-title">
                        {HERO_CONTENT.title}<br /><span className="vh-title-highlight">{HERO_CONTENT.titleHighlight}</span></h1>
                    <p className="vh-subtitle">
                        {HERO_CONTENT.subtitle}
                    </p>

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
                <div className="vh-hero-visual" aria-hidden="true">
                    <div className="vh-card-main">
                        <div className="vh-card-image-wrapper">
                            <Image
                                src="/center.png"
                                alt="Buy & Rent Apartment in Varanasi"
                                className="vh-card-img-fit"
                                width={520}
                                height={400}
                                priority
                                quality={80}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;