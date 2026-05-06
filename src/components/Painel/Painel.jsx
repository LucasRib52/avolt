import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICO_LINHAS } from "@/data/servicoLinhas";

const Painel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-60 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
              Nossas Especialidades
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            SERVIÇOS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            Soluções completas em engenharia elétrica para diferentes segmentos.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {SERVICO_LINHAS.map((service) => (
            <motion.article
              variants={itemVariants}
              key={service.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-center sm:px-6">
                <h3 className="mb-3 text-base font-bold uppercase tracking-wide text-blue-900 sm:text-lg">
                  {service.title}
                </h3>
                <ul className="mb-6 flex flex-1 flex-col gap-2 text-sm text-slate-600">
                  {service.items.map((line) => (
                    <li
                      key={line}
                      className="flex items-start justify-center gap-2 text-left sm:justify-start sm:pl-1"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                        aria-hidden
                      />
                      <span className="leading-snug">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.to}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-auto min-h-12 w-full justify-center rounded-xl border-slate-200 bg-slate-50 py-6 text-base text-slate-900 hover:border-transparent hover:bg-blue-700 hover:text-white"
                  )}
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            className="rounded-full bg-blue-700 px-8 py-6 text-white hover:bg-blue-800"
          >
            <Link to="/servicos">
              Conheça todos os serviços
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Painel;
