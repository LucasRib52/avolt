import React from "react";
import Slider from "react-slick";
import "./Pages.css";

// Importando a imagem de software
import data from "../../assets/data.jpg";

const Software = () => {
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
          src={data}
          alt="Soluções de Software"
          className="sustainability-image"
        />
        <div className="header-overlay">
          <h1 className="header-title">Soluções de Software</h1>
          <p className="header-subtitle">
            Tecnologia de ponta para atender às suas necessidades e transformar seus processos.
          </p>
        </div>
      </header>

      <main className="sustainability-main">
        <section className="about-section">
          <h2 className="section-title">O que é o nosso Software?</h2>
          <p className="section-content">
            Nossos softwares são projetados para oferecer soluções ágeis,
            seguras e eficientes, ajudando empresas a alcançar melhores
            resultados e facilitar o dia a dia de seus usuários.
          </p>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">Principais Benefícios</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="card-title">Automação</h3>
              <p className="card-content">
                Automatize tarefas repetitivas e economize tempo para focar no que realmente importa.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Escalabilidade</h3>
              <p className="card-content">
                Nossas soluções crescem com sua empresa, garantindo alta performance.
              </p>
            </div>
            <div className="benefit-card">
              <h3 className="card-title">Segurança</h3>
              <p className="card-content">
                Dados protegidos com as melhores práticas de segurança cibernética.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Funcionalidades do Software</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3 className="feature-title">Interface Intuitiva</h3>
              <p className="feature-content">
                Design pensado para facilitar o uso e garantir uma experiência agradável.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Relatórios Personalizados</h3>
              <p className="feature-content">
                Relatórios que atendem às suas necessidades específicas, com visualizações claras.
              </p>
            </div>
            <div className="feature-item">
              <h3 className="feature-title">Suporte 24/7</h3>
              <p className="feature-content">
                Equipe pronta para te ajudar a qualquer hora do dia.
              </p>
            </div>
          </div>
        </section>

        <section className="interactive-section">
          <h2 className="section-title">Como o Software Ajuda?</h2>
          <div className="interactive-grid">
            <div className="interactive-item">
              <h3 className="interactive-title">Eficiência</h3>
              <p className="interactive-content">
                Aumente a produtividade com soluções rápidas e confiáveis.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Redução de Custos</h3>
              <p className="interactive-content">
                Reduza gastos operacionais com processos mais inteligentes.
              </p>
            </div>
            <div className="interactive-item">
              <h3 className="interactive-title">Melhor Comunicação</h3>
              <p className="interactive-content">
                Integração entre equipes e ferramentas, otimizando o fluxo de trabalho.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="section-title">Galeria de Softwares</h2>
          <Slider {...sliderSettings}>
            {Array(3).fill(0).map((_, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={data}
                  alt={`Software ${index + 1}`}
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

export default Software;
