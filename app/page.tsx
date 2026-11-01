"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
// 🎯 Adicionado a interface 'Variants' na importação
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from "lenis/react";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Users,
  History,
  Play,
  Building2,
  HeartPulse,
  Headset,
  Sparkles,
  Briefcase,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { FeaturesHorizontalScroll } from "@/components/FeaturesHorizontalScroll";
import { StackedCardsSection } from "@/components/StackedCardsSection";
import { ShieldAndAISection } from "@/components/ShieldAndAISection";
import { Header } from "@/components/Header";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[#000212] min-h-[85vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full mix-blend-screen filter blur-[140px]"
        ></motion.div>
        <motion.div
          style={{ x: smoothY, y: smoothX }}
          className="absolute top-[10%] right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full mix-blend-screen filter blur-[120px]"
        ></motion.div>
        <motion.div
          style={{ x: smoothX, y: smoothX }}
          className="absolute bottom-[-10%] left-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[160px]"
        ></motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.04] rounded-full border-dashed animate-[spin_100s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/[0.02] rounded-full animate-[spin_160s_linear_infinite_reverse]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 shadow-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              O Fim do Caos Operacional
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.05] drop-shadow-2xl"
          >
            Seu negócio cresceu. <br className="hidden md:block" />O{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-300">
              WhatsApp
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-[1px]"></span>
            </span>{" "}
            e as planilhas não acompanharam.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light opacity-90"
          >
            O Zinq é o primeiro Sistema Operacional desenhado para empresas que
            precisam atrair clientes, blindar o faturamento e gerenciar equipes
            em escala.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-8"
          >
            <Link
              href="https://zinqme.com/register"
              className="group relative w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <div className="flex items-center justify-center gap-3 relative z-10">
                Criar Perfil Grátis
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>

            <Link
              href="https://zinqme.com/vinicius"
              className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 group"
            >
              <Play size={18} className="fill-white text-white opacity-80" />
              Ver exemplo real
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm text-slate-400 font-medium"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500/80" /> Sem
              cartão de crédito
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500/80" /> Teste
              Grátis de 7 dias
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500/80" />{" "}
              Configuração em 2 min
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

const SocialProof = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.25em] mb-12"
        >
          A ESCOLHA DE OPERAÇÕES E NEGÓCIOS DE ALTO DESEMPENHO
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "50px" }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8"
        >
          {[
            { icon: Building2, label: "Imobiliárias", href: "/imobiliarias" },
            { icon: HeartPulse, label: "Clínicas", href: "/clinicas" },
            { icon: Headset, label: "Equipes de Vendas", href: "/vendas" },
            { icon: Sparkles, label: "Centros de Estética", href: "/estetica" },
            { icon: Briefcase, label: "Escritórios B2B", href: "/b2b" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="outline-none">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-3 group cursor-pointer bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] hover:border-blue-100 transition-all duration-300 transform-gpu"
              >
                <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                  <item.icon
                    size={20}
                    className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300"
                  />
                </div>
                <span className="text-base md:text-lg font-bold text-slate-500 group-hover:text-slate-900 transition-colors duration-300">
                  {item.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Growth = () => {
  // 🎯 Correção: Adicionado ': Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Quem não mede, <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              não cresce.
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Transforme dados em dinheiro. O Zinq entrega a inteligência que
            grandes empresas usam, simplificada para você.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* CARD 1 */}
          <motion.div
            variants={cardVariants}
            className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
          >
            <div className="mb-6 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <BarChart3 size={28} />
              </div>
              <h4 className="font-bold text-2xl text-slate-900 mb-3">
                Raio-X do Negócio
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Painéis intuitivos para acompanhar visitas, taxa de conversão e
                faturamento mensal em tempo real.
              </p>
            </div>
            <div className="relative h-32 bg-slate-50/50 rounded-xl border border-slate-100 p-4 flex items-end justify-between gap-2 overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "40%" }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full bg-blue-200 rounded-t-md relative"
              ></motion.div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "60%" }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full bg-blue-300 rounded-t-md relative"
              ></motion.div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "30%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full bg-blue-500 rounded-t-md relative"
              ></motion.div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "80%" }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-md shadow-lg shadow-blue-500/40 relative group-hover:scale-y-105 origin-bottom transition-transform duration-500"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  +127%
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardVariants}
            className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
          >
            <div className="mb-6 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <Users size={28} />
              </div>
              <h4 className="font-bold text-2xl text-slate-900 mb-3">
                Controle de Retenção
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Identifique automaticamente quais clientes pararam de vir e crie
                ações automáticas para recuperá-los.
              </p>
            </div>
            <div className="relative h-32 bg-slate-50/50 rounded-xl border border-slate-100 p-4 flex flex-col justify-center gap-3 overflow-hidden">
              <div className="flex items-center gap-3 opacity-40">
                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 60, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-3 rounded-xl shadow-md shadow-emerald-900/5 border border-emerald-100 flex items-center gap-3 relative z-10 group-hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold ring-2 ring-white">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-slate-800">
                    João D.
                  </p>
                  <p className="text-[9px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                    <TrendingUp size={10} /> Recuperado hoje
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardVariants}
            className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full"
          >
            <div className="mb-6 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <History size={28} />
              </div>
              <h4 className="font-bold text-2xl text-slate-900 mb-3">
                CRM Simplificado
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Tenha o histórico completo de cada cliente na palma da mão antes
                do atendimento. Saiba tudo sobre ele.
              </p>
            </div>
            <div className="relative h-32 bg-slate-50/50 rounded-xl border border-slate-100 p-5 overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-7 top-4 w-0.5 bg-slate-200"
              ></motion.div>
              <div className="space-y-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 border-2 border-white shadow-sm z-10 shrink-0"></div>
                  <div className="bg-white px-3 py-1.5 rounded-lg border border-slate-100 text-[10px] text-slate-600 shadow-sm w-full font-medium">
                    Agendamento:{" "}
                    <span className="font-bold text-slate-800">
                      Corte + Barba
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-slate-300 border-2 border-white z-10 shrink-0"></div>
                  <div className="bg-white/50 px-3 py-1.5 rounded-lg border border-slate-100 text-[10px] text-slate-400 w-full">
                    Nota: Cliente prefere café sem açúcar
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden bg-blue-600">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/30 rounded-full blur-[120px] mix-blend-overlay pointer-events-none"></div>

    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
        Não deixe para amanhã a gestão e o{" "}
        <span className="text-blue-200">lucro</span> que você está perdendo
        hoje.
      </h2>
      <p className="text-blue-100 text-xl mb-12 font-light leading-relaxed opacity-90 max-w-2xl mx-auto">
        A transição para o Zinq leva minutos, mas os resultados na sua operação
        são imediatos. Teste o motor de roletas, a IA e a cobrança de sinal sem
        compromisso.
      </p>
      <div className="flex flex-col items-center gap-8">
        <Link
          href="/register"
          className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-blue-700 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] shadow-2xl overflow-hidden ring-4 ring-white/10"
        >
          <span className="relative z-10">Começar Teste Grátis de 7 Dias</span>
          <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-blue-100 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-300" /> 7 dias de
            garantia incondicional
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-300" /> Cancele com
            1 clique. Sem multas.
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-300" /> Suporte
            humanizado
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Zinq",
          url: "https://zinqme.com",
          logo: "https://zinqme.com/faviconzinq.png",
        },
        { "@type": "WebSite", name: "Zinq", url: "https://zinqme.com" },
      ],
    }),
    [],
  );

  return (
    <div className="bg-white font-sans antialiased">
      <Header />

      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main>
          <Hero />
          <SocialProof />
          <StackedCardsSection />
          <FeaturesHorizontalScroll />
          <ShieldAndAISection />
          <Growth />
          <FinalCTA />
        </main>
      </ReactLenis>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
