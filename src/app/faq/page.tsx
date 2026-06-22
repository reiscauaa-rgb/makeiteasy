'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    heroTitle: 'Perguntas\nFrequentes',
    ctaText: 'Ficou com alguma dúvida?',
    ctaBtn: 'Entre em contato com a gente',
    faqs: [
      { q: '1. O que é a Make It Easy USA e como ajudamos você a se tornar um estudante internacional nos EUA?', a: 'Somos uma assessoria gratuita que orienta em todo o processo de estudar em universidades parceiras nos EUA. Ajudamos desde a escolha do curso até o início das aulas, com suporte em português e inglês e acompanhamento individual.' },
      { q: '2. Como funciona o atendimento de vocês durante o processo?', a: 'Nosso atendimento é 100% pelo WhatsApp. Você pode enviar áudios ou mensagens com suas dúvidas, e vamos respondendo ao longo do processo. Mantemos tudo registrado para que você possa consultar as informações sempre que precisar.' },
      { q: '3. O serviço de vocês é realmente gratuito?', a: 'Sim! Nossa assessoria é gratuita. Trabalhamos em parceria com universidades, o que permite oferecer todo o suporte sem custo para você.' },
      { q: '4. Preciso ter inglês fluente para aplicar?', a: 'Não. Você não precisa ser fluente, mas será necessário comprovar um nível mínimo de inglês por meio de exames como TOEFL, IELTS ou Duolingo English Test. A pontuação exigida varia de acordo com a universidade.' },
      { q: '5. Vocês ajudam com o visto estudantil?', a: 'Não realizamos processos imigratórios, mas contamos com parceiros especializados que podem orientar sobre o visto F-1 e troca de status. Valores são definidos diretamente com o parceiro.' },
      { q: '6. Quais documentos preciso preparar para aplicar?', a: 'Os documentos variam conforme a universidade, mas geralmente incluem histórico escolar, diploma e comprovação financeira. Nossa equipe orienta você em cada etapa do processo.' },
      { q: '7. Quanto tempo leva o processo de aplicação?', a: 'O prazo depende de quanto tempo você leva para reunir e enviar os documentos. Após a aplicação, as universidades normalmente levam de 2 a 6 semanas para analisar. Por isso, recomendamos iniciar o processo com pelo menos 3 meses de antecedência, para que você tenha tempo de se organizar, receber a resposta da universidade e planejar os próximos passos.' },
      { q: '8. Preciso pagar alguma taxa para a universidade?', a: 'Algumas universidades cobram taxa de inscrição ("application fee"), mas oferecemos descontos de até $75 em várias parcerias.' },
      { q: '9. Posso trabalhar enquanto estudo nos EUA?', a: 'Com o visto F-1, é possível trabalhar no campus durante os estudos. Além disso, muitas universidades oferecem oportunidades práticas relacionadas ao curso ao longo do programa (CPT), conforme regras e elegibilidade do aluno.' },
      { q: '10. Como funciona o primeiro passo com a Make It Easy USA?', a: 'Você nos conta o que está buscando e analisamos juntos se temos uma universidade parceira que combina com seu perfil, seu objetivo e seu bolso. É uma conversa simples, sem compromisso.' },
      { q: '11. Quais opções de universidades vocês apresentam?', a: 'Trabalhamos com universidades acessíveis, com cronogramas de aulas mais flexíveis e possibilidade de colocar em prática, no mercado de trabalho, o que é aprendido em sala (CPT), conforme regras e elegibilidade.' },
      { q: '12. Posso aplicar estando fora dos EUA?', a: 'Sim. Você pode iniciar o processo de aplicação de qualquer lugar.' },
      { q: '13. Vocês garantem aprovação na universidade?', a: 'Não. A decisão final é da universidade. A aprovação é discricionária, mas nós orientamos você para apresentar a melhor aplicação possível.' },
    ],
  },
  en: {
    heroTitle: 'Frequently\nAsked Questions',
    ctaText: 'Still have questions?',
    ctaBtn: 'Get in touch with us',
    faqs: [
      { q: '1. What is Make It Easy USA and how do we help you become an international student in the U.S.?', a: 'We are a free advisory service that guides you through the entire process of studying at partner universities in the U.S. We help from choosing a program all the way to your first day of classes, with support in both Portuguese and English and personalized guidance.' },
      { q: '2. How does your support work during the process?', a: 'Our support is 100% via WhatsApp. You can send voice messages or texts with your questions, and we\'ll respond throughout the process. We keep everything on record so you can refer back to the information whenever you need it.' },
      { q: '3. Is your service really free?', a: 'Yes! Our advisory service is free. We work in partnership with universities, which allows us to offer full support at no cost to you.' },
      { q: '4. Do I need to be fluent in English to apply?', a: 'No. You don\'t need to be fluent, but you will need to demonstrate a minimum English level through exams such as TOEFL, IELTS, or the Duolingo English Test. The required score varies by university.' },
      { q: '5. Do you help with the student visa?', a: 'We don\'t handle immigration processes, but we work with specialized partners who can guide you through the F-1 visa and status change. Fees are arranged directly with the partner.' },
      { q: '6. What documents do I need to prepare to apply?', a: 'Documents vary by university, but generally include academic transcripts, a diploma, and proof of financial support. Our team will guide you through each step of the process.' },
      { q: '7. How long does the application process take?', a: 'The timeline depends on how quickly you gather and submit your documents. After applying, universities typically take 2 to 6 weeks to process. We recommend starting at least 3 months in advance to give yourself enough time.' },
      { q: '8. Do I need to pay any fees to the university?', a: 'Some universities charge an application fee, but we offer discounts of up to $75 at several of our partner institutions.' },
      { q: '9. Can I work while studying in the U.S.?', a: 'With an F-1 visa, you can work on campus during your studies. Many universities also offer practical work opportunities related to your field throughout the program (CPT), subject to eligibility rules.' },
      { q: '10. What\'s the first step with Make It Easy USA?', a: 'You tell us what you\'re looking for, and we\'ll explore together whether we have a partner university that fits your profile, your goals, and your budget. It\'s a simple, no-commitment conversation.' },
      { q: '11. What university options do you offer?', a: 'We work with affordable universities that offer more flexible class schedules and the opportunity to apply what you learn in the classroom directly to the job market (CPT), subject to eligibility.' },
      { q: '12. Can I apply from outside the U.S.?', a: 'Yes. You can start the application process from anywhere.' },
      { q: '13. Do you guarantee admission to a university?', a: 'No. The final decision belongs to the university. Admission is discretionary, but we guide you to put together the strongest application possible.' },
    ],
  },
};

function FaqItem({ q, a }: { q: string; a: string }) {
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
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main>
      {/* HERO */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroBlob}>
          <Image src="/images/hero sobre.avif" alt="" fill className={styles.heroBgImg} priority />
          <div className={styles.heroBlobInner}>
            <h1 className={styles.heroTitle}>
              {t.heroTitle.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* FAQ BODY */}
      <div className={styles.pageBody}>
        <div className="container">
          <div className={styles.blockA}>
            <ScrollReveal variant="fadeLeft">
              <div className={styles.photoWrap}>
                <Image src="/images/foto faq 1.avif" alt="Estudante de formatura" fill className={styles.photo} sizes="(max-width: 1024px) 400px, 50vw" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={200}>
              <ul className={styles.faqList}>
                {t.faqs.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className={styles.bottomCta}>
              <p className={styles.bottomCtaText}>{t.ctaText}</p>
              <a
                href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                target="_blank" rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                {t.ctaBtn}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
