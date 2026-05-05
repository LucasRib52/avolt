import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap, ShieldAlert, Cpu, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import imgTeste from "../../assets/imgteste.jpg";

const Painel = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Distribuição e Controle de Energia",
      icon: Zap,
      description: [
        "Painéis de baixa tensão, média tensão e QGBT",
        "Quadros de distribuição e painéis de transferência (ATS)",
        "Painéis multimedidores",
        "Painéis e quadros de comando",
      ],
      image: imgTeste,
      route: "/baixa-tensao",
    },
    {
      title: "Acionamento de Motores e CCM",
      icon: Activity,
      description: [
        "Centros de Controle de Motores (CCM)",
        "CCM inteligente e painéis para acionamento de motores",
        "Inversores de frequência",
        "Soft starters",
      ],
      image: imgTeste,
      route: "/servicos",
    },
    {
      title: "Automação e Telemetria",
      icon: ShieldAlert,
      description: [
        "Painéis de automação",
        "Aplicação de CLP e IHM",
        "Sistemas de telemetria e monitoramento remoto",
        "Integração de sistemas",
      ],
      image: imgTeste,
      route: "/automacao-e-telemetria",
    },
    {
      title: "Infraestrutura, Comunicação e Energia Especial",
      icon: Cpu,
      description: [
        "Painéis de proteção e controle de geradores",
        "Painéis de servidores e carregadores para veículos elétricos",
        "Laudos técnicos",
        "Confecção e terminação de cabos ópticos (DGO)",
      ],
      image: imgTeste,
      route: "/servicos",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4 border border-blue-200">
              Nossas Especialidades
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          >
            SERVIÇOS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Soluções completas em engenharia elétrica para diferentes segmentos.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.map((item, index) => (
            <motion.div variants={itemVariants} key={index} className="bg-white rounded-3xl p-1 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 group flex flex-col h-full">
              <div className="h-56 rounded-[20px] overflow-hidden relative mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              
              <div className="px-6 pb-6 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => navigate(item.route)}
                  className="w-full bg-slate-50 hover:bg-blue-600 text-slate-900 hover:text-white transition-all duration-300 group/btn rounded-xl py-6 border border-slate-200 hover:border-transparent"
                >
                  Conhecer serviço
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button
            onClick={() => navigate("/servicos")}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6"
          >
            Conheça todos os serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Painel;
