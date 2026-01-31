import React from 'react'
import { FaMosque, FaInstagram, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="islamic-pattern"></div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaMosque className="footer-logo-icon" />
              <h3>Anjuman-E-Faizan-Ul-Qur'an</h3>
            </div>
            <p className="footer-tagline">
              Nurturing faith, knowledge, and character through authentic Islamic education.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Our Courses</a></li>
              <li><a href="#environment">Daily Life</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support Us</h4>
            <p className="footer-text">
              Help us continue spreading authentic Islamic knowledge. Your support makes a difference.
            </p>
            <button className="footer-donate-btn">
              Donate Now
            </button>
            <div className="footer-prayer">
              <p className="dua-text">جَزَاكَ ٱللَّٰهُ خَيْرًا</p>
              <p className="dua-translation">May Allah reward you with goodness</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Anjuman-E-Faizan-Ul-Qur'an. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
