import React from 'react';

const About = () => {
    return (
        <div className="about-container p-4 text-white">
            <div className="text-center mb-4">
                <h1 className="display-4">About Medix</h1>
                <p className="lead">Enhancing Decision-Making in Medical Diagnosis</p>
            </div>

            <section className="mb-4">
                <h2>Our Mission</h2>
                <p>
                    Medix is designed to assist doctors, nurses, and healthcare professionals in making faster 
                    and more informed preliminary medical decisions. By leveraging cutting-edge technology, we 
                    aim to enhance the speed and accuracy of diagnosis, enabling better treatment outcomes.
                </p>
            </section>

            <section className="mb-4">
                <h2>What is Medix?</h2>
                <p>
                    Medix is a medical preliminary diagnosis tool that provides insights based on symptoms and 
                    available data. It acts as a supplementary tool for healthcare professionals, helping to:
                </p>
                <ul>
                    <li><strong>Streamline Decision-Making:</strong> Save valuable time in critical scenarios.</li>
                    <li><strong>Improve Efficiency:</strong> Assist medical staff in triaging and prioritizing cases.</li>
                    <li><strong>Support Patient Care:</strong> Deliver faster, data-driven insights to enhance treatment.</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2>Experimental Nature</h2>
                <p>
                    It’s important to note that Medix is experimental in nature. The insights generated by the 
                    tool are intended to support—not replace—clinical judgment. Always consult with qualified 
                    medical technicians or healthcare professionals before implementing any treatment decisions.
                </p>
                <p className="text-highlight">
                    Medix is a tool to assist, not a substitute for, professional medical expertise.
                </p>
            </section>

            <div className="text-center mt-4">
                <p className="fw-bold">
                    Together, we strive to make healthcare faster, smarter, and more efficient. <br />
                    <span className="text-highlight">Thank you for trusting Medix in your medical journey.</span>
                </p>
            </div>
        </div>
    );
};

export default About;
