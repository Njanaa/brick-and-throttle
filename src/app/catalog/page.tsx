'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import styles from './catalog.module.css';

export default function CatalogPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.titleSection}>
          <p className={styles.tagline}>EXPLORE THE GARAGE</p>
          <h1 className={styles.title}>ALL RACING KITS</h1>
          <div className={styles.accent}></div>
          <p className={styles.subtitle}>
            From classic endurance legends to futuristic supercars, pick your next engineering challenge.
          </p>
        </div>

        {/* Display all products in a premium grid */}
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} delay={index * 100} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
