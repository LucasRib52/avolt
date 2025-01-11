import React from "react";
import "./Contato.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contato = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Entre em Contato</h1>
      <div className="contact-content">
        {/* Informações de Contato */}
        <div className="contact-info">
          <h2>Informações</h2>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Rua Marialva, 89 - Higienópolis, Rio de Janeiro - RJ, CEP: 21061-140</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <p>Telefone: +55 (21) 3556-1010</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>E-mail: comercial@avolt.com.br</p>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="contact-form">
          <h2>Envie sua Mensagem</h2>
          <form>
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu E-mail" required />
            <textarea placeholder="Sua Mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      {/* Mapa do Google */}
      <div className="map-container">
        <h2>Nossa Localização</h2>
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890123!2d-43.1234567890123!3d-22.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0xabcdef1234567890!2sRua%20Marialva%2C%2089%20-%20Higien%C3%B3polis%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021061-140!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="social-media">
        <h2>Conheça Nosso Trabalho</h2>
        <p>Siga-nos nas redes sociais e fique por dentro das novidades:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/avoltengenharia" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/avoltengenharia" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/avoltengenharia" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
