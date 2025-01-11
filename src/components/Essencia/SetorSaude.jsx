import React from "react";
import Slider from "react-slick";
import "./Pages.css";

// Importando a imagem de saúde
import saude from "../../assets/saude.jpg";

const SetorSaude = () => {
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
          src={saude}
          alt="Setor da Saúde"
          className="sustainability-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Setor da Saúde</h1>
          <p className="header-subtitle">
            Soluções inovadoras para melhorar a qualidade de vida e o acesso à saúde.
          </p>
        </div>
      </header>

      <main className="sustainability-main">
        <section className="about-section">
          <h2 className="section-title">O que é o Setor da Saúde?</h2>
          <p className="section-content">
            Nosso foco está em desenvolver soluções que transformem o setor da saúde,
            promovendo acessibilidade, eficiência e qualidade nos serviços prestados.
          </p>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">Principais Benefícios</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="card-title">Tecnologia Médica</h3>
              <p className="card-content">
                Inovações que melhoram diagnósticos e tratamentos, trazendo
                mais precisão e rapidez.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Acessibilidade</h3>
              <p className="card-content">
                Soluções que tornam os serviços de saúde acessíveis para todos.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Qualidade de Vida</h3>
              <p className="card-content">
                Impacto direto na saúde e bem-estar das pessoas.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Funcionalidades no Setor da Saúde</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3 className="feature-title">Sistemas de Gestão</h3>
              <p className="feature-content">
                Gestão integrada de clínicas e hospitais para maior eficiência.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Relatórios Médicos</h3>
              <p className="feature-content">
                Relatórios detalhados para acompanhar a evolução dos pacientes.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Atendimento Humanizado</h3>
              <p className="feature-content">
                Soluções que ajudam a oferecer um atendimento mais próximo e empático.
              </p>
            </div>
          </div>
        </section>

        <section className="interactive-section">
          <h2 className="section-title">Como Contribuímos no Setor da Saúde?</h2>
          <div className="interactive-grid">
            <div className="interactive-item">
              <h3 className="interactive-title">Eficiência Operacional</h3>
              <p className="interactive-content">
                Reduza gargalos em processos administrativos e operacionais.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Inovação Tecnológica</h3>
              <p className="interactive-content">
                Ferramentas modernas para atender às demandas do setor.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Resultados Positivos</h3>
              <p className="interactive-content">
                Impacto direto na saúde e bem-estar da população.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-title">Galeria do Setor da Saúde</h2>
          <Slider {...sliderSettings}>
            {Array(3).fill(0).map((_, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={saude}
                  alt={`Setor da Saúde ${index + 1}`}
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

export default SetorSaude;
