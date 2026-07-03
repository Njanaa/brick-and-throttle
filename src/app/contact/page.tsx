'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/info.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <p className={styles.tagline}>GET IN TOUCH</p>
          <h1 className={styles.title}>CONTACT US</h1>
          <div className={styles.accent}></div>
        </section>

        {/* Contact Info Cards */}
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>📧</div>
            <p className={styles.contactLabel}>EMAIL</p>
            <p className={styles.contactValue}>support.brickandthrottle@gmail.com</p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>⏱️</div>
            <p className={styles.contactLabel}>RESPONSE TIME</p>
            <p className={styles.contactValue}>Within 24 Hours</p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>🚚</div>
            <p className={styles.contactLabel}>SHIPPING</p>
            <p className={styles.contactValue}>3 – 9 Business Days</p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>🔄</div>
            <p className={styles.contactLabel}>RETURNS</p>
            <p className={styles.contactValue}>30-Day Policy</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactFormSection}>
          <h2 className={styles.formTitle}>SEND US A MESSAGE</h2>

          {!submitted ? (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-name">YOUR NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    className={styles.formInput}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-email">EMAIL ADDRESS</label>
                  <input
                    id="contact-email"
                    type="email"
                    className={styles.formInput}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-order">ORDER ID (OPTIONAL)</label>
                <input
                  id="contact-order"
                  type="text"
                  className={styles.formInput}
                  placeholder="e.g. #BT-20260703"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-message">YOUR MESSAGE</label>
                <textarea
                  id="contact-message"
                  className={styles.formTextarea}
                  placeholder="Describe what you need help with..."
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                SEND MESSAGE
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.successText}>
                Thank you! Our pit crew has received your message and will get back to you within 24 hours.
              </p>
            </div>
          )}
        </div>

        {/* FAQ shortcut */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>BEFORE YOU REACH OUT</h2>
          <p className={styles.sectionText}>
            Many common questions are answered on our{' '}
            <a href="/about">About Us</a> page, including shipping times, 
            what&apos;s included in each kit, and our return policy.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
