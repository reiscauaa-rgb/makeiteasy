'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import KommoForm from '@/components/KommoForm/KommoForm';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function ServiceCard({ title, text, image }: { title: string; text: string; image: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.card} ${open ? styles.cardOpen : ''}`} onClick={() => setOpen(!open)}>
      <div className={styles.cardImgWrap}>
        <Image src={image} alt={title} fill className={styles.cardImg} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <div className={styles.cardOverlay}>
          <span className={styles.cardToggleIcon}>{open ? '−' : '+'}</span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardBody}>
          <div className={styles.cardBodyInner}>
            <p className={styles.cardText}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const content = {
  pt: {
    heroTitle: 'Assessoria de aplicação',
    heroSubtitle: 'Na prática, oferecemos uma assessoria gratuita e completa para quem quer estudar nos EUA, sem complicações, custos abusivos ou promessas irreais. Abaixo, explicamos os principais pontos do nosso serviço:',
    finalTitle: 'E o melhor:\nvocê não paga\nnada por isso',
    finalText: 'Nosso serviço é financiado pelas universidades parceiras, por isso não há custo para você. Oferecemos suporte com transparência, clareza e foco no seu objetivo.',
    services: [
      { title: 'Análise do seu perfil acadêmico e profissional', text: 'Começamos entendendo sua realidade, objetivos e o que você busca em um curso nos EUA. A partir disso, avaliamos opções que façam sentido para seu momento, orçamento e dentro do modelo híbrido.', image: '/images/serviço 1.avif' },
      { title: 'Apresentação de opções reais e acessíveis', text: 'Te apresentamos universidades alinhadas ao seu perfil, com valores competitivos e oportunidades de colocar em prática, no mercado de trabalho, o que você aprende durante o curso.', image: '/images/serviço 2.avif' },
      { title: 'Envio do manual completo em português', text: 'Se você gostar de alguma das opções, enviamos um guia prático com o passo a passo da aplicação, incluindo lista de documentos, prazos e instruções detalhadas de cada etapa.', image: '/images/serviço 3 novo.avif.png' },
      { title: 'Acompanhamento individual', text: 'Nossa equipe acompanha cada etapa com você, do primeiro contato até a emissão do I-20. Estamos aqui para tirar dúvidas, revisar documentos e orientar você ao longo de todo o processo.', image: '/images/serviço 4.avif' },
      { title: 'Conexão com especialistas parceiros', text: 'Se necessário, conectamos você a profissionais parceiros para visto de estudante, troca de status, traduções e equivalência de diploma.', image: '/images/serviço 5.avif' },
      { title: 'Suporte pós-aprovação', text: 'Mesmo após a aprovação, permanecemos como ponto de apoio para dúvidas e orientações nos próximos passos.', image: '/images/serviço 6.avif' },
    ],
  },
  en: {
    heroTitle: 'Application Advisory',
    heroSubtitle: 'In practice, we offer a complete, free advisory service for those who want to study in the U.S. with no complications, no excessive fees, no unrealistic promises. Below, we explain the key points of our service:',
    finalTitle: 'And the best part:\nyou pay\nnothing for it',
    finalText: 'Our service is 100% free because it is funded by our partner universities. You will never be charged for consultations, guidance, or support. Everything here is done with transparency, care, and purpose.',
    services: [
      { title: 'Academic and professional profile assessment', text: 'We start by understanding your background, goals, and what you\'re looking for in a U.S. program. From there, we evaluate options that make sense for your situation, budget, and the hybrid learning model.', image: '/images/serviço 1.avif' },
      { title: 'Presentation of real and affordable options', text: 'We introduce you to universities that align with your profile, with competitive tuition and opportunities to gain real-world work experience related to your field of study.', image: '/images/serviço 2.avif' },
      { title: 'Complete step-by-step guide', text: 'If you like any of the options, we send you a practical step-by-step guide including the document checklist, deadlines, and detailed instructions for each stage of the application.', image: '/images/serviço 3 novo.avif.png' },
      { title: 'Individual support', text: 'Our team walks with you through every step from your first contact to the issuance of your I-20. We\'re here to answer your questions, review your documents, and guide you throughout the entire process.', image: '/images/serviço 4.avif' },
      { title: 'Connection with partner specialists', text: 'When needed, we connect you with partner professionals for student visa processing, status changes, translations, and diploma equivalency.', image: '/images/serviço 5.avif' },
      { title: 'Post-acceptance support', text: 'Even after your acceptance, we remain your point of support for questions and guidance on next steps.', image: '/images/serviço 6.avif' },
    ],
  },
};

export default function ServicosPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero} aria-labelledby="services-title">
        <div className={styles.heroBg}>
          <Image src="/images/hero sobre.avif" alt="" fill className={styles.heroBgImg} priority />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} id="services-title">{t.heroTitle}</h1>
            <p className={styles.heroSubtitle}>{t.heroSubtitle}</p>
          </div>
          <Image src="/images/hero flutuante serviços.avif" alt="" width={220} height={220} className={styles.heroFloatImg} priority />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {t.services.map((service, idx) => (
              <ScrollReveal key={idx} variant="fadeUp" delay={idx * 150}>
                <ServiceCard title={service.title} text={service.text} image={service.image} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className={styles.finalWrapper}>
        <div className={styles.divider}></div>
        <div className={styles.finalContent}>
          <ScrollReveal variant="fadeLeft">
            <h2 className={styles.finalTitle}>
              {t.finalTitle.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && <br />}</span>
              ))}
            </h2>
            <p className={styles.finalText}>{t.finalText}</p>
          </ScrollReveal>
          <ScrollReveal variant="fadeRight" delay={200}>
            <div className={styles.finalRight}>
              <KommoForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
