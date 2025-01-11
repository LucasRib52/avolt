import React, { useEffect, useState } from "react";
import "./Projetos.css";

const Projetos = () => {
  const statsData = [
    { value: 100, label: "Projetos Realizados" },
    { value: 100, label: "Anos de Experiência" },
    { value: 100, label: "Certificações e Qualificações" },
    { value: 10000, label: "Painéis Elétricos e/ou Automação" },
  ];

  const [counters, setCounters] = useState(statsData.map(() => 0)); // Inicializa os contadores em 0

  useEffect(() => {
    statsData.forEach((stat, index) => {
      let currentValue = 0;
      const step = Math.ceil(stat.value / 100); // Define o incremento (100 passos para chegar no valor final)
      const interval = setInterval(() => {
        currentValue += step; // Incrementa o valor
        if (currentValue >= stat.value) {
          currentValue = stat.value; // Garante que não ultrapasse o valor final
          clearInterval(interval); // Para o intervalo quando atinge o valor final
        }
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          newCounters[index] = currentValue;
          return newCounters;
        });
      }, 20); // Define o tempo entre os incrementos (20ms)
    });
  }, []);

  return (
    <section className="projetos-section">
      <div className="projetos-text">
        <h2>Qualidade</h2>
        <p>
          A AVOLT Engenharia é uma empresa sólida no mercado que fornece
          soluções em projetos, automação, montagens de painéis de baixa e
          Média Tensão, especificando e fornecendo componentes elétricos para
          soluções customizadas assim como serviços de Retrofit e adequação
          NR-10.
        </p>
        <p>
          A empresa vem conquistando o status de referência em fornecimento de
          painéis elétricos com objetivo de atender a clientes que necessitem
          de soluções customizada, serviços de montagem de painéis elétricos e
          projetos especiais.
        </p>
      </div>
      <div className="projetos-stats">
        {statsData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{counters[index]}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
