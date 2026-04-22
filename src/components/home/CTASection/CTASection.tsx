'use client';

import styles from './CTASection.module.css';
import KommoForm from '@/components/KommoForm/KommoForm';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function CTASection() {
  return (
    <section className={styles.section} id="fale-conosco" aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>

        {/* ── Left: Text ── */}
        <ScrollReveal variant="fadeLeft">
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Dê o primeiro passo</span>

            <h2 className={styles.title} id="cta-title">
              Quer saber como podemos te{' '}
              <span>ajudar nesse processo?</span>
            </h2>

            <p className={styles.description}>
              Preencha o formulário ao lado e nossa equipe entra em contato em até 24 horas.
              O processo de orientação é 100% gratuito.
            </p>

            <a
              href="#fale-conosco"
              className={styles.whatsappBtn}
              aria-label="Preencher formulário de contato"
            >
              Preencher Formulário
            </a>

            {/* Social proof */}
            <div className={styles.socialProof} aria-label="Estatísticas">
              <div className={styles.proofItem}>
                <span className={styles.proofNumber}>300<span>+</span></span>
                <span className={styles.proofLabel}>Alunos assessorados</span>
              </div>
              <div className={styles.proofItem}>
                <span className={styles.proofNumber}><span>100</span>%</span>
                <span className={styles.proofLabel}>Gratuito</span>
              </div>
              <div className={styles.proofItem}>
                <span className={styles.proofNumber}>50<span>+</span></span>
                <span className={styles.proofLabel}>Universidades parceiras</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Right: Kommo Form (widget embed) ── */}
        <ScrollReveal variant="fadeRight" delay={300}>
          <div className={styles.formCol}>
            <KommoForm />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
