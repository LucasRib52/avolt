import React, { useEffect } from "react";
import "./Detalhes.css";
import imgTeste from "../../assets/imgteste.jpg"; // Caminho correto para sua imagem
import Footer from "../Footer/Footer"; // Importar o Footer

const BaixaTensao = () => {
  // Garante que a página comece no topo ao carregar com rolagem suave
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona o scroll suave
    });
  }, []);

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="section-container">
          {/* Primeira Seção */}
          <div className="section">
            <div className="section-text">
              <h2 className="section-title">Soluções que oferecemos</h2>
              <p className="section-subtitle">
                Confira nossas principais soluções de baixa tensão desenvolvidas
                para atender às suas necessidades específicas.
              </p>
              <ul className="section-list">
                <li>Painéis de distribuição</li>
                <li>Painéis de comando</li>
                <li>Banco de capacitores</li>
                <li>Painéis certificados</li>
                <li>Centro de Controle de Motores</li>
                <li>Centros de Medição (concessionária)</li>
              </ul>
            </div>
            <img
              src={imgTeste}
              alt="Soluções de Baixa Tensão"
              className="section-image"
            />
          </div>

          {/* Segunda Seção */}
          <div className="section">
            <div className="section-text">
              <h2 className="section-title">Ramos que atendemos</h2>
              <p className="section-subtitle">
                Nossas soluções são utilizadas em diversos setores para garantir
                eficiência e confiabilidade.
              </p>
              <ul className="section-list">
                <li>Indústrias automotivas</li>
                <li>Construção civil</li>
                <li>Indústrias químicas e petroquímicas</li>
                <li>Centrais elétricas</li>
                <li>Hospitais e grandes edifícios</li>
              </ul>
            </div>
            <img
              src={imgTeste}
              alt="Ramos atendidos"
              className="section-image"
            />
          </div>

          {/* Terceira Seção */}
          <div className="section">
            <div className="section-text">
              <h2 className="section-title">Benefícios</h2>
              <p className="section-subtitle">
                Descubra os benefícios de nossas soluções de baixa tensão.
              </p>
              <ul className="section-list">
                <li>Alta eficiência energética</li>
                <li>Segurança e confiabilidade</li>
                <li>Customização para atender demandas específicas</li>
                <li>Conformidade com normas internacionais</li>
                <li>Redução de custos operacionais</li>
              </ul>
            </div>
            <img
              src={imgTeste}
              alt="Benefícios"
              className="section-image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BaixaTensao;
