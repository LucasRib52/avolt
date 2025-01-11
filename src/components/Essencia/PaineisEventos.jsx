import React from "react";
import Slider from "react-slick";
import "./Pages.css";

// Importando a imagem de eventos
import eventos from "../../assets/eventos.jpg";

const PaineisEventos = () => {
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
          src={eventos}
          alt="Painéis de Eventos"
          className="sustainability-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Painéis de Eventos</h1>
          <p className="header-subtitle">
            Organização e visibilidade para garantir o sucesso do seu evento.
          </p>
        </div>
      </header>

      <main className="sustainability-main">
        <section className="about-section">
          <h2 className="section-title">O que são os Painéis de Eventos?</h2>
          <p className="section-content">
            Nossos painéis de eventos foram desenvolvidos para fornecer
            informações claras e detalhadas, ajudando na organização e
            monitoramento em tempo real, garantindo a visibilidade e sucesso
            de cada evento.
          </p>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">Principais Benefícios</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="card-title">Visibilidade</h3>
              <p className="card-content">
                Exibição de informações importantes para participantes e organizadores.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Organização</h3>
              <p className="card-content">
                Ferramentas que facilitam o planejamento e execução de eventos.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Interatividade</h3>
              <p className="card-content">
                Recursos interativos para engajar o público e melhorar a experiência.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Funcionalidades dos Painéis</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3 className="feature-title">Exibição de Agenda</h3>
              <p className="feature-content">
                Painéis que mostram horários e detalhes das atividades do evento.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Atualizações em Tempo Real</h3>
              <p className="feature-content">
                Informações atualizadas para manter todos informados durante o evento.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Design Personalizado</h3>
              <p className="feature-content">
                Painéis adaptados ao tema e identidade visual do evento.
              </p>
            </div>
          </div>
        </section>

        <section className="interactive-section">
          <h2 className="section-title">Como os Painéis Ajudam nos Eventos?</h2>
          <div className="interactive-grid">
            <div className="interactive-item">
              <h3 className="interactive-title">Engajamento</h3>
              <p className="interactive-content">
                Mantenha o público engajado com informações claras e atrativas.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Otimização de Processos</h3>
              <p className="interactive-content">
                Facilite o gerenciamento do evento com painéis intuitivos e práticos.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Sucesso do Evento</h3>
              <p className="interactive-content">
                Garanta a satisfação dos participantes com organização e transparência.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-title">Galeria de Painéis de Eventos</h2>
          <Slider {...sliderSettings}>
            {Array(3).fill(0).map((_, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={eventos}
                  alt={`Painel de Evento ${index + 1}`}
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

export default PaineisEventos;
