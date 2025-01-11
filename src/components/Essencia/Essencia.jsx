import React from "react";
import "./Essencia.css";

// Importando as imagens
import engenharia from "../../assets/engenharia.jpg";
import data from "../../assets/data.jpg";
import servicos from "../../assets/servicos.png";
import saude from "../../assets/saude.jpg";
import saneamento from "../../assets/saneamento.jpeg";
import eventos from "../../assets/eventos.jpg";

const Essencia = () => {
  const categories = [
    { title: "Sustentabilidade", img: engenharia, link: "/sustentabilidade" },
    { title: "Software", img: data, link: "/software" },
    { title: "Serviços", img: servicos, link: "/servicos" },
    { title: "Setor da Saúde", img: saude, link: "/saude" },
    { title: "Saneamento", img: saneamento, link: "/saneamento" },
    { title: "Painéis de Eventos", img: eventos, link: "/eventos" },
  ];

  return (
    <div className="essencia-container">
      <h2 className="essencia-title">A essência do que fazemos</h2>
      <div className="essencia-grid">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className={`essencia-item ${index === 0 ? "large" : "medium"}`}
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className="essencia-overlay">
              <h3>{category.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Essencia;
