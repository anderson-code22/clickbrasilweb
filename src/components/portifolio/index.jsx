import './index.css';

export default function PortfolioSection() {
   const projetos = [
      {
         icon: "🔒",
         status: "EM BREVE",
         titulo: "E-commerce Premium",
         descricao:
            "Loja virtual completa com sistema de pagamento integrado e design moderno.",
         categoria: "E-commerce",
         statusColor: "#FFB300",
      },
      {
         icon: "🧱",
         status: "EM DESENVOLVIMENTO",
         titulo: "Site Institucional",
         descricao:
            "Portal corporativo com identidade visual única e sistema de gestão de conteúdo.",
         categoria: "Site Institucional",
         statusColor: "#00C853",
      },
      {
         icon: "🔒",
         status: "EM BREVE",
         titulo: "Landing Page Conversão",
         descricao:
            "Página de alta conversão para lançamento de produto digital inovador.",
         categoria: "Landing Page",
         statusColor: "#FFB300",
      },
      {
         icon: "⚙️",
         status: "CONFIDENCIAL",
         titulo: "Plataforma SaaS",
         descricao:
            "Sistema web completo para gestão empresarial com dashboard interativo.",
         categoria: "Aplicação Web",
         statusColor: "#1A237E",
      },
      {
         icon: "🔒",
         status: "EM BREVE",
         titulo: "Portfólio Criativo",
         descricao:
            "Site portfólio com animações avançadas e galeria interativa de projetos.",
         categoria: "Portfólio",
         statusColor: "#FFB300",
      },
      {
         icon: "🧱",
         status: "EM DESENVOLVIMENTO",
         titulo: "Marketplace Local",
         descricao:
            "Plataforma de vendas online conectando empresas locais aos consumidores.",
         categoria: "Marketplace",
         statusColor: "#00C853",
      },
   ];

   return (
      <section className="portfolio-section" id='portfolio'>
         <div className="interface">
            {/* Header da Seção */}
            <div className="section-header">
               <div className="section-badge">Portfólio</div>
               <h2 className="section-title">O que estamos criando</h2>
               <p className="section-subtitle">
                  Em breve, aqui estarão sites que colocam nossos clientes no
                  topo.
               </p>
            </div>

            {/* Banner Central */}
            <div className="banner-central">
               <div className="banner-content">
                  <h3 className="banner-title">
                     🚀 Projetos Incríveis em Andamento
                  </h3>
                  <p className="banner-text">
                     Estamos trabalhando em projetos incríveis para pequenas
                     empresas, criadores e marcas que querem dominar o digital.
                     <br />
                     <strong>Fique ligado. Em breve, eles estarão aqui.</strong>
                  </p>
                  <button className="btn-notify">
                     <span className="btn-icon">🔔</span>
                     Fique sabendo primeiro
                  </button>
               </div>
               <div className="banner-decoration">
                  <div className="floating-icon">💻</div>
                  <div className="floating-icon">🎨</div>
                  <div className="floating-icon">📱</div>
               </div>
            </div>

            {/* Grid de Projetos */}
            <div className="projetos-grid">
               {projetos.map((projeto, index) => (
                  <div key={index} className="projeto-card">
                     <div className="projeto-header">
                        <div className="projeto-icon">{projeto.icon}</div>
                        <div
                           className="projeto-status"
                           style={{ color: projeto.statusColor }}
                        >
                           {projeto.status}
                        </div>
                     </div>

                     <div className="projeto-categoria">
                        {projeto.categoria}
                     </div>
                     <h3 className="projeto-titulo">{projeto.titulo}</h3>
                     <p className="projeto-descricao">{projeto.descricao}</p>

                     <div className="projeto-progress">
                        <div className="progress-bar">
                           <div
                              className="progress-fill"
                              style={{
                                 width:
                                    projeto.status === "EM DESENVOLVIMENTO"
                                       ? "75%"
                                       : projeto.status === "EM BREVE"
                                       ? "90%"
                                       : "60%",
                                 backgroundColor: projeto.statusColor,
                              }}
                           ></div>
                        </div>
                        <span className="progress-text">
                           {projeto.status === "EM DESENVOLVIMENTO"
                              ? "Desenvolvimento"
                              : projeto.status === "EM BREVE"
                              ? "Finalizando"
                              : "Planejamento"}
                        </span>
                     </div>

                     <div className="projeto-overlay">
                        <div className="overlay-content">
                           <span className="overlay-text">Em breve...</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Call to Action Final */}
            <div className="cta-final">
               <h3 className="cta-title">
                  Quer ser o próximo case de sucesso?
               </h3>
               <p className="cta-text">
                  Entre em contato e vamos criar algo incrível juntos
               </p>
               <div className="cta-buttons">
                  <button className="btn btn-primary">
                     Iniciar Meu Projeto
                  </button>
                  <button className="btn btn-secondary">Ver Processo</button>
               </div>
            </div>
         </div>
      </section>
   );
}
