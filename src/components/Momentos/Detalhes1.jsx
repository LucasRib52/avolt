import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Lightbulb, Trophy, Target, Clock, TrendingUp, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import imgTeste from "../../assets/imgteste.jpg";

const Detalhes1 = () => {
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
            {/* Banner Principal Estilo Apple */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0">
                    <motion.img 
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        src={imgTeste} 
                        alt="História de Sucesso" 
                        className="w-full h-full object-cover filter brightness-[0.25] saturate-50" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-slate-50"></div>
                    
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
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <motion.div variants={fadeInUp}>
                                <Button 
                                    onClick={() => navigate('/momentos')}
                                    variant="ghost"
                                    className="mb-8 text-slate-300 hover:text-white hover:bg-white/10 rounded-full pl-2 pr-6"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Histórias
                                </Button>
                            </motion.div>
                            
                            <motion.div variants={fadeInUp} className="mb-6 flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                                    <Trophy size={14} /> Case de Estudo
                                </span>
                                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white/80 font-medium text-sm border border-white/10 backdrop-blur-md">
                                    Indústria de Óleo & Gás
                                </span>
                            </motion.div>
                            
                            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                                Expansão Industrial <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">Petrobras</span>
                            </motion.h1>
                            
                            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
                                Modernização de 15 painéis de Média Tensão e integração completa com sistema SCADA sem paralisar a produção.
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
                            { icon: Clock, title: "-30%", desc: "Tempo de Downtime", color: "blue" },
                            { icon: TrendingUp, title: "+15%", desc: "Eficiência Energética", color: "cyan" },
                            { icon: ShieldCheck, title: "100%", desc: "Conformidade NR-10", color: "emerald" },
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

            {/* Conteúdo da História */}
            <section className="pb-32 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32 max-w-6xl mx-auto">
                        
                        {/* Seção 1: O Desafio */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                        >
                            <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
                                <div className="inline-flex items-center justify-center p-2 bg-rose-50 rounded-xl mb-2">
                                    <Target className="h-6 w-6 text-rose-600" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">O Desafio</h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-orange-400 rounded-full"></div>
                                <div className="prose prose-lg text-slate-600 leading-relaxed font-light">
                                    <p>
                                        A instalação operava com painéis desatualizados que não apenas representavam um risco à segurança dos operadores, como também não ofereciam conectividade com o novo Centro de Controle Operacional (CCO).
                                    </p>
                                    <p>
                                        O maior obstáculo? A modernização precisava acontecer com <strong>janelas de parada (downtime) quase nulas</strong>, pois a produção não poderia ser interrompida.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 lg:order-2">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <div className="absolute inset-0 bg-rose-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img src={imgTeste} alt="O Desafio" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Seção 2: A Solução */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
                        >
                            <div className="lg:w-1/2 space-y-6">
                                <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-2">
                                    <Lightbulb className="h-6 w-6 text-blue-600" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Nossa Solução</h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                                <div className="prose prose-lg text-slate-600 leading-relaxed font-light">
                                    <p>
                                        Adotamos uma abordagem de <strong>Retrofit Customizado</strong>. Em vez de substituir os cubículos inteiros, fabricamos gavetas e componentes adaptados em 3D para encaixar perfeitamente na estrutura original.
                                    </p>
                                    <p>
                                        Além disso, instalamos CLPs e relés de proteção de última geração, comunicando via fibra óptica com a plataforma SCADA da planta.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img src={imgTeste} alt="A Solução" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Seção 3: O Resultado */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-slate-900 rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative"
                        >
                            {/* Efeito de Fundo */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                            <div className="lg:w-1/2 space-y-6 relative z-10">
                                <div className="inline-flex items-center justify-center p-2 bg-emerald-500/20 rounded-xl mb-2">
                                    <Trophy className="h-6 w-6 text-emerald-400" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">O Resultado</h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"></div>
                                <div className="prose prose-lg text-slate-300 leading-relaxed font-light">
                                    <p>
                                        A integração ocorreu <strong>2 semanas antes do prazo limite</strong>, com as trocas sendo feitas durante a madrugada sem afetar a produção diurna.
                                    </p>
                                    <p>
                                        Hoje, a planta opera com 100% de visibilidade de seus ativos elétricos, prevenção ativa contra falhas e total adequação às normas de segurança vigentes.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full relative z-10">
                                <div className="rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)] aspect-[4/3] group border border-slate-700">
                                    <img src={imgTeste} alt="O Resultado" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                </div>
                            </div>
                        </motion.div>

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
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight">A próxima história <br/> pode ser a sua.</motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-blue-100 leading-relaxed font-light">
                            Estamos prontos para aplicar nossa engenharia de excelência na sua indústria. Fale com um especialista hoje mesmo.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button 
                                onClick={() => navigate('/contato')}
                                size="lg" 
                                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-600 rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:shadow-2xl hover:scale-105"
                            >
                                Iniciar Projeto
                            </Button>
                            <Button 
                                onClick={() => navigate('/momentos')}
                                size="lg" 
                                variant="outline"
                                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white/30 rounded-full px-10 py-7 text-lg font-bold transition-all"
                            >
                                <ArrowLeft className="mr-2 h-5 w-5" /> Ver mais casos
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Detalhes1;