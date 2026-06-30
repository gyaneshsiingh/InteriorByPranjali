import React from "react";
import "./profile.modules.css"
import Image from "next/image";
import { PROFILE_DATA } from "./profile.constant";

const Profile = () => {
    return (
        <section className="vh-profile-section" id="about" >
            <div className="vh-profile-main">
                <div className="vh-profile-header">
                    <h2 className="vh-profile-maintitle">
                        Behind The Work
                    </h2>
                    <p className="vh-profile-subtitle">
                        A passionate interior designer dedicated to creating elegant, functional spaces that reflect your personality and enhance everyday living.
                    </p>
                </div>

                <div className="vh-profile-grid">
                    <div className="vh-profile-image-container">
                        <div className="vh-profile-image-wrapper">
                            <Image src={PROFILE_DATA.imageSrc} alt={PROFILE_DATA.name} width={500} height={600} className="vh-profile-img" />
                        </div>

                        <div className="vh-profile-badge">
                            <span className="vh-badge-number">
                                {PROFILE_DATA.yearsExperience}+
                            </span>
                            <span className="vh-badge-text">Years Of Experience</span>
                        </div>
                    </div>

                    <div className="vh-profile-content">
                        <h2 className="vh-profile-name">
                            {PROFILE_DATA.name}
                        </h2>
                        <h3 className="vh-profile-title">
                            {PROFILE_DATA.title}
                        </h3>

                        <div className="vh-profile-description">
                            {PROFILE_DATA.description.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>

                        <div className="vh-profile-expertise">
                            <h4 className="vh-profile-expertise-heading">AREAS OF EXPERTISE</h4>
                            <div className="vh-expertise-pills">
                                {PROFILE_DATA.expertise.map((item, index) => (
                                    <span key={index} className="vh-pill">{item.label}</span>
                                ))}
                            </div>
                        </div>

                        <div className="vh-profile-actions">
                            <a href="https://www.linkedin.com/in/pranjali-dwivedi-2155b0195/" target="_blank" className="vh-btn-linkedin">LinkedIn Profile</a>
                            <a href="#contact" className="vh-btn-get-touch">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;