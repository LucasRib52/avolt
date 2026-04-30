import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Projetos = () => {
  const statsData = [
    { value: 100, label: "Projetos Realizados", prefix: "+" },
    { value: 10, label: "Anos de Experiência", prefix: "+" },
    { value: 50, label: "Certificações e Qualificações", prefix: "+" },
    { value: 10000, label: "Painéis Elétricos e/ou Automação", prefix: "+" },
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
              Qualidade e Experiência
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            <p className="text-lg text-slate-300 leading-relaxed">
              A AVOLT Engenharia é uma empresa sólida no mercado que fornece
              soluções em projetos, automação, montagens de painéis de Baixa e
              Média Tensão, especificando e fornecendo componentes elétricos para
              soluções customizadas, assim como serviços de Retrofit e adequação
              NR-10.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              A empresa vem conquistando o status de referência em fornecimento de
              painéis elétricos com objetivo de atender a clientes que necessitem
              de soluções customizadas, serviços de montagem de painéis elétricos e
              projetos especiais.
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
                  {inView ? (
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
