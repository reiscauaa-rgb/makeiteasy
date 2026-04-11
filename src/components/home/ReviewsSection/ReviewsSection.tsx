'use client';

import styles from './ReviewsSection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const reviews = [
  {
    name:   'Lívia Chieppe',
    initials: 'LC',
    text:   'A Make It Easy USA transformou completamente minha visão sobre estudar no exterior. O processo foi muito mais simples do que eu imaginava e a equipe me guiou em cada etapa!',
    rating: 5,
  },
  {
    name:   'Thalya Faria',
    initials: 'TF',
    text:   'Assessoria incrível! Gratuita, humanizada e extremamente eficiente. Consegui minha vaga na universidade dos sonhos com toda a ajuda que precisava. Recomendo muito!',
    rating: 5,
  },
  {
    name:   'Maria Rodriguez',
    initials: 'MR',
    text:   'Não sabia por onde começar para estudar nos EUA. A equipe da Make It Easy foi paciente, clara e me ajudou a entender todas as opções. Hoje estou matriculada!',
    rating: 5,
  },
  {
    name:   'João Pedro Silva',
    initials: 'JS',
    text:   'Serviço excepcional e totalmente gratuito! A orientação foi personalizada para o meu perfil e orçamento. Melhor decisão que tomei foi entrar em contato com eles.',
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className={styles.section} id="depoimentos" aria-labelledby="reviews-title">
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.eyebrow}>Depoimentos</span>
            <h2 className={styles.title} id="reviews-title">
              O que estão <span>falando de nós?</span>
            </h2>
            <a
              href="#"
              className={styles.whatsappCta}
              aria-label="Iniciar conversa no WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Iniciar conversa no WhatsApp
            </a>
            <p className={styles.subtitle}>
              Quem confiou na Make It Easy USA tem muito a contar.
            </p>
            <p className={styles.subtitleSm}>
              Veja como a nossa assessoria transformou o caminho de quem sonhava em estudar nos EUA.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={200}>
          <div className={styles.track} role="list" aria-label="Depoimentos de clientes">
            {reviews.map((review) => (
              <div key={review.name} className={styles.card} role="listitem">
                {/* Stars */}
                <div className={styles.stars} aria-label={`${review.rating} estrelas`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className={styles.star} aria-hidden="true">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>

                {/* Author */}
                <div className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">
                    {review.initials}
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>{review.name}</p>
                    <p className={styles.verified}>
                      <span className={styles.verifiedIcon}>✓</span>
                      Cliente verificado
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={400}>
          <div className={styles.cta}>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Ver todas as avaliações no Google
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
