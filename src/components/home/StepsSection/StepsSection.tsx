'use client';

import { useState } from 'react';
import styles from './StepsSection.module.css';

const steps = [
  {
    number: 1,
    icon: '💬',
    label: 'Primeiro passo: Vamos conversar?',
    desc: 'Você nos conta o que está buscando e analisamos juntos se temos uma universidade parceira que combina com seu perfil, seu objetivo e seu bolso.',
  },
  {
    number: 2,
    icon: '🗺️',
    label: 'Te mostramos suas opções',
    desc: 'A gente te apresenta cursos com valores acessíveis, formato híbrido e a possibilidade de ter autorização de trabalho durante o curso.',
  },
  {
    number: 3,
    icon: '📖',
    label: 'Guia completo no seu idioma',
    desc: 'A gente te envia um manual completo com uma lista de documentos necessários e o passo a passo para aplicação da universidade escolhida',
  },
  {
    number: 4,
    icon: '🤝',
    label: 'Acompanhamento de verdade',
    desc: 'Durante todo o processo, caminhamos com você: Tirando todas as suas dúvidas, conferindo de documentos, e se necessário, indicamos especialistas parceiros para cuidar do seu visto.',
  },
  {
    number: 5,
    icon: '✈️',
    label: 'Aprovado ✅ Hora de estudar!',
    desc: 'Após a aprovação da universidade e do visto, nós seguimos disponíveis para te apoiar na sua jornada.',
  },
];

export default function StepsSection() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenStep(prev => (prev === idx ? null : idx));
  };

  return (
    <section
      className={styles.section}
      id="como-funciona"
      aria-labelledby="steps-title"
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.intro}>
            <span className={styles.introOrange}>Seu caminho para estudar nos EUA</span><br />
            <span className={styles.introDark}>pode ser mais fácil conosco!</span>
          </p>
          <span className={styles.eyebrow}>Como funciona</span>
        </div>

        <p className={styles.hint}>Clique para ver os detalhes</p>

        <ol className={styles.steps}>
          {steps.map((step, idx) => {
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
                <div className={styles.stepNumber} aria-label={`Passo ${step.number}`}>
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

        <p className={styles.freeTag}>✅ Assessoria 100% gratuita</p>
      </div>
    </section>
  );
}
