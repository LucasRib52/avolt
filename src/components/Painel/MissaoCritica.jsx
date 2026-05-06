import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Activity,
  Server,
  BatteryCharging,
  HeartPulse,
  Building2,
  Factory,
  CheckCircle2,
  Award,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import imgHero from "../../assets/10.png";
import imgPaineis from "../../assets/11.png";
import imgCampo from "../../assets/8.png";
import imgInfra from "../../assets/6.png";

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

const SOLUCOES = [
  {
    title: "Infraestruturas de alta confiabilidade",
    desc: "Arquitetura elétrica com critérios de disponibilidade, manutenibilidade e clareza operacional — do quadro geral ao ponto crítico de carga.",
    icon: Building2,
  },
  {
    title: "Redundância elétrica",
    desc: "Arranjos N+1, seccionamento, transferência automática e segregação de caminhos para reduzir ponto único de falha.",
    icon: Server,
  },
  {
    title: "Energia ininterrupta (gestão)",
    desc: "Integração com no-breaks, grupos geradores e chaves de transferência, com lógica de comando e supervisão alinhada ao seu nível de serviço.",
    icon: BatteryCharging,
  },
  {
    title: "Data centers e hospitais",
    desc: "Projetos com requisitos de continuidade, normas de setor e disciplina documental para auditoria e comissionamento.",
    icon: HeartPulse,
  },
];

const AMBIENTES = [
  { label: "Hospitais e saúde", icon: HeartPulse },
  { label: "Data centers e TI", icon: Server },
  { label: "Indústria contínua", icon: Factory },
  { label: "Infraestrutura essencial", icon: Activity },
];

const PRATICAS = [
  "Estudos de arco elétrico e segurança em manutenção quando aplicável",
  "Seletividade e coordenação para minimizar desligamentos desnecessários",
  "Identificação, grelhas e acessos pensados para operação e PMOC",
  "Testes de fábrica e registros para rastreabilidade pós-entrega",
];

const RELACIONADOS = [
  {
    to: "/saude",
    title: "Setor saúde",
    desc: "Requisitos elétricos em ambientes hospitalares e continuidade assistencial.",
    icon: HeartPulse,
  },
  {
    to: "/certificacao",
    title: "Certificações",
    desc: "Qualidade, processos e conformidade que sustentam projetos exigentes.",
    icon: Award,
  },
  {
    to: "/automacao-e-telemetria",
    title: "Automação e telemetria",
    desc: "Supervisão, alarmes e integração para visibilidade 24/7 da infraestrutura.",
    icon: Radio,
  },
];

const MissaoCritica = () => {
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
            alt="Infraestrutura elétrica de missão crítica AVOLT"
            className="h-full w-full object-cover brightness-[0.32] saturate-[0.85]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/75 to-slate-50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/4 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[100px] mix-blend-screen"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-emerald-400/12 blur-[90px] mix-blend-screen"
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
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-5 py-2 text-sm font-medium text-blue-200 backdrop-blur-md">
                  <Activity className="h-4 w-4 text-emerald-300" aria-hidden />
                  Missão crítica · alta disponibilidade
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white md:text-6xl md:leading-[1.08]"
              >
                Energia que não pode falhar
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                  engenharia AVOLT
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="max-w-2xl text-pretty text-lg font-light leading-[1.75] text-slate-300 md:text-xl md:leading-[1.7]"
              >
                Hospitais, data centers, indústrias contínuas e instalações essenciais exigem mais
                que painéis bonitos: exigem arquitetura elétrica disciplinada, redundância coerente
                e manutenção segura. É nesse patamar que atuamos.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex w-full max-w-lg flex-col items-stretch gap-5 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6"
              >
                <Button
                  asChild
                  className="h-auto min-h-[3.25rem] rounded-full bg-blue-600 px-10 py-4 text-base text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 md:min-h-[3.5rem] md:px-12 md:py-5"
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
                  <Link to="/servicos">Ver portfólio de serviços</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faixa destaque */}
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
                icon: Activity,
                title: "Disponibilidade",
                text: "Critérios de projeto alinhados ao nível de serviço desejado — não apenas à lista de materiais.",
              },
              {
                icon: ShieldCheck,
                title: "Segurança operacional",
                text: "Manobra, bloqueios e documentação para equipes internas e manutenção terceirizada.",
              },
              {
                icon: Zap,
                title: "Continuidade",
                text: "Integração coerente entre distribuição, ATS, UPS e geradores quando o escopo exige.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center px-2 pt-6 text-center first:pt-0 md:px-6 md:pt-0 md:first:pl-0"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition duration-300 hover:scale-105 hover:shadow-md">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Didático */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm md:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                Em poucas palavras
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                O que caracteriza uma instalação de missão crítica?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                O custo de uma parada não é só financeiro — pode ser clínico, regulatório ou
                reputacional. Por isso o projeto elétrico precisa antecipar falhas, definir caminhos
                alternativos de energia e permitir manutenção sem desligar o que não pode parar.
                Missão crítica é engenharia de cenários: o que acontece se este disjuntor abrir? E
                se esta barra precisar ficar fora?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O que entregamos */}
      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-100/80 blur-3xl"
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
              Projetos e painéis pensados para confiabilidade, redundância e manutenção segura.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {SOLUCOES.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg md:p-8"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-500">
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

      {/* Ambientes + imagem */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-600/20 to-emerald-400/10 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl">
                <img
                  src={imgPaineis}
                  alt="Painéis de comando e automação para ambientes críticos AVOLT"
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 space-y-6 lg:order-2"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                Onde isso importa
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Ambientes típicos
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                O mesmo rigor de engenharia se traduz em soluções diferentes conforme o risco e o
                regulatório de cada segmento.
              </p>
              <ul className="space-y-3">
                {AMBIENTES.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm transition hover:border-blue-100"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-blue-700">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-medium text-slate-800">{s.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Práticas + imagem */}
      <section className="bg-slate-900 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Como trabalhamos
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Disciplina de projeto e de fábrica
              </h2>
              <p className="text-lg leading-relaxed text-slate-300">
                Missão crítica exige rastreio: desenho, lista de materiais, testes e entrega precisam
                conversar entre si para o comissionamento não virar improviso.
              </p>
              <ul className="space-y-4">
                {PRATICAS.map((line) => (
                  <li key={line} className="flex gap-3 text-slate-200">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/35 to-emerald-400/15 blur-xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={imgCampo}
                  alt="Infraestrutura elétrica AVOLT em operação"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-6 left-6 right-6 text-sm text-slate-200 md:text-base">
                  Quadros legíveis, rotinas de teste e suporte alinhados à criticidade da sua
                  operação.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conteúdo relacionado */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Explore também
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Frentes complementares para reforçar continuidade, qualidade e visibilidade da sua
              infraestrutura.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELACIONADOS.map((item) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  to={item.to}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md md:p-8"
                >
                  <span className="mb-4 inline-flex rounded-xl bg-slate-50 p-3 text-blue-700 ring-1 ring-slate-100 transition group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-500">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagem larga */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg"
          >
            <img
              src={imgInfra}
              alt="Detalhe de infraestrutura e painéis AVOLT"
              className="h-full max-h-[420px] w-full object-cover md:max-h-[480px]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-blue-700 to-slate-900 px-8 py-14 text-center text-white shadow-xl md:px-16"
        >
          <h2 className="text-2xl font-bold md:text-3xl">
            Precisa elevar o nível de disponibilidade da sua sala elétrica?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Conte-nos o cenário: tier desejado, cargas críticas e restrições de manutenção.
            Retornamos com proposta técnica e próximos passos.
          </p>
          <Button
            asChild
            className="mt-8 rounded-full bg-white px-8 py-6 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50"
          >
            <Link to="/contato">
              Solicitar contato
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default MissaoCritica;
