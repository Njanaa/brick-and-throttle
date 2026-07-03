'use client';
import styles from './HeroOverlay.module.css';

export default function HeroOverlay() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section - visible at top */}
      <section className={styles.hero}>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>SCROLL TO UNBRICK</span>
          <div className={styles.scrollArrow}>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
}
