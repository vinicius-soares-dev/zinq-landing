"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from 'lenis/react';

import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer'; 

import { 
  ArrowRight, Target, Flame, 
  Crosshair, Zap, Trophy,
  DollarSign, Timer, Rocket, CheckCircle2,
  RotateCw
} from 'lucide-react';
import { ExploreEcosystem } from '@/components/ExploreEcosystem';

const APP_REGISTER_URL = "https://zinq.me/register";

// ==========================================
// 1. HERO SECTION (Com Efeito 3D Hover)
// ==========================================
const VendasHero = () => {
  // Configuração do Tilt 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#020617] min-h-screen flex flex-col items-center justify-center w-full">
      {/* Grid Background Tech */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none transform-gpu"></div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Copy Agressiva */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <Target size={14} /> CRM para High Ticket e Volume
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] break-words w-full">
            Velocidade é a nova <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">moeda das vendas.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light">
            Leads na internet esfriam em 5 minutos. O Zinq arranca o lead do seu anúncio, encontra o vendedor disponível e conecta os dois em milissegundos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={APP_REGISTER_URL} className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-lg transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group">
              Montar Minha Máquina
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Lado Direito: Elemento 3D Interativo */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center perspective-[1000px]">
          <motion.div 
            style={{ rotateX, rotateY }}
            className="w-full max-w-sm bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/30 transform-gpu preserve-3d"
          >
            <div className="flex items-center justify-between mb-8 translate-z-[20px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                  <DollarSign size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Meta do Mês</p>
                  <p className="text-white text-xl font-black">R$ 150.000</p>
                </div>
              </div>
              <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-3 py-1 rounded-full">+24%</span>
            </div>
            
            <div className="space-y-4 translate-z-[40px]">
              {[
                { name: 'Ana (Closer)', val: 'R$ 85k', w: '85%', c: 'bg-blue-500' },
                { name: 'Marcos (SDR)', val: 'R$ 42k', w: '42%', c: 'bg-indigo-500' },
                { name: 'Julia (Closer)', val: 'R$ 23k', w: '23%', c: 'bg-cyan-500' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-200">{item.name}</span>
                    <span className="text-white">{item.val}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} animate={{ width: item.w }} transition={{ duration: 1.5, delay: i * 0.2, type: "spring" }}
                      className={`h-full ${item.c}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Elemento flutuando por cima */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-6 bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 p-4 rounded-2xl shadow-xl font-black text-sm flex items-center gap-2 translate-z-[60px]"
            >
              <Trophy size={18} /> Ana assumiu o Top #1
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 2. SESSÃO DO RADAR (Roleta de Distribuição)
// ==========================================
const RadarSection = () => {
  const [radarActive, setRadarActive] = useState(false);
  const [leadFound, setLeadFound] = useState(false);

  const scanForLead = () => {
    if (radarActive) return;
    setRadarActive(true);
    setLeadFound(false);
    
    // Simula a busca
    setTimeout(() => {
      setLeadFound(true);
      setTimeout(() => {
        setRadarActive(false); // Reseta para brincar de novo
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-x-hidden border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Esquerda: O Radar */}
        <div className="w-full md:w-1/2 flex justify-center relative h-[350px] items-center">
          {/* Anéis do Radar */}
          <div className="absolute w-[250px] h-[250px] border border-blue-500/20 rounded-full"></div>
          <div className="absolute w-[180px] h-[180px] border border-blue-500/30 rounded-full"></div>
          <div className="absolute w-[100px] h-[100px] border border-blue-500/40 rounded-full"></div>
          
          {/* O Scanner (Gira quando ativo) */}
          <motion.div 
            animate={{ rotate: radarActive ? 360 : 0 }}
            transition={{ duration: 1.5, repeat: radarActive ? Infinity : 0, ease: "linear" }}
            className="absolute w-[250px] h-[250px] rounded-full"
            style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(59, 130, 246, 0.4) 100%)' }}
          />
          
          {/* Blip Central */}
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] z-10 flex items-center justify-center">
            <Zap size={10} className="text-white"/>
          </div>

          {/* O Ponto Encontrado */}
          <AnimatePresence>
            {leadFound && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                className="absolute top-[20%] right-[20%] z-20 flex flex-col items-center"
              >
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-emerald-500 rounded-full relative z-10 border-2 border-[#0B0F19]"></div>
                <div className="mt-2 bg-slate-800 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-500/30 whitespace-nowrap">
                  Lead Enviado  `{'>'}`  Marcos
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direita: Conteúdo */}
        <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">
            <Crosshair size={18} /> Algoritmo Logístico
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            O fim da "pescaria" de leads no WhatsApp.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Em operações mal geridas, vendedores escolhem quem vão atender. No Zinq, o algoritmo detecta a origem do lead, varre a equipe procurando quem tem a tag correta (Ex: Closer B2B) e injeta o contato direto no painel dele.
          </p>
          <button 
            onClick={scanForLead}
            disabled={radarActive || leadFound}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-3"
          >
            {radarActive ? <><RotateCw size={20} className="animate-spin"/> Varrendo Equipe...</> : <><Target size={20}/> Simular Distribuição de Lead</>}
          </button>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 3. SESSÃO SWIPE TO CLOSE (Gamificação)
// ==========================================
const GamificationAction = () => {
  const [isWon, setIsWon] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (_e: any, info: any) => {
    // Se arrastou quase até o final do container
    if (info.offset.x > 200) {
      setIsWon(true);
      setTimeout(() => setIsWon(false), 4000); // Reseta para tentar de novo
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Gamificação levada a sério.
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-16">
          Vendedores são movidos a vitórias. <strong className="text-emerald-600 block">Arraste o botão abaixo para a direita e feche um contrato para ver a magia acontecer.</strong>
        </p>

        {/* O Componente "Swipe to Unlock" */}
        <div className="max-w-md mx-auto relative h-20 bg-slate-200 rounded-full border-4 border-slate-100 shadow-inner flex items-center p-2 overflow-hidden" ref={containerRef}>
          
          {/* Texto de Fundo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className={`font-black text-lg transition-colors duration-500 ${isWon ? 'text-emerald-700' : 'text-slate-400'}`}>
              {isWon ? 'CONTRATO FECHADO!' : 'Arraste para Fechar Venda ->'}
            </span>
          </div>

          {/* Fundo Verde que cresce com o arraste */}
          {isWon && (
            <motion.div 
              initial={{ width: '20%' }} animate={{ width: '100%' }} transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 bottom-0 bg-emerald-400 z-0"
            />
          )}

          {/* O Botão Arrastável */}
          <AnimatePresence>
            {!isWon ? (
              <motion.div
                drag="x"
                dragConstraints={containerRef}
                dragElastic={0.1}
                dragSnapToOrigin
                onDragEnd={handleDragEnd}
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing z-10 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="text-slate-800" />
              </motion.div>
            ) : (
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="w-14 h-14 bg-emerald-100 rounded-full shadow-lg flex items-center justify-center z-10 relative ml-auto"
              >
                <CheckCircle2 className="text-emerald-600" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Efeito de Explosão de XP */}
          <AnimatePresence>
            {isWon && (
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.5 }} animate={{ opacity: 1, y: -80, scale: 1.2 }} exit={{ opacity: 0 }}
                className="absolute left-1/2 -translate-x-1/2 top-0 text-amber-500 font-black text-3xl flex items-center gap-1 drop-shadow-lg z-20 pointer-events-none"
              >
                <Flame size={28}/> +1.500 XP
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 4. SESSÃO DO SLA DE FUSE (Pavio da Bomba)
// ==========================================
const SlaBurnoutSection = () => {
  const [isBurning, setIsBurning] = useState(false);
  
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <div className="w-16 h-16 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Timer size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-cyan-300">
          A Lei Inquebrável do SLA.
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16">
          Seu vendedor não respondeu em 5 minutos? O sistema tira o lead dele sem perguntar.
        </p>

        {/* Fio de Pólvora Interativo */}
        <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
          <div className="flex justify-between items-end mb-4 text-sm font-bold">
            <span className="text-slate-400">Lead Entregue (0 min)</span>
            <span className="text-rose-500">Prazo Estourado (5 min)</span>
          </div>
          
          <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden relative border border-slate-700">
            {/* O progresso (o tempo correndo) */}
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: isBurning ? "100%" : "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              onAnimationComplete={() => { if(isBurning) setTimeout(() => setIsBurning(false), 2000) }}
              className={`h-full ${isBurning ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600' : 'bg-transparent'}`}
            />
          </div>

          <button 
            onClick={() => setIsBurning(!isBurning)}
            disabled={isBurning}
            className="mt-10 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
          >
            {isBurning ? 'Tempo esgotando...' : 'Entregar lead e disparar SLA'}
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. CTA FINAL
// ==========================================
const VendasCTA = () => (
  <section className="py-32 relative overflow-hidden bg-blue-600">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-blue-600 rounded-full mb-8 shadow-xl">
        <Rocket size={40} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
        Ligue os motores da sua <span className="text-cyan-300">operação de vendas.</span>
      </h2>
      <p className="text-blue-100 text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
        Implemente o Zinq hoje, estruture seu funil no Kanban e veja o tempo de resposta da sua equipe cair pela metade amanhã.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a href={APP_REGISTER_URL} className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl overflow-hidden ring-4 ring-slate-900/20">
            <span className="relative z-10">Criar Workspace Comercial</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function VendasClient() {
  return (
    <div className="bg-[#020617] font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main> 
          <VendasHero />
          <RadarSection />
          <GamificationAction />
          <SlaBurnoutSection />
          <VendasCTA />
        </main>
      </ReactLenis>
      <ExploreEcosystem />
      <Footer />
    </div>
  );
}