import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle, Star } from "lucide-react";
import certificado from "../../assets/certificado.png";

const Certificacao = () => {
  // Duplicamos a lista para o efeito infinito (Marquee)
  const certificates = [
    { id: 1, src: certificado, alt: "Certificado ISO" },
    { id: 2, src: certificado, alt: "Certificado Siemens" },
    { id: 3, src: certificado, alt: "Certificado Qualidade" },
    { id: 4, src: certificado, alt: "Certificado Segurança" },
    { id: 5, src: certificado, alt: "Certificado Excelência" },
    { id: 6, src: certificado, alt: "Certificado Parceiro" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-white"></div>
      <div className="absolute -left-[20%] top-0 w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200">
              <Award size={16} /> Excelência Comprovada
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Certificações</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
              Garantia de qualidade, segurança e conformidade com os mais altos padrões do mercado industrial global.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Infinite Slider */}
      <div className="relative w-full max-w-[100vw] flex flex-col py-8">
        {/* Sombras laterais para fade-out no slider */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

        {/* Linha única de certificados indo para a esquerda */}
        <motion.div 
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {/* Array duplicado para criar o efeito contínuo (loop infinito) */}
          {[...certificates, ...certificates, ...certificates].map((cert, index) => (
            <div 
              key={`cert-${index}`} 
              className="mx-4 md:mx-6 w-[280px] sm:w-[320px] aspect-[4/3] bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] shrink-0 cursor-pointer relative overflow-hidden"
            >
              {/* Efeito de Brilho no Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-cyan-50/0 group-hover:from-blue-50/80 group-hover:to-cyan-50/80 transition-all duration-500" />
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <ShieldCheck className="text-blue-500 w-6 h-6" />
              </div>

              <div className="w-full h-full p-8 flex items-center justify-center relative z-10">
                <img 
                  src={cert.src} 
                  alt={cert.alt} 
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Borda inferior que acende no hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust Indicators */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-200 pt-12"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="text-emerald-500 w-5 h-5" />
            <span className="text-slate-700 font-medium text-sm md:text-base">Padrões Internacionais</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="text-amber-500 w-5 h-5" />
            <span className="text-slate-700 font-medium text-sm md:text-base">Qualidade Auditada</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-blue-600 w-5 h-5" />
            <span className="text-slate-700 font-medium text-sm md:text-base">Segurança Máxima</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificacao;