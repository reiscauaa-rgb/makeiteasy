'use client';

import { useEffect, useRef } from 'react';
import styles from './KommoForm.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    title: 'Preencha o formulário',
    subtitle: 'PREENCHA O FORMULÁRIO ABAIXO',
    footer: 'Seus dados estão seguros e protegidos'
  },
  en: {
    title: 'Fill out the form',
    subtitle: 'FILL OUT THE FORM BELOW',
    footer: 'Your data is safe and secure'
  },
};

export default function KommoForm() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    const formId   = language === 'en' ? '1637024' : '1637020';
    const formHash = language === 'en' ? '94a995b366cc1a813834f7e0b004feb8' : '5122c3369419979e54e267fdae0ed99e';
    const locale   = language === 'en' ? 'en' : 'pt';
    const w        = window as any;
    const container = mountRef.current;
    if (!container) return;

    // 1. Reseta globais do Kommo completamente (sem || para garantir estado limpo)
    delete w['amo_forms_params'];
    delete w['amo_forms_load'];
    delete w['amo_forms_loaded'];

    // 2. Limpa DOM: remove scripts e iframes de versões anteriores
    container.innerHTML = '';
    ['1637020', '1637024', '1551255'].forEach(id => {
      document.getElementById(`amoforms_iframe_${id}`)?.remove();
    });

    // 3. Script inline de inicialização — padrão IIFE exato do Kommo (Scripts 02 e 03)
    //    DEVE estar dentro do container para o Kommo saber onde renderizar o iframe
    const initScript = document.createElement('script');
    initScript.textContent = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"${formId}",hash:"${formHash}",locale:"${locale}"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;
    container.appendChild(initScript);

    // 4. Script principal do Kommo — também dentro do container
    const script = document.createElement('script');
    script.id      = `amoforms_script_${formId}`;
    script.async   = true;
    script.charset = 'utf-8';
    script.src     = 'https://forms.kommo.com/forms/assets/js/amoforms.js?1765486429';
    container.appendChild(script);

    // 5. Listener de mensagens: reporta largura real do container ao Kommo
    //    Kommo usa isso para decidir entre layout 1 coluna (mobile) ou 2 colunas (desktop)
    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data.func === 'getWindowWidth' || data.func === 'getWindowWidthIsModal') {
          const iframe = (
            document.getElementById(`amoforms_iframe_${formId}`) ??
            container.querySelector('iframe')
          ) as HTMLIFrameElement | null;
          if (iframe?.contentWindow) {
            // Reporta a largura real do card — força Kommo a usar coluna única se < threshold
            const width = container.clientWidth || 400;
            iframe.contentWindow.postMessage(JSON.stringify({ parent_window_width: width }), '*');
            // Garante que iframe preenche o container visualmente
            iframe.style.width    = '100%';
            iframe.style.maxWidth = '100%';
            iframe.style.border   = 'none';
          }
        }
      } catch { /* ignora erros de parse */ }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      container.innerHTML = '';
      ['1637020', '1637024', '1551255'].forEach(id => {
        document.getElementById(`amoforms_script_${id}`)?.remove();
        document.getElementById(`amoforms_iframe_${id}`)?.remove();
      });
    };
  }, [language]);

  return (
    <div className={styles.wrapper}>
      {/* O Kommo injeta seu próprio visual completo aqui — sem card wrapper em duplicidade */}
      <div ref={mountRef} className={styles.formMount} id="kommo-form-container" />
      <div className={styles.cardFooter}>
        <p className={styles.footerText}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
          {t.footer}
        </p>
      </div>
    </div>
  );
}
