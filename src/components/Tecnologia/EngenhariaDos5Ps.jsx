import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Settings, TrendingUp, ShieldCheck, Zap, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgTeste from "../../assets/imgteste.jpg";
import Tecnologia from "../Tecnologia/Tecnologia";

const EngenhariaDos5Ps = () => {
  const navigate = useNavigate();

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
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section Premium */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={imgTeste} 
            alt="Engenharia dos 5Ps" 
            className="w-full h-full object-cover filter brightness-[0.25] saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-50"></div>
          
          {/* Efeitos de luz no fundo */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-20">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="flex flex-col items-center text-center"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <Settings size={14} /> Metodologia Exclusiva Avolt
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Engenharia dos <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">5Ps</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
                A Engenharia dos 5Ps na Avolt vai além do projeto elétrico tradicional.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Métricas de Impacto (Glassmorphism Overlay) */}
      <section className="relative -mt-16 z-20 container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {[
              { icon: Factory, title: "100%", desc: "Controle Fabril", color: "blue" },
              { icon: TrendingUp, title: "ROI", desc: "Retorno sobre Investimento Rápido", color: "cyan" },
              { icon: ShieldCheck, title: "Zero", desc: "Margem para Acidentes", color: "indigo" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0 group">
                <div className={`w-12 h-12 rounded-full bg-${stat.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-1">{stat.title}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Conteúdo da História / Explicação */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32 max-w-6xl mx-auto">
            
            {/* Bloco 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-2">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Otimização levada <br/> ao seu limite.
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                <div className="text-lg text-slate-600 leading-relaxed font-light space-y-4">
                  <p>
                    Atuamos de forma integrada desde o planejamento até a performance final, garantindo soluções seguras, eficientes e totalmente alinhadas às normas técnicas e às necessidades operacionais do cliente.
                  </p>
                  <p>
                    Cada projeto é desenvolvido de forma personalizada, considerando produtividade, proteção, previsibilidade de custos e performance energética, resultando em sistemas elétricos mais confiáveis, duráveis e preparados para o crescimento da operação.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={imgTeste} alt="A Metodologia" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </motion.div>

            {/* Bloco 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 bg-slate-900 rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative"
            >
              {/* Efeito de Fundo */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="lg:w-1/2 space-y-6 relative z-10">
                <div className="inline-flex items-center justify-center p-2 bg-cyan-500/20 rounded-xl mb-2">
                  <TrendingUp className="h-6 w-6 text-cyan-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Cultura de Progresso</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                <div className="text-lg text-slate-300 leading-relaxed font-light space-y-4">
                  <p>
                    Diferencial Avolt: engenharia estratégica, visão sistêmica e soluções sob medida que reduzem riscos e aumentam a eficiência do negócio.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative z-10">
                <div className="rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)] aspect-[4/3] group border border-slate-700">
                  <img src={imgTeste} alt="Métricas e Dashboard" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vantagens Estratégicas em Grid Moderno */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Pilares da Metodologia</h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">Os 5 pilares que moldam tudo que fazemos e garantem a sua rentabilidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Eficiência Operacional",
                desc: "Reduzimos drasticamente custos invisíveis otimizando o fluxo elétrico.",
                color: "blue"
              },
              {
                icon: ShieldCheck,
                title: "Sustentabilidade",
                desc: "Equipamentos que gastam menos e respeitam restrições ambientais.",
                color: "emerald"
              },
              {
                icon: TrendingUp,
                title: "Resultados Medidos",
                desc: "Nada de achismos. O sucesso é quantificável em cada etapa do projeto.",
                color: "indigo"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Premium */}
      <section className="py-24 bg-blue-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-500"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto space-y-8">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Aplique os 5Ps <br/> no seu negócio.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 leading-relaxed font-light">
              Tire o seu projeto do papel utilizando métodos consolidados no mercado industrial.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => navigate('/contato')}
                size="lg" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-600 rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:shadow-2xl hover:scale-105"
              >
                Conversar com Time Técnico
              </Button>
              <Button 
                onClick={() => navigate('/projetos')}
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white/30 rounded-full px-10 py-7 text-lg font-bold transition-all"
              >
                Ver Entregas <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outras Tecnologias Sugeridas */}
      <div className="bg-slate-50 border-t border-slate-200">
        <Tecnologia />
      </div>
    </div>
  );
};

export default EngenhariaDos5Ps;