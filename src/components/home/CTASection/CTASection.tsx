'use client';

import styles from './CTASection.module.css';
import KommoForm from '@/components/KommoForm/KommoForm';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Dê o primeiro passo',
    title: 'Quer saber como podemos te ',
    titleHighlight: 'ajudar nesse processo?',
    descriptionDesktop: 'Preencha o formulário ao lado e nossa equipe entra em contato em breve. O processo de orientação é 100% gratuito.',
    descriptionMobile: 'Preencha o formulário abaixo e nossa equipe entra em contato em breve. O processo de orientação é 100% gratuito.',
    btnLabel: 'Preencher Formulário',
    stats: [
      { number: '500', suffix: '+', label: 'Alunos assessorados' },
      { number: '100', suffix: '%', label: 'Gratuito' },
      { number: '50', suffix: '+', label: 'Universidades parceiras' },
    ],
  },
  en: {
    eyebrow: 'Take the first step',
    title: 'Want to know how we can ',
    titleHighlight: 'help you through this process?',
    descriptionDesktop: 'Fill out the form and our team will reach out shortly. Our advisory service is 100% free.',
    descriptionMobile: 'Fill out the form and our team will reach out shortly. Our advisory service is 100% free.',
    btnLabel: 'Fill Out the Form',
    stats: [
      { number: '500', suffix: '+', label: 'Students advised' },
      { number: '100', suffix: '%', label: 'Free' },
      { number: '50', suffix: '+', label: 'Partner universities' },
    ],
  },
};

export default function CTASection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className={styles.section} id="fale-conosco" aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>

        {/* ── Left: Text ── */}
        <ScrollReveal variant="fadeLeft">
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>{t.eyebrow}</span>

            <h2 className={styles.title} id="cta-title">
              {t.title}
              <span>{t.titleHighlight}</span>
            </h2>

            <p className={styles.description}>
              <span className={styles.desktopText}>{t.descriptionDesktop}</span>
              <span className={styles.mobileText}>{t.descriptionMobile}</span>
            </p>

            <a href="#fale-conosco" className={styles.whatsappBtn} aria-label={t.btnLabel}>
              {t.btnLabel}
            </a>

            {/* Social proof */}
            <div className={styles.socialProof} aria-label="Statistics">
              {t.stats.map((s) => (
                <div key={s.label} className={styles.proofItem}>
                  <span className={styles.proofNumber}>
                    {s.number}<span>{s.suffix}</span>
                  </span>
                  <span className={styles.proofLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Right: Kommo Form ── */}
        <ScrollReveal variant="fadeRight" delay={300}>
          <div className={styles.formCol}>
            <KommoForm />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
