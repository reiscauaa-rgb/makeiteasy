'use client';

import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import ReviewsCarousel from '@/components/ReviewsCarousel/ReviewsCarousel';
import type { Review } from '@/components/ReviewsCarousel/ReviewsCarousel';
import MapaUSA from '@/components/MapaUSA/MapaUSA';

// Metadata moved to layout or head for client component

const reviews: Review[] = [
  {
    name: 'Lais Koller',
    initials: 'LK',
    date: '2 meses atrás',
    text: 'Excelente profissional! Responde as dúvidas com muita rapidez e eficiência. Sempre disposta a ajudar!',
  },
  {
    name: 'Ana Júlia Malheiros',
    initials: 'AJ',
    date: '2 meses atrás',
    text: 'Foi perfeito! Giovanna me ajudou em todo o processo e me tirou todas as dúvidas! Desde o começo até a aprovação do meu status!',
  },
  {
    name: 'Jocassia Tonini',
    initials: 'JT',
    date: '2 meses atrás',
    text: 'Giovanna sempre super prestativa respondendo todas as minhas perguntas e me orientando na aplicação e nas dúvidas sobre qual universidade escolher, sobre as aulas, CPT. Super recomendo! 💯',
  },
  {
    name: 'Jennifer Benner',
    initials: 'JB',
    date: '2 meses atrás',
    text: 'Giovanna é excepcional! Muito querida e disposta a ajudar com qualquer problema ou dúvida! Ela foi sem dúvida a melhor pessoa que já me ajudou em algo relacionado a visto/estudos aqui nos EUA. Recomendo muito mesmo. Atenciosa, gentil e muito simpática!',
  },
  {
    name: 'Caroline',
    initials: 'CA',
    date: '2 meses atrás',
    text: 'Quero deixar meu agradecimento e minha recomendação para a assessoria da Giovanna. Ela foi simplesmente incrível durante todo o processo: super solicita, sempre pronta para ajudar, responde tudo muito rápido e te deixa extremamente tranquila em cada etapa. Gi, você foi fundamental para que tudo desse certo! ✨',
  },
  {
    name: 'Alexandre Melo',
    initials: 'AM',
    date: '3 meses atrás',
    text: 'O serviço prestado pela MAKE IT EASY é espetacular. Recomendo com absoluta convicção. A Giovanna sempre muito prestativa e cordial, com pleno conhecimento dos trâmites necessários para esclarecer e resolver os assuntos acadêmicos. SUPER RECOMENDO - serviço VIP 5 estrelas.',
  },
  {
    name: 'Joyce Goncalves',
    initials: 'JG',
    date: '3 meses atrás',
    text: 'A minha experiência com a Giovanna foi incrível. Sou imensamente grata por todo o suporte, atenção e empatia. Ela me ajudou a encontrar a faculdade e o curso alinhado com minhas expectativas. Recomendo e confio de olhos fechados no trabalho dela.',
  },
];

export default function SobrePage() {
  return (
    <main>

      {/* ════════════════════════════════════
          HERO
          ════════════════════════════════════ */}
      <section className={styles.hero}>
        <Image
          src="/images/hero-sobre-correta.png"
          alt=""
          width={1920}
          height={800}
          className={styles.heroBgImg}
          priority
        />
        <div className={styles.heroInner}>
          <p className={styles.heroSubtitle}>Uma história real. Uma missão simples:</p>
          <h1 className={styles.heroTitle}>Facilitar sua jornada.</h1>
        </div>
      </section>

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

            {/* Mapa Interativo */}
            <ScrollReveal variant="fadeLeft">
              <div className={styles.proofMapWrap}>
                <MapaUSA />
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
                <a href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn} aria-label="Iniciar conversa no WhatsApp">
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
      <ReviewsCarousel
        reviews={reviews}
        title="O que estão falando de nós?"
        googleLink="https://www.google.com"
        totalReviews={196}
        score="5.0"
      />

    </div>{/* end pageGradient */}

    </main>
  );
}
