'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/info.module.css';

export default function TermsPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <p className={styles.tagline}>LEGAL</p>
          <h1 className={styles.title}>TERMS OF SERVICE</h1>
          <div className={styles.accent}></div>
          <p className={styles.updatedDate}>Last updated: July 1, 2026</p>
        </section>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>ACCEPTANCE OF TERMS</h2>
          <p className={styles.sectionText}>
            By accessing or using the Brick &amp; Throttle website and purchasing our products, you agree 
            to be bound by these Terms of Service. If you do not agree with any part of these terms, 
            please do not use our website or services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>PRODUCTS &amp; PRICING</h2>
          <p className={styles.sectionText}>
            All products are premium 1:14 scale RC-enabled building kits. Each kit includes the full 
            RC motorization system (motors, remote controller, battery, and charging cable) unless 
            explicitly stated otherwise (e.g., the Acrylic Display Case).
          </p>
          <ul className={styles.list}>
            <li>Prices are listed in USD and include applicable taxes where required</li>
            <li>We reserve the right to update pricing at any time without prior notice</li>
            <li>Product images are for illustration purposes; minor color variations may occur between batches</li>
            <li>Product availability is subject to stock levels and may change without notice</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>ORDERS &amp; PAYMENT</h2>
          <p className={styles.sectionText}>
            All orders are processed through <strong>Shopify&apos;s secure checkout</strong>. 
            We accept major credit cards, debit cards, Apple Pay, Google Pay, and Shop Pay.
          </p>
          <ul className={styles.list}>
            <li>An order confirmation email is sent upon successful payment</li>
            <li>We reserve the right to cancel orders suspected of fraud</li>
            <li>Orders cannot be modified once payment has been processed — please contact support immediately if you need changes</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>SHIPPING &amp; DELIVERY</h2>
          <p className={styles.sectionText}>
            We ship worldwide to <strong>190+ countries</strong>. All orders are processed within 
            <strong> 24 hours</strong> of purchase.
          </p>
          <ul className={styles.list}>
            <li>Estimated delivery time: <strong>3 – 9 business days</strong> from dispatch</li>
            <li>All shipments include tracking information sent via email</li>
            <li>International orders may be subject to customs duties or import taxes, which are the responsibility of the buyer</li>
            <li>Brick &amp; Throttle is not responsible for delays caused by customs, postal services, or force majeure events</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>RETURNS &amp; REFUNDS</h2>
          <p className={styles.sectionText}>
            We want you to be completely satisfied with your purchase.
          </p>
          <ul className={styles.list}>
            <li><strong>Unopened kits:</strong> Full refund within 30 days of delivery — return shipping is the buyer&apos;s responsibility</li>
            <li><strong>Opened kits:</strong> We do not accept returns on opened kits unless the product is defective or has missing parts</li>
            <li><strong>Defective products:</strong> Contact support within 14 days of delivery for a replacement or full refund</li>
            <li><strong>Missing parts:</strong> We will ship replacement parts at no cost — no need to return the kit</li>
          </ul>
          <p className={styles.sectionText}>
            Refunds are processed within 5 – 10 business days after we receive and inspect the returned item.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>INTELLECTUAL PROPERTY</h2>
          <p className={styles.sectionText}>
            All content on this website — including product designs, images, logos, text, and graphics — 
            is the property of Brick &amp; Throttle and is protected by copyright and trademark laws. 
            You may not reproduce, distribute, or use any content without our written permission.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>PRODUCT USE &amp; SAFETY</h2>
          <ul className={styles.list}>
            <li>Our kits are recommended for ages <strong>14 and above</strong> due to small parts</li>
            <li>Children under 14 should only use these products under adult supervision</li>
            <li>RC motor components contain lithium batteries — do not expose to extreme heat, water, or fire</li>
            <li>Brick &amp; Throttle is not liable for injury or damage resulting from improper use of our products</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>LIMITATION OF LIABILITY</h2>
          <p className={styles.sectionText}>
            To the fullest extent permitted by law, Brick &amp; Throttle shall not be liable for any indirect, 
            incidental, special, or consequential damages arising from the use of our website or products. 
            Our total liability for any claim shall not exceed the amount paid for the product in question.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>CHANGES TO THESE TERMS</h2>
          <p className={styles.sectionText}>
            We reserve the right to update these Terms of Service at any time. Changes take effect immediately 
            upon posting. Continued use of the website after changes constitutes acceptance of the revised terms. 
            We encourage you to review this page periodically.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>CONTACT</h2>
          <p className={styles.sectionText}>
            If you have any questions about these Terms of Service, please visit our{' '}
            <a href="/contact">contact page</a> or reach out to our support team.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
