import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Zap, BatteryCharging } from "lucide-react";
import sustentabilidadeImg from "../../assets/engenharia.jpg";
import Tecnologia from "../Tecnologia/Tecnologia";

const Sustentabilidade = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={sustentabilidadeImg} 
            alt="Sustentabilidade" 
            className="w-full h-full object-cover filter brightness-[0.3] saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-50"></div>
          
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-sm border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <Leaf size={14} /> Sustentabilidade
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Engenharia com <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">impacto</span>
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-24 relative z-20 -mt-16 container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-2xl rounded-[2rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center">
                <Heart className="w-16 h-16 text-emerald-500" />
              </div>
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Acreditamos que a engenharia também tem papel social.</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Atuamos em projetos que levam energia e infraestrutura para comunidades, contribuindo para desenvolvimento e qualidade de vida.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Além disso, investimos em soluções voltadas para eficiência energética e mobilidade elétrica.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid de Atuação */}
      <section className="pb-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Eficiência Energética</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Projetos desenvolvidos para otimizar o consumo, reduzir desperdícios e promover o uso inteligente dos recursos energéticos.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <BatteryCharging size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobilidade Elétrica</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Infraestrutura completa para carregamento de veículos elétricos, apoiando a transição para um futuro mais limpo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 border-t border-slate-200">
        <Tecnologia />
      </div>
    </div>
  );
};

export default Sustentabilidade;
