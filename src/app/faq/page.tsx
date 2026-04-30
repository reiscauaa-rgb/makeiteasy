'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const allFaqs = [
  {
    q: '1. O que é a Make It Easy USA e como ajudamos você a se tornar um estudante internacional nos EUA?',
    a: 'Somos uma assessoria gratuita que orienta em todo o processo de estudar em universidades parceiras nos EUA. Ajudamos desde a escolha do curso até o início das aulas, com suporte em português e inglês e acompanhamento individual.',
  },
  {
    q: '2. Como funciona o atendimento de vocês durante o processo?',
    a: 'Nosso atendimento é 100% pelo WhatsApp. Você pode enviar áudios ou mensagens com suas dúvidas, e vamos respondendo ao longo do processo. Mantemos tudo registrado para que você possa consultar as informações sempre que precisar.',
  },
  {
    q: '3. O serviço de vocês é realmente gratuito?',
    a: 'Sim! Nossa assessoria é gratuita. Trabalhamos em parceria com universidades, o que permite oferecer todo o suporte sem custo para você.',
  },
  {
    q: '4. Preciso ter inglês fluente para aplicar?',
    a: 'Não. Você não precisa ser fluente, mas será necessário comprovar um nível mínimo de inglês por meio de exames como TOEFL, IELTS ou Duolingo English Test. A pontuação exigida varia de acordo com a universidade.',
  },
  {
    q: '5. Vocês ajudam com o visto estudantil?',
    a: 'Não realizamos processos imigratórios, mas contamos com parceiros especializados que podem orientar sobre o visto F-1 e troca de status. Valores são definidos diretamente com o parceiro.',
  },
  {
    q: '6. Quais documentos preciso preparar para aplicar?',
    a: 'Os documentos variam conforme a universidade, mas geralmente incluem histórico escolar, diploma e comprovação financeira. Nossa equipe orienta você em cada etapa do processo.',
  },
  {
    q: '7. Quanto tempo leva o processo de aplicação?',
    a: 'O prazo depende de quanto tempo você leva para reunir e enviar os documentos. Após a aplicação, as universidades normalmente levam de 2 a 6 semanas para analisar. Por isso, recomendamos iniciar o processo com pelo menos 3 meses de antecedência, para que você tenha tempo de se organizar, receber a resposta da universidade e planejar os próximos passos.',
  },
  {
    q: '8. Preciso pagar alguma taxa para a universidade?',
    a: 'Algumas universidades cobram taxa de inscrição ("application fee"), mas oferecemos descontos de até $75 em várias parcerias.',
  },
  {
    q: '9. Posso trabalhar enquanto estudo nos EUA?',
    a: 'Com o visto F-1, é possível trabalhar no campus durante os estudos. Além disso, muitas universidades oferecem oportunidades práticas relacionadas ao curso ao longo do programa (CPT), conforme regras e elegibilidade do aluno.',
  },
  {
    q: '10. Como funciona o primeiro passo com a Make It Easy USA?',
    a: 'Você nos conta o que está buscando e analisamos juntos se temos uma universidade parceira que combina com seu perfil, seu objetivo e seu bolso. É uma conversa simples, sem compromisso.',
  },
  {
    q: '11. Quais opções de universidades vocês apresentam?',
    a: 'Trabalhamos com universidades acessíveis, com cronogramas de aulas mais flexíveis e possibilidade de colocar em prática, no mercado de trabalho, o que é aprendido em sala (CPT), conforme regras e elegibilidade.',
  },
  {
    q: '12. Posso aplicar estando fora dos EUA?',
    a: 'Sim. Você pode iniciar o processo de aplicação de qualquer lugar.',
  },
  {
    q: '13. Vocês garantem aprovação na universidade?',
    a: 'Não. A decisão final é da universidade. A aprovação é discricionária, mas nós orientamos você para apresentar a melhor aplicação possível.',
  }
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

          {/* Foto + lista de perguntas lado a lado */}
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
                {allFaqs.map((item) => (
                  <FaqItemComponent key={item.q} q={item.q} a={item.a} />
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className={styles.bottomCta}>
              <p className={styles.bottomCtaText}>Ficou com alguma dúvida?</p>
              <a
                href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                Entre em contato com a gente
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>

    </main>
  );
}
