import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Zap,
  BatteryCharging,
  SunMedium,
  ArrowRight,
  Sparkles,
  Sprout,
} from "lucide-react";
import heroImg from "../../assets/engenharia.jpg";
import sideImg from "../../assets/data.jpg";
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
    title: "Eficiência energética",
    desc: "Projetos que otimizam consumo, reduzem perdas e alinham medição e manobra à operação real.",
    icon: Zap,
    accent: "from-emerald-500/20 to-emerald-600/5",
    ring: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Mobilidade elétrica",
    desc: "Infraestrutura de recarga e integração predial para apoiar a transição de frota e visitantes.",
    icon: BatteryCharging,
    accent: "from-teal-500/20 to-teal-600/5",
    ring: "group-hover:shadow-teal-500/20",
  },
  {
    title: "Impacto em comunidades",
    desc: "Energia e infraestrutura que aproximam desenvolvimento local, acesso e qualidade de vida.",
    icon: Sprout,
    accent: "from-lime-500/15 to-emerald-600/5",
    ring: "group-hover:shadow-lime-500/15",
  },
];

const Sustentabilidade = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <section
        className="relative flex min-h-[78vh] items-end overflow-hidden bg-slate-950 sm:min-h-[85vh]"
        aria-labelledby="sustentabilidade-hero-heading"
      >
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover brightness-[0.38] saturate-[0.75]"
            initial={reduceMotion ? false : { scale: 1.08 }}
            animate={reduceMotion ? {} : { scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/78 to-emerald-950/45"
            aria-hidden
          />
          <div
            className="absolute -left-28 top-1/4 h-[420px] w-[420px] rounded-full bg-emerald-500/28 blur-[110px]"
            aria-hidden
          />
          <div
            className="absolute -right-16 bottom-0 h-[360px] w-[360px] rounded-full bg-teal-400/18 blur-[95px]"
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
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-emerald-900/20 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-emerald-300" aria-hidden />
                  Sustentabilidade · engenharia com propósito
                </span>
              </motion.div>

              <motion.h1
                id="sustentabilidade-hero-heading"
                variants={itemSpring}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.08]"
              >
                Engenharia com{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
                  impacto
                </span>
              </motion.h1>

              <motion.p
                variants={itemSpring}
                className="max-w-2xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl"
              >
                Unimos eficiência energética, mobilidade elétrica e projetos que levam infraestrutura a
                quem precisa — com o rigor técnico AVOLT em cada entrega.
              </motion.p>

              <motion.div
                variants={itemSpring}
                className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Falar com especialistas
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ver portfólio de serviços
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
                  alt="Infraestrutura e transição energética"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/55 via-transparent to-teal-900/25" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/45 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium text-white">
                    Cada kWh economizado e cada ponto de recarga bem dimensionado contam para o todo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Heart className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Acreditamos que a engenharia também tem papel social.
                </h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Atuamos em projetos que levam energia e infraestrutura para comunidades, contribuindo
                  para desenvolvimento e qualidade de vida.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Investimos em eficiência energética, integração com renováveis quando faz sentido no
                  projeto e em soluções para mobilidade elétrica — sempre com documentação e segurança.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="pilares-sustentabilidade">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12 text-center md:text-left"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <SunMedium className="h-3.5 w-3.5" aria-hidden />
              Onde focamos
            </div>
            <h2
              id="pilares-sustentabilidade"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Três frentes para um futuro mais eficiente
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 md:mx-0">
              Combine propósito e performance: menos desperdício, mais clareza operacional e impacto
              positivo.
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
        aria-labelledby="solucoes-sustentabilidade"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-600/28 via-transparent to-teal-600/20" />
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <h2 id="solucoes-sustentabilidade" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Soluções que caminham junto com sustentabilidade
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Conheça frentes AVOLT que sustentam eficiência, retrofit e inovação em produto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/retrofit"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Retrofit e modernização
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/engenharia-dos-5ps"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Engenharia dos 5Ps
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/automacao-e-telemetria"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Automação e telemetria
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Todas as linhas de serviço
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16"
        aria-labelledby="cta-sustentabilidade-titulo"
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
                className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/80 to-slate-950/92"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-emerald-900/25"
                aria-hidden
              />
              <div
                className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-500/22 blur-[100px]"
                aria-hidden
              />
            </div>
            <div className="relative z-10 px-6 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-24 md:px-14 md:pb-20 md:pt-28">
              <div className="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/[0.07] px-8 pb-10 pt-12 shadow-2xl backdrop-blur-xl sm:px-10 sm:pb-12 sm:pt-14 md:rounded-3xl md:px-12 md:pb-14 md:pt-16">
                <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200/95 sm:mb-6 sm:text-xs">
                  Próximo passo
                </p>
                <h2
                  id="cta-sustentabilidade-titulo"
                  className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.15]"
                >
                  Vamos planejar eficiência e impacto no seu projeto?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center text-base font-light leading-relaxed text-slate-200 sm:text-lg">
                  Conte metas de consumo, expansão de recarga ou comunidades atendidas. Montamos uma
                  proposta técnica alinhada a normas e ao seu prazo.
                </p>
                <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    to="/contato"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

export default Sustentabilidade;
