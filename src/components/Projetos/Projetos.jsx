import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Projetos = () => {
  const statsData = [
    { value: 12, label: "Anos de atuação", prefix: "+" },
    { value: 1000, label: "Projetos entregues em 2025", prefix: "+" },
    { value: 1, label: "Atuação no RJ e em todo o Brasil", prefix: "" },
    { value: 1, label: "Experiência em eventos de grande porte e infraestrutura crítica", prefix: "" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Engenharia dos 5Ps
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            <p className="text-lg text-slate-300 leading-relaxed">
              A Engenharia dos 5Ps na Avolt vai além do projeto elétrico tradicional.
              Atuamos de forma integrada desde o planejamento até a performance
              final, garantindo soluções seguras, eficientes e totalmente alinhadas
              às normas técnicas e às necessidades operacionais do cliente.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Cada projeto é desenvolvido de forma personalizada, considerando produtividade, proteção,
              previsibilidade de custos e performance energética, resultando em sistemas elétricos
              mais confiáveis, duráveis e preparados para o crescimento da operação.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Diferencial Avolt: engenharia estratégica, visão sistêmica e soluções sob medida que reduzem riscos e aumentam a eficiência do negócio.
            </p>
          </div>

          <div 
            ref={ref} 
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-3 font-mono">
                  {stat.value === 1 ? (
                    <span>✓</span>
                  ) : inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator="."
                      prefix={stat.prefix}
                    />
                  ) : (
                    <span>0</span>
                  )}
                </div>
                <p className="text-slate-300 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projetos;
