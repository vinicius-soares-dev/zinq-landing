"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from "lenis/react";
import Image from "next/image";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  ArrowRight,
  Sparkles,
  CalendarHeart,
  ShieldCheck,
  MessageCircle,
  Wallet,
  Syringe,
  Star,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { ExploreEcosystem } from "@/components/ExploreEcosystem";

const APP_REGISTER_URL = "https://zinqme.com/register";

// ==========================================
// 1. HERO SECTION (Editorial & Elegante)
// ==========================================
const EsteticaHero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#faf8f5] min-h-[90vh] flex flex-col items-center justify-center w-full">
      {/* Imagem de Fundo Suave (Efeito Editorial) */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full md:w-2/3 h-full opacity-30 md:opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
            alt="Estética Premium"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Efeitos de Luz Rose Gold */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-[100px] transform-gpu"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] transform-gpu"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left w-full md:w-3/4 lg:w-2/3"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 border border-rose-200 text-rose-600 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-md shadow-sm"
          >
            <Sparkles size={14} /> Estética, Beleza & Bem-Estar
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] break-words w-full"
          >
            A beleza do seu negócio <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
              é uma agenda perfeita.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Eleve a experiência da sua clínica. O Zinq atende suas clientes com
            IA, cobra taxa de sinal automaticamente e acaba com os buracos na
            sua agenda.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={APP_REGISTER_URL}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group"
            >
              Modernizar minha Clínica
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// 2. INTERAÇÃO: Antes (Caos) x Depois (Zinq)
// ==========================================
const MorphingInterface = () => {
  const [isZinqMode, setIsZinqMode] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Sua recepção,{" "}
            <span
              className={
                isZinqMode
                  ? "text-emerald-500 transition-colors duration-500"
                  : "text-rose-500 transition-colors duration-500"
              }
            >
              transformada.
            </span>
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Veja como o Zinq limpa a bagunça do seu atendimento.
          </p>

          {/* Botão de Transformação */}
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full relative">
            <button
              onClick={() => setIsZinqMode(false)}
              className={`relative px-6 py-2.5 text-sm font-bold rounded-full transition-all z-10 ${!isZinqMode ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}
            >
              Sem o Zinq
            </button>
            <button
              onClick={() => setIsZinqMode(true)}
              className={`relative px-6 py-2.5 text-sm font-bold rounded-full transition-all z-10 flex items-center gap-2 ${isZinqMode ? "text-rose-900" : "text-slate-400 hover:text-slate-600"}`}
            >
              Com Zinq <Sparkles size={14} />
            </button>
            {/* Pilula deslizante */}
            <motion.div
              className={`absolute top-1.5 bottom-1.5 w-1/2 rounded-full shadow-sm z-0 ${isZinqMode ? "bg-rose-100 border border-rose-200" : "bg-white border border-slate-200"}`}
              animate={{ left: isZinqMode ? "50%" : "1.5%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* A Interface Morfando */}
        <div className="relative w-full max-w-3xl mx-auto h-[450px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
          <AnimatePresence mode="wait">
            {!isZinqMode ? (
              // ESTADO 1: O Caos do WhatsApp
              <motion.div
                key="caos"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center bg-[#ECE5DD]" // Cor de fundo clássica de chat
              >
                <div className="space-y-4 w-full max-w-md mx-auto">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 self-start w-[80%] border border-slate-200">
                    Oi, qual o valor do botox? Tem horário pra hoje?
                  </div>
                  <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-slate-800 self-end ml-auto w-[80%] border border-[#c2e6a9]">
                    Olá! O valor é R$ 1.200. Hoje não temos, só amanhã às 14h ou
                    16h.
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 self-start w-[80%] border border-slate-200">
                    Pode ser 14h.
                  </div>
                  <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-slate-800 self-end ml-auto w-[80%] border border-[#c2e6a9]">
                    Marcado! Me passa seu nome completo e CPF? E precisa pagar
                    um sinal de 30% no PIX. A chave é o CNPJ 12.345...
                  </div>
                  <div className="flex items-center gap-2 text-rose-500 text-xs font-bold justify-center mt-4">
                    <XCircle size={14} /> Cliente visualizou e não respondeu
                    mais (Perdeu a venda)
                  </div>
                </div>
              </motion.div>
            ) : (
              // ESTADO 2: A Elegância do Zinq
              <motion.div
                key="zinq"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center bg-white"
              >
                <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-rose-100 overflow-hidden">
                  <div className="bg-rose-50 p-4 text-center border-b border-rose-100">
                    <h3 className="font-bold text-rose-900">
                      Agendamento: Botox Full Face
                    </h3>
                    <p className="text-xs text-rose-600">
                      Amanhã, 14:00 - Dra. Camila
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm text-slate-500">
                        Valor Total
                      </span>
                      <span className="font-bold text-slate-900">
                        R$ 1.200,00
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl mb-6 border border-slate-200">
                      <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-500" />{" "}
                        Sinal Obrigatório
                      </span>
                      <span className="font-black text-emerald-600">
                        R$ 360,00
                      </span>
                    </div>
                    <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                      <Wallet size={16} /> Pagar Sinal via PIX
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                      Agendamento entra na sua agenda na hora.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. O NOVO LAYOUT: EXPANDING ACCORDION (Curtain)
// ==========================================
const servicesData = [
  {
    id: 1,
    title: "A.I. Concierge 24h",
    short: "Sua clínica não fecha",
    desc: "Suas clientes decidem fazer procedimentos de madrugada. A IA do Zinq responde, tira dúvidas sobre o tratamento e agenda o horário sem precisar de intervenção humana.",
    icon: MessageCircle,
    color: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    id: 2,
    title: "Taxa Anti-Calote",
    short: "Fim dos 'No-Shows'",
    desc: "A cada falta, você perde dinheiro e o tempo do profissional. O Zinq obriga o pagamento de um PIX de garantia para reservar a vaga. Se não pagar, o horário volta para a agenda.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    id: 3,
    title: "Retorno Automático",
    short: "Venda recorrente",
    desc: "O botox vence em 6 meses? O Zinq lembra sua cliente automaticamente no WhatsApp quando estiver na hora de refazer o procedimento, criando uma máquina de recompra.",
    icon: CalendarHeart,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    id: 4,
    title: "Prontuário Unificado",
    short: "Tudo no sistema",
    desc: "Mantenha fotos de antes e depois, histórico de conversas e fichas de anamnese num só lugar. Proteja os dados dos clientes caso uma funcionária saia da clínica.",
    icon: Syringe,
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
];

const ExpandingAccordion = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-24 bg-slate-900 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-900/20 via-[#0B0F19] to-[#0B0F19]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            A clínica que funciona{" "}
            <span className="text-rose-400">sozinha.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Clique nos pilares abaixo para expandir.
          </p>
        </div>

        {/* Desktop Layout: Horizontal Expanding Cards */}
        <div className="hidden md:flex h-[400px] w-full gap-4">
          {servicesData.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-3xl cursor-pointer overflow-hidden flex flex-col transition-all duration-500 ease-out border
                  ${isActive ? "w-full bg-white border-white" : "w-24 bg-slate-800 border-slate-700 hover:bg-slate-700"}
                `}
              >
                {/* O Ícone sempre fica no topo */}
                <div
                  className={`h-24 flex items-center justify-center shrink-0 transition-colors duration-500 ${isActive ? item.color : "text-slate-400"}`}
                >
                  <item.icon size={isActive ? 32 : 24} />
                </div>

                {/* O Conteúdo (visível apenas quando ativo) */}
                <div className="flex-1 px-10 pb-10 flex flex-col justify-end">
                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <h3 className="text-3xl font-black text-slate-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </motion.div>
                    ) : (
                      // Texto girado quando inativo
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap -rotate-90 origin-left text-slate-500 font-bold tracking-widest uppercase text-xs">
                        {item.short}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout: Vertical Accordion */}
        <div className="flex flex-col md:hidden gap-4">
          {servicesData.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                className={`rounded-2xl cursor-pointer overflow-hidden border transition-colors duration-300
                  ${isActive ? "bg-white border-white" : "bg-slate-800 border-slate-700"}
                `}
              >
                <div className="p-5 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isActive ? item.color : "bg-slate-700 text-slate-400"}`}
                  >
                    <item.icon size={20} />
                  </div>
                  <h3
                    className={`font-bold text-lg ${isActive ? "text-slate-900" : "text-slate-200"}`}
                  >
                    {item.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-6 text-slate-500 text-sm leading-relaxed"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. CTA FINAL (Elegante)
// ==========================================
const EsteticaCTA = () => (
  <section className="py-32 relative overflow-hidden bg-rose-50">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[80px] pointer-events-none transform-gpu"></div>

    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-rose-500 rounded-full mb-8 shadow-xl shadow-rose-200">
        <Star size={40} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
        A beleza de uma agenda{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
          previsível e segura.
        </span>
      </h2>
      <p className="text-slate-600 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
        Automatize seu atendimento, elimine as faltas e entregue uma experiência
        premium desde o primeiro "Oi" no WhatsApp.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a
          href={APP_REGISTER_URL}
          className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_40px_-10px_rgba(244,63,94,0.3)] overflow-hidden"
        >
          <span className="relative z-10">Configurar minha Clínica</span>
          <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function EsteticaClient() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main>
          <EsteticaHero />
          <MorphingInterface />
          <ExpandingAccordion />
          <EsteticaCTA />
        </main>
      </ReactLenis>

      <ExploreEcosystem />
      <Footer />
    </div>
  );
}
