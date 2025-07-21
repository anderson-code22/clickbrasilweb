import './index.css';

function SobreSection() {
   return (
      <section className="about-section" id='sobre'>
         <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
         </div>

         <div className="interface">
            {/* Header da Seção */}
            <div className="section-header">
               <div className="section-badge">Sobre Nós</div>
               <h2 className="section-title">
                  Transformando Ideias em <br />
                  Realidade Digital
               </h2>
               <p className="section-subtitle">
                  Com anos de experiência em desenvolvimento web, criamos
                  soluções digitais que impulsionam o crescimento do seu
                  negócio.
               </p>
            </div>

            {/* Conteúdo Principal */}
            <div className="about-content">
               <div className="about-text">
                  <h3>Nossa Missão</h3>
                  <p>
                     Acreditamos que cada negócio merece uma{" "}
                     <span className="highlight-text">
                        presença digital excepcional
                     </span>
                     . Nossa missão é criar sites que não apenas impressionam
                     visualmente, mas também convertem visitantes em clientes.
                  </p>
                  <p>
                     Combinamos{" "}
                     <span className="highlight-text">design moderno</span>,
                     tecnologia de ponta e estratégias de conversão para
                     entregar resultados que superam expectativas. Cada projeto
                     é único e desenvolvido sob medida para suas necessidades
                     específicas.
                  </p>
                  <p>
                     Desde pequenos negócios locais até grandes empresas, já
                     ajudamos centenas de clientes a
                     <span className="highlight-text">
                        {" "}
                        dominar o mundo digital
                     </span>{" "}
                     com sites profissionais e eficazes.
                  </p>
               </div>

               <div className="about-image">
                  <div className="profile-card">
                     <div className="profile-avatar">👨‍💻</div>
                     <div className="profile-name">Anderson Gama</div>
                     <div className="profile-title">
                        Desenvolvedor Full-Stack
                     </div>

                     <div className="profile-stats">
                        <div className="stat">
                           <span className="stat-number">2+</span>
                           <span className="stat-label">Anos</span>
                        </div>
                        <div className="stat">
                           <span className="stat-number">3+</span>
                           <span className="stat-label">Projetos</span>
                        </div>
                        <div className="stat">
                           <span className="stat-number">98%</span>
                           <span className="stat-label">Satisfação</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Seção de Habilidades */}
            <div className="skills-section">
               <h3 className="skills-title">Tecnologias & Especialidades</h3>
               <div className="skills-grid">
                  <div className="skill-item">
                     <div className="skill-icon">💻</div>
                     <div className="skill-name">Desenvolvimento Web</div>
                     <div className="skill-description">
                        HTML5, CSS3, JavaScript, React
                     </div>
                  </div>
                  <div className="skill-item">
                     <div className="skill-icon">🎨</div>
                     <div className="skill-name">UI/UX Design</div>
                     <div className="skill-description">
                        Figma, Adobe XD, Prototipagem
                     </div>
                  </div>
                  <div className="skill-item">
                     <div className="skill-icon">📱</div>
                     <div className="skill-name">Design Responsivo</div>
                     <div className="skill-description">
                        Mobile-first, Cross-browser
                     </div>
                  </div>
                  <div className="skill-item">
                     <div className="skill-icon">🚀</div>
                     <div className="skill-name">Performance</div>
                     <div className="skill-description">
                        Otimização, SEO, Core Web Vitals
                     </div>
                  </div>
               </div>
            </div>

            {/* Valores */}
            <div className="values-section">
               <div className="value-card">
                  <div className="value-icon">⚡</div>
                  <h4 className="value-title">Agilidade</h4>
                  <p className="value-description">
                     Entregamos projetos no prazo, sem comprometer a qualidade.
                     Processos otimizados para máxima eficiência.
                  </p>
               </div>

               <div className="value-card">
                  <div className="value-icon">🎯</div>
                  <h4 className="value-title">Foco em Resultados</h4>
                  <p className="value-description">
                     Cada elemento é pensado para converter. Sites que geram
                     leads, vendas e crescimento real para seu negócio.
                  </p>
               </div>

               <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h4 className="value-title">Parceria</h4>
                  <p className="value-description">
                     Não somos apenas fornecedores, somos parceiros no seu
                     sucesso. Suporte contínuo e relacionamento duradouro.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default SobreSection;
