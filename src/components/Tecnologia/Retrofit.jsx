import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCcw, Leaf, Timer, Power, Zap, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgTeste from "../../assets/imgteste.jpg";
import Tecnologia from "../Tecnologia/Tecnologia";

const Retrofit = () => {
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
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section Premium */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={imgTeste} 
            alt="Retrofit de Painéis" 
            className="w-full h-full object-cover filter brightness-[0.25] saturate-50 sepia-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-50"></div>
          
          {/* Efeitos de luz no fundo */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
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
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/20 text-amber-300 font-medium text-sm border border-amber-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                  <RefreshCcw size={14} /> Solução Especializada
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Retrofit <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300 drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]">Industrial</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
                Modernize seus equipamentos antigos, estenda a vida útil da sua planta e reduza custos operacionais drasticamente sem a necessidade de comprar sistemas inteiramente novos.
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
              { icon: Timer, title: "-40%", desc: "Tempo de Parada", color: "orange" },
              { icon: Power, title: "+20 Anos", desc: "Vida Útil do Equipamento", color: "amber" },
              { icon: Zap, title: "100%", desc: "Garantia de Compatibilidade", color: "yellow" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0 group">
                <div className={`w-12 h-12 rounded-full bg-${stat.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
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
                <div className="inline-flex items-center justify-center p-2 bg-amber-50 rounded-xl mb-2">
                  <RefreshCcw className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Por que substituir se <br/> você pode renovar?
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"></div>
                <div className="text-lg text-slate-600 leading-relaxed font-light space-y-4">
                  <p>
                    O <strong>Retrofit</strong> consiste na atualização e modernização de equipamentos elétricos antigos (como disjuntores, relés e chaves) por tecnologias de última geração, mantendo rigorosamente a estrutura mecânica existente da sua planta.
                  </p>
                  <p>
                    Ao invés de gastar milhões com a substituição completa de um painel, nós projetamos gavetas e disjuntores adaptados em 3D que se encaixam perfeitamente nos seus cubículos originais. 
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-amber-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={imgTeste} alt="Renovação de Equipamentos" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
            </motion.div>

            {/* Bloco 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 bg-slate-900 rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative"
            >
              {/* Efeito de Fundo */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="lg:w-1/2 space-y-6 relative z-10">
                <div className="inline-flex items-center justify-center p-2 bg-orange-500/20 rounded-xl mb-2">
                  <CheckCircle2 className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">O Fim da Obsolescência</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full"></div>
                <div className="text-lg text-slate-300 leading-relaxed font-light space-y-4">
                  <p>
                    Com o passar das décadas, componentes originais saem de linha. Quando eles falham, a reposição é lenta e custosa.
                  </p>
                  <p>
                    O Retrofit não apenas resolve a dor das peças de reposição escassas, mas traz a sua planta para o padrão atual de conectividade da Indústria 4.0. Inserimos proteções digitais que permitem o <strong>monitoramento remoto</strong> e integração com o sistema de controle da fábrica.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative z-10">
                <div className="rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.2)] aspect-[4/3] group border border-slate-700">
                  <img src={imgTeste} alt="Indústria 4.0" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Vantagens Estratégicas</h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">A decisão mais inteligente e rentável para parques fabris que buscam conformidade orçamentária.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Power,
                title: "Confiabilidade",
                desc: "Substituição de componentes fadigados previne falhas repentinas e paradas de produção não programadas.",
                color: "amber"
              },
              {
                icon: RefreshCcw,
                title: "Compatibilidade 3D",
                desc: "Projetos customizados e modelados garantem o encaixe exato da nova tecnologia nos cubículos originais.",
                color: "orange"
              },
              {
                icon: Leaf,
                title: "Sustentabilidade",
                desc: "Evita o descarte ambiental de toneladas de metal, reaproveitando com inteligência a estrutura existente.",
                color: "emerald"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)] transition-all duration-300 group hover:-translate-y-2"
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
      <section className="py-24 bg-amber-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-orange-500"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto space-y-8">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Renove sua planta hoje.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-amber-100 leading-relaxed font-light">
              Descubra quanto você pode economizar atualizando sua infraestrutura elétrica com nossos serviços de Retrofit.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => navigate('/contato')}
                size="lg" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-amber-600 rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:shadow-2xl hover:scale-105"
              >
                Fale com Especialistas
              </Button>
              <Button 
                onClick={() => navigate('/projetos')}
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white/30 rounded-full px-10 py-7 text-lg font-bold transition-all"
              >
                Ver Portfólio <ArrowRight className="ml-2 h-5 w-5" />
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

export default Retrofit;