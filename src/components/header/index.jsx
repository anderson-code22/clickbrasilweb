// import { useState } from "react";
import React, { useEffect, useState } from "react";
import "./index.css";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const isScrolled = window.scrollY > 0;
         setScrolled(isScrolled);
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup para evitar vazamentos de memória
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header className={scrolled ? 'header scrolled' : 'header'}>
         <div className="interface">
            <div className="logo">
               <p>C</p>
               <p>ClickBrasilWeb</p>
            </div>

            {/* Botão de menu mobile */}
            <button
               className="menu-toggle"
               onClick={() => setMenuOpen(!menuOpen)}
            >
               ☰
            </button>

            <div className={`header-right ${menuOpen ? "open" : ""}`}>
               <div className="menu">
                  <nav className="header-menu">
                     <ul>
                        <li>
                           <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                           <a href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfólio</a>
                        </li>
                        <li>
                           <a href="#contato">Contato</a>
                        </li>
                     </ul>
                  </nav>
               </div>

               <div className="header-button">
                  <button>Solicitar Orçamento</button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
