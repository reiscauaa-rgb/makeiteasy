'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const navLinks = {
  pt: [
    { href: '/',         label: 'Início' },
    { href: '/sobre',    label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/blog',     label: 'Blog' },
    { href: '/faq',      label: 'FAQ' },
    { href: '/contato',  label: 'Contato' },
  ],
  en: [
    { href: '/',         label: 'Home' },
    { href: '/sobre',    label: 'About' },
    { href: '/servicos', label: 'Services' },
    { href: '/blog',     label: 'Blog' },
    { href: '/faq',      label: 'FAQ' },
    { href: '/contato',  label: 'Contact' },
  ],
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const { language, setLanguage }   = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const links = navLinks[language];

  return (
    <>
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            {/* Language Switcher */}
            <div className={styles.langSwitcher}>
              <button
                className={`${styles.langBtn} ${language === 'pt' ? styles.langActive : ''}`}
                onClick={() => setLanguage('pt')}
                aria-label="Português"
              >
                PT
              </button>
              <span className={styles.langDivider}>|</span>
              <button
                className={`${styles.langBtn} ${language === 'en' ? styles.langActive : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="English"
              >
                EN
              </button>
            </div>

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
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-hidden={!menuOpen}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        {/* Mobile Language Switcher */}
        <div className={styles.mobileLangSwitcher}>
          <button
            className={`${styles.langBtn} ${language === 'pt' ? styles.langActive : ''}`}
            onClick={() => { setLanguage('pt'); closeMenu(); }}
          >
            🇧🇷 Português
          </button>
          <button
            className={`${styles.langBtn} ${language === 'en' ? styles.langActive : ''}`}
            onClick={() => { setLanguage('en'); closeMenu(); }}
          >
            🇺🇸 English
          </button>
        </div>
      </div>
    </>
  );
}
