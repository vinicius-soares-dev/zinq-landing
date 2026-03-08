"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MessageSquare, Trophy, ArrowRight, LayoutPanelTop, Shuffle, Hand } from "lucide-react";

const cards = [
  {
    id: 1, title: "Comunicação Centralizada", subtitle: "Módulo de Chat",
    description: "O fim do WhatsApp pessoal. Direcione, monitore e assuma o controle de todas as conversas da sua equipe. A informação é da empresa, não do funcionário.",
    icon: MessageSquare, color: "from-blue-500 to-indigo-600", glow: "bg-blue-500/20", link: "/funcionalidades/chat"
  },
  {
    id: 2, title: "Operação Visualizada", subtitle: "Quadros Kanban",
    description: "Esqueça o microgerenciamento. Visualize todo o fluxo de trabalho, identifique gargalos em tempo real e saiba exatamente o que cada membro da equipe está executando.",
    icon: LayoutPanelTop, color: "from-emerald-400 to-teal-500", glow: "bg-emerald-400/20", link: "/funcionalidades/kanban"
  },
  {
    id: 3, title: "Distribuição Inteligente", subtitle: "Roletas Algorítmicas",
    description: "O motor logístico do Zinq mapeia quem da sua equipe está livre e envia o próximo lead ou tarefa no milissegundo exato. Velocidade extrema e zero favoritismo.",
    icon: Shuffle, color: "from-rose-500 to-fuchsia-600", glow: "bg-rose-500/20", link: "/funcionalidades/roletas"
  },
  {
    id: 4, title: "Rotina em Alta Performance", subtitle: "Gamificação",
    description: "Crie um ecossistema de produtividade. Cada atendimento rápido ou tarefa entregue no prazo gera pontos reais, rankings e recompensas para a sua equipe.",
    icon: Trophy, color: "from-amber-400 to-orange-500", glow: "bg-amber-400/20", link: "/funcionalidades/gamificacao"
  },
];

export const FeaturesHorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  const CardContent = ({ card }: { card: any }) => {
    const Icon = card.icon;
    return (
      <div className="group relative h-auto min-h-[420px] md:h-[480px] w-[85vw] md:w-[600px] flex flex-col justify-between p-8 md:p-12 shrink-0 transition-all duration-500 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:bg-white/[0.05] transition-colors duration-500"></div>
        <div className={`absolute top-0 right-0 w-64 h-64 ${card.glow} rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

        <div className="relative z-10 flex-1">
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 md:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
            <Icon className="text-white w-7 h-7 md:w-8 md:h-8" />
          </div>
          <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {card.subtitle}
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
            {card.title}
          </h3>
          <p className="text-sm md:text-lg text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
            {card.description}
          </p>
        </div>

        <Link href={card.link} className="relative z-10 flex items-center gap-3 text-white font-bold text-sm md:text-lg mt-8 group/btn w-fit">
          <span>Explorar {card.subtitle.split(' ')[0]}</span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300 shrink-0">
            <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      {/* ==========================================
          VERSÃO DESKTOP (Com Framer Motion) 
      ========================================== */}
      <section ref={targetRef} className="relative h-[300vh] bg-[#020617] hidden md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="px-6 md:px-16 mb-12 shrink-0 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight max-w-4xl">
              Conheça o motor que trabalha enquanto você foca no <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">estratégico.</span>
            </h2>
          </div>
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16 w-max relative z-10">
            {cards.map((card) => <CardContent key={card.id} card={card} />)}
            <div className="w-[15vw] shrink-0"></div>
          </motion.div>
          <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* ==========================================
          VERSÃO MOBILE (Native Scroll - UX Mais Fluida) 
      ========================================== */}
      <section className="relative py-24 bg-[#020617] md:hidden overflow-hidden">
        <div className="px-6 mb-8 relative z-10">
          <h2 className="text-4xl font-black text-white tracking-tighter leading-tight">
            Conheça o motor que trabalha enquanto você foca no <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">estratégico.</span>
          </h2>
          {/* Indicador visual para rolar de lado */}
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mt-6 animate-pulse">
            <Hand size={16} /> Deslize para o lado
          </div>
        </div>
        
        {/* Scroll Nativo */}
        <div className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 relative z-10">
          {cards.map((card) => (
            <div key={card.id} className="snap-center shrink-0">
              <CardContent card={card} />
            </div>
          ))}
          <div className="w-6 shrink-0"></div>
        </div>

        <div className="absolute top-1/4 left-[-10%] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      </section>
    </>
  );
};