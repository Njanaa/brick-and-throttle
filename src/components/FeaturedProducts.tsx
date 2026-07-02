'use client';

import ProductCard from './ProductCard';
import styles from './FeaturedProducts.module.css';

const products = [
  {
    name: 'Porsche 911 RSR',
    price: '$249.99',
    pieces: 1580,
    image: '/images/porsche-rsr.jpg',
    variantId: 'YOUR_RSR_VARIANT_ID_HERE', // Replace with your actual Shopify Variant ID
    badge: 'BESTSELLER',
  },
  {
    name: 'Gulf Racing 911',
    price: '$199.99',
    pieces: 1250,
    image: '/images/gulf-racing.jpg',
    variantId: 'YOUR_GULF_VARIANT_ID_HERE', // Replace with your actual Shopify Variant ID
    badge: 'NEW',
  },
  {
    name: '911 Turbo S',
    price: '$279.99',
    pieces: 1890,
    image: '/images/turbo-s.jpg',
    variantId: 'YOUR_TURBO_VARIANT_ID_HERE', // Replace with your actual Shopify Variant ID
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className={styles.section}>
      <h2 className={styles.title}>FEATURED KITS</h2>
      <div className={styles.accent}></div>
      <p className={styles.subtitle}>Precision-engineered brick sets for true enthusiasts</p>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard key={product.name} {...product} delay={index * 150} />
        ))}
      </div>
    </section>
  );
}
