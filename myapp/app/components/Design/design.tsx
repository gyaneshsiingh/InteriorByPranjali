import React from "react";
import Image from "next/image";
import { Design_Approach } from "./design.constant";
import { DesignItemType } from "./design.type";
import './design.modules.css'

const Design = () => {
    return (
        <section className="vh-approach-section">
            <div className="vh-approach-inner">
                <h1 className="vh-approach-title">
                    Our Design Approach
                </h1>
                <span className="vh-approach-label">A collaborative journey that transforms your vision into reality through refined design and precise execution.</span>
            </div>

            <div className="vh-approach-grid">
                {Design_Approach.map((interior: DesignItemType, index: number) => (
                    <div key={index} className="vh-approach-card">
                        <div className="vh-approach-image">
                            <Image
                                src={interior.icon}
                                alt={interior.desc}
                                width={30}
                                height={30}
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