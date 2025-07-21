import "./index.css";

export default function ServicosSection() {
   const servicos = [
      {
         icon: "🖥️",
         titulo: "Sites Profissionais",
         descricao:
            "Sites institucionais rápidos, bonitos e personalizados para sua empresa",
      },
      {
         icon: "📱",
         titulo: "Landing Pages",
         descricao:
            "Páginas para divulgar produtos, eventos ou serviços com foco em conversão",
      },
      {
         icon: "🛒",
         titulo: "E-commerce",
         descricao: "Lojas virtuais completas para vender seus produtos online",
      },
      {
         icon: "🔧",
         titulo: "Manutenção de Sites",
         descricao:
            "Ajustes, atualizações e suporte técnico contínuo para seu site",
      },
      {
         icon: "🧠",
         titulo: "Consultoria Digital",
         descricao:
            "Te ajudamos a planejar sua presença online e estratégias digitais",
      },
      {
         icon: "🚀",
         titulo: "Otimização SEO",
         descricao:
            "Melhore seu posicionamento no Google e aumente sua visibilidade",
      },
   ];

   return (
      <section className="servicos-section" id="servicos">
         <div className="interface">
            {/* Header da Seção */}
            <div className="section-header">
               <div className="section-badge">O que fazemos</div>
               <h2 className="section-title">Nossos Serviços</h2>
               <p className="section-subtitle">
                  Sites que conectam, vendem e representam sua marca com
                  qualidade.
               </p>
            </div>

            {/* Grid de Serviços */}
            <div className="servicos-grid">
               {servicos.map((servico, index) => (
                  <div key={index} className="servico-card">
                     <div className="servico-icon">
                        <span>{servico.icon}</span>
                     </div>
                     <h3 className="servico-titulo">{servico.titulo}</h3>
                     <p className="servico-descricao">{servico.descricao}</p>
                     <div className="servico-hover-effect"></div>
                  </div>
               ))}
            </div>

            {/* Call to Action */}
            <div className="cta-section">
               <h3 className="cta-title">Pronto para começar seu projeto?</h3>
               <p className="cta-subtitle">
                  Entre em contato e vamos transformar sua ideia em realidade
                  digital
               </p>
               <div className="cta-buttons">
                  <button className="btn btn-primary">
                     Solicitar Orçamento
                  </button>
                  <button className="btn btn-secondary">Ver Portfólio</button>
               </div>
            </div>
         </div>
      </section>
   );
}
