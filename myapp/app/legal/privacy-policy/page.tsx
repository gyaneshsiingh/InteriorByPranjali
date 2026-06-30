import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "../legal.modules.css";

export default function PrivacyPolicy() {
    return (
        <main>
            <Header />
            <section className="vh-legal-page">
                <div className="vh-legal-container">
                    <h1 className="vh-legal-title">Privacy Policy</h1>
                    <div className="vh-legal-content">
                        <p>Last updated: June 2026</p>

                        <h2>1. Introduction</h2>
                        <p>Welcome to Interior by Pranjali. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

                        <h2>2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>

                        <h2>3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        </ul>

                        <h2>4. Contact Us</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at interiorbypranjali@gmail.com.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
