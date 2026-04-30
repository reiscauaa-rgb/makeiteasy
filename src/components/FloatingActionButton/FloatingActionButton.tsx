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
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    // Set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const label = 'Voltar ao topo';

  return (
    <button
      id="floating-action-btn"
      className={`${styles.btn} ${visible ? styles.visible : styles.hidden}`}
      onClick={handleClick}
      aria-label={label}
      title={label}
    >
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
    </button>
  );
}
