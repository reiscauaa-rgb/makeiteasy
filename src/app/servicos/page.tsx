'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import KommoForm from '@/components/KommoForm/KommoForm';

function ServiceCard({ title, text, image }: { title: string; text: string; image: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.card} ${open ? styles.cardOpen : ''}`} onClick={() => setOpen(!open)}>
      <div className={styles.cardImgWrap}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.cardImg}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
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

const servicesList = [
  {
    title: '1- Análise do seu perfil acadêmico e profissional',
    text: 'Começamos entendendo sua realidade, objetivos e o que você busca em um curso nos EUA. A partir disso, avaliamos opções que façam sentido para seu momento, orçamento e dentro do modelo híbrido.',
    image: '/images/serviço 1.avif',
  },
  {
    title: '2- Apresentação de opções reais e acessíveis',
    text: 'Te apresentamos universidades alinhadas ao seu perfil, com valores competitivos e oportunidades de colocar em prática, no mercado de trabalho, o que você aprende durante o curso.',
    image: '/images/serviço 2.avif',
  },
  {
    title: '3- Envio do manual completo em português',
    text: 'Se você gostar de alguma das opções, enviamos um guia prático com o passo a passo da aplicação, incluindo lista de documentos, prazos e instruções detalhadas de cada etapa.',
    image: '/images/serviço 3 novo.avif.png',
  },
  {
    title: '4- Acompanhamento individual',
    text: 'Nossa equipe acompanha cada etapa com você, do primeiro contato até a emissão do I-20 (documento da universidade para o visto). Estamos aqui para tirar dúvidas, revisar documentos e orientar você ao longo de todo o processo.',
    image: '/images/serviço 4.avif',
  },
  {
    title: '5- Conexão com especialistas parceiros',
    text: 'Se necessário, conectamos você a profissionais parceiros para visto de estudante, troca de status, traduções e equivalência de diploma.',
    image: '/images/serviço 5.avif',
  },
  {
    title: '6- Suporte pós-aprovação',
    text: 'Mesmo após a aprovação, permanecemos como ponto de apoio para dúvidas e orientações nos próximos passos.',
    image: '/images/serviço 6.avif',
  },
];

export default function ServicosPage() {
  return (
    <main>

      {/* ════════════════════════
          HERO
          ════════════════════════ */}
      <section className={styles.hero} aria-labelledby="services-title">
        {/* Fundo usando hero sobre.avif com visibilidade completa */}
        <div className={styles.heroBg}>
          <Image
            src="/images/hero sobre.avif"
            alt=""
            fill
            className={styles.heroBgImg}
            priority
          />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} id="services-title">
              Assessoria de aplicação
            </h1>
            <p className={styles.heroSubtitle}>
              Na prática, oferecemos uma assessoria gratuita e completa para quem quer estudar nos EUA, sem complicações, custos abusivos ou promessas irreais. Abaixo, explicamos os principais pontos do nosso serviço:
            </p>
          </div>

          <Image
            src="/images/hero flutuante serviços.avif"
            alt="Ícone flutuante serviços"
            width={220}
            height={220}
            className={styles.heroFloatImg}
            priority
          />
        </div>
      </section>

      {/* ════════════════════════
          SERVICES GRID
          ════════════════════════ */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {servicesList.map((service, idx) => (
              <ScrollReveal key={idx} variant="fadeUp" delay={idx * 150}>
                <ServiceCard title={service.title} text={service.text} image={service.image} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════
          FINAL SECTION
          ════════════════════════ */}
      <section className={styles.finalWrapper}>
        <div className={styles.divider}></div>
        <div className={styles.finalContent}>
          <ScrollReveal variant="fadeLeft">
            <h2 className={styles.finalTitle}>
              E o melhor:<br />você não paga<br />nada por isso
            </h2>
            <p className={styles.finalText}>
              Nosso serviço é 100% gratuito porque é financiado pelas universidades parceiras. Você nunca será cobrado por atendimento, orientação ou apoio. Aqui, tudo é feito com transparência, cuidado e propósito.
            </p>
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
