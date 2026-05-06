import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mic2,
  Zap,
  ShieldCheck,
  Radio,
  ArrowRight,
  Sparkles,
  PartyPopper,
} from "lucide-react";
import heroImg from "../../assets/eventos.jpg";
import sideImg from "../../assets/servicos.png";
import Tecnologia from "../Tecnologia/Tecnologia";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
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

const pillars = [
  {
    title: "Energia para o palco",
    desc: "Distribuição, proteção e manobra para som, luz, LED e estruturas temporárias — com margem para picos de carga.",
    icon: Zap,
    accent: "from-fuchsia-500/20 to-purple-600/5",
    ring: "group-hover:shadow-fuchsia-500/20",
  },
  {
    title: "Segurança em multidão",
    desc: "Coordenação de aterramento, disjuntores e arranjos que reduzem risco em montagem e desmontagem.",
    icon: ShieldCheck,
    accent: "from-indigo-500/20 to-violet-600/5",
    ring: "group-hover:shadow-indigo-500/20",
  },
  {
    title: "Operação em tempo real",
    desc: "Supervisão e automação quando o roteiro muda: reconfiguração assistida e clareza para produção.",
    icon: Radio,
    accent: "from-sky-500/20 to-blue-600/5",
    ring: "group-hover:shadow-sky-500/20",
  },
];

const PaineisEventos = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <section
        className="relative flex min-h-[78vh] items-end overflow-hidden bg-slate-950 sm:min-h-[85vh]"
        aria-labelledby="eventos-hero-heading"
      >
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover brightness-[0.4] saturate-[1.05]"
            initial={reduceMotion ? false : { scale: 1.08 }}
            animate={reduceMotion ? {} : { scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-fuchsia-950/35"
            aria-hidden
          />
          <div
            className="absolute -left-24 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/22 blur-[110px]"
            aria-hidden
          />
          <div
            className="absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[100px]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"
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
                <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/15 px-4 py-2 text-sm font-medium text-fuchsia-100 shadow-lg shadow-fuchsia-900/25 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-fuchsia-300" aria-hidden />
                  Grandes eventos · energia estável
                </span>
              </motion.div>

              <motion.h1
                id="eventos-hero-heading"
                variants={itemSpring}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.08]"
              >
                <span className="bg-gradient-to-r from-fuchsia-200 via-white to-indigo-200 bg-clip-text text-transparent">
                  Painéis de eventos
                </span>
              </motion.h1>

              <motion.p
                variants={itemSpring}
                className="max-w-2xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl"
              >
                Infraestrutura elétrica para shows, festivais e ativações — do quadro temporário à
                distribuição que sustenta luz, som e experiência sem surpresa na chave.
              </motion.p>

              <motion.div
                variants={itemSpring}
                className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-fuchsia-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Falar com especialistas
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/momentos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Momentos de sucesso
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_25px_80px_-20px_rgba(15,23,42,0.22)] backdrop-blur-xl"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[260px] lg:min-h-[400px]">
                <img
                  src={sideImg}
                  alt="Montagem elétrica e painéis em campo para eventos"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/55 via-transparent to-fuchsia-900/25" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/45 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium text-white">
                    Cronograma apertado exige engenharia que conversa com produção e segurança.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
                  <Mic2 className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  O que são painéis de eventos na AVOLT?
                </h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500" />
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Não é só “painel de LED”: é a arquitetura elétrica que alimenta palco, camarins,
                  catering e áreas técnicas — com proteção, medição e manobra pensadas para carga
                  dinâmica e equipes em turno.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Trabalhamos com especificação, fabricação quando aplicável, montagem e suporte para
                  que o evento rode com previsibilidade do primeiro ensaio ao último bis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="pilares-eventos">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12 text-center md:text-left"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-900">
              <PartyPopper className="h-3.5 w-3.5" aria-hidden />
              Performance e segurança
            </div>
            <h2
              id="pilares-eventos"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Três pilares para produção sem ruído elétrico
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 md:mx-0">
              Menos retrabalho em campo, mais clareza para quem opera o gerador até o último cabo.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl ${p.ring}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} blur-2xl transition duration-500 group-hover:scale-110`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-2xl bg-slate-900 p-3 text-white shadow-lg">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{p.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8"
        aria-labelledby="solucoes-eventos"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-fuchsia-600/22 via-transparent to-indigo-600/22" />
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <h2 id="solucoes-eventos" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore mais da AVOLT
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Serviços, automação e cases que complementam operação em grande porte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Portfólio de serviços
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/baixa-tensao"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Baixa tensão
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/automacao-e-telemetria"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Automação
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/building"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Building
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16"
        aria-labelledby="cta-eventos-titulo"
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
                src={heroImg}
                alt=""
                aria-hidden
                className="h-full min-h-[380px] w-full object-cover sm:min-h-[360px]"
                initial={reduceMotion ? false : { scale: 1.06 }}
                whileInView={reduceMotion ? {} : { scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-indigo-950/80 to-slate-950/92"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-fuchsia-900/20"
                aria-hidden
              />
              <div
                className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-[100px]"
                aria-hidden
              />
            </div>
            <div className="relative z-10 px-6 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-24 md:px-14 md:pb-20 md:pt-28">
              <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/[0.07] px-8 pb-10 pt-12 shadow-2xl backdrop-blur-xl sm:px-10 sm:pb-12 sm:pt-14 md:rounded-3xl md:px-12 md:pb-14 md:pt-16">
                <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-200/95 sm:mb-6 sm:text-xs">
                  Próximo passo
                </p>
                <h2
                  id="cta-eventos-titulo"
                  className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.15]"
                >
                  Vamos dimensionar a energia do seu próximo evento?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center text-base font-light leading-relaxed text-slate-200 sm:text-lg">
                  Envie datas, carga prevista, estrutura de palco e fontes (rede, gerador, UPS).
                  Retornamos com arquitetura e prazos alinhados à produção.
                </p>
                <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    to="/contato"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-fuchsia-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Solicitar contato
                    <ArrowRight
                      className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Ver serviços
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

export default PaineisEventos;
