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
      {/* ════════════════════════════════════
          HERO — Roxo full-screen + curva branca
          ════════════════════════════════════ */}
      <section className={styles.hero} aria-labelledby="contato-title">
        {/* Background image — same as Sobre page */}
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

          {/* Imagem flutuante à esquerda */}
          <div className={styles.heroImageWrap}>
            <Image
              src="/images/hero contato flutuante.avif"
              alt="Ícone de contato"
              width={300}
              height={300}
              className={styles.heroImage}
              priority
            />
          </div>

          {/* Título + CTA */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} id="contato-title">
              Quer saber como podemos<br />
              te ajudar nesse processo?
            </h1>

            <div className={styles.heroActions}>
              <KommoForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
