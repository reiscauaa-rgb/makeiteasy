import styles from '../privacidade/page.module.css';

export const metadata = {
  title: 'Termos de Uso | Make It Easy USA',
  description: 'Leia os Termos de Uso do site e serviços da Make It Easy USA.',
};

export default function TermosPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Termos de Uso</h1>
        <p className={styles.updated}>Última atualização: abril de 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Aceitação dos termos</h2>
          <p>Ao acessar e utilizar o site da <strong>Make It Easy USA</strong>, você concorda com estes Termos de Uso. Caso não concorde, pedimos que não utilize nossos serviços.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Sobre os serviços</h2>
          <p>A Make It Easy USA oferece assessoria educacional <strong>gratuita</strong> para brasileiros que desejam estudar nos Estados Unidos. Nossos serviços incluem:</p>
          <ul className={styles.list}>
            <li>Orientação sobre universidades parceiras;</li>
            <li>Envio de guias e materiais informativos;</li>
            <li>Acompanhamento do processo de aplicação;</li>
            <li>Conexão com especialistas parceiros quando necessário.</li>
          </ul>
          <p>Nossa assessoria é financiada pelas universidades parceiras. Você <strong>nunca será cobrado</strong> por atendimento, orientação ou apoio.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Uso do site</h2>
          <p>Você concorda em utilizar este site apenas para fins lícitos e de forma que não infrinja os direitos de terceiros. É proibido:</p>
          <ul className={styles.list}>
            <li>Utilizar o site para fins fraudulentos ou ilegais;</li>
            <li>Reproduzir, distribuir ou modificar o conteúdo sem autorização;</li>
            <li>Tentar acessar áreas restritas do sistema.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Propriedade intelectual</h2>
          <p>Todo o conteúdo disponível neste site — textos, imagens, logotipos e materiais — é de propriedade da Make It Easy USA ou de seus parceiros licenciados, e está protegido por lei. É vedada a reprodução sem autorização prévia e expressa.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Isenção de responsabilidade</h2>
          <p>A Make It Easy USA não se responsabiliza por:</p>
          <ul className={styles.list}>
            <li>Decisões das universidades sobre aprovação ou rejeição de aplicações;</li>
            <li>Resultados de processos de visto ou imigração;</li>
            <li>Informações fornecidas por terceiros ou parceiros.</li>
          </ul>
          <p>Nos esforçamos para manter as informações do site atualizadas e precisas, mas não garantimos a exatidão absoluta de todos os conteúdos.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Links externos</h2>
          <p>Nosso site pode conter links para sites externos. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Alterações nos termos</h2>
          <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor a partir da publicação nesta página.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contato</h2>
          <p>Em caso de dúvidas sobre estes termos, entre em contato conosco pela página de <a href="/contato" className={styles.link}>Contato</a> ou pelo WhatsApp.</p>
        </section>
      </div>
    </main>
  );
}
