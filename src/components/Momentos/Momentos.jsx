import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star, Quote, ShieldCheck, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgTeste from "../../assets/imgteste.jpg";

const Momentos = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const navigate = useNavigate();

  const cards = [
    {
      title: "Expansão Industrial Petrobras",
      category: "Painéis de Média Tensão",
      icon: Zap,
      description: ["Modernização de 15 painéis", "Integração com SCADA", "Zero acidentes"],
      image: imgTeste,
      color: "blue"
    },
    {
      title: "Data Center TIVIT",
      category: "Eletrocentros / Shelters",
      icon: ShieldCheck,
      description: ["Shelters customizados", "Redundância tier III", "Entrega antecipada"],
      image: imgTeste,
      color: "indigo"
    },
    {
      title: "Usina Solar São Pedro",
      category: "Retrofit e Proteção",
      icon: Activity,
      description: ["Retrofit completo", "Aumento de 15% eficiência", "Proteção Contra Arco"],
      image: imgTeste,
      color: "emerald"
    },
    {
      title: "Hospital Sírio-Libanês",
      category: "Automação",
      icon: ShieldCheck,
      description: ["Automação de emergência", "Certificação BT", "Confiabilidade 99.9%"],
      image: imgTeste,
      color: "rose"
    },
    {
      title: "Indústria Automotiva Ford",
      category: "Telemetria",
      icon: Activity,
      description: ["Monitoramento remoto", "Redução de 30% em custos", "Manutenção preditiva"],
      image: imgTeste,
      color: "orange"
    },
    {
      title: "Saneamento Básico SABESP",
      category: "Turnkey",
      icon: Zap,
      description: ["Estações de bombeamento", "CLPs de última geração", "Projeto Turnkey"],
      image: imgTeste,
      color: "cyan"
    },
  ];

  const handleLoadMore = () => {
    setVisibleCards(cards.length);
  };

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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section Premium */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={imgTeste} 
            alt="Momentos de Sucesso" 
            className="w-full h-full object-cover filter brightness-[0.3] sepia-[0.1]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-slate-50"></div>
          {/* Elementos Luminosos */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 text-white font-medium text-sm border border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" /> Momento de sucesso
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Atuamos onde a engenharia é <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">realmente colocada à prova.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-2xl mx-auto space-y-4"
          >
            <p>Projetos que exigem:</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">operação contínua</span>
              <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">alta confiabilidade</span>
              <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">resposta rápida</span>
              <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">segurança técnica</span>
            </div>
            <p className="mt-8 text-2xl font-semibold text-white">Porque energia não pode falhar.</p>
          </motion.div>
        </div>
      </section>

      {/* Introdução com Card em Overlay e Efeito Vidro */}
      <section className="relative -mt-24 z-20 container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Decoração interna no card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <Quote className="h-16 w-16 text-blue-200 mb-8 mx-auto relative z-10" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center relative z-10">Conectando ideias ao redor do mundo!</h2>
          <p className="text-xl text-slate-600 leading-relaxed text-center font-light relative z-10">
            Acreditamos que cada projeto é único. Nossos clientes não buscam apenas componentes elétricos, buscam <strong className="text-blue-600 font-semibold">inovação, segurança e performance</strong>. É com muito orgulho que apresentamos as parcerias que nos ajudam a moldar o futuro da engenharia.
          </p>
        </motion.div>
      </section>

      {/* Seção de Vídeo Moderna - Estilo Apple */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-24 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">A Avolt está conectada com você!</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                Nossa tecnologia está presente nas maiores indústrias. Não apenas fabricamos, nós <strong className="text-white font-medium">vivenciamos a sua operação</strong> para entregar exatamente o que você precisa.
              </p>
              <Button className="mt-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all group">
                Assistir Manifesto <PlayCircle className="ml-2 h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-video shadow-[0_20px_60px_rgba(0,0,0,0.5)] group border border-white/10"
            >
              <img src={imgTeste} alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center cursor-pointer border border-white/30 hover:bg-white/40 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300">
                  <PlayCircle className="h-10 w-10 text-white drop-shadow-md ml-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid de Projetos - Cards Glassmorphism */}
      <section className="pb-32 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Nossas Entregas de Sucesso</h2>
            <p className="text-xl text-slate-600 font-light">
              Explore os projetos reais onde fomos além das expectativas e superamos as barreiras da engenharia moderna.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
          >
            {cards.slice(0, visibleCards).map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  variants={itemVariants} 
                  key={index} 
                  className="bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col sm:flex-row gap-6 group overflow-hidden"
                >
                  {/* Imagem do Projeto */}
                  <div className="relative w-full sm:w-2/5 h-64 sm:h-auto rounded-3xl overflow-hidden shrink-0">
                    <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className={`absolute top-4 left-4 bg-${card.color}-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md`}>
                      {card.category}
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="flex-grow flex flex-col justify-center py-4 pr-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-${card.color}-50 text-${card.color}-600 flex items-center justify-center shrink-0 group-hover:bg-${card.color}-600 group-hover:text-white transition-colors duration-300`}>
                        <Icon size={20} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {card.description.map((desc, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${card.color}-500 mr-3 shrink-0`}></div>
                          <span className="text-[15px] font-medium">{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => navigate("/momentos/detalhes1")}
                      className={`w-full justify-between bg-slate-50 hover:bg-${card.color}-50 text-slate-700 hover:text-${card.color}-700 border border-slate-100 hover:border-${card.color}-200 group/btn rounded-xl py-6 font-semibold shadow-sm transition-all`}
                    >
                      Estudo completo
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {visibleCards < cards.length && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <Button 
                onClick={handleLoadMore} 
                className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 rounded-full px-10 py-7 text-lg font-bold transition-all shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)] hover:-translate-y-1 group"
              >
                Carregar Mais Histórias <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Momentos;