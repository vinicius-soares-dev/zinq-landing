"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from "lenis/react";
import Image from "next/image";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  ArrowRight,
  Building2,
  Key,
  MapPin,
  Zap,
  ShieldCheck,
  TrendingUp,
  Moon,
  Sun,
  User,
  MousePointerClick,
} from "lucide-react";
import { ExploreEcosystem } from "@/components/ExploreEcosystem";

const APP_REGISTER_URL = "https://zinqme.com/register";

// ==========================================
// 1. HERO SECTION
// ==========================================
const ImobHero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#000212] min-h-[90vh] flex flex-col items-center justify-center w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Mansão Premium"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000212] via-[#000212]/80 to-[#000212]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full mix-blend-screen filter blur-[120px] transform-gpu"></div>
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] transform-gpu"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-md"
          >
            <Building2 size={14} /> Solução para Imobiliárias
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] break-words w-full"
          >
            Um lead de R$ 1 Milhão <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
              não espera 10 minutos.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light opacity-90"
          >
            Aposente a planilha de roleta. O Zinq distribui leads para os
            corretores no milissegundo exato e usa IA para pré-qualificar
            compradores 24h por dia.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={APP_REGISTER_URL}
              className="w-full sm:w-auto px-6 md:px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-black text-base md:text-lg transition-all shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 group"
            >
              Modernizar Minha Imobiliária
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

