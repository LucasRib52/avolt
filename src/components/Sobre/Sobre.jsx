import React from "react";
import CountUp from "react-countup";
import "./Sobre.css";
import bannerImage from "../../assets/im.jpg"; // Imagem do banner
import clienteImg from "../../assets/cliente1.png";

const Sobre = () => {
  return (
    <div className="sobre">
      {/* Hero Section */}
      <section className="sobre-hero">
        <img src={bannerImage} alt="Sobre Nós" className="sobre-hero-image hover-zoom" />
        <div className="sobre-hero-content">
          <h1 className="fade-in">Quem Somos</h1>
          <p className="fade-in">
            Curabitur commodo velit non ante luctus auctor. Aliquam erat volutpat. Praesent at lobortis metus, vitae fringilla leo. Praesent ante metus, posuere sit amet purus in, tempor imperdiet metus. Donec sed erat est. Ut eget hendrerit leo. Sed id scelerisque risus, vel faucibus ex. Proin elementum aliquam odio.
          </p>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="sobre-highlights">
        <div className="highlight-item">
          <h3>
            <CountUp end={26} duration={2.5} suffix="+" />
          </h3>
          <p>Anos de Experiência</p>
        </div>
        <div className="highlight-item">
          <h3>
            <CountUp end={50} duration={2.5} suffix="+" />
          </h3>
          <p>Projetos Realizados</p>
        </div>
        <div className="highlight-item">
          <h3>
            <CountUp end={30} duration={2.5} suffix="+" />
          </h3>
          <p>Clientes Atendidos</p>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="sobre-mvv">
        <div className="mvv-card">
          <div className="mvv-icon">🎯</div>
          <h3>Missão</h3>
          <p>Ser referência no mercado, entregando qualidade e inovação.</p>
        </div>
        <div className="mvv-card">
          <div className="mvv-icon">🌟</div>
          <h3>Visão</h3>
          <p>Transformar desafios em oportunidades para crescer juntos.</p>
        </div>
        <div className="mvv-card">
          <div className="mvv-icon">💡</div>
          <h3>Valores</h3>
          <p>Integridade, compromisso e paixão em tudo que fazemos.</p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="sobre-timeline">
        <h2>Nossa História</h2>
        <div className="timeline">
          <div className="timeline-item slide-in">
            <div className="timeline-icon-container">
              <div className="timeline-icon">🌟</div>
            </div>
            <div className="timeline-content">
              <h3>1996</h3>
              <p>Início da nossa jornada com grandes sonhos e metas.</p>
            </div>
          </div>
          <div className="timeline-item slide-in">
            <div className="timeline-icon-container">
              <div className="timeline-icon">🏭</div>
            </div>
            <div className="timeline-content">
              <h3>2005</h3>
              <p>Expansão para novos mercados e conquistas notáveis.</p>
            </div>
          </div>
          <div className="timeline-item slide-in">
            <div className="timeline-icon-container">
              <div className="timeline-icon">🌍</div>
            </div>
            <div className="timeline-content">
              <h3>2015</h3>
              <p>Impacto global com projetos inovadores e eficazes.</p>
            </div>
          </div>
          <div className="timeline-item slide-in">
            <div className="timeline-icon-container">
              <div className="timeline-icon">🏆</div>
            </div>
            <div className="timeline-content">
              <h3>2022</h3>
              <p>Reconhecimento como líder no setor com grandes prêmios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="sobre-clientes">
        <h2>Clientes</h2>
        <p className="clientes-frase">
          "A melhor <strong>propaganda</strong> é feita por <strong>clientes satisfeitos</strong>"
        </p>
        <p className="clientes-descricao">
          Aqui, os clientes são colocados sempre em primeiro lugar.
        </p>
        <div className="clientes-grid">
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
          <div className="cliente-item">
            <img src={clienteImg} alt="HSBC" />
            <p>Flamengo</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sobre;
