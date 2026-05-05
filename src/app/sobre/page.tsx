'use client';

import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import ReviewsCarousel from '@/components/ReviewsCarousel/ReviewsCarousel';
import type { Review } from '@/components/ReviewsCarousel/ReviewsCarousel';
import MapaUSA from '@/components/MapaUSA/MapaUSA';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const reviews: Review[] = [
  { name: 'Lais Koller', initials: 'LK', date: '2 meses atrás', text: 'Excelente profissional! Responde as dúvidas com muita rapidez e eficiência. Sempre disposta a ajudar!' },
  { name: 'Ana Júlia Malheiros', initials: 'AJ', date: '2 meses atrás', text: 'Foi perfeito! Giovanna me ajudou em todo o processo e me tirou todas as dúvidas! Desde o começo até a aprovação do meu status!' },
  { name: 'Jocassia Tonini', initials: 'JT', date: '2 meses atrás', text: 'Giovanna sempre super prestativa respondendo todas as minhas perguntas e me orientando na aplicação e nas dúvidas sobre qual universidade escolher, sobre as aulas, CPT. Super recomendo! 💯' },
  { name: 'Jennifer Benner', initials: 'JB', date: '2 meses atrás', text: 'Giovanna é excepcional! Muito querida e disposta a ajudar com qualquer problema ou dúvida! Ela foi sem dúvida a melhor pessoa que já me ajudou em algo relacionado a visto/estudos aqui nos EUA. Recomendo muito mesmo. Atenciosa, gentil e muito simpática!' },
  { name: 'Caroline', initials: 'CA', date: '2 meses atrás', text: 'Quero deixar meu agradecimento e minha recomendação para a assessoria da Giovanna. Ela foi simplesmente incrível durante todo o processo: super solicita, sempre pronta para ajudar, responde tudo muito rápido e te deixa extremamente tranquila em cada etapa. Gi, você foi fundamental para que tudo desse certo! ✨' },
  { name: 'Alexandre Melo', initials: 'AM', date: '3 meses atrás', text: 'O serviço prestado pela MAKE IT EASY é espetacular. Recomendo com absoluta convicção. A Giovanna sempre muito prestativa e cordial, com pleno conhecimento dos trâmites necessários para esclarecer e resolver os assuntos acadêmicos. SUPER RECOMENDO - serviço VIP 5 estrelas.' },
  { name: 'Joyce Goncalves', initials: 'JG', date: '3 meses atrás', text: 'A minha experiência com a Giovanna foi incrível. Sou imensamente grata por todo o suporte, atenção e empatia. Ela me ajudou a encontrar a faculdade e o curso alinhado com minhas expectativas. Recomendo e confio de olhos fechados no trabalho dela.' },
];

const content = {
  pt: {
    heroSubtitle: 'Uma história real. Uma missão simples:',
    heroTitle: 'Facilitar sua jornada.',
    story: [
      'A Make It Easy USA nasceu da vivência de quem já esteve exatamente onde você está agora: cheia de dúvidas, sonhos e vontade de estudar nos Estados Unidos, mas sem saber por onde começar.',
      'Nossa fundadora, <strong>Giovanna</strong>, chegou aos EUA como Au Pair, em busca de novas oportunidades. Durante sua própria transição para o visto de estudante, enfrentou todos os desafios do processo: pesquisa de universidades, burocracias, documentação, tradução, testes e aquela sensação de estar sempre a um passo de errar. Mas ela não desistiu.',
      'Depois de ser aprovada e iniciar seus estudos em uma universidade americana, Giovanna começou a trabalhar dentro da própria instituição. Foi nesse momento que passou a entender o processo por dentro e percebeu que, <strong>com a orientação certa, ele poderia ser muito mais simples e acessível</strong>.',
      'Com essa visão, surgiu a vontade de criar algo maior: não trabalhar com apenas uma universidade, mas com diferentes instituições parceiras que realmente fizessem sentido para o perfil de alunos que ela um dia também foi.',
      'Pessoas que querem estudar nos Estados Unidos, mas que buscam opções <strong>mais realistas financeiramente</strong> e que também possam <strong>abrir portas para o mercado de trabalho</strong>.',
      'Foi assim que nasceu a Make It Easy USA: uma assessoria gratuita, prática e acolhedora, feita por quem já passou pelo processo e <strong>decidiu transformar a própria experiência em ponte para outras pessoas</strong>.',
    ],
    valuesTitle: 'O que\nacreditamos?',
    values: [
      '<strong>Estudar fora deve ser possível e acessível</strong> — não só para quem pode pagar 50 mil dólares por ano.',
      '<strong>Você não precisa passar por isso sozinho.</strong> Aqui você encontra orientação real, sem cobranças, enrolação ou falsas promessas.',
      '<strong>Nosso diferencial é o cuidado.</strong> Desde o primeiro contato até depois da sua aprovação, estamos por perto para te apoiar, explicar e celebrar.',
    ],
    proofTitle: 'Quem já passou\npor aqui sabe:',
    proofBody: 'Já ajudamos <strong>mais de 500 brasileiros</strong> a conquistarem suas vagas e transformarem suas histórias.',
    proofNote: 'E a próxima pode ser a sua.',
    whatsappBtn: 'Iniciar conversa no WhatsApp',
    reviewsTitle: 'O que estão falando de nós?',
  },
  en: {
    heroSubtitle: 'A real story. A simple mission:',
    heroTitle: 'Make your journey easier.',
    story: [
      'Make It Easy USA was born from the experience of someone who has been exactly where you are right now: full of questions, dreams, and a desire to study in the United States, but not knowing where to start.',
      'Our founder, <strong>Giovanna</strong>, came to the U.S. as an Au Pair, looking for new opportunities. While going through her own transition to a student visa, she faced all the challenges of the process alone: researching universities, dealing with bureaucracy, gathering documents, translations, tests, and that constant feeling of being one step away from making a mistake. But she didn\'t give up.',
      'After being accepted and studying at an American university, Giovanna began working within the institution itself, gaining an even deeper understanding of how the system works and how <strong>it can be more accessible and less confusing</strong> with the right guidance.',
      'That\'s how Make It Easy USA was born: a free, practical, and welcoming advisory service built by someone who has been through the process and <strong>decided to turn their own experience into a bridge for others</strong>.',
    ],
    valuesTitle: 'What we\nbelieve in',
    values: [
      '<strong>Studying abroad should be possible and affordable,</strong> not just for those who can spend $50,000 a year.',
      '<strong>You don\'t have to go through this alone.</strong> Here you\'ll find real guidance, no hidden fees, no runaround, no false promises.',
      '<strong>Our difference is care.</strong> From your very first contact to after your acceptance, we\'re here to support you, explain every step, and celebrate with you.',
    ],
    proofTitle: 'Those who\'ve\nbeen through it know:',
    proofBody: 'We\'ve helped <strong>over 500 Brazilians</strong> secure their spots and transform their stories.',
    proofNote: 'And the next one could be yours.',
    whatsappBtn: 'Start a conversation on WhatsApp',
    reviewsTitle: 'What our students are saying',
  },
};

export default function SobrePage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src="/images/hero-sobre-correta.png" alt="" width={1920} height={800} className={styles.heroBgImg} priority />
        <div className={styles.heroInner}>
          <p className={styles.heroSubtitle}>{t.heroSubtitle}</p>
          <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
        </div>
      </section>

      <div className={styles.pageGradient}>

        {/* HISTÓRIA */}
        <section className={styles.storySection} aria-labelledby="story-title">
          <div className="container">
            <div className={styles.storyGrid}>
              <ScrollReveal variant="fadeLeft">
                <div className={styles.storyText}>
                  {t.story.map((para, i) => (
                    <p key={i} className={styles.storyParagraph} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fadeRight" delay={200}>
                <div className={styles.storyPhotoWrap}>
                  <Image src="/images/foto.avif" alt="Giovanna, fundadora da Make It Easy USA" fill className={styles.storyPhoto} sizes="(max-width: 1024px) 360px, 420px" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className={styles.valuesSection} aria-labelledby="values-title">
          <div className="container">
            <div className={styles.valuesGrid}>
              <ScrollReveal variant="fadeUp">
                <h2 className={styles.valuesTitle} id="values-title">
                  {t.valuesTitle.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={200}>
                <ul className={styles.valuesList}>
                  {t.values.map((val, i) => (
                    <li key={i} className={styles.valuesItem}>
                      <span className={styles.valuesBullet} aria-hidden="true" />
                      <p className={styles.valuesItemText} dangerouslySetInnerHTML={{ __html: val }} />
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className={styles.proofSection} aria-labelledby="proof-title">
          <div className="container">
            <div className={styles.proofGrid}>
              <ScrollReveal variant="fadeLeft">
                <div className={styles.proofMapWrap}>
                  <MapaUSA />
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fadeRight" delay={200}>
                <div className={styles.proofContent}>
                  <h2 className={styles.proofTitle} id="proof-title">
                    {t.proofTitle.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </h2>
                  <p className={styles.proofBody} dangerouslySetInnerHTML={{ __html: t.proofBody }} />
                  <p className={styles.proofNote}>{t.proofNote}</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                    target="_blank" rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                    aria-label={t.whatsappBtn}
                  >
                    {t.whatsappBtn}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <ReviewsCarousel
          reviews={reviews}
          title={t.reviewsTitle}
          googleLink="https://www.google.com/maps/place/Make+It+Easy+USA/@38.4017657,-171.152481,3z/data=!4m8!3m7!1s0xa2174742d14909b5:0x48e8c97ce75b332!8m2!3d46.423669!4d-129.9427086!9m1!1b1!16s%2Fg%2F11ld37ffv4?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D"
          score="5.0"
        />

      </div>
    </main>
  );
}
