import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "../legal.modules.css";

export default function CookiePolicy() {
    return (
        <main>
            <Header />
            <section className="vh-legal-page">
                <div className="vh-legal-container">
                    <h1 className="vh-legal-title">Cookie Policy</h1>
                    <div className="vh-legal-content">
                        <p>Last updated: June 2026</p>

                        <h2>1. What Are Cookies?</h2>
                        <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you have been to the website before.</p>

                        <h2>2. How We Use Cookies</h2>
                        <p>We use cookies to enhance your experience on our website. Specifically, we use them to:</p>
                        <ul>
                            <li>Understand how visitors interact with our website (Analytics).</li>
                            <li>Remember your preferences and settings for future visits.</li>
                            <li>Ensure our website functions properly and securely.</li>
                        </ul>

                        <h2>3. Types of Cookies We Use</h2>
                        <p><strong>Essential Cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas.</p>
                        <p><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works.</p>

                        <h2>4. Managing Cookies</h2>
                        <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
