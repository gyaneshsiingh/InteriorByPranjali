import React from "react";
import Image from "next/image";
import { Design_Approach } from "./design.constant";
import { DesignItemType } from "./design.type";
import './design.modules.css'

const Design = () => {
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
        <section className="vh-approach-section" id="service">
            <div className="vh-approach-inner">
                <h2 className="vh-approach-title">
                    Our Design Approach
                </h2>
                <span className="vh-approach-label">A collaborative journey that transforms your vision into reality through refined design and precise execution.</span>
            </div>

            <div className="vh-approach-grid">
                {Design_Approach.map((interior: DesignItemType, index: number) => (
                    <div key={index} className="vh-approach-card">
                        <div className="vh-approach-image">
                            <Image
                                src={interior.icon}
                                alt={interior.desc}
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="vh-approach-label">
                            <h3>{interior.title}</h3>
                            <p>{interior.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Design;