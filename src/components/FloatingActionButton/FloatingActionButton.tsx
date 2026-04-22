'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './FloatingActionButton.module.css';

export default function FloatingActionButton() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [visible, setVisible] = useState(!isHome); // always visible on other pages

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    // Set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const label = isHome ? 'Voltar ao topo' : 'Voltar ao início';

  return (
    <button
      id="floating-action-btn"
      className={`${styles.btn} ${visible ? styles.visible : styles.hidden}`}
      onClick={handleClick}
      aria-label={label}
      title={label}
    >
      {isHome ? (
        // Arrow Up icon
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      ) : (
        // Home icon
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <polyline points="9 21 9 12 15 12 15 21" />
        </svg>
      )}
    </button>
  );
}
