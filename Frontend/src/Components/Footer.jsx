import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: <a href="mailto:tarun.govindh@gmail.com" className="text-white">tarun.govindh@gmail.com</a></p>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a
              href="https://github.com/tr1ck-5t3r"
              className="text-white me-3"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com/in/tarun-r-g"
              className="text-white"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>

          {/* Copyright Section */}
          <div className="col-md-4 mb-3">
            <h5>About</h5>
            <p>
              This project is developed by Tarun R G. Dedicated to creating
              innovative solutions for a better future.
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            © Made with 🫀 by Tarun R G   
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
