import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import imgTeste from "../../assets/imgteste.jpg";

const tecnologias = [
  { id: 1, title: "Engenharia dos 5Ps", image: imgTeste, link: "/engenharia-dos-5ps" },
  { id: 2, title: "Proteção Contra Arco", image: imgTeste, link: "/protecao-contra-arco-eletrico" },
  { id: 3, title: "Shelter - MT-Trafo-BT", image: imgTeste, link: "/shelter-mt-trafo-bt" },
  { id: 4, title: "Automação e Telemetria", image: imgTeste, link: "/automacao-e-telemetria" },
  { id: 5, title: "Retrofit", image: imgTeste, link: "/retrofit" },
  { id: 6, title: "Momentos de Sucesso", image: imgTeste, link: "/momentos" },
];

const Tecnologia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-sm mb-6 border border-blue-500/20">
              <Zap className="h-4 w-4" /> Inovação
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Tecnologia de Ponta
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-light"
          >
            Explore nossas soluções inovadoras desenhadas para o futuro da engenharia. Alta performance e confiabilidade garantida.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tecnologias.map((tec) => (
            <motion.div variants={itemVariants} key={tec.id}>
              <Link 
                to={tec.link} 
                className="group relative h-80 md:h-96 rounded-3xl overflow-hidden block shadow-2xl shadow-black/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img 
                    src={tec.image} 
                    alt={tec.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {tec.title}
                    </h3>
                    <div className="flex items-center text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span>Explorar tecnologia</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tecnologia;
