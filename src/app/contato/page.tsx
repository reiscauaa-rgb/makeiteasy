import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './page.module.css';
import KommoForm from '@/components/KommoForm/KommoForm';

export const metadata: Metadata = {
  title: 'Contato | Make It Easy USA — Assessoria Educacional',
  description:
    'Entre em contato com a Make It Easy para obter suporte gratuito e humanizado na sua jornada de estudos nos EUA. Estamos aqui para ajudar você a realizar seu sonho de estudar fora.',
};

export default function ContatoPage() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="contato-title">
        {/* Background image */}
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

          {/* LEFT — Texto */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>Assessoria 100% gratuita</span>

            <h1 className={styles.heroTitle} id="contato-title">
              Quer saber como podemos<br />
              <span className={styles.heroHighlight}>te ajudar</span> nesse processo?
            </h1>

            <p className={styles.heroSubtitle}>
              Preencha o formulário e nossa equipe entrará em contato em breve para apresentar as melhores opções de universidades para o seu perfil.
            </p>

            <ul className={styles.benefitsList}>
              <li>✅ Atendimento em português</li>
              <li>✅ Assessoria sem custo algum</li>
              <li>✅ Do primeiro contato até o embarque</li>
            </ul>
          </div>

          {/* RIGHT — Formulário */}
          <div className={styles.formWrap}>
            <div className={styles.formCard}>
              <p className={styles.formCardTitle}>Fale com a gente</p>
              <KommoForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
