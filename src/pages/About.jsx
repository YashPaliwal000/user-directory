import React from 'react';
import '../css/about.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">About Our Platform</h1>
                <p className="about-subtitle">Connecting people through technology</p>
            </div>
            
            <div className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        We believe in creating meaningful connections in the digital age. Our platform serves as a bridge 
                        between individuals, fostering collaboration and community building through innovative technology solutions.
                    </p>
                </div>

                <div className="about-section">
                    <h2>What We Do</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>User Directory</h3>
                            <p>Comprehensive user management system with detailed profiles and contact information.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔍</div>
                            <h3>Easy Search</h3>
                            <p>Find and connect with users quickly through our intuitive search and filtering system.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Responsive Design</h3>
                            <p>Access our platform from any device with our mobile-first responsive design approach.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure & Private</h3>
                            <p>Your data is protected with industry-standard security measures and privacy controls.</p>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <h2>Our Technology Stack</h2>
                    <div className="tech-stack">
                        <div className="tech-item">
                            <span className="tech-name">React</span>
                            <span className="tech-desc">Modern UI framework</span>
                        </div>
                        <div className="tech-item">
                            <span className="tech-name">CSS3</span>
                            <span className="tech-desc">Advanced styling</span>
                        </div>
                        <div className="tech-item">
                            <span className="tech-name">JavaScript</span>
                            <span className="tech-desc">Dynamic functionality</span>
                        </div>
                        <div className="tech-item">
                            <span className="tech-name">HTML5</span>
                            <span className="tech-desc">Semantic markup</span>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <h2>Get in Touch</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <span>Email: contact@ourplatform.com</span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <span>Phone: +1 (555) 123-4567</span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <span>Address: 123 Tech Street, Digital City, DC 12345</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;