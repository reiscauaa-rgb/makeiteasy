'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
    desc: 'A gente te apresenta cursos reais, com mensalidades a partir de $7.000/ano e com formato híbrido, pra você poder estudar e trabalhar.',
  },
  {
    number: 3,
    icon: '📖',
    label: 'Guia completo em português',
    desc: 'Gostou de alguma opção? A gente te envia um manual com todos os documentos que vai precisar, prazos e o passo a passo para aplicação.',
  },
  {
    number: 4,
    icon: '🤝',
    label: 'Acompanhamento de verdade',
    desc: 'Durante todo o processo, caminhamos com você: ajudando com dúvidas, documentos, traduções e, se precisar, indicamos especialistas em visto.',
  },
  {
    number: 5,
    icon: '✈️',
    label: 'Tudo certo? Hora de embarcar!',
    desc: 'Com o I-20 aprovado, você aplica para o visto e se prepara para embarcar. E mesmo depois, seguimos disponíveis para te apoiar no que for preciso.',
  },
];

export default function StepsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Reveal steps one by one after section is visible
  useEffect(() => {
    if (!hasStarted) return;

    const timers: NodeJS.Timeout[] = [];
    steps.forEach((_, idx) => {
      const t = setTimeout(() => {
        setVisibleCount(idx + 1);
      }, (idx + 1) * 900); // 900ms between each step — slower reveal
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [hasStarted]);

  return (
    <section
      className={styles.section}
      id="como-funciona"
      aria-labelledby="steps-title"
      ref={sectionRef}
    >
      <div className="container">
        <div className={`${styles.header} ${hasStarted ? styles.headerVisible : ''}`}>
          <p className={styles.intro}>
            Seu caminho para estudar nos EUA pode ser mais fácil conosco!
          </p>
          <span className={styles.eyebrow}>Como funciona</span>
          <h2 className={styles.title} id="steps-title">
            Do sonho ao <span>embarque</span>
          </h2>
        </div>

        {/* The 5 Passos illustration */}
        <div className={`${styles.stepsImageWrap} ${hasStarted ? styles.stepsImageVisible : ''}`}>
          <Image
            src="/images/5 passos.png"
            alt="Ilustração dos 5 passos do processo de assessoria"
            width={900}
            height={300}
            className={styles.stepsImage}
          />
        </div>

        {/* Animated steps grid */}
        <ol className={styles.steps}>
          {steps.map((step, idx) => {
            const isVisible = idx < visibleCount;
            const isLatest = idx === visibleCount - 1;

            return (
              <li
                key={step.number}
                className={`
                  ${styles.step}
                  ${isVisible ? styles.stepVisible : ''}
                  ${isLatest ? styles.stepLatest : ''}
                `}
                style={{
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                <div className={styles.stepNumber} aria-label={`Passo ${step.number}`}>
                  {step.number}
                </div>
                <span className={styles.stepIcon} aria-hidden="true">{step.icon}</span>
                <p className={styles.stepLabel}>{step.label}</p>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
