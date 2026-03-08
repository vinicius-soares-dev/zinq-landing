"use client"; // Necessário para os hooks de scroll e simulador de ranking

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from 'lenis/react';

import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer'; 
import { ConversionBanner } from '@/components/ConversionBanner'; 

import { 
  ArrowRight, Trophy, Crown, Flame, 
  Target, Rocket, Medal, Star,  Users, Building2
} from 'lucide-react';

const APP_REGISTER_URL = "https://zinq.me/register";
// ==========================================
// 1. HERO SECTION (Dopamina Corporativa)
// ==========================================
const GamificationHero = () => {
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

  const scrollToInterativo = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('ranking-interativo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants: Variants = { hidden: { opacity: 0, y: 30, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 20 } } };

  return (
    // 🎯 Adicionado w-full na section para evitar vazamento
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#000212] min-h-[90vh] flex flex-col items-center justify-center w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div style={{ x: smoothX, y: smoothY }} className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-amber-600/20 rounded-full mix-blend-screen filter blur-[150px]"></motion.div>
          <motion.div style={{ x: smoothY, y: smoothX }} className="absolute bottom-[-10%] right-1/4 w-[700px] h-[700px] bg-orange-600/15 rounded-full mix-blend-screen filter blur-[160px]"></motion.div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 animate-[slideUp_20s_linear_infinite]"></div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-1" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Trophy size={14} /> Dopamina Corporativa
          </motion.div>
          
          {/* 🎯 Responsividade do Texto: text-4xl no mobile, break-words */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] break-words w-full">
            Transforme trabalho <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">em alta performance.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light opacity-90">
            A sua equipe quer vencer. Dê-lhes o placar. O Zinq transforma cada atendimento rápido e tarefa entregue em pontos, rankings e recompensas reais.
          </motion.p>
          
          {/* 🎯 Botões com largura total no mobile */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={APP_REGISTER_URL} className="w-full sm:w-auto px-6 md:px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-xl font-black text-base md:text-lg transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2 group">
              Ativar Ranking Grátis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={scrollToInterativo} className="w-full sm:w-auto px-6 md:px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-base md:text-lg transition-all flex items-center justify-center backdrop-blur-sm">
              Ver Tabela de Líderes
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

// ==========================================
// 2. MOCKUP INTERATIVO (O Pódio / Leaderboard)
// ==========================================
const rawData = [
  { id: '1', name: 'Ana Silva', dept: 'Vendas', avatar: 'AS', basePts: 1250 },
  { id: '2', name: 'Carlos Dev', dept: 'Suporte', avatar: 'CD', basePts: 1100 },
  { id: '3', name: 'Vinicius S.', dept: 'Gestão', avatar: 'VS', basePts: 950 },
  { id: '4', name: 'Marina R.', dept: 'Vendas', avatar: 'MR', basePts: 800 },
  { id: '5', name: 'João P.', dept: 'Marketing', avatar: 'JP', basePts: 750 },
];

const deptsData = [
  { id: 'd1', name: 'Equipe de Vendas', dept: 'Comercial', avatar: '💰', basePts: 4500 },
  { id: 'd2', name: 'Suporte Técnico', dept: 'CS', avatar: '🎧', basePts: 3200 },
  { id: 'd3', name: 'Marketing', dept: 'Growth', avatar: '🚀', basePts: 2800 },
];

const LeaderboardMockup = () => {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('week');
  const [viewMode, setViewMode] = useState<'employees' | 'departments'>('employees');

  const multipliers = { week: 1, month: 4.2, year: 52.8 };

  const getRankedData = () => {
    const baseArray = viewMode === 'employees' ? rawData : deptsData;
    const mult = multipliers[timeframe];
    
    const calculated = baseArray.map(item => {
      const randomFactor = (parseInt(item.id.replace(/\D/g, '')) * (timeframe === 'week' ? 1 : timeframe === 'month' ? 3 : 7)) % 150;
      return { ...item, points: Math.floor((item.basePts + randomFactor) * mult) };
    });

    return calculated.sort((a, b) => b.points - a.points);
  };

  const rankedList = getRankedData();
  const maxPoints = rankedList[0]?.points || 1;

  return (
    // 🎯 overflow-x-hidden e w-full para blindar o grid principal
    <section id="ranking-interativo" className="bg-slate-50 pb-20 pt-10 relative z-10 scroll-mt-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 w-full">
        
        <div className="text-center mb-12 w-full">
          <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Flame size={16} className="text-amber-600 fill-amber-600"/> Atualização em Tempo Real
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Tabela de Líderes</h2>
          <p className="text-slate-500 mt-2 font-medium">Alterne os filtros abaixo e veja a física da competição acontecer.</p>
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden max-w-full"
        >
          <div className="bg-[#1A1D21] p-4 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 relative overflow-hidden">
            <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-amber-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            {/* 🎯 Menu de Filtros: overflow-x-auto com hide-scrollbar para deslizar suave no mobile sem quebrar a tela */}
            <div className="flex bg-slate-800/80 p-1.5 rounded-xl border border-slate-700 w-full md:w-auto relative z-10 overflow-x-auto hide-scrollbar snap-x">
              <button 
                onClick={() => setViewMode('employees')}
                className={`snap-start whitespace-nowrap flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 ${viewMode === 'employees' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <Users size={16}/> Indivíduos
              </button>
              <button 
                onClick={() => setViewMode('departments')}
                className={`snap-start whitespace-nowrap flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 ${viewMode === 'departments' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                <Building2 size={16}/> Setores
              </button>
            </div>

            {/* 🎯 Tabs de tempo com overflow-x-auto nativo e snap para scroll suave */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto hide-scrollbar z-10 snap-x pb-1 md:pb-0">
              {['week', 'month', 'year'].map((t) => (
                <button 
                  key={t} onClick={() => setTimeframe(t as any)}
                  className={`snap-start whitespace-nowrap px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold border transition-colors flex-none ${timeframe === t ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500'}`}
                >
                  {t === 'week' ? 'Esta Semana' : t === 'month' ? 'Este Mês' : 'Ano de 2026'}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 md:p-8 bg-slate-50">
            <div className="flex flex-col gap-2 md:gap-3">
              {rankedList.map((item, index) => {
                const isGold = index === 0;
                const isSilver = index === 1;
                const isBronze = index === 2;
                
                return (
                  <motion.div
                    layout 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`relative p-3 md:p-5 rounded-2xl flex items-center gap-3 md:gap-6 z-10 transition-shadow duration-300
                      ${isGold ? 'bg-white border-2 border-amber-400 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.3)]' : 'bg-white border border-slate-200 shadow-sm'}
                    `}
                  >
                    <div className="w-6 md:w-12 shrink-0 flex justify-center">
                      {isGold ? <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center ring-2 md:ring-4 ring-amber-500/20"><Crown size={16} className="text-amber-500 fill-amber-500 md:w-5 md:h-5"/></div> :
                       isSilver ? <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-100 rounded-full flex items-center justify-center"><Medal size={14} className="text-slate-500"/></div> :
                       isBronze ? <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-100 rounded-full flex items-center justify-center"><Medal size={14} className="text-orange-700"/></div> :
                       <span className="font-bold text-slate-400 text-sm md:text-lg">#{index + 1}</span>
                      }
                    </div>

                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-sm md:text-lg shrink-0
                      ${viewMode === 'departments' ? 'bg-slate-100 text-xl md:text-2xl' : 'bg-slate-800 text-white shadow-inner'}
                    `}>
                      {item.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1.5 md:mb-2">
                        <div className="truncate pr-2">
                          <h4 className={`font-black truncate ${isGold ? 'text-slate-900 text-sm md:text-lg' : 'text-slate-700 text-sm md:text-base'}`}>{item.name}</h4>
                          <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">{item.dept}</span>
                        </div>
                        <div className="text-right shrink-0">
                          <motion.span 
                            key={item.points} 
                            initial={{ scale: 1.5, color: '#f59e0b' }} 
                            animate={{ scale: 1, color: isGold ? '#f59e0b' : '#334155' }} 
                            className={`font-black font-mono ${isGold ? 'text-lg md:text-2xl text-amber-500' : 'text-base md:text-xl text-slate-700'}`}
                          >
                            {item.points.toLocaleString('pt-BR')} <span className="text-[10px] md:text-sm font-bold opacity-50">XP</span>
                          </motion.span>
                        </div>
                      </div>
                      
                      <div className="h-1.5 md:h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          layout
                          className={`h-full rounded-full ${isGold ? 'bg-gradient-to-r from-amber-400 to-orange-500' : isSilver ? 'bg-slate-400' : isBronze ? 'bg-orange-400' : 'bg-blue-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.points / maxPoints) * 100}%` }}
                          transition={{ type: "spring", stiffness: 60, damping: 15 }}
                        />
                      </div>
                    </div>
                    
                    {isGold && <div className="absolute inset-0 rounded-2xl bg-amber-400 opacity-5 blur-xl pointer-events-none -z-10"></div>}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// ==========================================
// 3. COMO GANHAR PONTOS
// ==========================================
const HowToEarn = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Como o jogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">funciona.</span>
          </h2>
          <p className="text-slate-500 text-lg">O Zinq audita as ações de forma invisível. Sem preenchimento manual.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-8 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Target size={80}/></div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-black text-lg">+50</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Primeira Resposta (SLA)</h3>
            <p className="text-slate-500 text-sm">Respondeu a um novo lead do WhatsApp em menos de 3 minutos? A equipe ganha um bônus explosivo de velocidade.</p>
          </div>

          <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-8 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Rocket size={80}/></div>
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 font-black text-lg">+100</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Conclusão de Tarefas</h3>
            <p className="text-slate-500 text-sm">A cada cartão movido para "Concluído" no Kanban dentro do prazo estipulado, o XP do funcionário sobe.</p>
          </div>

          <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-8 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Star size={80}/></div>
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 font-black text-lg">+500</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Avaliação 5 Estrelas</h3>
            <p className="text-slate-500 text-sm">Se a pesquisa de satisfação automática no final do atendimento voltar com nota máxima, o atendente recebe a glória.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. CTA FINAL (O Prêmio)
// ==========================================
const GamificationCTA = () => (
  <section className="py-32 relative overflow-hidden bg-[#020617]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-[#020617] to-[#020617]"></div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(245,158,11,0.5)]">
        <Trophy size={48} className="text-white" />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
        A sua equipe <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">motivada por padrão.</span>
      </h2>
      <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
        Implemente um sistema de recompensas. Troque pontos por folgas, vouchers do iFood ou prêmios. Comece a medir o que realmente importa.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a href={APP_REGISTER_URL} className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-slate-900 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl overflow-hidden ring-4 ring-white/10 hover:shadow-amber-500/20">
            <span className="relative z-10">Criar Operação de Elite</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function GamificationClient() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main> 
          <GamificationHero />
          <LeaderboardMockup />
          <HowToEarn />
          <GamificationCTA />
        </main>
      </ReactLenis>
      <Footer />
      <ConversionBanner variant='floating' />
    </div>
  );
}