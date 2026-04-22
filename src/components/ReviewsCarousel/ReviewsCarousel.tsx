'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './ReviewsCarousel.module.css';

export interface Review {
  name: string;
  initials: string;
  date: string;
  text: string;
}

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface Props {
  reviews: Review[];
  title?: string;
  googleLink?: string;
  totalReviews?: number;
  score?: string;
}

export default function ReviewsCarousel({
  reviews,
  title = 'O que estão falando de nós?',
  googleLink = 'https://www.google.com',
  totalReviews = 196,
  score = '5.0',
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const CARD_WIDTH = 320; // px — must match CSS var
  const GAP = 24;
  const STEP = CARD_WIDTH + GAP;

  const scrollTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, reviews.length - 1));
    setActiveIdx(clamped);
    trackRef.current?.scrollTo({ left: clamped * STEP, behavior: 'smooth' });
  }, [reviews.length, STEP]);

  // Auto-scroll every 4 s
  useEffect(() => {
    if (isPaused) return;
    autoRef.current = setInterval(() => {
      setActiveIdx(prev => {
        const next = prev >= reviews.length - 1 ? 0 : prev + 1;
        trackRef.current?.scrollTo({ left: next * STEP, behavior: 'smooth' });
        return next;
      });
    }, 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [isPaused, reviews.length, STEP]);

  // Sync active dot on manual scroll
  const handleScroll = () => {
    if (!trackRef.current) return;
    const idx = Math.round(trackRef.current.scrollLeft / STEP);
    setActiveIdx(idx);
  };

  return (
    <section className={styles.section} id="depoimentos" aria-labelledby="reviews-carousel-title">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title} id="reviews-carousel-title">{title}</h2>

          {/* Google score bar */}
          <div className={styles.scoreRow}>
            <div className={styles.googleBadge}>
              <GoogleIcon />
              <span>Google Reviews</span>
            </div>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.reviewCount}>({totalReviews})</span>
            <a
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleBtn}
            >
              Review us on Google
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={styles.carouselWrap}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className={styles.track}
            ref={trackRef}
            onScroll={handleScroll}
          >
            {reviews.map((r) => (
              <article key={r.name} className={styles.card}>
                {/* Reviewer row */}
                <div className={styles.reviewerRow}>
                  <div className={styles.avatar} aria-hidden="true">{r.initials}</div>
                  <div className={styles.reviewerInfo}>
                    <p className={styles.reviewerName}>
                      {r.name}
                      <svg className={styles.verifiedIcon} width="12" height="12" viewBox="0 0 24 24" fill="#4285F4" aria-label="Verificado">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </p>
                    <p className={styles.reviewDate}>{r.date}</p>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Stars */}
                <div className={styles.cardStars} aria-label="5 estrelas">★★★★★</div>

                {/* Text */}
                <p className={styles.reviewText}>{r.text}</p>
                <a href={googleLink} target="_blank" rel="noopener noreferrer" className={styles.readMore}>Ler mais</a>
              </article>
            ))}
          </div>

          {/* Arrows */}
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => scrollTo(activeIdx - 1)}
            aria-label="Anterior"
            disabled={activeIdx === 0}
          >‹</button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => scrollTo(activeIdx + 1)}
            aria-label="Próximo"
            disabled={activeIdx >= reviews.length - 1}
          >›</button>
        </div>

        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label="Navegar depoimentos">
          {reviews.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIdx}
              className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href={googleLink} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <GoogleIcon />
            Ver todas as avaliações no Google
          </a>
        </div>

      </div>
    </section>
  );
}
