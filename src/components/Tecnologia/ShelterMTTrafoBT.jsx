import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Factory,
  Zap,
  Building2,
  Boxes,
  Construction,
  Gauge,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "../../assets/13.png";
import imgInterior from "../../assets/12.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 22 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const DIFERENCIAIS = [
  {
    icon: Gauge,
    title: "Qualidade fabril",
    desc: "Montagem sob teto industrial, com controle de limpeza, torque e testes — menos surpresa em campo.",
    iconWrap: "bg-indigo-50 text-indigo-600 ring-indigo-100",
    hoverCard: "hover:border-indigo-100 hover:shadow-indigo-500/10",
  },
  {
    icon: Boxes,
    title: "Expansibilidade",
    desc: "Módulos e abrigos podem evoluir com a planta: expansão planejada sem refazer toda a sala elétrica.",
    iconWrap: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    hoverCard: "hover:border-cyan-100 hover:shadow-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Testes e FAT",
    desc: "Integração MT/BT com protocolos de fábrica para reduzir comissionamento e primeira energização.",
    iconWrap: "bg-blue-50 text-blue-700 ring-blue-100",
    hoverCard: "hover:border-blue-100 hover:shadow-blue-500/10",
  },
];

const ESCOPO = [
  {
    title: "Eletrocentros customizados",
    desc: "Layout, ventilação, acessos e integração de equipamentos conforme classe de local e operação.",
    icon: Building2,
  },
  {
    title: "Soluções modulares",
    desc: "Abrigos transportáveis ou seccionados para reduzir prazo de obra e dependência de clima.",
    icon: Boxes,
  },
  {
    title: "Projetos chave na mão",
    desc: "Da engenharia ao comissionamento, com documentação e interface clara com cliente e fornecedores.",
    icon: Factory,
  },
  {
    title: "Instalações robustas e seguras",
    desc: "Estrutura, aterramento, intertravamentos e proteções alinhados a normas e boas práticas de MT/BT.",
    icon: ShieldCheck,
  },
];

