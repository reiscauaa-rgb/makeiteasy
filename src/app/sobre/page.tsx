'use client';

import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

// Metadata moved to layout or head for client component

const reviews = [
  {
    name: 'Lívia Chieppe',
    initials: 'LC',
    date: '15 dias atrás',
    text: 'Giovanna foi uma ótima assessora, desde o início sempre muito atenciosa e proativa…',
  },
  {
    name: 'Thalya Faria',
    initials: 'TF',
    date: '15 dias atrás',
    text: 'A Giovanna, foi simplesmente essencial em todo o meu processo de aplicação para a…',
  },
  {
    name: 'Maria Rodriguez',
    initials: 'MR',
    date: '24 dias atrás',
    text: 'Gio me ayudó con todo lo que necesite en todo momento, desde los primeros documentos…',
  },
  {
    name: 'Jaine Campos de S.',
    initials: 'JC',
    date: '25 dias atrás',
    text: 'O serviço da MakeItEasy é sensacional! Precisei de consultoria para escolher um…',
  },
];

export default function SobrePage() {
  return (
    <main>

      {/* ════════════════════════════════════
          HERO — Blob roxo + título + bandeiras
          ════════════════════════════════════ */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroBlob}>
          <div className={styles.heroBlobContent}>
            <p className={styles.heroTagline}>Uma história real. Uma missão simples:</p>
            <h1 className={styles.heroTitle}>Facilitar sua jornada.</h1>

            {/* Bandeiras flutuantes */}
            <div className={styles.heroFlags}>
              <Image
                src="/images/hero flutuante.avif"
                alt="Bandeiras do Brasil e dos EUA conectadas por um avião"
                width={280}
                height={140}
                className={styles.heroFlagsImg}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ════ Gradient container — all sections flow seamlessly ════ */}
      <div className={styles.pageGradient}>

      {/* ════════════════════════════════════
          HISTÓRIA — Texto + Foto Giovanna
          ════════════════════════════════════ */}
      <section className={styles.storySection} aria-labelledby="story-title">
        <div className="container">
          <div className={styles.storyGrid}>

            {/* Texto */}
            <ScrollReveal variant="fadeLeft">
              <div className={styles.storyText}>
                <p className={styles.storyParagraph}>
                  A Make It Easy USA nasceu da vivência de quem já esteve exatamente onde você está
                  agora: cheia de dúvidas, sonhos e vontade de estudar nos Estados Unidos, mas sem
                  saber por onde começar.
                </p>
                <p className={styles.storyParagraph}>
                  Nossa fundadora, <strong>Giovanna</strong>, chegou aos EUA como Au Pair, em busca
                  de novas oportunidades. Durante sua própria transição para o visto de estudante,
                  enfrentou sozinha todos os desafios do processo: pesquisa de universidades,
                  burocracias, documentação, tradução, testes e aquela sensação de estar sempre a
                  um passo de errar. Mas ela não desistiu.
                </p>
                <p className={styles.storyParagraph}>
                  Depois de ser aprovada e estudar em uma universidade americana, Giovanna começou
                  a trabalhar dentro da própria instituição, entendendo ainda mais a fundo como o
                  sistema funciona e como{' '}
                  <strong>ele pode ser mais acessível e menos confuso</strong> com o direcionamento
                  certo.
                </p>
                <p className={styles.storyParagraph}>
                  Foi aí que nasceu a Make It Easy USA: uma assessoria gratuita, prática e
                  acolhedora, feita por quem já passou pelo processo e{' '}
                  <strong>
                    decidiu transformar a própria experiência em ponte para outras pessoas
                  </strong>
                  .
                </p>
              </div>
            </ScrollReveal>

            {/* Foto da Giovanna */}
            <ScrollReveal variant="fadeRight" delay={200}>
              <div className={styles.storyPhotoWrap}>
                <Image
                  src="/images/foto.avif"
                  alt="Giovanna, fundadora da Make It Easy USA"
                  fill
                  className={styles.storyPhoto}
                  sizes="(max-width: 1024px) 360px, 420px"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════
          O QUE ACREDITAMOS?
          ════════════════════════════════════ */}
      <section className={styles.valuesSection} aria-labelledby="values-title">
        <div className="container">
          <div className={styles.valuesGrid}>

            <ScrollReveal variant="fadeUp">
              <h2 className={styles.valuesTitle} id="values-title">
                O que<br />acreditamos?
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={200}>
              <ul className={styles.valuesList}>
                <li className={styles.valuesItem}>
                  <span className={styles.valuesBullet} aria-hidden="true" />
                  <p className={styles.valuesItemText}>
                    <strong>Estudar fora deve ser possível e acessível</strong> — não só para quem
                    pode pagar 50 mil dólares por ano.
                  </p>
                </li>
                <li className={styles.valuesItem}>
                  <span className={styles.valuesBullet} aria-hidden="true" />
                  <p className={styles.valuesItemText}>
                    <strong>Você não precisa passar por isso sozinho.</strong> Aqui você encontra
                    orientação real, sem cobranças, enrolação ou falsas promessas.
                  </p>
                </li>
                <li className={styles.valuesItem}>
                  <span className={styles.valuesBullet} aria-hidden="true" />
                  <p className={styles.valuesItemText}>
                    <strong>Nosso diferencial é o cuidado.</strong> Desde o primeiro contato até
                    depois da sua aprovação, estamos por perto para te apoiar, explicar e celebrar.
                  </p>
                </li>
              </ul>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════
          QUEM JÁ PASSOU POR AQUI SABE
          ════════════════════════════════════ */}
      <section className={styles.proofSection} aria-labelledby="proof-title">
        <div className="container">
          <div className={styles.proofGrid}>

            {/* Mapa */}
            <ScrollReveal variant="fadeLeft">
              <div className={styles.proofMapWrap}>
                <Image
                  src="/images/mapa.avif"
                  alt="Mapa dos Estados Unidos com pins marcando onde nossos alunos estudam"
                  fill
                  className={styles.proofMapImg}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            {/* Texto */}
            <ScrollReveal variant="fadeRight" delay={200}>
              <div className={styles.proofContent}>
                <h2 className={styles.proofTitle} id="proof-title">
                  Quem já passou<br />por aqui sabe:
                </h2>
                <p className={styles.proofBody}>
                  Já ajudamos <strong>mais de 300 brasileiros</strong> a conquistarem suas vagas e
                  transformarem suas histórias.
                </p>
                <p className={styles.proofNote}>E a próxima pode ser a sua.</p>
                <a href="#" className={styles.whatsappBtn} aria-label="Iniciar conversa no WhatsApp">
                  Iniciar conversa no WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          DEPOIMENTOS — Google Reviews
          ════════════════════════════════════ */}
      <section className={styles.reviewsSection} aria-labelledby="reviews-title">
        <div className="container">

          <div className={styles.reviewsHeader}>
            <h2 className={styles.reviewsTitle} id="reviews-title">
              O que estão falando de nós?
            </h2>
          </div>

          {/* Google score row */}
          <div className={styles.reviewsScoreRow}>
            <div className={styles.googleBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google Reviews</span>
            </div>
            <span className={styles.scoreNumber}>5.0</span>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.reviewCount}>(196)</span>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleReviewBtn}
            >
              Review us on Google
            </a>
          </div>

          {/* Review cards */}
          <div className={styles.reviewsGrid}>
            {reviews.map((r) => (
              <article key={r.name} className={styles.reviewCard}>
                <div className={styles.reviewerRow}>
                  <div className={styles.reviewerAvatar} aria-hidden="true">
                    {r.initials}
                  </div>
                  <div className={styles.reviewerInfo}>
                    <p className={styles.reviewerName}>
                      {r.name}
                      <svg
                        className={styles.reviewVerifiedIcon}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#4285F4"
                        aria-label="Verificado"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </p>
                    <p className={styles.reviewDate}>{r.date}</p>
                  </div>
                  {/* Google G icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className={styles.reviewStars} aria-label="5 estrelas">★★★★★</div>
                <p className={styles.reviewText}>{r.text}</p>
                <a href="#" className={styles.reviewReadMore}>Read more</a>
              </article>
            ))}
          </div>

          {/* Actions */}
          <div className={styles.reviewsActions}>
            <a href="#" className={styles.ctaBtn} aria-label="Iniciar conversa no WhatsApp">
              Iniciar conversa no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>{/* end pageGradient */}

    </main>
  );
}
