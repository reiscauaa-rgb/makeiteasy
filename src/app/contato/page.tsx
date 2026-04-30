'use client';

import Image from 'next/image';
import styles from './page.module.css';
import KommoForm from '@/components/KommoForm/KommoForm';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    badge: 'Assessoria 100% gratuita',
    title: 'Quer saber como podemos',
    titleHighlight: 'te ajudar',
    titleSuffix: 'nesse processo?',
    subtitle: 'Preencha o formulário e nossa equipe entrará em contato em breve para apresentar as melhores opções de universidades para o seu perfil.',
    benefits: [
      '✅ Atendimento em português ou inglês',
      '✅ Assessoria sem custo',
      '✅ Do início ao fim do processo',
    ],
    formCardTitle: 'Fale com a gente',
  },
  en: {
    badge: '100% Free Advisory Service',
    title: 'Want to know how we can',
    titleHighlight: 'help you',
    titleSuffix: 'through this process?',
    subtitle: 'Fill out the form and our team will reach out shortly to present the best university options for your profile.',
    benefits: [
      '✅ Support in Portuguese or English',
      '✅ Free advisory service',
      '✅ From start to finish',
    ],
    formCardTitle: 'Get in touch',
  },
};

export default function ContatoPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main>
      <section className={styles.hero} aria-labelledby="contato-title">
        <div className={styles.heroBg}>
          <Image src="/images/hero sobre.avif" alt="" fill className={styles.heroBgImg} priority />
        </div>

        <div className={styles.heroInner}>
          {/* LEFT */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>{t.badge}</span>

            <h1 className={styles.heroTitle} id="contato-title">
              {t.title}<br />
              <span className={styles.heroHighlight}>{t.titleHighlight}</span> {t.titleSuffix}
            </h1>

            <p className={styles.heroSubtitle}>{t.subtitle}</p>

            <ul className={styles.benefitsList}>
              {t.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>

          {/* RIGHT */}
          <div className={styles.formWrap}>
            <div className={styles.formCard}>
              <p className={styles.formCardTitle}>{t.formCardTitle}</p>
              <KommoForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
