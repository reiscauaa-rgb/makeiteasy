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
    text: 'A gente começa entendendo sua realidade, seus objetivos e o que você espera de um curso nos EUA. Avaliamos se temos universidades parceiras que combinem com o seu momento de vida, o seu orçamento e o seu formato ideal de estudos (online, híbrido, flexível).',
    image: '/images/serviço 1.avif',
  },
  {
    title: '2- Apresentação de opções reais e acessíveis',
    text: 'Nada de ilusões ou ofertas genéricas: só mostramos universidades que realmente têm vagas e condições que se encaixam no seu perfil, com mensalidades a partir de US$ 7.000/ano, formatos híbridos (pra quem quer estudar e trabalhar) e sem necessidade de estar 100% presencial.',
    image: '/images/serviço 2.avif',
  },
  {
    title: '3- Envio do manual completo em português',
    text: 'Se você gostar de alguma das opções, enviamos um guia prático e em português com o passo a passo para aplicar com Lista de documentos, Datas e prazos, Orientações de tradução, Testes de proficiência e Avaliação do diploma brasileiro.',
    image: '/images/serviço 3.avif',
  },
  {
    title: '4- Acompanhamento individual',
    text: 'Nossa equipe acompanha cada etapa com você, do primeiro formulário até a emissão do I-20 (documento da universidade para o visto).Estamos aqui para tirar dúvidas, revisar documentos, orientar traduções, validar testes e te apoiar de verdade.',
    image: '/images/serviço 4.avif',
  },
  {
    title: '5- Conexão com especialistas parceiros',
    text: 'Caso precise de suporte com visto de estudante ou troca de status, indicamos profissionais parceiros especializados no assunto, com experiência em processos migratórios para os EUA.',
    image: '/images/serviço 5.avif',
  },
  {
    title: '6- Suporte pós-aprovação',
    text: 'Mesmo depois que você for aprovado, seguimos por perto. Se surgir alguma dúvida sobre matrícula, aulas ou o funcionamento da universidade, pode contar com a gente. Nosso compromisso vai além do "ok, você foi aceito".',
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
              Serviços de Assessoria
            </h1>
            <p className={styles.heroSubtitle}>
              Na prática, o que oferecemos é <strong>uma assessoria gratuita e completa</strong> para brasileiros que sonham em estudar nos EUA, mas sem as complicações, custos abusivos ou promessas vazias. Abaixo, explicamos os principais pontos do nosso serviço:
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
          </ScrollReveal>
          <ScrollReveal variant="fadeRight" delay={200}>
            <div className={styles.finalRight}>
              <p className={styles.finalText}>
                Nosso serviço é 100% gratuito porque é financiado pelas universidades parceiras. Você nunca será cobrado por atendimento, orientação ou apoio. Aqui, tudo é feito com transparência, cuidado e propósito.
              </p>
              <KommoForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
