import React from "react";
import { useNavigate } from "react-router-dom"; // Para navegação
import "./Painel.css";
import imgTeste from "../../assets/imgteste.jpg"; // Importando a imagem da pasta assets

const Painel = () => {
  const navigate = useNavigate(); // Para navegação

  const items = [
    {
      title: "Baixa tensão",
      description: [
        "Painéis de distribuição",
        "Painéis de comando",
        "Banco de capacitores",
        "Painéis certificados",
      ],
      image: imgTeste,
      route: "/baixa-tensao", // Rota específica
    },
    {
      title: "Média tensão",
      description: [
        "Cabines tipo semi-enterrada metálica",
        "Cubículos convencionais",
        "Soluções de proteção",
        "Outros painéis certificados",
      ],
      image: imgTeste,
      route: "/baixa-tensao", // Rota específica
    },
    {
      title: "Shelters e Eletrocentro",
      description: [
        "Eletrocentros customizados",
        "Soluções modulares",
        "Projetos turnkey",
        "Instalações robustas e seguras",
      ],
      image: imgTeste,
      route: "/baixa-tensao", // Rota específica
    },
    {
      title: "Automação",
      description: [
        "Programação de CLPs",
        "Integração de sistemas industriais",
        "Monitoramento remoto",
        "Sistemas SCADA",
      ],
      image: imgTeste,
      route: "/baixa-tensao", // Rota específica
    },
    {
      title: "Missão Crítica",
      description: [
        "Infraestruturas de alta confiabilidade",
        "Soluções de redundância elétrica",
        "Gerenciamento de energia ininterrupta",
        "Projetos para data centers e hospitais",
      ],
      image: imgTeste,
      route: "/baixa-tensao", // Rota específica
    },
    {
      title: "Momentos de Sucesso",
      description: [
        "Cases de projetos realizados",
        "Depoimentos de clientes",
        "Histórias de inovação",
        "Implementações bem-sucedidas",
      ],
      image: imgTeste,
      route: "/momentos-sucesso", // Rota específica
    },
  ];

  return (
    <div className="painel-container">
      {items.map((item, index) => (
        <div className="painel-card" key={index}>
          <div
            className="painel-image"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="painel-content">
            <h3 className="painel-title">{item.title}</h3>
            <ul className="painel-description">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <button
              className="painel-button"
              onClick={() => navigate(item.route)} // Navega para a rota específica
            >
              Saiba mais
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Painel;
