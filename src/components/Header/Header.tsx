'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { href: '/',         label: 'Início' },
  { href: '/sobre',    label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/blog',     label: 'Blog' },
  { href: '/faq',      label: 'FAQ' },
  { href: '/contato',  label: 'Contato' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* On inner pages always show solid header; on home: transparent until scroll */}
      <header
        className={`${styles.header} ${
          pathname === '/'
            ? scrolled ? styles.scrolled : styles.transparent
            : styles.scrolled
        }`}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="Make It Easy USA"
              width={160}
              height={160}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
