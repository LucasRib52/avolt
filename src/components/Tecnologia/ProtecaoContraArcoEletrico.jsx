import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ShieldAlert, Cpu, Activity, AlertTriangle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgTeste from "../../assets/imgteste.jpg";
import Tecnologia from "../Tecnologia/Tecnologia";

const ProtecaoContraArcoEletrico = () => {
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
            alt="Proteção Contra Arco Elétrico" 
            className="w-full h-full object-cover filter brightness-[0.25] saturate-50 sepia-[0.3] hue-rotate-[-30deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-50"></div>
          
          {/* Efeitos de luz no fundo */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
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
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-rose-500/20 text-rose-300 font-medium text-sm border border-rose-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                  <ShieldAlert size={14} /> Solução de Alta Segurança
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Proteção Contra <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300 drop-shadow-[0_0_30px_rgba(244,63,94,0.2)]">Arco Elétrico</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
                Desenvolvemos soluções avançadas de proteção contra arco elétrico, priorizando a segurança de pessoas, equipamentos e da operação.
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
              { icon: Zap, title: "< 2ms", desc: "Tempo de Detecção Óptica", color: "rose" },
              { icon: ShieldAlert, title: "100%", desc: "Prevenção de Explosões", color: "orange" },
              { icon: Activity, title: "NR-10", desc: "Conformidade Absoluta", color: "emerald" },
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
                <div className="inline-flex items-center justify-center p-2 bg-rose-50 rounded-xl mb-2">
                  <AlertTriangle className="h-6 w-6 text-rose-600" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  O perigo <br/> de frações de segundo.
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-400 rounded-full"></div>
                <div className="text-lg text-slate-600 leading-relaxed font-light space-y-4">
                  <p>
                    Nossos projetos seguem rigorosamente as normas técnicas e utilizam estudos específicos para identificar riscos, reduzir níveis de energia incidente e definir as melhores estratégias de mitigação.
                  </p>
                  <p>
                    Combinamos engenharia especializada, tecnologia e boas práticas para minimizar acidentes, paradas não programadas e danos ao sistema elétrico.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-rose-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={imgTeste} alt="Arco Elétrico Explicação" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
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
                  <ShieldAlert className="h-6 w-6 text-orange-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Preservação Operacional</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full"></div>
                <div className="text-lg text-slate-300 leading-relaxed font-light space-y-4">
                  <p>
                    Diferencial Avolt: foco absoluto em segurança, soluções personalizadas e engenharia que protege vidas e ativos críticos.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative z-10">
                <div className="rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(244,63,94,0.2)] aspect-[4/3] group border border-slate-700">
                  <img src={imgTeste} alt="Painel Protegido" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Vantagens Essenciais</h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">Uma necessidade tecnológica e regulamentar que a sua empresa não pode ignorar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldAlert,
                title: "Segurança Pessoal",
                desc: "Reduz a níveis ínfimos a energia incidente, protegendo fatalidades e queimaduras em operadores.",
                color: "rose"
              },
              {
                icon: Cpu,
                title: "Atuação Inteligente",
                desc: "Lógica cruzada de Luz Óptica + Sobrecorrente evita atuações indevidas por faroletes de manutenção.",
                color: "orange"
              },
              {
                icon: Activity,
                title: "Rápida Retomada",
                desc: "A extinção primária do arco minimiza resíduos e derretimentos do cobre, facilitando reparos.",
                color: "emerald"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(244,63,94,0.1)] transition-all duration-300 group hover:-translate-y-2"
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
      <section className="py-24 bg-rose-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-orange-600"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto space-y-8">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              A segurança <br/> em primeiro lugar.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-rose-100 leading-relaxed font-light">
              Avalie sua planta hoje mesmo. Adequações à norma NR-10 e projetos Turnkey para salvar vidas.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => navigate('/contato')}
                size="lg" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-rose-600 rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:shadow-2xl hover:scale-105"
              >
                Avaliação de Segurança
              </Button>
              <Button 
                onClick={() => navigate('/projetos')}
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white/30 rounded-full px-10 py-7 text-lg font-bold transition-all"
              >
                Ver Instalações <ArrowRight className="ml-2 h-5 w-5" />
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

export default ProtecaoContraArcoEletrico;