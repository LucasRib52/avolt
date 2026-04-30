import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contato = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-blue-100 rounded-bl-full opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Vamos <span className="text-blue-600">Conversar?</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "5rem" }} transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-blue-600 rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600"
          >
            Estamos prontos para atender a sua empresa com as melhores soluções em engenharia elétrica e automação industrial.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
          
          {/* Informações */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Informações de Contato</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5 text-slate-700 group">
                  <div className="p-4 bg-white shadow-md shadow-blue-100 text-blue-600 rounded-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1 text-lg">Sede Principal</p>
                    <p className="text-slate-600 leading-relaxed">Rua Marialva, 89 - Higienópolis<br/>Rio de Janeiro - RJ, CEP: 21061-140</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-slate-700 group">
                  <div className="p-4 bg-white shadow-md shadow-blue-100 text-blue-600 rounded-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1 text-lg">Telefone</p>
                    <p className="text-slate-600">+55 (21) 3556-1010</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-slate-700 group">
                  <div className="p-4 bg-white shadow-md shadow-blue-100 text-blue-600 rounded-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1 text-lg">E-mail Comercial</p>
                    <p className="text-slate-600">comercial@avolt.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Siga nossas redes</h2>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/avoltengenharia" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm border border-slate-100 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200 rounded-2xl transition-all duration-300 text-blue-600">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/avoltengenharia" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm border border-slate-100 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200 rounded-2xl transition-all duration-300 text-blue-600">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/avoltengenharia" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm border border-slate-100 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200 rounded-2xl transition-all duration-300 text-blue-600">
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Envie sua Mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">Seu Nome</label>
                  <Input id="name" type="text" placeholder="Nome completo" required className="bg-slate-50 border-slate-200 h-14 rounded-xl text-base px-4 focus-visible:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700">Empresa</label>
                  <Input id="company" type="text" placeholder="Nome da sua empresa" className="bg-slate-50 border-slate-200 h-14 rounded-xl text-base px-4 focus-visible:ring-blue-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">Seu E-mail</label>
                <Input id="email" type="email" placeholder="contato@empresa.com" required className="bg-slate-50 border-slate-200 h-14 rounded-xl text-base px-4 focus-visible:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Sua Mensagem</label>
                <Textarea id="message" placeholder="Como podemos ajudar o seu negócio?" rows={6} required className="bg-slate-50 border-slate-200 rounded-xl text-base p-4 resize-none focus-visible:ring-blue-500" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-16 text-lg font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-1">
                Enviar Mensagem Agora
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Mapa do Google */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890123!2d-43.1234567890123!3d-22.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0xabcdef1234567890!2sRua%20Marialva%2C%2089%20-%20Higien%C3%B3polis%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021061-140!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contato;
