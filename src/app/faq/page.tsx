'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const faqBlock1 = [
  {
    q: '1. O que é a Make It Easy USA e como ajudamos você a se tornar um estudante internacional nos EUA?',
    a: 'Somos uma assessoria gratuita que orienta em todo o processo de estudar em universidades parceiras nos EUA. Ajudamos desde a escolha do curso até o início das aulas, com suporte em português e acompanhamento individual.',
  },
  {
    q: '2. O serviço de vocês é realmente gratuito?',
    a: 'Sim! Nossa assessoria é totalmente gratuita. As universidades já possuem parceria conosco, então você não paga nada pelo nosso suporte.',
  },
  {
    q: '3. Preciso ter inglês fluente para aplicar?',
    a: 'Não necessariamente, mas é necessário comprovar um nível ao menos intermediário em um dos testes de proficiência em inglês como TOEFL, IELTS, Duolingo English Test e outros equivalentes.',
  },
  {
    q: '4. Vocês ajudam com o visto estudantil?',
    a: 'Sim, indicamos parceiros especializados que orientam sobre o processo de visto F1 e também sobre troca de status dentro dos EUA. Valores a conferir diretamente com parceiro*.',
  },
];

const faqBlock2 = [
  {
    q: '5. Quais documentos preciso preparar para aplicar?',
    a: 'Os documentos variam conforme a universidade, mas geralmente incluem histórico escolar, diploma, tradução e comprovação financeira. Nossa equipe orienta cada etapa.',
  },
  {
    q: '6. Quanto tempo leva o processo de aplicação?',
    a: 'Em média, de 2 a 6 semanas. O tempo depende da instituição e da época do ano. A Make It Easy USA acompanha tudo junto com você.',
  },
  {
    q: '7. Preciso pagar alguma taxa para a universidade?',
    a: 'Algumas universidades cobram taxa de inscrição ("application fee"), mas oferecemos descontos de até $75 em várias parcerias.',
  },
  {
    q: '8. Posso trabalhar enquanto estudo nos EUA?',
    a: 'Sim! Com o visto F1, é possível trabalhar dentro do campus durante os estudos e fora do campus em programas como CPT e OPT após certo tempo de estudo.',
  },
];

const faqBlock3 = [
  {
    q: '9. Como funciona o primeiro passo com a Make It Easy USA?',
    a: 'Você nos conta o que está buscando e analisamos juntos se temos uma universidade parceira que combina com seu perfil, seu objetivo e seu bolso. É uma conversa simples, sem compromisso.',
  },
  {
    q: '10. Quais opções de universidades vocês apresentam?',
    a: 'Apresentamos cursos reais, com mensalidades a partir de $7.000/ano e formato híbrido, para você poder estudar e trabalhar ao mesmo tempo nos EUA.',
  },
  {
    q: '11. O que recebo depois de escolher uma opção?',
    a: 'Enviamos um manual completo em português com todos os documentos necessários, prazos e o passo a passo para a aplicação na universidade escolhida.',
  },
  {
    q: '12. Como funciona o acompanhamento durante o processo?',
    a: 'Caminhamos com você em todo o processo: ajudando com dúvidas, documentos, traduções e, se precisar, indicamos especialistas em visto de estudante.',
  },
  {
    q: '13. O que acontece depois da aprovação?',
    a: 'Com o I-20 aprovado, você aplica para o visto e se prepara para embarcar. E mesmo depois de partir, seguimos disponíveis para te apoiar no que for preciso.',
  },
];

function FaqItemComponent({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`${styles.faqItem} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.faqHeader}>
        <p className={styles.faqQuestion}>{q}</p>
        <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
      </div>
      <div className={styles.faqBody}>
        <div className={styles.faqBodyInner}>
          <p className={styles.faqAnswer}>{a}</p>
        </div>
      </div>
    </li>
  );
}

export default function FAQPage() {
  return (
    <main>

      {/* ════════════════════════
          HERO — Blob roxo
          ════════════════════════ */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroBlob}>
          {/* Background image sutil */}
          <Image
            src="/images/hero sobre.avif"
            alt=""
            fill
            className={styles.heroBgImg}
            priority
          />

          <div className={styles.heroBlobInner}>
            {/* Título à esquerda */}
            <h1 className={styles.heroTitle}>
              Perguntas<br />Frequentes
            </h1>

            {/* Imagem flutuante à direita */}
            <Image
              src="/images/hero faq flutuante.avif"
              alt="Placa de perguntas frequentes"
              width={220}
              height={220}
              className={styles.heroFloatImg}
              priority
            />
          </div>
        </div>
      </div>

      {/* ════════════════════════
          FAQ BODY
          ════════════════════════ */}
      <div className={styles.pageBody}>
        <div className="container">

          {/* Bloco A — Foto esquerda, Q1-4 direita */}
          <div className={styles.blockA}>
            <ScrollReveal variant="fadeLeft">
              <div className={styles.photoWrap}>
                <Image
                  src="/images/foto faq 1.avif"
                  alt="Estudante de formatura"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 1024px) 400px, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={200}>
              <ul className={styles.faqList}>
                {faqBlock1.map((item) => (
                  <FaqItemComponent key={item.q} q={item.q} a={item.a} />
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Bloco B — Q5-8 esquerda, Foto direita */}
          <div className={styles.blockB}>
            <ScrollReveal variant="fadeLeft">
              <ul className={styles.faqList}>
                {faqBlock2.map((item) => (
                  <FaqItemComponent key={item.q} q={item.q} a={item.a} />
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={200}>
              <div className={styles.photoWrap}>
                <Image
                  src="/images/foto faq 2.avif"
                  alt="Campus universitário nos EUA"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 1024px) 400px, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className={styles.blockC}>
              <h2 className={styles.blockCTitle}>Como funciona o processo</h2>
              <ul className={styles.faqList}>
                {faqBlock3.map((item) => (
                  <FaqItemComponent key={item.q} q={item.q} a={item.a} />
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className={styles.bottomCta}>
              <p className={styles.bottomCtaText}>Ficou com alguma dúvida?</p>
              <a
                href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                Entre em contato pelo WhatsApp
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>

    </main>
  );
}
