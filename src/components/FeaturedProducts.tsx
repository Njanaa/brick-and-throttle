'use client';

import ProductCard from './ProductCard';
import { products } from '@/data/products';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  return (
    <section id="products" className={styles.section}>
      <h2 className={styles.title}>FEATURED KITS</h2>
      <div className={styles.accent}></div>
      <p className={styles.subtitle}>Precision-engineered brick sets for true enthusiasts</p>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard key={product.id} {...product} delay={index * 150} />
        ))}
      </div>
    </section>
  );
}
