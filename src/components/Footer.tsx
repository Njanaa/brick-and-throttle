'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>BRICK &amp; THROTTLE</h3>
            <p className={styles.brandTagline}>Precision engineering in every brick. Build your legend.</p>
          </div>
          <div className={styles.newsletter}>
            <label className={styles.newsletterLabel}>JOIN THE PIT CREW</label>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
              <button type="submit" className={styles.submit}>&rarr;</button>
            </form>
          </div>
        </div>
        <div className={styles.bottomDivider}></div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2026 Brick &amp; Throttle. All rights reserved.</p>
          <div className={styles.links}>
            <Link href="/privacy" className={styles.link}>Privacy</Link>
            <Link href="/terms" className={styles.link}>Terms</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
