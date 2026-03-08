"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Bot, ShieldCheck, QrCode, Lock, CheckCircle2, Send, Mic, CalendarCheck, Copy } from "lucide-react";

export const ShieldAndAISection = () => {
  const [pixCopied, setPixCopied] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("00020126580014br.gov.bcb.pix.faz-o-pix-ai...");
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 3000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" as const } 
    }
  };

  const mockupVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 50, damping: 15, delay: 0.2 }
    }
  };

  return (
    <section className="bg-white py-24 md:py-32 relative z-10 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-100 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Automação que <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">gera receita.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-50 border border-slate-200 rounded-[2.5rem] pt-10 md:pt-14 hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"
            ></motion.div>
            
            <div className="px-8 md:px-14 relative z-10 mb-10">
              <div className="w-16 h-16 bg-white border border-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Bot size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Seu melhor vendedor <span className="text-indigo-600">nunca dorme.</span>
              </h3>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light">
                A Zinq AI atende, tira dúvidas e fecha agendamentos 24/7 com a voz da sua marca.
              </p>
            </div>

            <motion.div 
              variants={mockupVariants}
              className="relative z-20 mx-6 md:mx-12 bg-white rounded-t-3xl border-t border-l border-r border-slate-200 shadow-[0_-10px_40px_-15px_rgba(79,70,229,0.15)] overflow-hidden flex-1"
            >
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-sm"><Bot size={20}/></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800">Zinq AI</p>
                  <p className="text-xs text-emerald-500 font-bold">Online agora</p>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-50/50 min-h-[220px]">
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="self-end bg-slate-800 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm origin-bottom-right"
                >
                  Gostaria de agendar para amanhã à tarde!
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: [0, 1, 1, 0], height: [0, "auto", "auto", 0], overflow: "hidden" }}
                  transition={{ duration: 2, times: [0, 0.1, 0.9, 1], delay: 1.2 }}
                  viewport={{ once: true }}
                  className="self-start bg-white border border-slate-100 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 3.2 }}
                  viewport={{ once: true }}
                  className="self-start bg-white border border-slate-100 text-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[95%] shadow-sm flex flex-col gap-2 origin-top-left"
                >
                  <p>Claro! Tenho estes horários disponíveis amanhã:</p>
                  <div className="flex gap-2 mt-1 overflow-x-auto pb-1 no-scrollbar">
                    <span className="bg-indigo-50 text-indigo-600 font-bold px-3 py-1.5 rounded-lg border border-indigo-100 cursor-pointer hover:bg-indigo-100 transition-colors shrink-0">14:00</span>
                    <span className="bg-indigo-50 text-indigo-600 font-bold px-3 py-1.5 rounded-lg border border-indigo-100 cursor-pointer hover:bg-indigo-100 transition-colors shrink-0">15:30</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center gap-3">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-full h-10 px-4 flex items-center text-slate-400 text-sm">
                  <Mic size={16} className="mr-2 shrink-0"/> 
                  <span>Digite aqui</span>
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 1 }} 
                    className="ml-[2px] w-[2px] h-[14px] bg-indigo-500 inline-block"
                  />
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-md shrink-0"><Send size={16} className="ml-0.5"/></div>
              </div>
            </motion.div>
          </motion.div>

         <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-900 border border-slate-700 rounded-[2.5rem] pt-10 md:pt-14 hover:shadow-2xl hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden group text-white flex flex-col justify-between"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[-20%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            <div className="px-8 md:px-14 relative z-10 mb-10">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight text-white">
                Taxa de Sinal <span className="text-emerald-400">Anti-Calote</span>
              </h3>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
                O cliente quer o horário? Ele paga via PIX na hora. Sem pagamento, a vaga volta automaticamente para a agenda.
              </p>
            </div>

            <motion.div 
              variants={mockupVariants}
              className="relative z-20 mx-6 md:mx-12 bg-slate-800 rounded-t-3xl border-t border-l border-r border-slate-600 shadow-[0_-10px_40px_-15px_rgba(16,185,129,0.3)] overflow-hidden flex-1"
            >
              <div className="bg-slate-900/80 border-b border-slate-700 px-6 py-4 flex justify-between items-center z-20 relative">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Checkout Seguro</span>
                <Lock size={14} className="text-emerald-400" />
              </div>

              {/* TELA 1: QR CODE */}
              <motion.div 
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 0, scale: 0.9, transitionEnd: { display: "none" } }}
                transition={{ duration: 0.5, delay: 6 }} 
                viewport={{ once: true }}
                className="absolute inset-0 top-[53px] p-6 md:p-8 flex flex-col items-center text-center bg-slate-800 z-10"
              >
                <div className="w-16 h-16 bg-white p-2 rounded-xl mb-4 shadow-lg ring-4 ring-emerald-500/30">
                  <QrCode size={48} className="text-slate-900 mx-auto" />
                </div>
                <h4 className="text-slate-200 text-sm font-medium mb-1">Sinal Obrigatório (30%)</h4>
                <p className="text-3xl font-black text-white mb-5 md:mb-6">R$ 45,00</p>
                
                <motion.div 
                  onClick={handleCopyPix}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full font-black py-3.5 rounded-xl transition-all duration-300 cursor-pointer flex justify-center items-center gap-2 mb-3 shadow-lg select-none ${
                    pixCopied 
                      ? 'bg-emerald-400 text-slate-900 shadow-emerald-400/20' 
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                  }`}
                >
                  {pixCopied ? (
                    <><CheckCircle2 size={18} /> Código Copiado!</>
                  ) : (
                    <><Copy size={18} /> Copiar Código PIX</>
                  )}
                </motion.div>

                <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden mt-auto">
                  <motion.div 
                    initial={{ width: "100%" }} 
                    whileInView={{ width: "0%" }} 
                    transition={{ duration: 6, ease: "linear", delay: 0 }}
                    viewport={{ once: true }}
                    className="h-full bg-emerald-400"
                  />
                </div>
              </motion.div>

              {/* TELA 2: SUCESSO */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 6.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 flex flex-col items-center text-center relative z-0 h-[280px] justify-center bg-slate-800"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 ring-8 ring-emerald-500/10">
                  <CheckCircle2 size={48} className="text-emerald-400" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2">Pagamento Confirmado!</h4>
                <div className="flex items-center justify-center gap-2 text-slate-300 text-sm bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700 mt-2">
                  <CalendarCheck size={16} className="text-emerald-400" />
                  Agendamento Concluído
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};