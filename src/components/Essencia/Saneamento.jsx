import React from "react";
import Slider from "react-slick";
import "./Pages.css";

// Importando a imagem de saneamento
import saneamento from "../../assets/saneamento.jpeg";

const Saneamento = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="page-container">
      <header className="sustainability-header">
        <img
          src={saneamento}
          alt="Saneamento"
          className="sustainability-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Saneamento</h1>
          <p className="header-subtitle">
            Soluções que transformam a qualidade de vida por meio de recursos hídricos eficientes.
          </p>
        </div>
      </header>

      <main className="sustainability-main">
        <section className="about-section">
          <h2 className="section-title">O que é Saneamento?</h2>
          <p className="section-content">
            Trabalhamos para oferecer soluções de saneamento que impactam
            positivamente comunidades ao redor do mundo, melhorando o acesso a
            recursos hídricos e promovendo a sustentabilidade.
          </p>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">Principais Benefícios</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="card-title">Saúde Pública</h3>
              <p className="card-content">
                Redução de doenças por meio de água limpa e sistemas de esgoto eficazes.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Sustentabilidade</h3>
              <p className="card-content">
                Preservação de recursos naturais para as futuras gerações.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Acessibilidade</h3>
              <p className="card-content">
                Garantia de que todas as comunidades tenham acesso a saneamento básico.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Funcionalidades no Saneamento</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3 className="feature-title">Gestão de Recursos Hídricos</h3>
              <p className="feature-content">
                Sistemas avançados para monitorar e gerenciar recursos hídricos.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Tratamento de Água</h3>
              <p className="feature-content">
                Processos modernos para garantir água potável de qualidade.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Educação Ambiental</h3>
              <p className="feature-content">
                Iniciativas para conscientizar comunidades sobre a preservação
                e uso sustentável da água.
              </p>
            </div>
          </div>
        </section>

        <section className="interactive-section">
          <h2 className="section-title">Como Contribuímos no Saneamento?</h2>
          <div className="interactive-grid">
            <div className="interactive-item">
              <h3 className="interactive-title">Melhoria da Qualidade de Vida</h3>
              <p className="interactive-content">
                Proporcionamos condições sanitárias que impactam diretamente a saúde e o bem-estar.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Preservação Ambiental</h3>
              <p className="interactive-content">
                Reduzimos o impacto ambiental com soluções sustentáveis.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Impacto Social</h3>
              <p className="interactive-content">
                Criamos soluções que integram tecnologia e acessibilidade.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-title">Galeria de Saneamento</h2>
          <Slider {...sliderSettings}>
            {Array(3).fill(0).map((_, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={saneamento}
                  alt={`Saneamento ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </div>
  );
};

export default Saneamento;
