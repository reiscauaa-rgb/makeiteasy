import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout/ConditionalLayout';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import Script from 'next/script';

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
  verification: {
    google: 'gfQlNxBcROxB22Z2VBjs65pibuqL6iNlWcTKFaxOKkg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SDP01HCGVK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SDP01HCGVK');
          `}
        </Script>

        <LanguageProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
