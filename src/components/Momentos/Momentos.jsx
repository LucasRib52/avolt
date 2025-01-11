import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import "./Momentos.css";
import imgTeste from "../../assets/imgteste.jpg"; // Imagem temporária

const Momentos = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Mostra 4 cards inicialmente
  const navigate = useNavigate(); // Hook para navegação

  const cards = [
    {
      title: "Teste 1",
      description: ["Descrição 1", "Descrição 2", "Descrição 3"],
    },
    {
      title: "Teste 2",
      description: ["Descrição 4", "Descrição 5", "Descrição 6"],
    },
    {
      title: "Teste 3",
      description: ["Descrição 7", "Descrição 8", "Descrição 9"],
    },
    {
      title: "Teste 4",
      description: ["Descrição 10", "Descrição 11", "Descrição 12"],
    },
    {
      title: "Teste 5",
      description: ["Descrição 13", "Descrição 14", "Descrição 15"],
    },
    {
      title: "Teste 6",
      description: ["Descrição 16", "Descrição 17", "Descrição 18"],
    },
  ];

  // Função para carregar mais cards
  const handleLoadMore = () => {
    setVisibleCards(cards.length); // Mostra todos os cards
  };

  // Função para redirecionar ao clicar em "Mais sobre..."
  const handleNavigate = () => {
    navigate("/momentos/detalhes1");
  };

  return (
    <div className="momentos-container">
      {/* Cabeçalho com imagem de fundo */}
      <header className="momentos-header">
        <div className="header-overlay">
          <h1>Momentos de Sucesso</h1>
          <p>O sucesso de nossos clientes é a nossa maior motivação.</p>
        </div>
      </header>

      {/* Introdução */}
      <section className="momentos-intro">
        <h2>Juntos - no mundo inteiro!</h2>
        <p>
          Nossos clientes enfrentam os desafios de suas indústrias todos os
          dias. Eles empurram os limites, perseguem novas ideias e criam
          inovação. Estamos orgulhosos de acompanhá-los a cada passo do
          caminho, porque o sucesso deles é o nosso sucesso!
        </p>
      </section>

      {/* Seção de vídeo */}
      <section className="momentos-video">
        <div className="video-container">
          <iframe
            src=""
            title="Momentos de Sucesso"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-description">
          <h3>A Avolt está conectada com você!</h3>
          <p>
            Com nossas soluções e tecnologias versáteis, ajudamos nossos
            clientes em todo o mundo a atingir seus objetivos. Os pequenos
            momentos também são importantes, e estamos aqui para torná-los
            grandes!
          </p>
        </div>
      </section>

      {/* Nova seção: Momentos detalhados */}
      <section className="momentos-detalhados">
        <h2>Momentos de Sucesso</h2>
        <p>
          Nossos clientes pensam grande - todos os dias, em várias indústrias,
          em todo o mundo - e nós os ajudamos a terem #MomentosDeSucesso
        </p>
        <div className="momentos-grid">
          {cards.slice(0, visibleCards).map((card, index) => (
            <div className="momento-card" key={index}>
              <img
                src={imgTeste}
                alt={`Card ${index}`}
                className="momento-video"
              />
              <div className="momento-content">
                <h3>{card.title}</h3>
                <ul>
                  {card.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                {/* Botão para navegar para detalhes */}
                <button className="momento-button" onClick={handleNavigate}>
                  Mais sobre...
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Carregar Mais */}
        {visibleCards < cards.length && (
          <button className="carregar-mais-button" onClick={handleLoadMore}>
            Carregar Mais
            <i>→</i> {/* Ícone de seta */}
          </button>
        )}
      </section>
    </div>
  );
};

export default Momentos;
