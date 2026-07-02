'use client';

import { use } from 'react';
import Link from 'next/link';
import { getProductById } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div className={styles.notFoundPage}>
        <Header />
        <div className={styles.notFoundContent}>
          <h1 className={styles.notFoundTitle}>PRODUCT NOT FOUND</h1>
          <p className={styles.notFoundText}>The kit you are looking for does not exist or has retired.</p>
          <Link href="/" className={styles.backButton}>
            &larr; BACK TO GARAGE
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBuyNow = () => {
    const checkoutUrl = `https://brick-and-throttle.myshopify.com/cart/${product.variantId}:1`;
    window.open(checkoutUrl, '_blank');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Garage</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.currentBreadcrumb}>{product.name}</span>
        </div>

        {/* Dynamic Split Layout */}
        <div className={styles.productLayout}>
          
          {/* Left Column: Image Showcase */}
          <div className={styles.galleryColumn}>
            <div className={styles.mainImageContainer}>
              {product.badge && <span className={styles.badge}>{product.badge}</span>}
              <img src={product.image} alt={product.name} className={styles.mainImage} />
            </div>
            <div className={styles.techNote}>
              <span className={styles.pulseIcon}></span>
              <span>COMPATIBLE WITH RC MOTOR UPGRADES</span>
            </div>
          </div>

          {/* Right Column: Specs & Checkout */}
          <div className={styles.detailsColumn}>
            <h1 className={styles.title}>{product.name}</h1>
            
            <div className={styles.specShortcuts}>
              <span className={styles.shortcutItem}>{product.pieces} PCS</span>
              <span className={styles.shortcutDivider}>|</span>
              <span className={styles.shortcutItem}>{product.scale} SCALE</span>
              <span className={styles.shortcutDivider}>|</span>
              <span className={styles.shortcutItem}>{product.difficulty}</span>
            </div>

            <div className={styles.priceContainer}>
              <span className={styles.priceLabel}>PRICE</span>
              <span className={styles.priceValue}>{product.price}</span>
            </div>

            <p className={styles.description}>{product.description}</p>

            <button className={styles.buyNowButton} onClick={handleBuyNow}>
              BUY NOW &bull; CHECKOUT
            </button>

            {/* Quick Specs Grid */}
            <div className={styles.specsGrid}>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>SCALE</span>
                <span className={styles.specValueDetail}>{product.scale}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>PIECES</span>
                <span className={styles.specValueDetail}>{product.pieces}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>DIFFICULTY</span>
                <span className={styles.specValueDetail}>{product.difficulty}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>BUILD TIME</span>
                <span className={styles.specValueDetail}>{product.estimatedBuildTime}</span>
              </div>
              <div className={styles.specBoxFull}>
                <span className={styles.specLabel}>MODEL DIMENSIONS</span>
                <span className={styles.specValueDetail}>{product.dimensions}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full Specifications Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>ENGINEERING FEATURES</h2>
          <div className={styles.sectionAccent}></div>
          <ul className={styles.featuresList}>
            {product.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.bullet}></span>
                <p className={styles.featureText}>{feature}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
