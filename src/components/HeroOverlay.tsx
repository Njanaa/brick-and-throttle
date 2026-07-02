'use client';
import styles from './HeroOverlay.module.css';

export default function HeroOverlay() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section - visible at top */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tagline}>PRECISION ENGINEERING IN EVERY BRICK</p>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>BRICK &amp;</span>
            <span className={styles.titleLine}>THROTTLE</span>
          </h1>
          <p className={styles.subtitle}>BUILD. RACE. REPEAT.</p>
          <a href="#products" className={styles.cta}>SHOP KITS &rarr;</a>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>SCROLL TO UNBRICK</span>
          <div className={styles.scrollArrow}>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* Mid-scroll story text */}
      <section className={styles.storySection}>
        <h2 className={styles.storyText}>
          <span>EVERY LEGEND</span>
          <span>STARTS WITH A</span>
          <span className={styles.highlight}>SINGLE BRICK</span>
        </h2>
      </section>
    </div>
  );
}
