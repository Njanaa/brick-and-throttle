'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Title */}
        <section className={styles.heroSection}>
          <p className={styles.tagline}>THE PIT CREW BEHIND THE BRICKS</p>
          <h1 className={styles.title}>ABOUT US</h1>
          <div className={styles.accent}></div>
          <p className={styles.heroText}>
            Brick &amp; Throttle was born from a passion for precision engineering and the thrill of motorsport. 
            We create premium 1:14 scale RC-enabled building kits that bring legendary supercars to life — 
            brick by brick, gear by gear.
          </p>
        </section>

        {/* Our Story */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>OUR STORY</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>
              It started in a small workshop with a simple idea: what if you could <em>build</em> your dream supercar 
              and then actually <em>drive</em> it? Not a static shelf model — a fully motorized, remote-controlled machine 
              that you engineered yourself from the ground up.
            </p>
            <p>
              Today, Brick &amp; Throttle serves builders and motorsport enthusiasts worldwide with kits that feature 
              up to 3,600+ precision-engineered pieces, integrated RC motor systems, and designs faithfully modeled 
              after iconic racing legends — from the Porsche 911 RSR to the Lamborghini V12 supercar lineage.
            </p>
            <p>
              Every kit ships complete. No separate motor purchases. No missing parts. Just open the box and start building.
            </p>
          </div>
        </section>

        {/* Trust Badges Grid */}
        <section className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>🛡️</div>
            <h3 className={styles.trustTitle}>SECURE CHECKOUT</h3>
            <p className={styles.trustText}>
              256-bit SSL encrypted payments via Shopify&apos;s PCI-compliant checkout. Your data is always protected.
            </p>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>🚚</div>
            <h3 className={styles.trustTitle}>FAST SHIPPING</h3>
            <p className={styles.trustText}>
              Orders ship within 24 hours. Delivery in <strong>3 – 9 business days</strong> worldwide with full tracking.
            </p>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>🔄</div>
            <h3 className={styles.trustTitle}>HASSLE-FREE RETURNS</h3>
            <p className={styles.trustText}>
              Not satisfied? Return any unopened kit within 30 days for a full refund. No questions asked.
            </p>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>📦</div>
            <h3 className={styles.trustTitle}>COMPLETE KITS</h3>
            <p className={styles.trustText}>
              Every kit includes the full RC motor system, remote controller, battery, and all building pieces in one box.
            </p>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>⭐</div>
            <h3 className={styles.trustTitle}>PREMIUM QUALITY</h3>
            <p className={styles.trustText}>
              ABS precision-molded bricks with tight tolerances. Every piece clicks perfectly, every time.
            </p>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>🎧</div>
            <h3 className={styles.trustTitle}>DEDICATED SUPPORT</h3>
            <p className={styles.trustText}>
              Our pit crew responds within 24 hours. Missing a piece? We&apos;ll ship replacements at no charge.
            </p>
          </div>
        </section>

        {/* Shipping Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>SHIPPING &amp; DELIVERY</h2>
          </div>
          <div className={styles.shippingGrid}>
            <div className={styles.shippingCard}>
              <div className={styles.shippingLabel}>PROCESSING TIME</div>
              <div className={styles.shippingValue}>24 HOURS</div>
              <p className={styles.shippingNote}>Orders placed before 2 PM are processed the same business day.</p>
            </div>
            <div className={styles.shippingCard}>
              <div className={styles.shippingLabel}>DELIVERY TIME</div>
              <div className={styles.shippingValue}>3 – 9 DAYS</div>
              <p className={styles.shippingNote}>Estimated delivery window after dispatch. Tracked shipping on all orders.</p>
            </div>
            <div className={styles.shippingCard}>
              <div className={styles.shippingLabel}>WORLDWIDE</div>
              <div className={styles.shippingValue}>190+ COUNTRIES</div>
              <p className={styles.shippingNote}>We deliver globally. International orders may require additional customs clearance time.</p>
            </div>
          </div>
        </section>

        {/* What's in the Box */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>WHAT&apos;S IN THE BOX</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>
              Every Brick &amp; Throttle kit is a complete, all-in-one build experience. Here&apos;s what you&apos;ll find inside:
            </p>
          </div>
          <div className={styles.boxContents}>
            <div className={styles.boxItem}>
              <span className={styles.boxCheck}>✓</span>
              <div>
                <strong>Numbered Parts Bags</strong>
                <p>Up to 12 bags of precision-molded ABS bricks, sorted by build stage</p>
              </div>
            </div>
            <div className={styles.boxItem}>
              <span className={styles.boxCheck}>✓</span>
              <div>
                <strong>2× High-Torque L-Motors</strong>
                <p>Rear-wheel drive motors for realistic acceleration and speed</p>
              </div>
            </div>
            <div className={styles.boxItem}>
              <span className={styles.boxCheck}>✓</span>
              <div>
                <strong>1× Servo Steering Motor</strong>
                <p>Precision servo for responsive left/right steering control</p>
              </div>
            </div>
            <div className={styles.boxItem}>
              <span className={styles.boxCheck}>✓</span>
              <div>
                <strong>Rechargeable Battery Box</strong>
                <p>Lithium smart battery with USB-C charging — no disposable batteries needed</p>
              </div>
            </div>
            <div className={styles.boxItem}>
              <span className={styles.boxCheck}>✓</span>
              <div>
                <strong>2.4GHz Wireless Remote</strong>
                <p>Dual-joystick controller with 30m range for indoor/outdoor driving</p>
              </div>
            </div>
            <div className={styles.boxItem}>
              <span className={styles.boxCheck}>✓</span>
              <div>
                <strong>Assembly Guide</strong>
                <p>Step-by-step illustrated instructions with RC motor integration walkthrough</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>FREQUENTLY ASKED</h2>
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Are the RC motors included or sold separately?</h3>
              <p className={styles.faqAnswer}>
                <strong>Included.</strong> Every Brick &amp; Throttle car kit ships with the full RC motorization system — 
                dual drive motors, steering servo, battery, remote controller, and charging cable. It&apos;s all in the box.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How long does shipping take?</h3>
              <p className={styles.faqAnswer}>
                Orders are processed within 24 hours and typically arrive within <strong>3 to 9 business days</strong>. 
                All shipments include tracking. International orders to remote regions may take slightly longer.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What is your return policy?</h3>
              <p className={styles.faqAnswer}>
                We offer a 30-day return policy on all unopened kits. If your package arrives damaged or is missing parts, 
                contact us immediately and we&apos;ll make it right — free replacement parts or a full refund.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is this suitable for kids?</h3>
              <p className={styles.faqAnswer}>
                Our kits are designed for ages 14+ due to small parts and build complexity. 
                Younger builders can enjoy the experience with adult supervision.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What if I&apos;m missing a piece?</h3>
              <p className={styles.faqAnswer}>
                Contact our support team with your order number and the missing piece details. 
                We&apos;ll ship replacement parts at no cost — guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>NEED HELP FROM THE PIT CREW?</h2>
          <p className={styles.ctaText}>
            Our support team is here to help with orders, missing parts, build advice, and anything else you need.
          </p>
          <a href="mailto:support@brickandthrottle.com" className={styles.ctaButton}>
            CONTACT SUPPORT
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
