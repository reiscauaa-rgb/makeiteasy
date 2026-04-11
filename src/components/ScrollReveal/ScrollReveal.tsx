'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation variant */
  variant?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'flipUp';
  /** Delay in ms (useful for staggered sequences) */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** How much of the element must be visible (0-1) */
  threshold?: number;
  /** Extra class name */
  className?: string;
  /** Wrapper tag */
  as?: React.ElementType;
}

const transforms: Record<string, string> = {
  fadeUp:    'translateY(60px)',
  fadeDown:  'translateY(-60px)',
  fadeLeft:  'translateX(-60px)',
  fadeRight: 'translateX(60px)',
  zoomIn:   'scale(0.85)',
  flipUp:   'perspective(800px) rotateX(8deg) translateY(40px)',
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    el.style.opacity = '0';
    el.style.transform = transforms[variant] || transforms.fadeUp;
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    el.style.willChange = 'opacity, transform';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) translateX(0) scale(1) rotateX(0deg)';
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, duration, threshold]);

  const Component = Tag as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
