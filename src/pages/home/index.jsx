import React from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";
import SobreSection from "../../components/sobre";
import ServicosSection from "../../components/servicos";
import PortfolioSection from "../../components/portifolio";
import ContatoSection from "../../components/contato";
import "./index.css";

const Home = () => {
   return (
      <div>
         <Header />
         <Hero />
         <SobreSection />
         <ServicosSection />
         <PortfolioSection />
         <ContatoSection />
      </div>
   );
};

export default Home;
