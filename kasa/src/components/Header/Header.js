import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="../../../public/kasa-icon.png" alt="Kasa" /> {/* Mettez le chemin correct de votre logo */}
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">A Propos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;