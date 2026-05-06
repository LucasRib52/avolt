import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Zap,
  Activity,
  Building2,
  FileCheck2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import saudeHero from "../../assets/saude.jpg";
import engenharia from "../../assets/engenharia.jpg";
import Tecnologia from "../Tecnologia/Tecnologia";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      type: "spring",
      stiffness: 90,
      damping: 22,
    },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemSpring = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const benefits = [
  {
    title: "Continuidade assistencial",
    desc: "Arquitetura elétrica pensada para cenários de falha — do quadro geral às cargas que não podem parar.",
    icon: HeartPulse,
    accent: "from-rose-500/20 to-rose-600/5",
    ring: "group-hover:shadow-rose-500/20",
  },
  {
    title: "Segurança e normas",
    desc: "Aderência a boas práticas e documentação clara para auditoria, comissionamento e operação segura.",
    icon: ShieldCheck,
    accent: "from-sky-500/20 to-sky-600/5",
    ring: "group-hover:shadow-sky-500/20",
  },
  {
    title: "Desempenho energético",
    desc: "Medição, proteção e manobra coordenadas para reduzir perdas e facilitar manutenção programada.",
    icon: Zap,
    accent: "from-amber-500/15 to-amber-600/5",
    ring: "group-hover:shadow-amber-500/20",
  },
];

const solutions = [
  {
    title: "Painéis e distribuição",
    desc: "Quadros de baixa e média tensão, arranjos redundantes e seccionamento lógico para áreas críticas.",
    icon: Building2,
  },
  {
    title: "Automação e supervisão",
    desc: "Integração com sistemas de gestão predial e telemetria para visibilidade em tempo real.",
    icon: Activity,
  },
  {
    title: "Comissionamento e entrega",
    desc: "Testes, checklist e entrega com rastreio — do projeto à operação assistida.",
    icon: FileCheck2,
  },
];

const SetorSaude = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex items-end overflow-hidden bg-slate-950"
        aria-labelledby="saude-hero-heading"
      >
        <div className="absolute inset-0">
          <motion.img
            src={saudeHero}
            alt=""
            aria-hidden
            className="h-full w-full object-cover brightness-[0.45] saturate-[0.85]"
            initial={reduceMotion ? false : { scale: 1.08 }}
            animate={reduceMotion ? {} : { scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40"
            aria-hidden
          />
          <div
            className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-rose-500/25 blur-[100px]"
            aria-hidden
          />
          <div
            className="absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[90px]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60"
            aria-hidden
          />
        </div>

        <div className="relative z-10 w-full px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col gap-8"
            >
              <motion.div variants={itemSpring}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-rose-100 shadow-lg shadow-rose-900/20 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-rose-300" aria-hidden />
                  Infraestrutura elétrica · missão crítica
                </span>
              </motion.div>

              <motion.h1
                id="saude-hero-heading"
                variants={itemSpring}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Setor da{" "}
                <span className="bg-gradient-to-r from-rose-200 via-white to-cyan-200 bg-clip-text text-transparent">
                  Saúde
                </span>
              </motion.h1>

              <motion.p
                variants={itemSpring}
                className="max-w-2xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl"
              >
                Energia confiável para hospitais, clínicas e centros de diagnóstico — com engenharia
                AVOLT focada em continuidade, segurança e clareza operacional.
              </motion.p>

              <motion.div
                variants={itemSpring}
                className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-xl shadow-black/20 transition hover:bg-rose-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Falar com especialistas
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/missao-critica"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ver missão crítica
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro + visual */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_25px_80px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[420px]">
                <img
                  src={engenharia}
                  alt="Infraestrutura elétrica e engenharia AVOLT"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-transparent to-rose-900/20" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/40 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium text-white">
                    Cada detalhe do quadro importa quando a carga é vida em operação.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                  <Stethoscope className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Por que a saúde exige outro patamar de engenharia?
                </h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-500 to-cyan-500" />
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Em ambientes hospitalares, a instalação elétrica deixa de ser “infraestrutura de
                  apoio” e passa a ser parte do atendimento: imagem, UTIs, centros cirúrgicos e
                  dados clínicos dependem de energia estável e previsível.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  A AVOLT projeta e entrega soluções com foco em disponibilidade, seccionamento
                  inteligente e rastreio documental — do conceito à operação assistida.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="beneficios-saude">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12 text-center md:text-left"
          >
            <h2
              id="beneficios-saude"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              O que você ganha com a AVOLT
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 md:mx-0">
              Três pilares que sustentam projetos críticos no setor da saúde.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.article
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl ${b.ring}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${b.accent} blur-2xl transition duration-500 group-hover:scale-110`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-2xl bg-slate-900 p-3 text-white shadow-lg">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{b.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{b.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions strip */}
      <section
        className="relative overflow-hidden bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8"
        aria-labelledby="solucoes-saude"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-600/25 via-transparent to-cyan-600/20" />
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <h2 id="solucoes-saude" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Soluções que acompanham o ciclo do projeto
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Da especificação à entrega documentada — com linguagem clara para equipes clínicas e
              de facilities.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
                >
                  <Icon className="mb-4 h-10 w-10 text-rose-300" aria-hidden />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              to="/baixa-tensao"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Baixa tensão
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/media-tensao"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Média tensão
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16"
        aria-labelledby="cta-saude-titulo"
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_32px_64px_-12px_rgba(15,23,42,0.45)] ring-1 ring-white/10 sm:rounded-[2.25rem]">
            <div className="absolute inset-0">
              <motion.img
                src={saudeHero}
                alt=""
                aria-hidden
                className="h-full min-h-[420px] w-full object-cover sm:min-h-[380px]"
                initial={reduceMotion ? false : { scale: 1.06 }}
                whileInView={reduceMotion ? {} : { scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-rose-950/80 to-slate-950/90"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-rose-900/30"
                aria-hidden
              />
              <div
                className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-rose-500/25 blur-[100px]"
                aria-hidden
              />
              <div
                className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-[80px]"
                aria-hidden
              />
            </div>

            <div className="relative z-10 px-6 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-24 md:px-14 md:pb-20 md:pt-28">
              <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/[0.07] px-8 pb-10 pt-12 shadow-2xl backdrop-blur-xl sm:px-10 sm:pb-12 sm:pt-14 md:rounded-3xl md:px-12 md:pb-14 md:pt-16">
                <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-200/95 sm:mb-6 sm:text-xs">
                  Próximo passo
                </p>
                <h2
                  id="cta-saude-titulo"
                  className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.15]"
                >
                  Vamos desenhar a arquitetura elétrica do seu hospital?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center text-base font-light leading-relaxed text-slate-200 sm:text-lg">
                  Conte o cenário: cargas críticas, expansões, normas e prazos. Retornamos com uma
                  proposta alinhada à operação assistencial.
                </p>
                <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    to="/contato"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-black/25 transition hover:bg-rose-50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Solicitar contato
                    <ArrowRight
                      className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                  <Link
                    to="/missao-critica"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Missão crítica
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

export default SetorSaude;
