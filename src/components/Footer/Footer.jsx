import React from 'react';
import logo from '../../assets/logo.png';
import { Phone, MessageCircle } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-700/80 bg-slate-950 pt-14 pb-12 text-slate-200 shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.45)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/35 before:to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="bg-white p-2 rounded-lg inline-block">
              <img src={logo} alt="Logo Avolt" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-400 text-center md:text-left">
              Soluções completas em engenharia elétrica e automação industrial para o seu negócio.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Sobre</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="/certificacoes" className="hover:text-blue-400 transition-colors">Certificações</a></li>
              <li><a href="/produtos" className="hover:text-blue-400 transition-colors">Produtos</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/comercial" className="hover:text-blue-400 transition-colors">Comercial</a></li>
              <li><a href="/sac" className="hover:text-blue-400 transition-colors">SAC</a></li>
              <li><a href="/compliance" className="hover:text-blue-400 transition-colors">Compliance</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Fale Conosco</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+55 21 4444-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+55 21 4444-0001</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                <FaTwitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Avolt. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacidade" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
            <a href="/termos" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
