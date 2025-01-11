import React from "react";
import Slider from "react-slick";
import "./Pages.css";

// Importando a imagem de serviços
import servicos from "../../assets/servicos.png";

const Servicos = () => {
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
          src={servicos}
          alt="Serviços"
          className="sustainability-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Serviços</h1>
          <p className="header-subtitle">
            Qualidade e inovação para atender às suas necessidades em diversos setores.
          </p>
        </div>
      </header>

      <main className="sustainability-main">
        <section className="about-section">
          <h2 className="section-title">O que são nossos Serviços?</h2>
          <p className="section-content">
            Oferecemos uma ampla gama de serviços especializados, com foco em
            qualidade, inovação e atendimento personalizado, para atender às
            demandas de diferentes setores.
          </p>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">Principais Benefícios</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="card-title">Versatilidade</h3>
              <p className="card-content">
                Soluções adaptadas para atender às necessidades específicas de
                cada cliente.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Inovação</h3>
              <p className="card-content">
                Serviços inovadores que utilizam as últimas tecnologias e
                tendências do mercado.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Qualidade</h3>
              <p className="card-content">
                Garantia de excelência em cada projeto ou serviço realizado.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Funcionalidades dos Serviços</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3 className="feature-title">Atendimento Personalizado</h3>
              <p className="feature-content">
                Foco em compreender e atender às necessidades únicas de cada cliente.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Soluções Integradas</h3>
              <p className="feature-content">
                Serviços que se integram aos seus processos para maior eficiência.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Equipe Especializada</h3>
              <p className="feature-content">
                Profissionais experientes e capacitados para garantir os melhores resultados.
              </p>
            </div>
          </div>
        </section>

        <section className="interactive-section">
          <h2 className="section-title">Como Nossos Serviços Ajudam?</h2>
          <div className="interactive-grid">
            <div className="interactive-item">
              <h3 className="interactive-title">Soluções sob Medida</h3>
              <p className="interactive-content">
                Entrega de serviços adaptados às suas necessidades específicas.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Agilidade</h3>
              <p className="interactive-content">
                Processos otimizados para garantir rapidez e eficiência na entrega.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Resultados de Impacto</h3>
              <p className="interactive-content">
                Geramos impacto positivo nos negócios e processos de nossos clientes.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-title">Galeria de Serviços</h2>
          <Slider {...sliderSettings}>
            {Array(3).fill(0).map((_, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={servicos}
                  alt={`Serviço ${index + 1}`}
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

export default Servicos;
