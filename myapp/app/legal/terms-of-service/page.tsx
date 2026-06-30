import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "../legal.modules.css";

export default function TermsOfService() {
    return (
        <main>
            <Header />
            <section className="vh-legal-page">
                <div className="vh-legal-container">
                    <h1 className="vh-legal-title">Terms of Service</h1>
                    <div className="vh-legal-content">
                        <p>Last updated: June 2026</p>

                        <h2>1. Agreement to Terms</h2>
                        <p>By accessing our website and utilizing our interior design services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                        <h2>2. Intellectual Property Rights</h2>
                        <p>Unless otherwise stated, Interior by Pranjali owns the intellectual property rights for all design concepts, digital renders, imagery, and material on this website. All intellectual property rights are reserved.</p>

                        <h2>3. User Responsibilities</h2>
                        <p>When utilizing our consultation services, users agree to provide accurate and complete information regarding their property and project requirements to ensure the best possible design outcomes.</p>

                        <h2>4. Limitations</h2>
                        <p>In no event shall Interior by Pranjali or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website or the implementation of provided design concepts.</p>

                        <h2>5. Contact Information</h2>
                        <p>If you have any questions about these Terms of Service, please contact us at interiorbypranjali@gmail.com.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
