import React from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Assuming you have a CSS file for styling

function Hero() {
    return (
        <div className="hero-container">
            <DotLottieReact
                src="https://lottie.host/ae37d008-9aed-45e4-8832-b9a64e192fef/KamGllT0mH.lottie"
                loop
                autoplay
                style={{ height: '45%' }}
            />
            <div className="hero-content">
                <h1>Welcome to Medix</h1>
                <p>Your health is our priority. Get started by learning more about us or diagnosing your symptoms.</p>
                <div className="hero-buttons">
                    <Link to="/about" className="hero-button">About Us</Link>
                    <Link to="/diagnose" className="hero-button">Diagnose</Link>
                    <Link to="/terms" className="hero-button">Terms</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;