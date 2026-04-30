'use client';

import { useState } from 'react';
import styles from './StepsSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    introOrange: 'Seu caminho para estudar nos EUA',
    introDark: 'pode ser mais fácil conosco!',
    eyebrow: 'Como funciona',
    hint: 'Clique para ver os detalhes',
    freeTag: '✅ Assessoria 100% gratuita',
    steps: [
      { number: 1, icon: '💬', label: 'Primeiro passo: Vamos conversar?', desc: 'Você nos conta o que está buscando e analisamos juntos se temos uma universidade parceira que combina com seu perfil, seu objetivo e seu bolso.' },
      { number: 2, icon: '🗺️', label: 'Te mostramos suas opções', desc: 'A gente te apresenta cursos com valores acessíveis, formato híbrido e a possibilidade de ter autorização de trabalho durante o curso.' },
      { number: 3, icon: '📖', label: 'Guia completo no seu idioma', desc: 'A gente te envia um manual completo com uma lista de documentos necessários e o passo a passo para aplicação da universidade escolhida.' },
      { number: 4, icon: '🤝', label: 'Acompanhamento de verdade', desc: 'Durante todo o processo, caminhamos com você: Tirando todas as suas dúvidas, conferindo documentos, e se necessário, indicamos especialistas parceiros para cuidar do seu visto.' },
      { number: 5, icon: '✈️', label: 'Aprovado ✅ Hora de estudar!', desc: 'Após a aprovação da universidade e do visto, nós seguimos disponíveis para te apoiar na sua jornada.' },
    ],
  },
  en: {
    introOrange: 'Your path to studying in the U.S.',
    introDark: 'can be a lot easier with us!',
    eyebrow: 'How it works',
    hint: 'Click to see the details',
    freeTag: '✅ 100% Free Advisory Service',
    steps: [
      { number: 1, icon: '💬', label: 'First step: Let\'s talk!', desc: 'Tell us what you\'re looking for and we\'ll explore together whether we have a partner university that fits your profile, your goals, and your budget.' },
      { number: 2, icon: '🗺️', label: 'We show you your options', desc: 'We present programs with affordable tuition, hybrid formats, and the possibility of obtaining work authorization during your studies.' },
      { number: 3, icon: '📖', label: 'Full guide in your language', desc: 'We send you a complete step-by-step guide including the document checklist and the application process for the university you choose.' },
      { number: 4, icon: '🤝', label: 'Real, hands-on support', desc: 'We walk with you every step of the way: answering your questions, reviewing your documents, and connecting you with partner specialists if needed for your visa.' },
      { number: 5, icon: '✈️', label: 'Accepted ✅ Time to study!', desc: 'Once you\'ve been accepted by the university and received your visa, we\'re still here to support you throughout your journey.' },
    ],
  },
};

export default function StepsSection() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = content[language];

  const toggle = (idx: number) => {
    setOpenStep(prev => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.section} id="como-funciona" aria-labelledby="steps-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.intro}>
            <span className={styles.introOrange}>{t.introOrange}</span><br />
            <span className={styles.introDark}>{t.introDark}</span>
          </p>
          <span className={styles.eyebrow}>{t.eyebrow}</span>
        </div>

        <p className={styles.hint}>{t.hint}</p>

        <ol className={styles.steps}>
          {t.steps.map((step, idx) => {
            const isOpen = openStep === idx;
            return (
              <li
                key={step.number}
                className={`${styles.step} ${isOpen ? styles.stepOpen : ''}`}
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && toggle(idx)}
              >
                <div className={styles.stepNumber} aria-label={`Step ${step.number}`}>
                  {step.number}
                </div>
                <span className={styles.stepIcon} aria-hidden="true">{step.icon}</span>
                <p className={styles.stepLabel}>{step.label}</p>
                <div className={styles.stepDescWrap}>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className={styles.freeTag}>{t.freeTag}</p>
      </div>
    </section>
  );
}
