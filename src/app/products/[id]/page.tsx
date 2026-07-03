'use client';

import { use, useState } from 'react';
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
  
  // Track selected image in gallery
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Review form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [ratingInput, setRatingInput] = useState(5);

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



  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Garage</Link>
          <span className={styles.separator}>/</span>
          <Link href="/catalog" className={styles.breadcrumbLink}>Catalog</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.currentBreadcrumb}>{product.name}</span>
        </div>

        {/* Dynamic Split Layout */}
        <div className={styles.productLayout}>
          
          {/* Left Column: Image Showcase & Gallery */}
          <div className={styles.galleryColumn}>
            <div className={styles.mainImageContainer}>
              {product.badge && <span className={styles.badge}>{product.badge}</span>}
              
              {/* Main active image - dynamically class-transformed depending on active thumbnail */}
              <div className={`${styles.imageWrapper} ${styles[`angle${activeImageIndex}`]}`}>
                <img src={product.image} alt={product.name} className={styles.mainImage} />
              </div>
            </div>
            
            {/* Gallery Thumbnails (4 angles simulated via CSS zooms/perspectives) */}
            <div className={styles.thumbnailRow}>
              {product.gallery.map((imgSrc, idx) => (
                <button
                  key={idx}
                  className={`${styles.thumbnailButton} ${activeImageIndex === idx ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`View angle ${idx + 1}`}
                >
                  <div className={`${styles.thumbnailWrapper} ${styles[`angleThumb${idx}`]}`}>
                    <img src={imgSrc} alt={`${product.name} angle ${idx + 1}`} className={styles.thumbnailImage} />
                  </div>
                  <span className={styles.angleLabel}>ANGLE {idx + 1}</span>
                </button>
              ))}
            </div>

            {product.id !== 'acrylic-display-box' && (
              <div className={styles.techNote}>
                <span className={styles.pulseIcon}></span>
                <span>INTEGRATED RC MOTOR KIT INCLUDED IN BOX</span>
              </div>
            )}
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
              <span className={styles.priceLabel}>PRICE (INCLUDES FULL RC KIT)</span>
              <span className={styles.priceValue}>{product.price}</span>
            </div>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.buttonActionRow}>
              <a 
                className={styles.buyNowButton} 
                href={`https://brick-and-throttle.myshopify.com/cart/${product.variantId}:1`}
              >
                BUY NOW &bull; CHECKOUT
              </a>
              
              <a 
                href={product.manualUrl} 
                download="brick-and-throttle-manual.txt" 
                className={styles.downloadManualLink}
              >
                DOWNLOAD USER MANUAL
              </a>
            </div>

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
              <div className={styles.specBox}>
                <span className={styles.specLabel}>RC MOTOR KIT</span>
                <span className={`${styles.specValueDetail} ${styles.highlightCyan}`}>
                  {product.id === 'acrylic-display-box' ? 'N/A' : 'INCLUDED'}
                </span>
              </div>
              <div className={styles.specBox}>
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

      {/* Customer Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <section className={styles.reviewsSection}>
          <div className={styles.reviewsContainer}>
            <div className={styles.reviewsHeaderSection}>
              <div>
                <h2 className={styles.sectionTitle}>CUSTOMER REVIEWS</h2>
                <div className={styles.sectionAccent}></div>
              </div>
              <button 
                className={styles.writeReviewButton}
                onClick={() => setShowReviewForm(!showReviewForm)}
              >
                {showReviewForm ? 'CANCEL' : 'WRITE A REVIEW'}
              </button>
            </div>
            
            {showReviewForm && (
              <div className={styles.reviewFormContainer}>
                {reviewSubmitted ? (
                  <div className={styles.reviewSuccessMsg}>
                    Thank you! Your review has been submitted and will appear after moderation.
                  </div>
                ) : (
                  <form 
                    className={styles.reviewForm}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setReviewSubmitted(true);
                    }}
                  >
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Your Name</label>
                        <input type="text" required placeholder="John D." />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Rating</label>
                        <div className={styles.ratingSelector}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span 
                              key={star} 
                              className={star <= ratingInput ? styles.starFilled : styles.starEmpty}
                              onClick={() => setRatingInput(star)}
                              style={{ cursor: 'pointer' }}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Review</label>
                      <textarea required placeholder="What did you think of this build?" rows={4}></textarea>
                    </div>
                    <button type="submit" className={styles.submitReviewButton}>SUBMIT REVIEW</button>
                  </form>
                )}
              </div>
            )}
            
            <div className={styles.reviewsGrid}>
              {product.reviews.map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewAuthor}>
                      <span className={styles.authorAvatar}>{review.authorName.charAt(0)}</span>
                      <div>
                        <h4 className={styles.authorName}>{review.authorName}</h4>
                        <span className={styles.reviewDate}>{review.date}</span>
                      </div>
                    </div>
                    <div className={styles.starRating}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < review.rating ? styles.starFilled : styles.starEmpty}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                  {review.reviewImage && (
                    <div className={styles.reviewImageContainer}>
                      <img src={review.reviewImage} alt={`Review photo by ${review.authorName}`} className={styles.reviewImage} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