const ShelterMTTrafoBT = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* Hero */}
      <section className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-slate-950 py-16 pb-28 pt-24 md:min-h-[82vh] md:py-20 md:pb-36 md:pt-28 lg:pb-44 lg:pt-32">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={imgHero}
            alt="Shelter, abrigo e eletrocentro AVOLT para média tensão e trafo BT"
            className="h-full w-full object-cover brightness-[0.3] saturate-[0.85]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/75 to-slate-50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/4 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[100px] mix-blend-screen"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[90px] mix-blend-screen"
            aria-hidden
          />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col items-center gap-8 text-center md:gap-10 lg:gap-12"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/15 px-5 py-2 text-sm font-medium text-indigo-100 backdrop-blur-md">
                  <Factory className="h-4 w-4 text-cyan-300" aria-hidden />
                  Abrigos e eletrocentro · integração off-site
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white md:text-6xl md:leading-[1.08]"
              >
                Shelters modulares
                <br />
                <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  MT, trafo BT e engenharia AVOLT
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="max-w-2xl text-pretty text-lg font-light leading-[1.75] text-slate-300 md:text-xl md:leading-[1.7]"
              >
                Concentramos equipamentos de média tensão, transformação e baixa tensão em abrigos
                projetados para robustez, confiabilidade e segurança — com menos obra civil e mais
                previsibilidade de prazo.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex w-full max-w-lg flex-col items-stretch gap-5 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6"
              >
                <Button
                  asChild
                  className="h-auto min-h-[3.25rem] rounded-full bg-indigo-600 px-10 py-4 text-base text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-500 md:min-h-[3.5rem] md:px-12 md:py-5"
                >
                  <Link to="/contato">
                    Falar com especialistas
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto min-h-[3.25rem] rounded-full border-white/25 bg-white/5 px-10 py-4 text-base text-white backdrop-blur-sm hover:bg-white/10 md:min-h-[3.5rem] md:px-12 md:py-5"
                >
                  <Link to="/projetos">Ver instalações</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Métricas — classes explícitas (Tailwind não gera bg-${var}) */}
      <section className="relative z-20 -mt-14 px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-6xl rounded-3xl border border-white/80 bg-white/90 p-8 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.18)] backdrop-blur-xl md:p-10"
        >
          <div className="grid grid-cols-1 gap-8 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              {
                icon: Gauge,
                title: "-60%",
                desc: "Tempo típico de canteiro",
                wrap: "bg-indigo-50 text-indigo-600",
              },
              {
                icon: Construction,
                title: "Zero",
                desc: "Obra civil tradicional completa",
                wrap: "bg-cyan-50 text-cyan-700",
              },
              {
                icon: Boxes,
                title: "100%",
                desc: "Testado em fábrica (FAT)",
                wrap: "bg-blue-50 text-blue-700",
              },
            ].map((stat) => (
              <div
                key={stat.desc}
                className="flex flex-col items-center px-2 pt-6 text-center first:pt-0 md:px-6 md:pt-0 md:first:pl-0"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition duration-300 group-hover:scale-110 ${stat.wrap}`}
                >
                  <stat.icon className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{stat.title}</h2>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* O que são */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm md:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                Conceito
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Por que abrigos e eletrocentro?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Em vez de construir salas elétricas no canteiro, a solução nasce industrializada:
                estrutura, equipamentos, ventilação e sistemas auxiliares são integrados em fábrica.
                No campo, o foco vira fundação, interligações e comissionamento — com menos
                variável climática e mais controle de qualidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Escopo — alinhado ao card SERVIÇOS */}
      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-indigo-100/80 blur-3xl"
          aria-hidden
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-14 text-center md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              O que entregamos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
            >
              Linha alinhada ao portfólio AVOLT de abrigos e eletrocentros — do projeto à operação.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {ESCOPO.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg md:p-8"
              >
                <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-700 ring-1 ring-indigo-100 transition group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-500">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bloco texto + imagem */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:order-1"
            >
              <div className="inline-flex rounded-xl bg-indigo-50 p-2 text-indigo-600">
                <Building2 className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl md:leading-tight">
                Construção off-site.
                <br />
                Instalação objetiva.
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              <div className="space-y-4 text-lg font-light leading-relaxed text-slate-600">
                <p>
                  Integramos equipamentos, ventilação, proteção elétrica e facilidade de manutenção
                  em um único conjunto pensado para a vida útil da subestação.
                </p>
                <p>
                  Cada abrigo é dimensionado para as condições reais de operação — normas, ambiente,
                  logística de transporte e expansão futura.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-600/20 to-cyan-400/10 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl">
                <img
                  src={imgHero}
                  alt="Eletrocentro e equipamentos integrados AVOLT"
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloco escuro — turn-key */}
      <section className="bg-slate-900 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-indigo-600/20 blur-xl"
                aria-hidden
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={imgInterior}
                  alt="Integração de cubículos e painéis em shelter AVOLT"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-6 left-6 right-6 text-sm text-slate-200 md:text-base">
                  Engenharia, fabricação e padrão construtivo pensados para máxima confiabilidade
                  operacional.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 space-y-6 lg:order-2"
            >
              <div className="inline-flex rounded-xl bg-cyan-500/20 p-2 text-cyan-300">
                <Boxes className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Turn-key e mobilidade</h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
              <p className="text-lg leading-relaxed text-slate-300">
                Diferencial AVOLT: fabricação customizada, alto padrão construtivo e integração MT/BT
                com rastreabilidade — ideal para mineradoras, data centers, renováveis e indústrias
                com pressão de cronograma.
              </p>
              <ul className="space-y-3 text-slate-200">
                {[
                  "Menos interferência com obra civil e climática",
                  "Expansão modular quando a demanda crescer",
                  "Documentação e testes alinhados ao comissionamento",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid vantagens — cores fixas */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-slate-50/60" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Arquitetura integrada
            </h2>
            <p className="text-lg font-light text-slate-600 md:text-xl">
              Uma resposta definitiva para ambientes exigentes: menos improviso em campo, mais
              previsibilidade técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {DIFERENCIAIS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-[2rem] border border-slate-100 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${item.hoverCard}`}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:scale-110 ${item.iconWrap}`}
                >
                  <item.icon className="h-8 w-8" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-lg font-light leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-indigo-700 py-20 text-center md:py-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-indigo-700 to-blue-700"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[100px]"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:gap-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight"
            >
              Diminua a curva de obra.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg leading-relaxed text-indigo-100 md:text-xl"
            >
              Transforme a implantação da sala elétrica em um fornecimento integrado, testado e
              pronto para comissionar.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex w-full max-w-md flex-col gap-5 sm:max-w-none sm:flex-row sm:justify-center sm:gap-6"
            >
              <Button
                asChild
                className="h-auto min-h-[3.25rem] rounded-full bg-white px-10 py-4 text-base font-semibold text-indigo-700 shadow-xl hover:bg-slate-50 md:min-h-[3.5rem] md:px-12 md:py-5"
              >
                <Link to="/contato">
                  Orçar shelter AVOLT
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto min-h-[3.25rem] rounded-full border-white/35 bg-transparent px-10 py-4 text-base font-semibold text-white hover:bg-white/10 md:min-h-[3.5rem] md:px-12 md:py-5"
              >
                <Link to="/projetos">
                  Ver instalações
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShelterMTTrafoBT;
