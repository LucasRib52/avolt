import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Wrench,
  Headphones,
  Layers,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICO_LINHAS } from "@/data/servicoLinhas";
import servicosHero from "../../assets/servicos.png";
import Tecnologia from "../Tecnologia/Tecnologia";

const LOWER_WORDS = new Set(["de", "da", "do", "das", "dos", "e", "em", "a", "o", "na", "no"]);

function formatServiceTitle(title) {
  return title
    .toLowerCase()
    .split(/\s+/)
    .map((w, i) => {
      if (i > 0 && LOWER_WORDS.has(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

const HIGHLIGHTS = [
  {
    label: "Centro internacional SARAH de Neurorreabilitação e Neurociências",
    to: "/saude",
    hint: "Setor saúde",
  },
  {
    label: "Sistema de proteção contra arco voltaico — linha REA",
    to: "/protecao-contra-arco-eletrico",
    hint: "Segurança",
  },
];

const PILLARS = [
  {
    icon: Layers,
    title: "Seis frentes integradas",
    desc: "Do projeto ao campo, com o mesmo padrão de engenharia e documentação.",
  },
  {
    icon: Wrench,
    title: "Montagem e comissionamento",
    desc: "Execução alinhada a normas, prazos de obra e entrega assistida.",
  },
  {
    icon: Headphones,
    title: "Suporte ao ciclo de vida",
    desc: "Clareza para facilities, operação e expansões futuras.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 22 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemSpring = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function ServicoCard({ service, variants }) {
  const displayTitle = formatServiceTitle(service.title);
  return (
    <motion.article
      variants={variants}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md shadow-slate-200/50 ring-1 ring-slate-100/80 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-xl hover:shadow-blue-900/10"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-block rounded-lg bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            Linha AVOLT
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 text-center sm:px-6 sm:text-left">
        <h2 className="mb-3 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          {displayTitle}
        </h2>
        <ul className="mb-6 flex flex-1 flex-col gap-2.5 text-sm text-slate-600">
          {service.items.map((line) => (
            <li
              key={line}
              className="flex items-start justify-center gap-2.5 sm:justify-start"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
              </span>
              <span className="leading-snug">{line}</span>
            </li>
          ))}
        </ul>
        <Link
          to={service.to}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-auto w-full justify-center gap-2 rounded-2xl border-0 bg-gradient-to-r from-blue-700 to-blue-800 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/25 transition hover:from-blue-600 hover:to-blue-700"
          )}
        >
          Saiba mais
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}

const Servicos = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <section
        className="relative flex min-h-[72vh] items-end overflow-hidden bg-slate-950 sm:min-h-[78vh]"
        aria-labelledby="servicos-hero-heading"
      >
        <div className="absolute inset-0">
          <motion.img
            src={servicosHero}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center brightness-[0.4] saturate-[0.95]"
            initial={reduceMotion ? false : { scale: 1.07 }}
            animate={reduceMotion ? {} : { scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-blue-950/50"
            aria-hidden
          />
          <div
            className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]"
            aria-hidden
          />
          <div
            className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-[90px]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"
            aria-hidden
          />
        </div>

        <div className="relative z-10 w-full px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col items-center gap-6"
            >
              <motion.div variants={itemSpring}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 shadow-lg backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-sky-300" aria-hidden />
                  Portfólio de engenharia
                </span>
              </motion.div>
              <motion.h1
                id="servicos-hero-heading"
                variants={itemSpring}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                <span className="bg-gradient-to-r from-sky-200 via-white to-blue-200 bg-clip-text text-transparent">
                  Serviços
                </span>
              </motion.h1>
              <motion.p
                variants={itemSpring}
                className="max-w-2xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl"
              >
                As seis frentes da AVOLT — painéis, média tensão, shelters, automação, missão crítica
                e cases — com padrão único de qualidade e entrega.
              </motion.p>
              <motion.div
                variants={itemSpring}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Falar com o time
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/projetos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ver projetos
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 rounded-3xl border border-white/60 bg-white/95 p-8 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:grid-cols-3 sm:p-10"
          >
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="text-center sm:text-left">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:mx-0">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Linhas de atuação
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600 md:mx-0">
            Escolha a frente que melhor descreve sua necessidade — cada card leva à página detalhada.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 md:mx-0" />
        </motion.div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          aria-label="Linhas de serviço AVOLT"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {SERVICO_LINHAS.map((service) => (
            <ServicoCard key={service.id} service={service} variants={itemVariants} />
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
          aria-labelledby="servicos-destaques"
        >
          <h2
            id="servicos-destaques"
            className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 md:text-left"
          >
            Destaques
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <Link
                key={h.to}
                to={h.to}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md md:p-8"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {h.hint}
                </p>
                <p className="text-base font-semibold leading-snug text-slate-900 group-hover:text-blue-800">
                  {h.label}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  Ver página
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </motion.section>
      </main>

      <section
        className="px-4 pb-24 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10"
        aria-labelledby="cta-servicos-titulo"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_32px_64px_-12px_rgba(15,23,42,0.45)] ring-1 ring-white/10 sm:rounded-[2.25rem]">
            <div className="absolute inset-0">
              <motion.img
                src={servicosHero}
                alt=""
                aria-hidden
                className="h-full min-h-[380px] w-full object-cover sm:min-h-[360px]"
                initial={reduceMotion ? false : { scale: 1.06 }}
                whileInView={reduceMotion ? {} : { scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/82 to-slate-950/92"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-blue-900/20"
                aria-hidden
              />
              <div
                className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[100px]"
                aria-hidden
              />
            </div>
            <div className="relative z-10 px-6 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-24 md:px-14 md:pb-20 md:pt-28">
              <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/[0.07] px-8 pb-10 pt-12 shadow-2xl backdrop-blur-xl sm:px-10 sm:pb-12 sm:pt-14 md:rounded-3xl md:px-12 md:pb-14 md:pt-16">
                <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200/95 sm:mb-6 sm:text-xs">
                  Próximo passo
                </p>
                <h2
                  id="cta-servicos-titulo"
                  className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.15]"
                >
                  Precisa de uma proposta ou escopo técnico?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center text-base font-light leading-relaxed text-slate-200 sm:text-lg">
                  Descreva instalação, tensão, prazo e restrições de obra. Nossa equipe retorna com o
                  melhor caminho entre produto, serviço e norma.
                </p>
                <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    to="/contato"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Solicitar contato
                    <ArrowRight
                      className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                  <Link
                    to="/momentos"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Momentos de sucesso
                    <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="border-t border-slate-200 bg-slate-50">
        <Tecnologia />
      </div>
    </div>
  );
};

export default Servicos;
