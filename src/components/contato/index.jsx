import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

export default function ContatoSection() {
   const [formData, setFormData] = useState({
      nome: "",
      email: "",
      mensagem: "",
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
         .send(
            "service_w3onx6q",          // ✅ Seu Service ID
            "template_yxx1qhd",        // ✅ Seu Template ID
            formData,
            "SLH3cdfJaoBd_ca4k"      // ⛔ Cole sua PUBLIC KEY aqui
         )
         .then(() => {
            alert("Mensagem enviada com sucesso!");
            setFormData({ nome: "", email: "", mensagem: "" });
         })
         .catch((error) => {
            alert("Erro ao enviar. Tente novamente.");
            console.error("Erro EmailJS:", error);
         });
   };

   const handleWhatsApp = () => {
      const message = encodeURIComponent(
         "Olá! Vim pelo site e gostaria de saber mais sobre criação de sites. Podemos conversar?"
      );
      window.open(`https://wa.me/5519996779283?text=${message}`, "_blank");
   };

   return (
      <section className="contato-section" id="contato">
         <div className="interface">
            <div className="section-header">
               <div className="section-badge">Contato</div>
               <h2 className="section-title">Fale com a gente</h2>
               <p className="section-subtitle">
                  Estamos prontos pra transformar sua ideia em um site incrível.
                  Manda um alô e vamos começar!
               </p>
            </div>

            <div className="contato-content">
               <div className="form-container">
                  <div className="form-header">
                     <h3 className="form-title">Solicite um orçamento</h3>
                     <p className="form-subtitle">
                        Preencha os campos abaixo e receba uma proposta personalizada
                     </p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                     <div className="form-group">
                        <label htmlFor="nome" className="form-label">Nome completo</label>
                        <input
                           type="text"
                           id="nome"
                           name="nome"
                           value={formData.nome}
                           onChange={handleInputChange}
                           className="form-input"
                           placeholder="Seu nome completo"
                           required
                        />
                     </div>

                     <div className="form-group">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           className="form-input"
                           placeholder="seu@email.com"
                           required
                        />
                     </div>

                     <div className="form-group">
                        <label htmlFor="mensagem" className="form-label">Mensagem</label>
                        <textarea
                           id="mensagem"
                           name="mensagem"
                           value={formData.mensagem}
                           onChange={handleInputChange}
                           className="form-textarea"
                           placeholder="Conte-nos sobre seu projeto, suas necessidades e objetivos..."
                           rows={5}
                           required
                        ></textarea>
                     </div>

                     <div className="form-buttons">
                        <button type="submit" className="btn btn-primary">
                           <span className="btn-icon">🚀</span>
                           Quero meu site
                        </button>

                        <button
                           type="button"
                           onClick={handleWhatsApp}
                           className="btn btn-whatsapp"
                        >
                           <span className="btn-icon">📱</span>
                           Fale pelo WhatsApp
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
