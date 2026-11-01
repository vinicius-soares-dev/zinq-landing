"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from "lenis/react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  ArrowRight,
  Briefcase,
  ShieldCheck,
  MessageSquare,
  LayoutPanelTop,
  Zap,
  ChevronRight,
  Filter,
  LineChart,
  Globe,
  Mail,
} from "lucide-react";
import { ExploreEcosystem } from "@/components/ExploreEcosystem";

const APP_REGISTER_URL = "https://zinqme.com/register";

// ==========================================
// 1. HERO SECTION (3D Corporate)
// ==========================================
const B2BHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    damping: 30,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    damping: 30,
    stiffness: 200,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617] min-h-[90vh] flex flex-col items-center justify-center w-full">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex justify-center">
        <div className="absolute top-[-20%] w-[800px] h-[500px] bg-cyan-600/15 rounded-full blur-[120px] transform-gpu"></div>
        <div className="absolute bottom-[-10%] w-[600px] h-[400px] bg-blue-700/15 rounded-full blur-[120px] transform-gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Briefcase size={14} /> Agências, Consultorias & B2B
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] break-words w-full">
            Operações complexas exigem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              comando central.
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed font-light">
            Vendas High-Ticket não acontecem por acaso. Centralize a comunicação
            da equipe, automatize o follow-up e elimine os gargalos do seu ciclo
            de vendas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={APP_REGISTER_URL}
              className="w-full sm:w-auto px-8 md:px-12 py-4 bg-white text-slate-950 hover:bg-slate-200 rounded-xl font-black text-base md:text-lg transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group"
            >
              Estruturar Minha Empresa
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div>

        {/* Elemento 3D Responsivo */}
        <div className="relative w-full aspect-square max-w-[400px] mx-auto lg:max-w-none lg:h-[500px] flex items-center justify-center perspective-[1000px]">
          <motion.div
            style={{ rotateX, rotateY }}
            className="w-full h-full lg:h-auto lg:max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-cyan-900/20 transform-gpu preserve-3d flex flex-col"
          >
            <div className="flex items-center justify-between mb-6 md:mb-8 translate-z-[20px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center">
                  <LineChart size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-wider font-bold">
                    Pipeline Value
                  </p>
                  <p className="text-white text-lg md:text-xl font-black">
                    R$ 2.450.000
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 translate-z-[40px] flex-1">
              {[
                {
                  step: "Prospecção",
                  val: "80 Leads",
                  w: "100%",
                  c: "bg-slate-600",
                },
                {
                  step: "Qualificação",
                  val: "35 Reuniões",
                  w: "60%",
                  c: "bg-indigo-500",
                },
                {
                  step: "Proposta",
                  val: "12 Contratos",
                  w: "30%",
                  c: "bg-blue-500",
                },
                {
                  step: "Fechamento",
                  val: "4 Clientes",
                  w: "15%",
                  c: "bg-cyan-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-700/50"
                >
                  <div className="flex justify-between text-xs md:text-sm font-bold mb-2">
                    <span className="text-slate-300">{item.step}</span>
                    <span className="text-white">{item.val}</span>
                  </div>
                  <div className="h-1.5 md:h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: item.w }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        type: "spring",
                      }}
                      className={`h-full ${item.c}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

// ==========================================
// 2. SCROLL TIMELINE (Pipeline B2B)
// ==========================================
const B2BPipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "Entrada Unificada",
      desc: "Leads chegam via Site, WhatsApp ou E-mail e caem direto no painel do Zinq.",
    },
    {
      title: "Triagem Inteligente",
      desc: "A Roleta distribui ou a IA qualifica o lead antes mesmo de um humano agir.",
    },
    {
      title: "Comunicação Z-Teams",
      desc: "A equipe discute a proposta e aprova contratos dentro dos canais internos do Zinq.",
    },
    {
      title: "Fechamento no Kanban",
      desc: "O card é arrastado para 'Ganho', acionando o gatilho de gamificação e XP.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#0B0F19] relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            A jornada <span className="text-cyan-400">High-Ticket.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Role a página e acompanhe o fluxo de uma venda complexa.
          </p>
        </div>

        <div className="relative pl-8 md:pl-16 py-10">
          <div className="absolute left-[15px] md:left-[31px] top-0 bottom-0 w-1 bg-slate-800 rounded-full"></div>

          <motion.div
            className="absolute left-[15px] md:left-[31px] top-0 w-1 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] transform-gpu origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const stepThreshold = index / (steps.length - 1);
              // 🎯 CORREÇÃO: Transformamos boolean em número (0 ou 1) para o Motion aceitar no scale
              const scaleValue = useTransform(scrollYProgress, (v) =>
                v >= stepThreshold - 0.1 ? 1 : 0,
              );

              return (
                <div key={index} className="relative">
                  <div className="absolute -left-[37px] md:-left-[53px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0B0F19] flex items-center justify-center border-4 border-slate-800 z-20">
                    {/* 🎯 Aplicação direta do scale numérico limpo */}
                    <motion.div
                      className="w-full h-full rounded-full bg-cyan-400"
                      style={{ scale: scaleValue }}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl ml-4 md:ml-8"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. O COMMAND CENTER (Dashboard Fluido)
// ==========================================
const b2bModules = [
  {
    id: "zteams",
    title: "Z-Teams",
    icon: MessageSquare,
    tagline: "O Fim do WhatsApp",
    desc: "Crie canais por cliente. Toda a inteligência fica dentro da empresa.",
    visual: (
      <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden flex flex-col h-full absolute inset-0">
        <div className="bg-slate-800 p-3 border-b border-slate-700 flex gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3 justify-end overflow-hidden">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-slate-800 p-3 rounded-xl rounded-tl-none self-start w-[85%] text-xs text-slate-300"
          >
            Contrato aprovado?
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-cyan-600/20 border border-cyan-500/20 p-3 rounded-xl rounded-tr-none self-end w-[85%] text-xs text-cyan-100"
          >
            Sim! Subi o PDF na pasta do projeto. Vamos faturar! 🚀
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: "kanban",
    title: "Pipeline",
    icon: LayoutPanelTop,
    tagline: "Raio-X do Funil",
    desc: "Vendas complexas não se perdem por falta de interesse, se perdem por esquecimento.",
    visual: (
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 h-full absolute inset-0 flex gap-2 overflow-x-auto hide-scrollbar">
        {["Proposta", "Negociação"].map((col, i) => (
          <div
            key={col}
            className="min-w-[140px] flex-1 bg-slate-800/50 rounded-lg border border-slate-700 p-2 flex flex-col gap-2"
          >
            <h4 className="text-[10px] font-bold text-slate-400 uppercase">
              {col}
            </h4>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-800 border border-slate-600 p-2 rounded shadow-sm"
            >
              <div className="h-2 w-1/2 bg-slate-600 rounded mb-2"></div>
              <span className="text-[10px] text-cyan-400 font-bold">
                R$ {i === 0 ? "45k" : "120k"}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    ),
  },
];

const CommandCenter = () => {
  const [activeTab, setActiveTab] = useState(b2bModules[0].id);
  const activeModule = b2bModules.find((m) => m.id === activeTab);

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            O hub central da sua empresa.
          </h2>
          <p className="text-slate-400 text-lg">
            Navegue pelas funcionalidades.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-3 md:p-6 backdrop-blur-xl">
          {/* Tabs Responsivas */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 pb-2">
            {b2bModules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`flex-1 min-w-[120px] px-4 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 relative overflow-hidden
                  ${activeTab === module.id ? "text-white" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"}
                `}
              >
                {activeTab === module.id && (
                  <motion.div
                    layoutId="activeTabB2B"
                    className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-xl -z-10"
                  />
                )}
                <module.icon
                  size={16}
                  className={activeTab === module.id ? "text-cyan-400" : ""}
                />
                <span>{module.title}</span>
              </button>
            ))}
          </div>

          {/* Área de Conteúdo Morfando */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[300px]">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 flex flex-col justify-center min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <Zap size={14} /> {activeModule?.tagline}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    {activeModule?.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {activeModule?.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 relative min-h-[250px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule?.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeModule?.visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. O FUNIL DE DADOS (Partículas Fluidas)
// ==========================================
const DataFunnel = () => {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          Unifique o{" "}
          <span className="text-rose-500 line-through decoration-rose-500/50">
            caos
          </span>
          .
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16">
          Canalize todos os pontos de contato da sua empresa para um único
          motor.
        </p>

        <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between border border-slate-800 bg-slate-900/30 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm gap-12 md:gap-0">
          <div className="flex flex-row md:flex-col gap-4 md:gap-8 w-full md:w-auto justify-center z-10">
            {[
              {
                icon: MessageSquare,
                label: "WhatsApp",
                color:
                  "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
              },
              {
                icon: Mail,
                label: "E-mail",
                color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
              },
              {
                icon: Globe,
                label: "Landing",
                color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex flex-col items-center justify-center shadow-lg relative ${isActivated ? "bg-slate-800 border-slate-700 text-slate-500" : item.color} transition-colors duration-1000`}
              >
                <item.icon size={20} className="mb-1" />
                <span className="text-[8px] md:text-[10px] font-bold uppercase">
                  {item.label}
                </span>

                {/* 🎯 CORREÇÃO: Partícula com um único className robusto */}
                {isActivated && (
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] z-0"
                    initial={{ top: "50%", left: "50%", opacity: 1, scale: 1 }}
                    animate={{
                      top: ["50%", "50%", "50%"],
                      left: ["50%", "150%", "300%"],
                      opacity: [1, 1, 0],
                      scale: [1, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: idx * 0.4,
                      ease: "easeIn",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="z-20">
            <button
              onClick={() => setIsActivated(!isActivated)}
              className={`relative px-6 md:px-8 py-4 rounded-full font-black text-sm md:text-lg transition-all duration-500 flex items-center gap-2 overflow-hidden
                ${isActivated ? "bg-cyan-500 text-slate-950 shadow-[0_0_50px_rgba(6,182,212,0.5)] scale-110" : "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"}
              `}
            >
              <Filter size={20} />
              {isActivated ? "Zinq Processando" : "Ativar Fluxo Zinq"}
            </button>
          </div>

          <div className="z-10">
            <motion.div
              animate={{
                boxShadow: isActivated
                  ? "0 0 60px -10px rgba(6, 182, 212, 0.4)"
                  : "0 0 0px rgba(0,0,0,0)",
                borderColor: isActivated
                  ? "rgba(6, 182, 212, 0.5)"
                  : "rgba(51, 65, 85, 1)",
              }}
              transition={{ duration: 1 }}
              className="w-32 h-32 md:w-48 md:h-48 bg-slate-950 border rounded-full flex flex-col items-center justify-center p-4 text-center relative"
            >
              <ShieldCheck
                size={isActivated ? 40 : 32}
                className={`mb-2 transition-colors duration-1000 ${isActivated ? "text-cyan-400" : "text-slate-600"}`}
              />
              <span
                className={`font-bold text-sm md:text-base transition-colors duration-1000 ${isActivated ? "text-white" : "text-slate-500"}`}
              >
                Workspace Zinq
              </span>
              <span className="text-[10px] text-slate-400 mt-1 hidden md:block">
                Processo Blindado
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
// ==========================================
// 5. CTA FINAL
// ==========================================
const B2BCTA = () => (
  <section className="py-32 relative overflow-hidden bg-cyan-900 border-t border-cyan-800">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[100px] pointer-events-none transform-gpu"></div>

    <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
        Construa um império <br className="hidden md:block" />
        <span className="text-cyan-300">escalável e previsível.</span>
      </h2>
      <p className="text-cyan-100 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
        Junte-se às operações B2B que faturam milhões sem depender de planilhas
        confusas e grupos infinitos de WhatsApp.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a
          href={APP_REGISTER_URL}
          className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-slate-950 hover:bg-black text-white border border-slate-800 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          <span className="relative z-10">Criar Workspace Grátis</span>
          <ChevronRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform text-cyan-400" />
        </a>
      </div>
    </div>
  </section>
);

export default function B2BClient() {
  return (
    <div className="bg-[#0B0F19] font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main>
          <B2BHero />
          <B2BPipeline />
          <CommandCenter />
          <DataFunnel />
          <B2BCTA />
        </main>
      </ReactLenis>
      <ExploreEcosystem />
      <Footer />
    </div>
  );
}
