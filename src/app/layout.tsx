import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Make It Easy USA — Assessoria Educacional para Brasileiros',
  description: 'Assessoria gratuita e humanizada para brasileiros que desejam estudar nos EUA. Orientação personalizada, parcerias universitárias e opções acessíveis.',
  keywords: 'estudar nos EUA, assessoria educacional, brasileiros nos EUA, universidades americanas, visto estudante',
  openGraph: {
    title: 'Make It Easy USA',
    description: 'Assessoria gratuita para brasileiros que querem estudar nos EUA.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
