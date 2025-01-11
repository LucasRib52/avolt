import React from "react";
import "./Tecnologia.css";
import imgTeste from "../../assets/imgteste.jpg"; // Imagem temporária

const tecnologias = [
  { id: 1, title: "Engenharia dos 5Ps", image: imgTeste, link: "/engenharia-dos-5ps" },
  { id: 2, title: "Proteção Contra Arco Elétrico", image: imgTeste, link: "/protecao-contra-arco-eletrico" },
  { id: 3, title: "Shelter - MT-Trafo-BT", image: imgTeste, link: "/shelter-mt-trafo-bt" },
  { id: 4, title: "Automação e Telemetria", image: imgTeste, link: "/automacao-e-telemetria" },
  { id: 5, title: "Retrofit", image: imgTeste, link: "/retrofit" },
  { id: 6, title: "Momentos de Sucesso", image: imgTeste, link: "/momentos-de-sucesso" },
];

const Tecnologia = () => {
  return (
    <section className="tecnologia-section">
      <div className="tecnologia-header">
        <h2>Tecnologia</h2>
        <p>Explore nossas soluções inovadoras e tecnológicas</p>
      </div>
      <div className="tecnologia-grid">
        {tecnologias.map((tec) => (
          <a key={tec.id} href={tec.link} className="tecnologia-card">
            <div
              className="tecnologia-image"
              style={{ backgroundImage: `url(${tec.image})` }}
            ></div>
            <h3>{tec.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Tecnologia;
