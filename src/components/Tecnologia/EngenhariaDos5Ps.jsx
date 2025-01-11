import React from "react";
import "./TecnologiaDetalhe.css";
import imgTeste from "../../assets/imgteste.jpg"; // Usando apenas esta imagem
import Tecnologia from "../Tecnologia/Tecnologia"; // Componente de outras tecnologias

const EngenhariaDos5Ps = () => {
  const imagensGaleria = [imgTeste, imgTeste, imgTeste, imgTeste]; // Reutilizando imgTeste para a galeria

  return (
    <section className="detalhe-container">
      {/* Seção de topo com imagem e introdução */}
      <div className="detalhe-banner">
        <img src={imgTeste} alt="Banner Engenharia dos 5Ps" />
        <div className="banner-texto">
          <h1>Engenharia dos 5Ps</h1>
          <p>Inovação e eficiência transformando o futuro industrial.</p>
        </div>
      </div>

      {/* Seção principal com texto e imagem */}
      <div className="detalhe-content">
        <div className="detalhe-texto">
          <h2>O que é a Engenharia dos 5Ps?</h2>
          <p>
            A Engenharia dos 5Ps é uma metodologia que une planejamento estratégico, performance,
            produção, pessoas e progresso. Projetada para otimizar processos industriais, ela reduz
            custos, promove sustentabilidade e melhora a eficiência operacional em setores variados.
          </p>
          <p>
            Essa abordagem moderna atende às demandas de um mercado competitivo, transformando
            processos industriais e gerando resultados significativos.
          </p>
        </div>
        <div className="detalhe-imagem">
          <img src={imgTeste} alt="Engenharia dos 5Ps" />
        </div>
      </div>

      {/* Seção de Destaques */}
      <div className="detalhe-destaques">
        <h2>Destaques da Metodologia</h2>
        <div className="destaques-lista">
          <div className="destaque-item">
            <h3>🔧 Eficiência Operacional</h3>
            <p>Reduzimos custos e otimizamos processos industriais para alcançar resultados extraordinários.</p>
          </div>
          <div className="destaque-item">
            <h3>🌍 Sustentabilidade</h3>
            <p>Promovemos práticas industriais responsáveis para um futuro mais sustentável.</p>
          </div>
          <div className="destaque-item">
            <h3>📈 Resultados Medidos</h3>
            <p>Monitoramos e mensuramos o impacto da metodologia em cada etapa do processo.</p>
          </div>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="detalhe-galeria">
        <h2>Galeria de Projetos</h2>
        <div className="galeria-itens">
          {imagensGaleria.map((imagem, index) => (
            <div className="galeria-item" key={index}>
              <img src={imagem} alt={`Galeria ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Momentos de Sucesso */}
      <div className="detalhe-momentos">
        <h2>Conheça nossos momentos de sucesso</h2>
        <p>
          Descubra como a Engenharia dos 5Ps tem transformado processos e impactado positivamente
          diversos setores industriais. Clique abaixo para explorar nossos casos de sucesso.
        </p>
        <a href="/momentos-de-sucesso" className="detalhe-botao">
          Veja nossos casos de sucesso
        </a>
      </div>

      {/* Outras Tecnologias */}
      <Tecnologia />
    </section>
  );
};

export default EngenhariaDos5Ps;
