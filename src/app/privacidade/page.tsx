'use client';

import styles from './page.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: abril de 2025',
    sections: [
      { title: '1. Quem somos', body: 'A <strong>Make It Easy USA</strong> é uma assessoria educacional gratuita que auxilia brasileiros a ingressar em universidades nos Estados Unidos. Nosso site é <a href="https://makeiteasyusa.com">makeiteasyusa.com</a>.' },
      { title: '2. Quais dados coletamos', body: 'Podemos coletar as seguintes informações quando você utiliza nosso site ou entra em contato conosco:', list: ['Nome completo', 'Endereço de e-mail', 'Número de telefone / WhatsApp', 'Informações sobre seu perfil acadêmico e objetivos educacionais', 'Dados de navegação (via cookies e ferramentas de análise)'] },
      { title: '3. Como usamos seus dados', body: 'Utilizamos suas informações para:', list: ['Entrar em contato para prestar a assessoria solicitada;', 'Enviar materiais e guias relacionados ao processo de aplicação;', 'Melhorar nossos serviços e comunicações;', 'Cumprir obrigações legais.'], bodyAfter: 'Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.' },
      { title: '4. Cookies', body: 'Nosso site pode utilizar cookies para melhorar sua experiência de navegação e analisar o tráfego. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.' },
      { title: '5. Seus direitos', body: 'Você tem o direito de:', list: ['Acessar os dados que temos sobre você;', 'Solicitar a correção de dados incorretos;', 'Solicitar a exclusão dos seus dados;', 'Revogar seu consentimento a qualquer momento.'], bodyAfter: 'Para exercer esses direitos, entre em contato pelo WhatsApp ou e-mail disponíveis no site.' },
      { title: '6. Segurança', body: 'Adotamos medidas razoáveis para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.' },
      { title: '7. Alterações nesta política', body: 'Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer mudanças serão publicadas nesta página com a data de atualização revisada.' },
      { title: '8. Contato', body: 'Em caso de dúvidas sobre esta política, entre em contato conosco pelo WhatsApp ou pela página de <a href="/contato">Contato</a>.' },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: April 2025',
    sections: [
      { title: '1. Who we are', body: '<strong>Make It Easy USA</strong> is a free educational advisory service that helps Brazilians enroll in universities in the United States. Our website is <a href="https://makeiteasyusa.com">makeiteasyusa.com</a>.' },
      { title: '2. What data we collect', body: 'We may collect the following information when you use our site or contact us:', list: ['Full name', 'Email address', 'Phone number / WhatsApp', 'Information about your academic profile and educational goals', 'Browsing data (via cookies and analytics tools)'] },
      { title: '3. How we use your data', body: 'We use your information to:', list: ['Contact you to provide the requested advisory services;', 'Send materials and guides related to the application process;', 'Improve our services and communications;', 'Comply with legal obligations.'], bodyAfter: 'We do not sell, rent, or share your data with third parties for commercial purposes.' },
      { title: '4. Cookies', body: 'Our site may use cookies to improve your browsing experience and analyze traffic. You can disable cookies in your browser settings, but this may affect some site functionality.' },
      { title: '5. Your rights', body: 'You have the right to:', list: ['Access the data we hold about you;', 'Request the correction of inaccurate data;', 'Request the deletion of your data;', 'Withdraw your consent at any time.'], bodyAfter: 'To exercise these rights, please contact us via WhatsApp or email as listed on the site.' },
      { title: '6. Security', body: 'We take reasonable measures to protect your information against unauthorized access, alteration, disclosure, or destruction.' },
      { title: '7. Changes to this policy', body: 'We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised update date.' },
      { title: '8. Contact', body: 'If you have questions about this policy, please contact us via WhatsApp or through the <a href="/contato">Contact</a> page.' },
    ],
  },
};

export default function PrivacidadePage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.updated}>{t.updated}</p>
        {t.sections.map((s) => (
          <section key={s.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{s.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: s.body }} />
            {s.list && (
              <ul className={styles.list}>
                {s.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {s.bodyAfter && <p>{s.bodyAfter}</p>}
          </section>
        ))}
      </div>
    </main>
  );
}
