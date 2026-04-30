import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Globe, Factory, Sparkles, CheckCircle2 } from "lucide-react";
import bannerImage from "../../assets/im.jpg";
import clienteImg from "../../assets/cliente1.png";

const Sobre = () => {
  const { ref: highlightRef, inView: highlightInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={bannerImage} 
            alt="Sobre Nós" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6"
          >
            Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Somos</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "6rem" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-blue-500 rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-200 leading-relaxed font-light"
          >
            Nossa trajetória é marcada pela busca constante da excelência, oferecendo soluções completas e customizadas em engenharia elétrica e automação industrial.
          </motion.p>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-20 bg-white relative z-20 -mt-16" ref={highlightRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={highlightInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center p-10 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="text-5xl lg:text-6xl font-extrabold text-blue-600 mb-4 font-mono group-hover:scale-110 transition-transform">
                {highlightInView ? <CountUp end={26} duration={2.5} suffix="+" /> : "0+"}
              </div>
              <p className="text-slate-600 font-semibold uppercase tracking-widest text-sm">Anos de Experiência</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center p-10 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="text-5xl lg:text-6xl font-extrabold text-blue-600 mb-4 font-mono group-hover:scale-110 transition-transform">
                {highlightInView ? <CountUp end={500} duration={2.5} suffix="+" /> : "0+"}
              </div>
              <p className="text-slate-600 font-semibold uppercase tracking-widest text-sm">Projetos Realizados</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center p-10 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="text-5xl lg:text-6xl font-extrabold text-blue-600 mb-4 font-mono group-hover:scale-110 transition-transform">
                {highlightInView ? <CountUp end={300} duration={2.5} suffix="+" /> : "0+"}
              </div>
              <p className="text-slate-600 font-semibold uppercase tracking-widest text-sm">Clientes Atendidos</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-900/50 rotate-3 hover:rotate-6 transition-transform">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-slate-300 leading-relaxed">Ser referência no mercado, entregando qualidade, segurança e inovação em cada projeto executado.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-900/50 -rotate-3 hover:-rotate-6 transition-transform">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-slate-300 leading-relaxed">Transformar desafios em oportunidades, sendo a escolha número um para soluções de engenharia complexas.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-900/50 rotate-3 hover:rotate-6 transition-transform">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-slate-300 leading-relaxed">Integridade, compromisso, foco no cliente, inovação contínua e paixão em tudo que fazemos.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-32 bg-white relative overflow-hidden" ref={timelineRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Nossa História
            </motion.h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-500 to-blue-100 transform md:-translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-16">
              {[
                { year: "1996", title: "O Início", desc: "Início da nossa jornada com grandes sonhos e metas focadas em inovação elétrica.", icon: Sparkles },
                { year: "2005", title: "Expansão", desc: "Expansão para novos mercados, construção de nossa sede e conquistas notáveis no setor industrial.", icon: Factory },
                { year: "2015", title: "Nacionalização", desc: "Impacto nacional e projetos em multinacionais com soluções robustas de automação.", icon: Globe },
                { year: "2022", title: "Liderança", desc: "Reconhecimento como líder no setor e obtenção de novas certificações internacionais.", icon: Award }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex items-center justify-between md:justify-normal ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} group`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true, margin: "-50px" }} 
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 shrink-0 shadow-lg z-10"
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-50px" }} 
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="ml-20 md:ml-0 md:w-5/12 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-300 transition-colors"
                  >
                    <span className="text-sm font-bold text-blue-500 bg-blue-50 py-1 px-3 rounded-full mb-4 inline-block">{item.year}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-24 bg-white border-t border-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/20 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
              <CheckCircle2 size={16} /> Nossos Parceiros
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Empresas que confiam em nós
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light max-w-3xl mx-auto">
              "A melhor <span className="text-blue-600 font-semibold">propaganda</span> é feita por <span className="text-blue-600 font-semibold">clientes satisfeitos</span>"
            </p>
          </motion.div>
        </div>

        {/* Marquee Infinite Slider */}
        <div className="relative w-full max-w-[100vw] flex flex-col gap-8 py-4">
          {/* Sombras laterais para dar profundidade ao slider */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          {/* Primeira linha (indo para a esquerda) */}
          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {/* Array duplicado para criar o efeito contínuo (loop infinito) */}
            {[...Array.from({ length: 8 }), ...Array.from({ length: 8 })].map((_, index) => (
              <div 
                key={`row1-${index}`} 
                className="mx-3 md:mx-5 w-[220px] h-[130px] bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)] hover:border-blue-100 flex flex-col items-center justify-center group transition-all duration-300 hover:-translate-y-2 shrink-0 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/50 transition-all duration-500" />
                <img 
                  src={clienteImg} 
                  alt="Cliente Parceiro" 
                  className="w-24 h-auto object-contain mb-3 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 relative z-10" 
                />
                <p className="text-[11px] font-bold text-slate-300 group-hover:text-blue-600 transition-colors uppercase tracking-widest relative z-10">Empresa Parceira</p>
              </div>
            ))}
          </motion.div>

          {/* Segunda linha (indo para a direita) */}
          <motion.div 
            className="flex w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[...Array.from({ length: 8 }), ...Array.from({ length: 8 })].map((_, index) => (
              <div 
                key={`row2-${index}`} 
                className="mx-3 md:mx-5 w-[220px] h-[130px] bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)] hover:border-blue-100 flex flex-col items-center justify-center group transition-all duration-300 hover:-translate-y-2 shrink-0 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/50 transition-all duration-500" />
                <img 
                  src={clienteImg} 
                  alt="Cliente Parceiro" 
                  className="w-24 h-auto object-contain mb-3 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 relative z-10" 
                />
                <p className="text-[11px] font-bold text-slate-300 group-hover:text-blue-600 transition-colors uppercase tracking-widest relative z-10">Empresa Parceira</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Sobre;
