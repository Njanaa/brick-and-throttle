'use client';

import ProductCard from './ProductCard';
import styles from './FeaturedProducts.module.css';

const products = [
  {
    name: 'Porsche 911 RSR',
    price: '$249.99',
    pieces: 1580,
    image: '/images/porsche-rsr.jpg',
    badge: 'BESTSELLER',
  },
  {
    name: 'Gulf Racing 911',
    price: '$199.99',
    pieces: 1250,
    image: '/images/gulf-racing.jpg',
    badge: 'NEW',
  },
  {
    name: '911 Turbo S',
    price: '$279.99',
    pieces: 1890,
    image: '/images/turbo-s.jpg',
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
