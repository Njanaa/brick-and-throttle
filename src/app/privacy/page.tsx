'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/info.module.css';

export default function PrivacyPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <p className={styles.tagline}>LEGAL</p>
          <h1 className={styles.title}>PRIVACY POLICY</h1>
          <div className={styles.accent}></div>
          <p className={styles.updatedDate}>Last updated: July 1, 2026</p>
        </section>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>OVERVIEW</h2>
          <p className={styles.sectionText}>
            At Brick &amp; Throttle, your privacy is a priority. This Privacy Policy explains how we collect, 
            use, and protect your personal information when you visit our website or make a purchase. 
            By using our site, you agree to the practices described below.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>INFORMATION WE COLLECT</h2>
          <p className={styles.sectionText}>
            We collect information you provide directly to us when placing an order or contacting support:
          </p>
          <ul className={styles.list}>
            <li><strong>Personal details:</strong> Name, email address, phone number</li>
            <li><strong>Shipping information:</strong> Delivery address, postal code, country</li>
            <li><strong>Payment details:</strong> Processed securely through Shopify Payments — we never store your card data</li>
            <li><strong>Order history:</strong> Products purchased, order IDs, and transaction dates</li>
            <li><strong>Communications:</strong> Messages you send to our support team</li>
          </ul>
          <p className={styles.sectionText}>
            We also automatically collect certain data through cookies and analytics, including your IP address, 
            browser type, device information, and pages visited. This helps us improve your shopping experience.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>HOW WE USE YOUR INFORMATION</h2>
          <ul className={styles.list}>
            <li>Process and fulfill your orders, including shipping and payment</li>
            <li>Send order confirmations, shipping updates, and tracking information</li>
            <li>Respond to your support requests and inquiries</li>
            <li>Improve our website, products, and customer experience</li>
            <li>Send promotional emails (only if you opt in — you can unsubscribe anytime)</li>
            <li>Prevent fraud and ensure secure transactions</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>DATA SHARING</h2>
          <p className={styles.sectionText}>
            We do <strong>not</strong> sell, rent, or trade your personal information to third parties. 
            We only share your data with trusted service providers who help us operate our business:
          </p>
          <ul className={styles.list}>
            <li><strong>Shopify:</strong> Our e-commerce platform that processes orders and payments</li>
            <li><strong>Shipping carriers:</strong> To deliver your orders with tracking</li>
            <li><strong>Analytics providers:</strong> To understand site usage and improve performance</li>
          </ul>
          <p className={styles.sectionText}>
            All third-party providers are contractually obligated to protect your data and use it only 
            for the services they provide to us.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>COOKIES</h2>
          <p className={styles.sectionText}>
            We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. 
            You can manage cookie preferences through your browser settings. Disabling cookies may affect 
            certain features of the website.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>DATA SECURITY</h2>
          <p className={styles.sectionText}>
            Your data is protected using <strong>256-bit SSL encryption</strong> across our entire website. 
            All payments are processed through Shopify&apos;s <strong>PCI DSS Level 1</strong> compliant infrastructure — 
            the highest standard of payment security. We regularly review our security practices to keep your 
            information safe.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>YOUR RIGHTS</h2>
          <p className={styles.sectionText}>You have the right to:</p>
          <ul className={styles.list}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing emails at any time</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
          <p className={styles.sectionText}>
            To exercise any of these rights, contact us at{' '}
            <a href="/contact">our contact page</a>.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>CHANGES TO THIS POLICY</h2>
          <p className={styles.sectionText}>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with a 
            revised &quot;Last updated&quot; date. We encourage you to review this policy periodically.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
