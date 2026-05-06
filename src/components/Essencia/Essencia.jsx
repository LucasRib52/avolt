import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf,
  Wrench,
  Stethoscope,
  Droplets,
  Mic2,
  ArrowRight,
  Star,
  Building2,
} from "lucide-react";

// Importando as imagens
import engenharia from "../../assets/engenharia.jpg";
import data from "../../assets/data.jpg";
import servicos from "../../assets/servicos.png";
import saude from "../../assets/saude.jpg";
import saneamento from "../../assets/saneamento.jpeg";
import eventos from "../../assets/eventos.jpg";

const Essencia = () => {
  const categories = [
    {
      title: "Setor da Saúde",
      icon: Stethoscope,
      desc: "Infraestrutura elétrica para ambientes com operação contínua e crítica.",
      img: saude,
      link: "/saude",
      span: "col-span-1 sm:col-span-2 md:col-span-3 md:row-span-2",
      color: "from-rose-500/80 to-rose-900/90",
    },
    {
      title: "Building",
      icon: Building2,
      desc: "Grandes empreendimentos, edificações e infraestrutura elétrica em escala urbana.",
      img: data,
      link: "/building",
      span: "col-span-1 md:col-span-3 md:row-span-1 md:col-start-4 md:row-start-1",
      color: "from-blue-500/80 to-blue-900/90",
    },
    {
      title: "Serviços",
      icon: Wrench,
      desc: "Engenharia, montagem, comissionamento e suporte ao ciclo de vida.",
      img: servicos,
      link: "/servicos",
      span: "col-span-1 md:col-span-3 md:row-span-1 md:col-start-4 md:row-start-2",
      color: "from-amber-500/80 to-amber-900/90",
    },
    {
      title: "Sustentabilidade",
      icon: Leaf,
      desc: "Eficiência energética, integração com renováveis e menor impacto operacional.",
      img: engenharia,
      link: "/sustentabilidade",
      span: "col-span-1 md:col-span-2 md:row-start-3 md:col-start-1",
      color: "from-emerald-500/80 to-emerald-900/90",
    },
    {
      title: "Saneamento",
      icon: Droplets,
      desc: "Confiabilidade para estações e sistemas de abastecimento e tratamento.",
      img: saneamento,
      link: "/saneamento",
      span: "col-span-1 md:col-span-2 md:row-start-3 md:col-start-3",
      color: "from-cyan-500/80 to-cyan-900/90",
    },
    {
      title: "Painéis de Eventos",
      icon: Mic2,
      desc: "Operação elétrica segura para produção e continuidade de eventos.",
      img: eventos,
      link: "/eventos",
      span: "col-span-1 md:col-span-2 md:row-start-3 md:col-start-5",
      color: "from-indigo-500/80 to-indigo-900/90",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200">
              <Star size={16} /> ONDE ATUAMOS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Setores em que entregamos engenharia de alta confiabilidade
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Atuamos com soluções elétricas e de automação para operações críticas e infraestrutura essencial.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-none md:grid-rows-3 gap-5 md:h-[650px]"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={category.link}
                className={`${category.span} h-[250px] md:h-auto`}
              >
                <Link
                  to={category.link}
                  className="group relative block w-full h-full rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-200"
                >
                  <img
                    src={category.img}
                    alt={category.title}
                    className="absolute w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Gradiente Escuro Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Gradiente Colorido no Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-90 mix-blend-multiply transition-opacity duration-500`}></div>

                  {/* Conteúdo */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 transform group-hover:-translate-y-2 transition-all duration-300 shadow-lg">
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-1 transform group-hover:-translate-y-1 transition-all duration-300">
                      {category.title}
                    </h3>
                    
                    <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white/90 mb-4 line-clamp-2">
                        {category.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-white uppercase tracking-wider group-hover:gap-2 transition-all duration-300">
                        Ver Mais <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>

                  {/* Efeito de Brilho Fino na Borda Interna */}
                  <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-colors duration-500 pointer-events-none"></div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Essencia;