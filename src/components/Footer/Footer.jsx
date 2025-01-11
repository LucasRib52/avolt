import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-links-section">
          <div>
            <h3>Sobre</h3>
            <ul>
              <li>Portfolio</li>
              <li>Certificações</li>
              <li>Produtos</li>
            </ul>
          </div>
          <div>
            <h3>Contato</h3>
            <ul>
              <li>Comercial</li>
              <li>SAC</li>
              <li>Compliance</li>
            </ul>
          </div>
          <div>
            <h3>Telefones</h3>
            <ul>
              <li>+55 21 4444-0000</li>
              <li>+55 21 4444-000</li>
            </ul>
          </div>
        </div>
        <div className="footer-social-section">
          <h3>Redes Sociais</h3>
          <div className="footer-social-icons">
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Avolt. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
