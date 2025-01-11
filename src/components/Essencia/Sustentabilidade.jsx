import React from "react";
import Slider from "react-slick";
import "./Pages.css";

// Importando a imagem de sustentabilidade
import sustentabilidadeImg from "../../assets/engenharia.jpg";

const Sustentabilidade = () => {
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
          src={sustentabilidadeImg}
          alt="Painéis de Sustentabilidade"
          className="sustainability-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Painéis de Sustentabilidade</h1>
          <p className="header-subtitle">
            A solução ideal para monitorar e gerenciar seus projetos de forma sustentável.
          </p>
        </div>
      </header>

      <main className="sustainability-main">
        <section className="about-section">
          <h2 className="section-title">O que são Painéis de Sustentabilidade?</h2>
          <p className="section-content">
            Os painéis de sustentabilidade são ferramentas visuais interativas
            que fornecem dados em tempo real sobre os impactos ambientais,
            sociais e econômicos de projetos e empresas. Eles ajudam a tomar
            decisões estratégicas e a cumprir metas de sustentabilidade.
          </p>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">Principais Benefícios</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="card-title">Gestão Eficiente</h3>
              <p className="card-content">
                Monitore indicadores-chave de desempenho (KPIs) e otimize seus
                processos com dados claros e objetivos.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Conformidade Ambiental</h3>
              <p className="card-content">
                Certifique-se de que suas operações estão em conformidade com as
                regulamentações ambientais.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Transparência</h3>
              <p className="card-content">
                Compartilhe resultados e conquistas com stakeholders e clientes,
                demonstrando seu compromisso com a sustentabilidade.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Funcionalidades dos Painéis</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3 className="feature-title">Visualizações Gráficas</h3>
              <p className="feature-content">
                Gráficos interativos para análise de dados detalhada.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Relatórios Automatizados</h3>
              <p className="feature-content">
                Relatórios gerados automaticamente para otimizar tempo e esforço.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Customização Total</h3>
              <p className="feature-content">
                Personalize os painéis para atender às necessidades específicas
                do seu negócio.
              </p>
            </div>
          </div>
        </section>

        <section className="interactive-section">
          <h2 className="section-title">Como os Painéis Ajudam?</h2>
          <div className="interactive-grid">
            <div className="interactive-item">
              <h3 className="interactive-title">Redução de Custos</h3>
              <p className="interactive-content">
                Identifique áreas de desperdício e reduza custos operacionais
                com insights detalhados.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Tomada de Decisão</h3>
              <p className="interactive-content">
                Acesse dados precisos para decisões estratégicas mais rápidas e
                confiáveis.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Impacto Positivo</h3>
              <p className="interactive-content">
                Melhore a percepção da sua empresa ao demonstrar impacto
                ambiental positivo.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-title">Galeria de Painéis de Sustentabilidade</h2>
          <Slider {...sliderSettings}>
            {Array(3).fill(0).map((_, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={sustentabilidadeImg}
                  alt={`Painel ${index + 1}`}
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

export default Sustentabilidade;
