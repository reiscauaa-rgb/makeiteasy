'use client';

import { useEffect, useRef } from 'react';
import styles from './KommoForm.module.css';

export default function KommoForm() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as any;

    // 1. Set params BEFORE loading the script
    w['amo_forms_params'] = {
      setMeta: function (p: unknown) {
        this.params = (this.params || []).concat([p]);
      },
      id: '1551255',
      hash: '73217b5b245e1956c657964561326af6',
      locale: 'pt',
      dp: {},
    };
    w['amo_forms_load'] = w['amo_forms_load'] || function (f: unknown) {
      (w['amo_forms_load'].f = w['amo_forms_load'].f || []).push(f);
    };
    w['amo_forms_loaded'] = w['amo_forms_loaded'] || function (f: unknown, k: unknown) {
      (w['amo_forms_loaded'].f = w['amo_forms_loaded'].f || []).push([f, k]);
    };

    // 2. Remove previous instance (hot-reload safety)
    const prev = document.getElementById('amoforms_script_1551255');
    if (prev) prev.remove();
    const prevIframe = document.getElementById('amoforms_iframe_1551255');
    if (prevIframe) prevIframe.remove();

    // 3. Append script to mount div — Kommo renders the form here
    const script = document.createElement('script');
    script.id = 'amoforms_script_1551255';
    script.async = true;
    script.charset = 'utf-8';
    script.src = '//forms.kommo.com/forms/assets/js/amoforms.js?1765486240';

    if (mountRef.current) {
      mountRef.current.appendChild(script);
    }

    return () => {
      script.remove();
      const iframe = document.getElementById('amoforms_iframe_1551255');
      if (iframe) iframe.remove();
    };
  }, []);

  return (
    <div className={styles.card}>
      {/* Animated top accent bar rendered via ::before */}

      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.cardIconWrap} aria-hidden="true">
          {/* Form icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <div className={styles.cardHeaderText}>
          <p className={styles.cardTitle}>Preencha o formulário</p>
          <p className={styles.cardSubtitle}>
            <span className={styles.secureDot} aria-hidden="true" />
            Gratuito • Sem compromisso • Resposta em 24h
          </p>
        </div>
      </div>

      {/* Form body — Kommo script mounts here */}
      <div className={styles.cardBody}>
        <div ref={mountRef} className={styles.formMount} id="kommo-form-container" />
        {/* Covers the Kommo watermark at the bottom of the iframe */}
        <div className={styles.watermarkBlock} aria-hidden="true" />
      </div>

      {/* Card footer — trust signal */}
      <div className={styles.cardFooter}>
        <p className={styles.footerText}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
          Seus dados estão seguros e protegidos
        </p>
      </div>
    </div>
  );
}
