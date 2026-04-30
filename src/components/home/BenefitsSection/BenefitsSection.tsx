'use client';

import Image from 'next/image';
import styles from './BenefitsSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Por que nos escolher',
    title: 'Nossos diferenciais',
    subtitle: 'Combinamos experiência, relacionamento e expertise para tornar seu sonho americano realidade.',
    cards: [
      {
        image: '/images/card esquerda.avif',
        alt: 'Atendimento personalizado em português',
        title: 'Orientação Personalizada',
        description: 'Você vai ser atendido por quem já passou por isso. A gente fala a sua língua (literalmente), com suporte em português e inglês e acompanhamento próximo durante todo o processo.',
        accent: 'orange',
      },
      {
        image: '/images/card central.avif',
        alt: 'Parceria com universidades americanas',
        title: 'Parcerias Universitárias',
        description: 'Trabalhamos com universidades nos EUA que fazem sentido pro seu perfil, nada de opções caríssimas ou fora da realidade. Foco em formatos híbridos e flexíveis.',
        accent: 'purple',
      },
      {
        image: '/images/card direira.png',
        alt: 'Opções acessíveis para estudar nos EUA',
        title: 'Opções Acessíveis',
        description: 'Temos cursos a partir de $7.000/ano! Assim, você consegue estudar com visto de estudante e ainda conciliar com trabalho legalmente nos EUA.',
        accent: 'orange',
      },
    ],
  },
  en: {
    eyebrow: 'Why choose us',
    title: 'What sets us apart',
    subtitle: 'We combine experience, relationships, and expertise to make your American dream a reality.',
    cards: [
      {
        image: '/images/card esquerda.avif',
        alt: 'Personalized support in Portuguese and English',
        title: 'Personalized Guidance',
        description: 'You\'ll be guided by someone who has been through it. We speak your language, with support in both Portuguese and English, and stay by your side throughout the whole process.',
        accent: 'orange',
      },
      {
        image: '/images/card central.avif',
        alt: 'Partnerships with American universities',
        title: 'University Partnerships',
        description: 'We work with U.S. universities that truly fit your profile with no overpriced or unrealistic options. We focus on hybrid and flexible formats.',
        accent: 'purple',
      },
      {
        image: '/images/card direira.png',
        alt: 'Affordable options to study in the USA',
        title: 'Affordable Options',
        description: 'We have programs starting at $7,000/year! This way, you can study on a student visa and legally work in the U.S. at the same time.',
        accent: 'orange',
      },
    ],
  },
};

export default function BenefitsSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className={styles.section} id="servicos" aria-labelledby="benefits-title">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.eyebrow}>{t.eyebrow}</span>
            <h2 className={styles.title} id="benefits-title">
              {language === 'pt' ? <>Nossos <span>diferenciais</span></> : <>What <span>sets us apart</span></>}
            </h2>
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {t.cards.map((card, idx) => (
            <ScrollReveal key={card.title} variant="fadeUp" delay={idx * 200}>
              <article className={styles.card}>
                <div className={styles.cardImageWrap}>
                  {card.accent === 'orange' ? (
                    <div className={styles.cardAccentOrange} />
                  ) : (
                    <div className={styles.cardAccentPurple} />
                  )}
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
