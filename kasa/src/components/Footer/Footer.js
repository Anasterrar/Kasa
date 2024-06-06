// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-footer">
        <img src="logo.png" alt="Kasa" /> {/* Mettez le chemin correct de votre logo */}
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
