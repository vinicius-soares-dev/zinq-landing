"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from "lenis/react";
import Image from "next/image";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Zap,
  CreditCard,
  Activity,
  UserCheck,
  AlertCircle,
  CalendarCheck,
} from "lucide-react";
import { ExploreEcosystem } from "@/components/ExploreEcosystem";

const APP_REGISTER_URL = "https://zinqme.com/register";

// ==========================================
// 1. HERO SECTION (Clínicas Premium)
// ==========================================
const ClinicasHero = () => {
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
      {/* Imagem de Fundo Premium (Clínica) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Clínica Moderna"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000212] via-[#000212]/80 to-[#000212]"></div>
      </div>

      {/* Efeitos de Luz Teal/Emerald (Saúde) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full mix-blend-screen filter blur-[120px] transform-gpu"></div>
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-emerald-600/15 rounded-full mix-blend-screen filter blur-[120px] transform-gpu"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-md"
          >
            <HeartPulse size={14} /> Solução para Clínicas e Consultórios
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] break-words w-full"
          >
            Sua agenda lotada. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-emerald-500">
              Zero pacientes faltantes.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light opacity-90"
          >
            Aposente as mensagens ignoradas no WhatsApp. O Zinq cobra uma taxa
            de sinal automaticamente, faz a triagem com IA e protege o
            faturamento da sua clínica.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={APP_REGISTER_URL}
              className="w-full sm:w-auto px-6 md:px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-xl font-black text-base md:text-lg transition-all shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group"
            >
              Blindar Minha Agenda
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
// 2. BENTO GRID (Interatividade da Clínica)
// ==========================================
const ClinicasFeatures = () => {
  // Estado 1: Anti-Calote
  const [hasFee, setHasFee] = useState(false);

  // Estado 2: Chat de Triagem da IA
  const [chatStep, setChatStep] = useState(0);
  const triageChat = [
    { sender: "user", msg: "Oi, queria marcar uma avaliação para botox." },
    {
      sender: "ai",
      msg: "Olá! Claro. Temos a Dra. Camila (Dermatologista). O valor da consulta é R$ 350. Posso confirmar para terça às 14h?",
    },
  ];

  // Estado 4: Fila de Espera
  const [waitingListActive, setWaitingListActive] = useState(false);

  return (
    <section className="py-24 bg-slate-50 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Gestão clínica de alto nível.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Desafogue sua recepção. Interaja com os painéis abaixo e veja como a
            automação salva horas de trabalho todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* 🎯 CARD 1: TAXA ANTI-CALOTE (Interativo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-white rounded-[2rem] border border-slate-200 p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${hasFee ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"}`}
                >
                  {hasFee ? (
                    <ShieldCheck size={24} />
                  ) : (
                    <AlertCircle size={24} />
                  )}
                </div>

                {/* Switch Button */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-500">
                    Taxa de Sinal
                  </span>
                  <button
                    onClick={() => setHasFee(!hasFee)}
                    className={`w-14 h-7 rounded-full p-1 transition-colors flex items-center shadow-inner ${hasFee ? "bg-emerald-500 justify-end" : "bg-slate-300 justify-start"}`}
                  >
                    <motion.div
                      layout
                      className="w-5 h-5 bg-white rounded-full shadow-sm"
                    ></motion.div>
                  </button>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                O Fim do "No-Show"
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-lg text-sm md:text-base">
                Pacientes que agendam e não aparecem geram prejuízo enorme. Com
                a <strong className="text-slate-800">Taxa Anti-Calote</strong>{" "}
                do Zinq, a reserva só é confirmada após um PIX de garantia.
              </p>
            </div>

            {/* Simulador de Faturamento Visual */}
            <div
              className={`mt-8 p-5 rounded-2xl border transition-all duration-500 relative overflow-hidden ${hasFee ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`}
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${hasFee ? "bg-emerald-500" : "bg-rose-500"}`}
                  >
                    <UserCheck size={18} />
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-sm ${hasFee ? "text-emerald-900" : "text-rose-900"}`}
                    >
                      Consulta: Dra. Júlia
                    </h4>
                    <p
                      className={`text-xs ${hasFee ? "text-emerald-700" : "text-rose-700"}`}
                    >
                      Hoje, 14:00
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${hasFee ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    Status do Agendamento
                  </p>
                  <AnimatePresence mode="wait">
                    {hasFee ? (
                      <motion.div
                        key="pago"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-1 text-emerald-700 font-black bg-white px-3 py-1 rounded-lg shadow-sm border border-emerald-100"
                      >
                        <CreditCard size={14} /> SINAL PAGO (30%)
                      </motion.div>
                    ) : (
                      <motion.div
                        key="risco"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-1 text-rose-700 font-black bg-white px-3 py-1 rounded-lg shadow-sm border border-rose-100"
                      >
                        <AlertCircle size={14} /> ALTO RISCO DE FALTA
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🎯 CARD 2: TRIAGEM COM IA (Interativo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-900 rounded-[2rem] border border-slate-800 p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all relative text-white flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-900"></div>

            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center mb-4 border border-teal-500/30">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-700">
                Triagem com IA
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A IA responde o WhatsApp na hora, entende o sintoma/desejo e
                agenda com o especialista correto.
              </p>
            </div>

            <div className="relative z-10 bg-slate-800/80 rounded-xl p-3 border border-slate-700 h-32 flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={chatStep}
                  initial={{ opacity: 0, x: chatStep === 0 ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-xs p-2.5 rounded-lg max-w-[90%] ${chatStep === 0 ? "bg-slate-700 text-slate-200 self-end rounded-tr-sm" : "bg-teal-600 text-white self-start rounded-tl-sm"}`}
                >
                  <span className="font-bold block mb-1 opacity-60 text-[9px]">
                    {chatStep === 0 ? "Paciente" : "Zinq AI"}
                  </span>
                  {triageChat[chatStep].msg}
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => setChatStep(chatStep === 0 ? 1 : 0)}
                className="mt-3 w-full bg-slate-700 hover:bg-slate-600 text-white text-[10px] font-bold py-2 rounded-lg transition-colors"
              >
                Simular Próxima Mensagem
              </button>
            </div>
          </motion.div>

          {/* CARD 3: Histórico Clínico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[2rem] border border-slate-200 p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-5">
              <Activity size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Prontuário e Histórico
            </h3>
            <p className="text-slate-500 text-sm">
              Todo o histórico de conversas do WhatsApp fica salvo na nuvem da
              clínica. O paciente não é "do celular da recepcionista", é do seu
              negócio.
            </p>
          </motion.div>

          {/* 🎯 CARD 4: FILA DE ESPERA (Interativo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-[2rem] border border-slate-200 p-6 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                  <CalendarCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                    Fila de Espera Mágica
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Alguém desmarcou de última hora? Acione a fila.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setWaitingListActive(true)}
                disabled={waitingListActive}
                className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors w-full md:w-auto"
              >
                Simular Desistência
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
              <div
                className={`p-3 rounded-lg border flex items-center justify-between transition-all duration-500 ${waitingListActive ? "bg-rose-50 border-rose-200 opacity-50" : "bg-white border-slate-200 shadow-sm"}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${waitingListActive ? "bg-rose-500" : "bg-emerald-500"}`}
                  ></div>
                  <span
                    className={`text-sm font-bold ${waitingListActive ? "text-rose-700 line-through" : "text-slate-700"}`}
                  >
                    Consulta 15:00 - Carlos M.
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {waitingListActive ? "Cancelado" : "Confirmado"}
                </span>
              </div>

              <AnimatePresence>
                {waitingListActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    className="p-3 rounded-lg border bg-teal-50 border-teal-200 flex items-center justify-between shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <Zap size={14} className="text-teal-600 animate-pulse" />
                      <div>
                        <span className="text-sm font-bold text-teal-800 block">
                          Mensagem enviada para a fila!
                        </span>
                        <span className="text-xs text-teal-600">
                          Avisando 3 pacientes sobre a vaga das 15h...
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setWaitingListActive(false)}
                      className="text-[10px] bg-teal-600 text-white px-2 py-1 rounded hover:bg-teal-700"
                    >
                      Resetar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
const ClinicasCTA = () => (
  <section className="py-32 relative overflow-hidden bg-slate-900">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none transform-gpu"></div>

    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 text-teal-400 rounded-2xl mb-6">
        <HeartPulse size={32} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
        Uma recepção de <span className="text-teal-400">alta performance.</span>
      </h2>
      <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
        Junte-se às clínicas que automatizaram o agendamento, eliminaram as
        faltas e aumentaram a rentabilidade do negócio.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a
          href={APP_REGISTER_URL}
          className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-teal-500 text-slate-950 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_40px_-10px_rgba(20,184,166,0.4)] overflow-hidden"
        >
          <span className="relative z-10">Automatizar Minha Clínica</span>
          <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function ClinicasClient() {
  return (
    <div className="bg-slate-50 font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main>
          <ClinicasHero />
          <ClinicasFeatures />
          <ClinicasCTA />
        </main>
      </ReactLenis>
      <ExploreEcosystem />
      <Footer />
    </div>
  );
}
