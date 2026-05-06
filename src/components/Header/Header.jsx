import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Menu,
  ChevronDown,
  Zap,
  Shield,
  Cpu,
  Activity,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const tecnologias = [
  { name: "Engenharia dos 5Ps", path: "/engenharia-dos-5ps", icon: Settings },
  { name: "Proteção Contra Arco", path: "/protecao-contra-arco-eletrico", icon: Shield },
  { name: "Shelter MT Trafo BT", path: "/shelter-mt-trafo-bt", icon: Zap },
  { name: "Automação e Telemetria", path: "/automacao-e-telemetria", icon: Activity },
  { name: "Retrofit", path: "/retrofit", icon: Cpu },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isSolutionsRoute = tecnologias.some(
    (tec) => location.pathname === tec.path
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out"
    >
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          scrolled
            ? "sm:max-w-6xl mx-auto bg-white/90 backdrop-blur-xl sm:rounded-full border-b sm:border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-2 px-4 sm:px-6 lg:px-8"
            : "bg-white/95 backdrop-blur-md py-4 px-4 sm:px-8 xl:px-12 border-b border-slate-200/60 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 z-50 group"
            onClick={() => setIsOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img
                src={logo}
                alt="Logo Avolt"
                className={`w-auto object-contain transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-md ${
                  scrolled ? "h-10 sm:h-11" : "h-12 sm:h-14"
                }`}
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {["Home", "Quem Somos", "Momentos de Sucesso"].map((item, i) => {
              const paths = ["/", "/sobre", "/momentos"];
              const isActive = location.pathname === paths[i];

              return (
                <Link
                  key={item}
                  to={paths[i]}
                  className="relative px-4 py-2.5 rounded-full overflow-hidden group transition-all"
                >
                  <span
                    className={`relative z-10 text-[15px] lg:text-base font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-600 group-hover:text-blue-700"
                    }`}
                  >
                    {item}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-50/80 rounded-full -z-0 border border-blue-100/50"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 -z-10 scale-95 group-hover:scale-100" />
                </Link>
              );
            })}

            <DropdownMenu>
              <DropdownMenuTrigger className="relative px-4 py-2.5 rounded-full overflow-hidden group transition-all outline-none flex items-center gap-1">
                <span
                  className={`relative z-10 text-[15px] lg:text-base font-semibold transition-colors duration-300 flex items-center gap-1 ${
                    isSolutionsRoute
                      ? "text-blue-700"
                      : "text-slate-600 group-hover:text-blue-700"
                  }`}
                >
                  Soluções
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600" />
                </span>

                {isSolutionsRoute && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-50/80 rounded-full -z-0 border border-blue-100/50"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 rounded-full transition-all duration-300 -z-10 scale-95 group-hover:scale-100 group-data-[state=open]:scale-100" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="center"
                sideOffset={16}
                className="w-72 bg-white/95 backdrop-blur-2xl border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />

                {tecnologias.map((tec, index) => {
                  const Icon = tec.icon;

                  return (
                    <DropdownMenuItem
                      key={index}
                      asChild
                      className="rounded-xl mb-1 focus:bg-blue-50/80 focus:text-blue-700 transition-all duration-200 cursor-pointer p-0"
                    >
                      <Link
                        to={tec.path}
                        className="flex items-center gap-3 w-full px-3 py-3 group/item"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300 shadow-sm">
                          <Icon size={18} strokeWidth={2.5} />
                        </div>

                        <span className="font-semibold text-[15px]">
                          {tec.name}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3"
            >
              <Link to="/contato">
                <Button className="relative group overflow-hidden bg-blue-600 hover:bg-transparent text-white rounded-full px-7 py-5 shadow-[0_4px_14px_0_rgba(37,99,235,0.25)] transition-all hover:shadow-[0_6px_20px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 border border-transparent hover:border-blue-500 text-[15px] lg:text-base font-semibold">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                    Fale Conosco
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </nav>

          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative group rounded-full h-12 w-12 hover:bg-slate-100/80 transition-all"
                >
                  <Menu className="h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[400px] bg-white/95 backdrop-blur-3xl border-l-white/60 shadow-2xl p-0"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-white/10 pointer-events-none" />

                <div className="h-full overflow-y-auto px-6 py-12 flex flex-col gap-8 relative z-10">
                  <div className="flex flex-col gap-2">
                    {["Home", "Quem Somos", "Momentos de Sucesso"].map(
                      (item, i) => {
                        const paths = ["/", "/sobre", "/momentos"];
                        const isActive = location.pathname === paths[i];

                        return (
                          <Link
                            key={item}
                            to={paths[i]}
                            onClick={() => setIsOpen(false)}
                            className={`text-[19px] font-bold py-3.5 px-4 rounded-xl transition-all ${
                              isActive
                                ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100/50"
                                : "text-slate-800 hover:bg-slate-50 hover:text-blue-600"
                            }`}
                          >
                            {item}
                          </Link>
                        );
                      }
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-4 ${
                        isSolutionsRoute ? "text-blue-600" : "text-slate-400"
                      }`}
                    >
                      Soluções Especializadas
                    </span>

                    <div className="flex flex-col gap-1">
                      {tecnologias.map((tec, index) => {
                        const Icon = tec.icon;

                        return (
                          <Link
                            key={index}
                            to={tec.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 py-3 px-4 rounded-xl transition-all group"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                              <Icon size={16} strokeWidth={2.5} />
                            </div>

                            {tec.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 pb-4">
                    <Link to="/contato" onClick={() => setIsOpen(false)}>
                      <Button className="w-full relative group overflow-hidden bg-blue-600 text-white rounded-2xl py-7 text-[17px] font-bold shadow-[0_8px_25px_-5px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:opacity-0 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
                          Iniciar Projeto
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;