// ==========================================
// 2. PROBLEMA VS SOLUÇÃO (Bento Grid Interativo)
// ==========================================
const ImobFeatures = () => {
  // Estado para o Card 1 (Roleta)
  const [activeBroker, setActiveBroker] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Estado para o Card 2 (Modo Noturno)
  const [isNightMode, setIsNightMode] = useState(true);

  // Estado para o Card 4 (Kanban Stepper)
  const [kanbanStep, setKanbanStep] = useState(0);
  const kanbanStages = [
    "Novo Lead",
    "Visita Agendada",
    "Proposta",
    "Fechado 🏆",
  ];

  // Lógica da Mini Roleta
  const handleSimulateLead = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveBroker(null);

    let jumps = 0;
    const interval = setInterval(() => {
      setActiveBroker(jumps % 3);
      jumps++;
      if (jumps > 8) {
        clearInterval(interval);
        setActiveBroker(1); // Sempre cai no corretor 2 para a demo
        setIsSimulating(false);
      }
    }, 150);
  };

  // Lógica do Mini Kanban
  const advanceKanban = () => {
    if (kanbanStep < kanbanStages.length - 1) {
      setKanbanStep((prev) => prev + 1);
    } else {
      setKanbanStep(0); // Reset
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Feito para o mercado imobiliário.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Entendemos que no seu negócio, velocidade e organização definem quem
            ganha a comissão.
            <strong className="block mt-2 text-amber-600 font-medium">
              Interaja com os quadros abaixo:
            </strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* 🎯 CARD 1: ROLETA INTERATIVA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-white rounded-[2rem] border border-slate-200 p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                {/* Botão Interativo */}
                <button
                  onClick={handleSimulateLead}
                  disabled={isSimulating}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 transition-colors disabled:opacity-50 z-10"
                >
                  <MousePointerClick
                    size={14}
                    className={isSimulating ? "animate-ping" : "animate-bounce"}
                  />{" "}
                  Injetar Lead
                </button>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Roleta de Corretores Perfeita
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-lg text-sm md:text-base">
                O lead chega do Facebook Ads e o Zinq envia para o corretor da
                vez instantaneamente. Se ele demorar a responder, a roleta gira
                sozinha.
              </p>
            </div>

            {/* Simulador Visual */}
            <div className="mt-8 bg-slate-50 border border-slate-100 p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 relative z-10">
              <div className="bg-white text-slate-700 font-bold text-xs px-3 py-2 rounded-lg border border-slate-200 shadow-sm shrink-0 w-full md:w-auto text-center">
                🏠 Lead: Cobertura
              </div>
              <ArrowRight
                size={16}
                className="text-slate-300 hidden md:block shrink-0"
              />

              <div className="flex gap-2 w-full md:w-auto justify-center">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 w-24 ${activeBroker === i ? "bg-amber-50 border-amber-400 scale-105 shadow-md" : "bg-white border-slate-100 opacity-60"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center text-xs font-bold text-white ${activeBroker === i ? "bg-amber-500" : "bg-slate-300"}`}
                    >
                      C{i + 1}
                    </div>
                    <span
                      className={`text-[10px] font-bold ${activeBroker === i ? "text-amber-700" : "text-slate-400"}`}
                    >
                      {activeBroker === i && !isSimulating
                        ? "Recebeu!"
                        : "Aguardando"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 🎯 CARD 2: IA DIA/NOITE INTERATIVA */}
          {/* Corrigida a legibilidade do texto e adicionado interatividade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-[2rem] border p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 relative flex flex-col justify-between ${isNightMode ? "bg-slate-900 border-slate-800 text-white" : "bg-blue-50 border-blue-200 text-slate-900"}`}
          >
            {isNightMode && (
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
            )}

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${isNightMode ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" : "bg-blue-200 text-blue-700"}`}
                >
                  {isNightMode ? <Moon size={24} /> : <Sun size={24} />}
                </div>
                {/* Toggle Button */}
                <button
                  onClick={() => setIsNightMode(!isNightMode)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors flex items-center ${isNightMode ? "bg-indigo-500 justify-end" : "bg-slate-300 justify-start"}`}
                >
                  <motion.div
                    layout
                    className="w-4 h-4 bg-white rounded-full shadow-sm"
                  ></motion.div>
                </button>
              </div>

              <h3
                className={`text-xl font-bold mb-3 ${isNightMode ? "text-blue-600" : "text-slate-600"}`}
              >
                Sua agência nunca fecha
              </h3>
              {/* 🎯 Correção da cor: Agora o texto é perfeitamente legível usando text-slate-300 no escuro e text-slate-600 no claro */}
              <p
                className={`text-sm leading-relaxed mb-6 ${isNightMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Clientes procuram imóveis domingo à noite. A Zinq AI responde,
                qualifica o interesse e agenda a visita sozinha.
              </p>
            </div>

            {/* Simulação de Chat Responsiva */}
            <div
              className={`p-3 rounded-xl text-xs font-medium border relative z-10 transition-colors ${isNightMode ? "bg-slate-800/80 border-slate-700 text-indigo-100" : "bg-white border-blue-100 text-slate-700"}`}
            >
              <div className="flex items-center gap-2 mb-1">
                {isNightMode ? (
                  <Zap size={12} className="text-indigo-400" />
                ) : (
                  <User size={12} className="text-blue-500" />
                )}
                <span className="font-bold opacity-70">
                  {isNightMode ? "Zinq AI (03:15 AM)" : "Corretor (14:30 PM)"}
                </span>
              </div>
              {isNightMode
                ? "Olá! Percebi seu interesse na casa de luxo. Posso agendar sua visita para amanhã cedo?"
                : "Boa tarde! Vi que preencheu o formulário. Como posso ajudar?"}
            </div>
          </motion.div>

          {/* CARD 3: Segurança */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[2rem] border border-slate-200 p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Base de Dados Blindada
            </h3>
            <p className="text-slate-500 text-sm">
              O corretor saiu da imobiliária? O histórico das conversas e os
              contatos dos clientes ficam na plataforma. O cliente é da empresa,
              não do WhatsApp pessoal do corretor.
            </p>
          </motion.div>

          {/* 🎯 CARD 4: KANBAN INTERATIVO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-[2rem] border border-slate-200 p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="flex items-start md:items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                <Key size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  Kanban da Jornada de Compra
                </h3>
                <p className="text-slate-500 text-sm md:text-base">
                  Mova o cliente pelo funil de vendas.{" "}
                  <span className="font-bold text-blue-600">
                    Clique no cartão abaixo para avançá-lo!
                  </span>
                </p>
              </div>
            </div>

            {/* Esteira Visual interativa (Click to advance) */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-2 md:p-4 flex gap-2 relative overflow-hidden h-24 items-center">
              {/* Progresso Background */}
              <div
                className="absolute left-0 top-0 h-full bg-blue-50/50 transition-all duration-500 pointer-events-none"
                style={{
                  width: `${(kanbanStep / (kanbanStages.length - 1)) * 100}%`,
                }}
              ></div>

              {kanbanStages.map((stage, idx) => (
                <div
                  key={stage}
                  className={`flex-1 text-center text-[10px] md:text-xs font-bold uppercase tracking-wider py-2 rounded-lg transition-colors z-10 ${kanbanStep === idx ? "text-blue-600 bg-white shadow-sm border border-blue-100" : "text-slate-400 border border-transparent"}`}
                >
                  {stage}
                </div>
              ))}

              {/* O Cartão Móvel */}
              <div className="absolute left-2 md:left-4 right-2 md:right-4 h-full pointer-events-none z-20 flex items-center">
                <motion.div
                  layout
                  className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg shadow-lg font-bold text-xs flex items-center gap-2 cursor-pointer pointer-events-auto shadow-blue-600/30"
                  onClick={advanceKanban}
                  style={{
                    marginLeft: `${(kanbanStep / (kanbanStages.length - 1)) * (100 - 100 / kanbanStages.length)}%`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User size={14} /> João
                  {kanbanStep < 3 && (
                    <ArrowRight
                      size={14}
                      className="ml-1 opacity-70 animate-pulse"
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. CTA FINAL
// ==========================================
const ImobCTA = () => (
  <section className="py-32 relative overflow-hidden bg-slate-900">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none transform-gpu"></div>

    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl mb-6">
        <MapPin size={32} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
        Seja a imobiliária mais{" "}
        <span className="text-amber-400">rápida da sua cidade.</span>
      </h2>
      <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
        Junte-se às operações imobiliárias que faturam mais alto usando o Zinq
        para gerenciar equipes e atrair clientes.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a
          href={APP_REGISTER_URL}
          className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-amber-500 text-slate-950 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.4)] overflow-hidden"
        >
          <span className="relative z-10">Iniciar Teste de 7 Dias Grátis</span>
          <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function ImobiliariasClient() {
  return (
    <div className="bg-slate-50 font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main>
          <ImobHero />
          <ImobFeatures />
          <ImobCTA />
        </main>
      </ReactLenis>
      <ExploreEcosystem />
      <Footer />
    </div>
  );
}
