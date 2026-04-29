import styles from './page.module.css';

export const metadata = {
  title: 'Política de Privacidade | Make It Easy USA',
  description: 'Saiba como a Make It Easy USA coleta, usa e protege seus dados pessoais.',
};

export default function PrivacidadePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.updated}>Última atualização: abril de 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Quem somos</h2>
          <p>A <strong>Make It Easy USA</strong> é uma assessoria educacional gratuita que auxilia brasileiros a ingressar em universidades nos Estados Unidos. Nosso site é <a href="https://makeiteasyusa.com" className={styles.link}>makeiteasyusa.com</a>.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Quais dados coletamos</h2>
          <p>Podemos coletar as seguintes informações quando você utiliza nosso site ou entra em contato conosco:</p>
          <ul className={styles.list}>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone / WhatsApp</li>
            <li>Informações sobre seu perfil acadêmico e objetivos educacionais</li>
            <li>Dados de navegação (via cookies e ferramentas de análise)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Como usamos seus dados</h2>
          <p>Utilizamos suas informações para:</p>
          <ul className={styles.list}>
            <li>Entrar em contato para prestar a assessoria solicitada;</li>
            <li>Enviar materiais e guias relacionados ao processo de aplicação;</li>
            <li>Melhorar nossos serviços e comunicações;</li>
            <li>Cumprir obrigações legais.</li>
          </ul>
          <p>Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Cookies</h2>
          <p>Nosso site pode utilizar cookies para melhorar sua experiência de navegação e analisar o tráfego. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Seus direitos</h2>
          <p>Você tem o direito de:</p>
          <ul className={styles.list}>
            <li>Acessar os dados que temos sobre você;</li>
            <li>Solicitar a correção de dados incorretos;</li>
            <li>Solicitar a exclusão dos seus dados;</li>
            <li>Revogar seu consentimento a qualquer momento.</li>
          </ul>
          <p>Para exercer esses direitos, entre em contato pelo WhatsApp ou e-mail disponíveis no site.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Segurança</h2>
          <p>Adotamos medidas razoáveis para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Alterações nesta política</h2>
          <p>Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer mudanças serão publicadas nesta página com a data de atualização revisada.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contato</h2>
          <p>Em caso de dúvidas sobre esta política, entre em contato conosco pelo WhatsApp ou pela página de <a href="/contato" className={styles.link}>Contato</a>.</p>
        </section>
      </div>
    </main>
  );
}
