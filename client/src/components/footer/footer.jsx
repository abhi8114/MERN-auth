// src/components/Footer.js
import React from 'react';
import './footer.css'; 
const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-section">
        <h2>NATUREUS</h2>
        <p>
          Over more than 450+ projects worldwide that was made from us.
        </p>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>+0800 1234 56787</p>
        <p>info@natureus.com</p>
        <p>Victoria Tower, NYC, AnyWhere ST, 4th Floor</p>
      </div>
      <div className="footer-section">
        <h3>Agency</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Features</h3>
        <ul>
          <li><a href="#">Collaboration</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Communication</a></li>
          <li><a href="#">Security</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 NATUREUS | All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
