'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>BRICK &amp; THROTTLE</a>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#products" className={styles.navLink}>Shop</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
