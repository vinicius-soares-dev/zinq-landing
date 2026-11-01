"use client"; // Necessário para os hooks de estado, simulação da roleta e SVG animation

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from 'lenis/react';

import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer'; 

import { 
  ArrowRight, Shuffle, Users, Zap, Target, 
  Filter, BarChart3, Crosshair, Sparkles, TrendingUp,
  RotateCw
} from 'lucide-react';

const APP_REGISTER_URL = "https://zinq.me/register";


// ==========================================
// 1. HERO SECTION (Com Path Tracing SVG)
// ==========================================
const RoletaHero = () => {
  const scrollToInterativo = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('simulador-roleta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants: Variants = { hidden: { opacity: 0, y: 30, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 20 } } };

  return (
    // 🎯 Adicionado w-full para proteção lateral
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#000212] min-h-[90vh] flex flex-col items-center justify-center w-full">
      
      {/* TÉCNICA NOVA: SVG Path Tracing (Linhas de energia passando) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        <svg viewBox="0 0 1000 1000" className="absolute w-full h-full" preserveAspectRatio="none">
          <motion.path 
            d="M 0,200 C 300,200 400,600 1000,600" 
            stroke="url(#roseGradient)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 0,800 C 400,800 600,200 1000,200" 
            stroke="url(#violetGradient)" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <defs>
            <linearGradient id="roseGradient"><stop offset="0%" stopColor="#f43f5e" stopOpacity="0"/><stop offset="50%" stopColor="#f43f5e" stopOpacity="1"/><stop offset="100%" stopColor="#f43f5e" stopOpacity="0"/></linearGradient>
            <linearGradient id="violetGradient"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/><stop offset="50%" stopColor="#8b5cf6" stopOpacity="1"/><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/></linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-rose-600/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[-10%] right-1/4 w-[700px] h-[700px] bg-violet-600/15 rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-1" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
            <Shuffle size={14} /> Motor de Distribuição Inteligente
          </motion.div>
          
          {/* 🎯 Ajustes de responsividade: text-4xl no mobile, break-words */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] break-words w-full">
            O fim do favoritismo. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400">Leads no milissegundo exato.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light opacity-90">
            A sua campanha gerou 500 leads? O Zinq mapeia quem está livre, analisa as habilidades e distribui a oportunidade sem intervenção humana.
          </motion.p>
          
          {/* 🎯 Botões responsivos: largura 100% no mobile */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={APP_REGISTER_URL} className="w-full sm:w-auto px-6 md:px-10 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-black text-base md:text-lg transition-all shadow-[0_0_40px_-10px_rgba(244,63,94,0.6)] flex items-center justify-center gap-2 group">
              Automatizar Minha Operação
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={scrollToInterativo} className="w-full sm:w-auto px-6 md:px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-base md:text-lg transition-all flex items-center justify-center backdrop-blur-sm gap-2">
              <Zap size={18} className="text-rose-400" /> Testar o Motor
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

// ==========================================
// 2. MOCKUP INTERATIVO (A Roleta Algorítmica)
// ==========================================
const InteractiveMockup = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [leadsDistributed, setLeadsDistributed] = useState(0);
  
  const spinTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [team, setTeam] = useState([
    { id: 1, name: 'Vinicius S.', role: 'Closer', workload: 2, capacity: 10, color: 'bg-rose-500', avatar: 'VS' },
    { id: 2, name: 'Ana Silva', role: 'SDR', workload: 8, capacity: 10, color: 'bg-violet-500', avatar: 'AS' },
    { id: 3, name: 'Carlos Dev', role: 'Suporte', workload: 4, capacity: 10, color: 'bg-fuchsia-500', avatar: 'CD' },
  ]);

  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

  const handleDistribute = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setActiveIndex(null);

    const spins = 12 + Math.floor(Math.random() * 6);
    let currentSpin = 0;
    let delay = 50;

    const spinInterval = () => {
      setActiveIndex(currentSpin % team.length);
      currentSpin++;

      if (currentSpin < spins) {
        delay = currentSpin > spins - 5 ? delay + 40 : delay;
        spinTimeoutRef.current = setTimeout(spinInterval, delay);
      } else {
        const winnerIndex = team.indexOf(team.reduce((prev, curr) => prev.workload < curr.workload ? prev : curr));
        
        setActiveIndex(winnerIndex);
        
        spinTimeoutRef.current = setTimeout(() => {
          setTeam(prev => prev.map((member, i) => 
            i === winnerIndex ? { ...member, workload: member.workload + 1 } : member
          ));
          setLeadsDistributed(prev => prev + 1);
          setIsSpinning(false);
        
          spinTimeoutRef.current = setTimeout(() => setActiveIndex(null), 2000);
        }, 500);
      }
    };

    spinTimeoutRef.current = setTimeout(spinInterval, delay);
  };

  return (
    // 🎯 Adicionado overflow-x-hidden e w-full para evitar vazamento em telas pequenas
    <section id="simulador-roleta" className="bg-slate-50 pb-24 pt-10 relative z-10 scroll-mt-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        
        <div className="text-center mb-12 w-full">
          <p className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Crosshair size={16}/> Algoritmo em Tempo Real
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">O Motor de Distribuição</h2>
          <p className="text-slate-500 mt-2 font-medium max-w-2xl mx-auto">
            Clique no botão abaixo para injetar um Lead. O sistema procurará o vendedor mais desocupado e fará o roteamento no mesmo segundo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center w-full">
          
          {/* Painel de Controle de Entrada */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "spring" }} viewport={{ once: true }}
            className="w-full lg:w-1/3 bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-slate-200 text-center flex flex-col justify-center min-h-[350px]"
          >
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mx-auto mb-6 shadow-inner">
              <Zap size={40} className={isSpinning ? "animate-pulse text-amber-500" : ""} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Simulador de Leads</h3>
            <p className="text-sm text-slate-500 mb-8">Leads roteados hoje: <span className="font-bold text-slate-900 text-lg">{leadsDistributed}</span></p>
            
            <button 
              onClick={handleDistribute} 
              disabled={isSpinning}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-black text-base md:text-lg transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {isSpinning ? (
                <><RotateCw size={20} className="animate-spin"/> Processando...</>
              ) : (
                <><Target size={20}/> Injetar Novo Lead</>
              )}
            </button>
          </motion.div>

          {/* O Roteador Visual (Equipe) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "spring", delay: 0.2 }} viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-800 relative overflow-hidden min-h-[350px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-[#0B0F19] to-[#0B0F19]"></div>
            
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2 sm:mb-4">
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Membros da Roleta (3)</span>
                <span className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Sistema Online
                </span>
              </div>

              {team.map((member, index) => {
                const isWinner = activeIndex === index && !isSpinning && activeIndex !== null;
                const isHighlighted = activeIndex === index;
                const fillPercentage = (member.workload / member.capacity) * 100;

                return (
                  <div 
                    key={member.id} 
                    className={`relative p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-3 md:gap-4
                      ${isHighlighted ? 'bg-slate-800 border-rose-500/50 shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)] scale-[1.02]' : 'bg-slate-800/50 border-slate-700/50 scale-100'}
                      ${isWinner ? 'ring-2 ring-rose-500' : ''}
                    `}
                  >
                    <AnimatePresence>
                      {isWinner && (
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                          className="absolute -right-2 -top-3 md:-right-3 md:-top-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1 z-20"
                        >
                          <Sparkles size={10}/> Lead Recebido!
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${member.color} flex items-center justify-center font-bold text-white shadow-inner shrink-0`}>
                      {member.avatar}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-2">
                        <div className="truncate pr-2">
                          <h4 className="text-white font-bold text-sm md:text-base truncate">{member.name}</h4>
                          <span className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-wider">{member.role}</span>
                        </div>
                        <span className={`text-[10px] md:text-xs font-bold shrink-0 ${fillPercentage >= 100 ? 'text-rose-500' : 'text-slate-300'}`}>
                          {member.workload} / {member.capacity} leads
                        </span>
                      </div>
                      
                      <div className="h-1.5 md:h-2 w-full bg-slate-950 rounded-full overflow-hidden relative">
                        <motion.div 
                          className={`h-full absolute left-0 top-0 ${fillPercentage >= 100 ? 'bg-rose-500' : member.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${fillPercentage}%` }}
                          transition={{ type: "spring", stiffness: 50, damping: 15 }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// ==========================================
// 3. BENTO BOX SECTION
// ==========================================
const BentoFeatures = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Controle absoluto em <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-500">cada etapa.</span>
          </h2>
          <p className="text-slate-400 text-lg">Configurações granulares para operações complexas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card Grande (2 colunas) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="md:col-span-2 relative bg-[#0B0F19] rounded-[2rem] border border-slate-800 p-8 md:p-12 overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] group-hover:bg-rose-600/20 transition-colors duration-700"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/20">
                  <Filter size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Roteamento por Habilidade (Skills)</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Não entregue um lead de Alto Valor para um vendedor júnior. Crie regras que enviam o cliente certo para o fechador certo.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="bg-slate-800 text-xs text-white px-3 py-1.5 rounded-lg border border-slate-700">Lead: Imóvel Luxo</span>
                <ArrowRight size={14} className="text-rose-500"/>
                <span className="bg-rose-500/20 text-rose-300 font-bold text-xs px-3 py-1.5 rounded-lg border border-rose-500/30">Corretor Sênior</span>
              </div>
            </div>
          </motion.div>

          {/* Card Vertical */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-[#0B0F19] rounded-[2rem] border border-slate-800 p-8 overflow-hidden group hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-violet-600/10 rounded-full blur-[80px] group-hover:bg-violet-600/20 transition-colors duration-700"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-violet-500/20 text-violet-400 rounded-2xl flex items-center justify-center mb-6 border border-violet-500/20">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pausa Inteligente</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                O vendedor foi almoçar ou está em reunião? Ele ativa o modo "Pausa" e a roleta ignora-o automaticamente, evitando que os leads esfriem na fila.
              </p>
            </div>
          </motion.div>

          {/* Card Pequeno 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-[#0B0F19] rounded-[2rem] border border-slate-800 p-8 overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="w-12 h-12 bg-fuchsia-500/20 text-fuchsia-400 rounded-2xl flex items-center justify-center mb-5 border border-fuchsia-500/20">
              <BarChart3 size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Relatório de Equidade</h3>
            <p className="text-slate-400 text-sm">Audite no final do mês quem recebeu quantos leads e comprove a justiça da operação.</p>
          </motion.div>

          {/* Card Médio Final */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 relative bg-[#0B0F19] rounded-[2rem] border border-slate-800 p-8 overflow-hidden group hover:border-slate-700 transition-colors flex items-center gap-8"
          >
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center shrink-0 border border-blue-500/20">
              <TrendingUp size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">SLA de Atendimento</h3>
              <p className="text-slate-400 text-sm md:text-base">Se o vendedor sorteado não responder o cliente em X minutos, a roleta puxa o lead de volta e envia para o próximo disponível. Proteção extrema de faturamento.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const RoletaCTA = () => (
  <section className="py-32 relative overflow-hidden bg-white">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-100 rounded-full blur-[120px] pointer-events-none"></div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
        Acabe com a perda de leads <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">hoje mesmo.</span>
      </h2>
      <p className="text-slate-600 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
        Um lead quente não espera. Configure a sua primeira Roleta de Distribuição em 3 minutos e veja o tempo de resposta da sua equipe despencar.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a href={APP_REGISTER_URL} className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-rose-600 text-white rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl overflow-hidden ring-4 ring-rose-600/10 hover:shadow-rose-600/30">
            <span className="relative z-10">Criar Minha Conta Grátis</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function RoletasClient() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main> 
          <RoletaHero />
          <InteractiveMockup />
          <BentoFeatures />
          <RoletaCTA />
        </main>
      </ReactLenis>
      <Footer />
    </div>
  );
}