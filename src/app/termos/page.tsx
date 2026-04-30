'use client';

import styles from '../privacidade/page.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
  pt: {
    title: 'Termos de Uso',
    updated: 'Última atualização: abril de 2025',
    sections: [
      { title: '1. Aceitação dos termos', body: 'Ao acessar e utilizar o site da <strong>Make It Easy USA</strong>, você concorda com estes Termos de Uso. Caso não concorde, pedimos que não utilize nossos serviços.' },
      { title: '2. Sobre os serviços', body: 'A Make It Easy USA oferece assessoria educacional <strong>gratuita</strong> para brasileiros que desejam estudar nos Estados Unidos. Nossos serviços incluem:', list: ['Orientação sobre universidades parceiras;', 'Envio de guias e materiais informativos;', 'Acompanhamento do processo de aplicação;', 'Conexão com especialistas parceiros quando necessário.'], bodyAfter: 'Nossa assessoria é financiada pelas universidades parceiras. Você <strong>nunca será cobrado</strong> por atendimento, orientação ou apoio.' },
      { title: '3. Uso do site', body: 'Você concorda em utilizar este site apenas para fins lícitos e de forma que não infrinja os direitos de terceiros. É proibido:', list: ['Utilizar o site para fins fraudulentos ou ilegais;', 'Reproduzir, distribuir ou modificar o conteúdo sem autorização;', 'Tentar acessar áreas restritas do sistema.'] },
      { title: '4. Propriedade intelectual', body: 'Todo o conteúdo disponível neste site — textos, imagens, logotipos e materiais — é de propriedade da Make It Easy USA ou de seus parceiros licenciados, e está protegido por lei. É vedada a reprodução sem autorização prévia e expressa.' },
      { title: '5. Isenção de responsabilidade', body: 'A Make It Easy USA não se responsabiliza por:', list: ['Decisões das universidades sobre aprovação ou rejeição de aplicações;', 'Resultados de processos de visto ou imigração;', 'Informações fornecidas por terceiros ou parceiros.'], bodyAfter: 'Nos esforçamos para manter as informações do site atualizadas e precisas, mas não garantimos a exatidão absoluta de todos os conteúdos.' },
      { title: '6. Links externos', body: 'Nosso site pode conter links para sites externos. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.' },
      { title: '7. Alterações nos termos', body: 'Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor a partir da publicação nesta página.' },
      { title: '8. Contato', body: 'Em caso de dúvidas sobre estes termos, entre em contato conosco pela página de <a href="/contato">Contato</a> ou pelo WhatsApp.' },
    ],
  },
  en: {
    title: 'Terms of Use',
    updated: 'Last updated: April 2025',
    sections: [
      { title: '1. Acceptance of terms', body: 'By accessing and using the <strong>Make It Easy USA</strong> website, you agree to these Terms of Use. If you do not agree, please do not use our services.' },
      { title: '2. About our services', body: 'Make It Easy USA offers <strong>free</strong> educational advisory services for Brazilians who wish to study in the United States. Our services include:', list: ['Guidance on partner universities;', 'Delivery of informational guides and materials;', 'Support throughout the application process;', 'Connection with partner specialists when necessary.'], bodyAfter: 'Our advisory service is funded by partner universities. You will <strong>never be charged</strong> for consultations, guidance, or support.' },
      { title: '3. Use of the site', body: 'You agree to use this site only for lawful purposes and in a manner that does not infringe the rights of others. The following are prohibited:', list: ['Using the site for fraudulent or illegal purposes;', 'Reproducing, distributing, or modifying content without authorization;', 'Attempting to access restricted areas of the system.'] },
      { title: '4. Intellectual property', body: 'All content available on this site, texts, images, logos, and materials, is the property of Make It Easy USA or its licensed partners, and is protected by law. Reproduction without prior and express authorization is prohibited.' },
      { title: '5. Disclaimer', body: 'Make It Easy USA is not responsible for:', list: ['University decisions regarding application acceptance or rejection;', 'Outcomes of visa or immigration processes;', 'Information provided by third parties or partners.'], bodyAfter: 'We strive to keep the information on the site up to date and accurate, but we do not guarantee the absolute accuracy of all content.' },
      { title: '6. External links', body: 'Our site may contain links to external websites. We are not responsible for the content or privacy practices of those sites.' },
      { title: '7. Changes to terms', body: 'We reserve the right to modify these Terms of Use at any time. Changes take effect upon publication on this page.' },
      { title: '8. Contact', body: 'If you have questions about these terms, please contact us through the <a href="/contato">Contact</a> page or via WhatsApp.' },
    ],
  },
};

export default function TermosPage() {
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
                {s.list.map((item) => <li key={item} dangerouslySetInnerHTML={{ __html: item }} />)}
              </ul>
            )}
            {s.bodyAfter && <p dangerouslySetInnerHTML={{ __html: s.bodyAfter }} />}
          </section>
        ))}
      </div>
    </main>
  );
}
