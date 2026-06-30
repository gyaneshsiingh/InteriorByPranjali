import React from "react";
import "./widget.modules.css"

const StickWidget = () => {
    return (
        <div className="vh-sticky-container">
            <a href="https://wa.me/919529504728"
                target="_blank" rel="noopener noreferrer"
                className="vh-sticky-btn vh-whatsapp"
                title="WhatsApp Us">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.195 1.602 6.015L.175 24l6.11-1.605A11.954 11.954 0 0 0 12.031 24c6.646 0 12.03-5.385 12.03-12.031C24.06 5.385 18.677 0 12.031 0zm3.847 17.15c-.194.544-.954.98-1.5.105-.27-.43-.728-1.282-1.782-2.336-1.352-1.352-2.062-1.848-2.316-2.146-.254-.298-.444-.707.037-1.189.176-.176.386-.403.565-.632.193-.247.289-.425.433-.706.144-.282.072-.53-.036-.742-.108-.212-.958-2.311-1.312-3.167-.344-.829-.693-.717-.953-.73-.248-.012-.531-.015-.815-.015-.284 0-.745.106-1.135.53-.39.424-1.492 1.458-1.492 3.553 0 2.095 1.527 4.12 1.74 4.403.213.283 3.003 4.582 7.275 6.425.444.192.835.319 1.154.405 1.096.295 2.185.269 3.023.155.943-.129 2.91-1.19 3.32-2.343.41-1.154.41-2.143.287-2.355-.122-.212-.444-.336-.889-.565-1.442-.741-2.673-.418-2.885-.12z" />
                </svg>
            </a>


            <a href="tel:+919529504728"
                className="vh-sticky-btn vh-phone"
                title="Call Us">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
            </a>

            <a href="sms:+919529504728" className="vh-sticky-btn vh-sms" title="Message Us">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
                </svg>
            </a>


            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=interiorbypranjali@gmail.com" target="_blank" rel="noopener noreferrer" className="vh-sticky-btn vh-email" title="Email Us">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            </a>
        </div>
    )
}

export default StickWidget;