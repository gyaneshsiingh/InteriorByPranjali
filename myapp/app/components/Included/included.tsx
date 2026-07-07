"use client"
import React from "react";
import Image from "next/image";
import { INCLUDED_LIST, INCLUDED_CONTENT } from "./included.constant";
import { IncludedItemType } from "./included.type";
import "./included.modules.css";


const Included = () => {
    return (
        <section className="vh-included-section" id="included">
            <div className="vh-included-inner">

                <div className="vh-included-content">
                    <h2 className="vh-included-title">
                        {INCLUDED_CONTENT.title}
                    </h2>
                    <p className="vh-included-description">
                        {INCLUDED_CONTENT.description}
                    </p>
                    <ul className="vh-included-list">
                        {INCLUDED_LIST.map((item: IncludedItemType, index: number) => (
                            <li key={index} className="vh-included-item">
                                <span className="vh-check-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </span>
                                <p className="vh-included-label-item">{item.label}</p>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="vh-included-visual">
                    <a 
                        href="/demo.pdf" 
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('/demo.pdf', '_blank', 'noopener,noreferrer');
                        }}
                        className="vh-included-image-wrapper" 
                        style={{ display: 'block' }}
                    >
                        <Image
                            src={INCLUDED_CONTENT.imageSrc}
                            alt="Interior Design Services"
                            width={600}
                            height={400}
                            className="vh-included-img"
                        />
                        <div className="vh-included-overlay">
                            <span className="vh-card-text">Discover Our Process</span>
                            <div className='vh-card-icon'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Included;
