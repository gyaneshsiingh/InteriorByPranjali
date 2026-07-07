'use client'
import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "./hero.constant";
import './hero.modules.css';
import Image from "next/image";
import { HeroButtonType } from "./hero.type";


const Hero = () => {
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

    return (

        <section className="vh-hero" id="home">

            <div className="vh-hero-inner">
                <div className="vh-hero-content">
                    <h1 className="vh-title">
                        {HERO_CONTENT.title}
                        <br />
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
                                src="/cen.webp"
                                alt="interior design"
                                className="vh-card-img-fit"
                                fill
                                sizes="(max-width:960px) 100vw,50vw"
                                priority
                                quality={75}
                            />
                        </div>
                    </div>
                </div>

                <div className="vh-actions">
                    <a
                        href="https://wa.me/919529504728?text=Hi%20Pranjali%2C%20I%20would%20like%20a%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vh-primary-btn"
                    >
                        Get In Touch

                    </a>
                </div>
            </div>

        </section>
    );
}

export default Hero;