'use client';

import Image from 'next/image';
import styles from './BenefitsSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const cards = [
  {
    image:       '/images/card esquerda.avif',
    alt:         'Atendimento personalizado em português',
    title:       'Orientação Personalizada',
    description: 'Você vai ser atendido por quem já passou por isso. A gente fala a sua língua (literalmente), com suporte 100% em português e acompanhamento próximo durante todo o processo.',
    accent:      'orange',
  },
  {
    image:       '/images/card central.avif',
    alt:         'Parceria com universidades americanas',
    title:       'Parcerias Universitárias',
    description: 'Trabalhamos com universidades nos EUA que fazem sentido pro seu perfil, nada de opções caríssimas ou fora da realidade. Foco em formatos híbridos e flexíveis.',
    accent:      'purple',
  },
  {
    image:       '/images/card direira.png',
    alt:         'Opções acessíveis para estudar nos EUA',
    title:       'Opções Acessíveis',
    description: 'Temos cursos a partir de $7.000/ano! Assim, você consegue estudar com visto de estudante e ainda conciliar com trabalho legalmente nos EUA.',
    accent:      'orange',
  },
];

export default function BenefitsSection() {
  return (
    <section className={styles.section} id="servicos" aria-labelledby="benefits-title">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.eyebrow}>Por que nos escolher</span>
            <h2 className={styles.title} id="benefits-title">
              Nossos <span>diferenciais</span>
            </h2>
            <p className={styles.subtitle}>
              Combinamos experiência, relacionamento e expertise para tornar seu sonho americano realidade.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {cards.map((card, idx) => (
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
