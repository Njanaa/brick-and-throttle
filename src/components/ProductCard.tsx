'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  price: string;
  pieces: number;
  image: string;
  variantId: string;
  badge?: string;
  delay?: number;
}

export default function ProductCard({ name, price, pieces, image, variantId, badge, delay = 0 }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const handleAddToCart = () => {
    // Redirects directly to Shopify checkout with 1 unit of this variant
    const checkoutUrl = `https://brick-and-throttle.myshopify.com/cart/${variantId}:1`;
    window.open(checkoutUrl, '_blank');
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.pieces}>{pieces.toLocaleString()} pieces</p>
        <p className={styles.price}>{price}</p>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
