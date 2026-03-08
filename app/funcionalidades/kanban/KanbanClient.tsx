"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants, PanInfo } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from 'lenis/react';

import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer'; 
import { ConversionBanner } from '@/components/ConversionBanner'; 
import { Hand } from 'lucide-react';

import { 
  ArrowRight, LayoutPanelTop, CheckCircle2, 
  Clock, Zap, LayoutDashboard, Plus, 
  RotateCw, Flag,
} from 'lucide-react';

const APP_REGISTER_URL = "https://zinq.me/register";

// ==========================================
// 1. HERO SECTION
// ==========================================
const KanbanHero = () => {
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
    document.getElementById('interativo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants: Variants = { hidden: { opacity: 0, y: 30, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 20 } } };

  return (
    // 🎯 Adicionado w-full na section para evitar vazamento
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#000212] min-h-[90vh] flex flex-col items-center justify-center w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div style={{ x: smoothX, y: smoothY }} className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[140px]"></motion.div>
          <motion.div style={{ x: smoothY, y: smoothX }} className="absolute bottom-[-10%] right-1/4 w-[700px] h-[700px] bg-teal-600/15 rounded-full mix-blend-screen filter blur-[160px]"></motion.div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-1" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <LayoutPanelTop size={14} /> Fluxo de Trabalho Automático
          </motion.div>
          
          {/* 🎯 Fonte reduzida para text-4xl no mobile e adicionado break-words */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] break-words w-full">
            Sua operação visualizada. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">O fim do microgerenciamento.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light opacity-90">
            Acompanhe projetos, delegue tarefas com um clique e deixe as nossas "Roletas Inteligentes" distribuírem o trabalho automaticamente pela equipe.
          </motion.p>
          
          {/* 🎯 Botões responsivos (w-full no mobile, w-auto no desktop) */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={APP_REGISTER_URL} className="w-full sm:w-auto px-6 md:px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-black text-base md:text-lg transition-all shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group">
              Organizar Minha Equipe
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={scrollToInterativo} className="w-full sm:w-auto px-6 md:px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-base md:text-lg transition-all flex items-center justify-center backdrop-blur-sm">
              Ver Kanban em Ação
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

// ==========================================
// 2. MOCKUP INTERATIVO (Drag & Drop de Classe Mundial)
// ==========================================
type Task = { id: string; title: string; status: 'todo' | 'doing' | 'done'; tag: string; priority: 'low' | 'high' };

const columnsData = [
  { id: 'todo', title: 'Para Fazer', icon: Clock, colorClass: 'text-slate-400' },
  { id: 'doing', title: 'Em Andamento', icon: RotateCw, colorClass: 'text-blue-500' },
  { id: 'done', title: 'Concluído', icon: CheckCircle2, colorClass: 'text-emerald-500' }
] as const;

const InteractiveMockup = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Aprovação de Contrato', status: 'todo', tag: 'Jurídico', priority: 'high' },
    { id: '2', title: 'Reunião de Alinhamento', status: 'doing', tag: 'Gestão', priority: 'low' },
    { id: '3', title: 'Configurar Zinq AI', status: 'done', tag: 'Setup', priority: 'high' }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      status: 'todo',
      tag: 'Geral',
      priority: 'low'
    };
    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
  };

  const moveTask = (id: string, newStatus: Task['status']) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  // 🎯 Tipagem corrigida para MouseEvent e PanInfo do Framer
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, _info: PanInfo, task: Task) => {
    const cardEl = document.getElementById(`card-${task.id}`);
    if (!cardEl) return;
    
    const cardRect = cardEl.getBoundingClientRect();
    const cardCenterX = cardRect.left + (cardRect.width / 2);
    const cardCenterY = cardRect.top + (cardRect.height / 2);

    let droppedColumn: Task['status'] | null = null;

    for (const col of columnsData) {
      const colEl = document.querySelector(`[data-column="${col.id}"]`);
      if (colEl) {
        const rect = colEl.getBoundingClientRect();
        if (
          cardCenterX >= rect.left &&
          cardCenterX <= rect.right &&
          cardCenterY >= rect.top &&
          cardCenterY <= rect.bottom
        ) {
          droppedColumn = col.id;
          break;
        }
      }
    }

    if (droppedColumn && droppedColumn !== task.status) {
      moveTask(task.id, droppedColumn);
    }
  };

  return (
    <section id="interativo" className="bg-slate-50 pb-20 pt-10 relative z-10 scroll-mt-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <LayoutDashboard size={16} className="text-emerald-600"/> Sandbox Interativo
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">O fluxo perfeito existe.</h2>
          <p className="text-slate-500 mt-2 font-medium">Pegue e arraste os cartões livremente entre as colunas.</p>
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-4 md:p-8 max-w-full"
        >
          {/* Top Bar do Mockup */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-slate-100 pb-6">
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-bold text-slate-800">Quadro de Operações</h3>
              <p className="text-sm text-slate-500">Visualize todas as entregas da semana.</p>
            </div>
            
            <form onSubmit={addTask} className="flex gap-2 w-full md:w-auto relative z-20">
              <input 
                type="text" 
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Nova tarefa..." 
                className="px-4 py-2.5 border border-slate-300 rounded-xl text-sm flex-1 md:w-64 min-w-0 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-white"
              />
              <button type="submit" disabled={!newTaskTitle.trim()} className="bg-slate-900 text-white px-4 md:px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 disabled:opacity-50 flex items-center justify-center gap-2 transition-colors shrink-0">
                <Plus size={16} /> <span className="hidden sm:inline">Adicionar</span>
              </button>
            </form>
          </div>

          <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-8 pt-2 min-h-[500px] -mx-4 px-4 md:mx-0 md:px-0 touch-pan-x md:touch-auto">
            
            {columnsData.map(col => {
              const columnTasks = tasks.filter(t => t.status === col.id);
              const Icon = col.icon;
              
              return (
                <div 
                  key={col.id}
                  data-column={col.id}
                  // 🎯 min-w reduzido para 280px no mobile para dar a dica visual de que há mais conteúdo ao lado
                  className="flex-1 min-w-[280px] md:min-w-[320px] bg-slate-100/70 rounded-3xl p-4 md:p-5 border border-slate-200 flex flex-col h-full relative"
                >
                  <div className="flex justify-between items-center mb-5 px-1">
                    <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
                      <Icon size={20} className={col.colorClass} /> {col.title}
                    </div>
                    <span className="bg-white px-2.5 py-1 rounded-full text-xs font-bold text-slate-500 shadow-sm border border-slate-200">
                      {columnTasks.length}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-4 flex-1 min-h-[150px]">
                    {columnTasks.map(task => (
                      <motion.div
                        id={`card-${task.id}`}
                        layout 
                        layoutId={task.id}
                        key={task.id}
                        drag 
                        dragSnapToOrigin 
                        onDragEnd={(e, info) => handleDragEnd(e, info, task)}
                        whileDrag={{ 
                          scale: 1.05, 
                          rotate: 3, 
                          zIndex: 9999, 
                          cursor: 'grabbing',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, zIndex: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="bg-white p-4 md:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md cursor-grab touch-none"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${task.priority === 'high' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-600'}`}>
                            {task.tag}
                          </span>
                          {task.priority === 'high' && <Flag size={14} className="text-rose-500" />}
                        </div>
                        
                        <h4 className="font-bold text-slate-800 text-sm md:text-base mb-4 pr-4">{task.title}</h4>
                        
                        <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-50">
                          <div className="flex -space-x-1.5">
                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[9px] md:text-[10px] font-bold text-slate-500">VS</div>
                          </div>
                          <span className="text-[10px] md:text-xs font-medium text-slate-400">
                            {col.id === 'todo' && 'Pendente'}
                            {col.id === 'doing' && 'Executando...'}
                            {col.id === 'done' && 'Finalizado 🎉'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                    
                    {columnTasks.length === 0 && (
                      <div className="absolute inset-0 border-2 border-dashed border-slate-300/50 rounded-2xl flex items-center justify-center text-slate-400 text-sm font-medium z-0 pointer-events-none mt-[60px]">
                        Solte os cartões aqui
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-10">
          <a href={APP_REGISTER_URL} className="text-slate-500 hover:text-emerald-600 font-bold flex items-center gap-2 transition-colors">
            Gostou da organização? Implemente na sua empresa <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  );
};

const features = [
  {
    id: 1, title: "Roleta de Distribuição", subtitle: "Automação Logística",
    desc: "O seu time de vendas recebeu 50 leads? A roleta do Zinq distribui um a um, automaticamente, garantindo que ninguém fica sobrecarregado.",
    icon: RotateCw, color: "from-emerald-500 to-teal-500", glow: "bg-emerald-500/20"
  },
  {
    id: 2, title: "Prazos em Tempo Real", subtitle: "Sinal de Alerta",
    desc: "Os cartões mudam de cor se uma tarefa estiver atrasada. Você como gestor bate o olho e sabe exatamente onde o gargalo da operação está.",
    icon: Clock, color: "from-rose-500 to-orange-500", glow: "bg-rose-500/20"
  },
  {
    id: 3, title: "Relatórios de Desempenho", subtitle: "Métricas Reais",
    desc: "Descubra quem finaliza mais tarefas, quanto tempo cada etapa demora e preveja problemas antes deles afetarem o cliente final.",
    icon: Zap, color: "from-blue-600 to-indigo-600", glow: "bg-blue-500/20"
  }
];

const HorizontalFeatures = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  const FeatureCard = ({ feature }: { feature: any }) => {
    const Icon = feature.icon;
    return (
      <div className="group relative h-auto min-h-[420px] md:h-[480px] w-[85vw] md:w-[600px] flex flex-col justify-between p-8 md:p-12 shrink-0 transition-all duration-500 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:bg-white/[0.05] transition-colors duration-500"></div>
        <div className={`absolute top-0 right-0 w-64 h-64 ${feature.glow} rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

        <div className="relative z-10 flex-1">
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 md:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="text-white w-7 h-7 md:w-8 md:h-8" />
          </div>
          <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-3 group-hover:text-white transition-colors duration-300">
            {feature.subtitle}
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
            {feature.title}
          </h3>
          <p className="text-sm md:text-lg text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
            {feature.desc}
          </p>
        </div>
      </div>
    );
  };

  const CTACard = () => (
    <div className="group relative h-[420px] md:h-[480px] w-[85vw] md:w-[450px] flex flex-col items-center justify-center text-center p-8 md:p-12 shrink-0 transition-all duration-500 rounded-[3rem] bg-gradient-to-b from-emerald-600 to-teal-800 shadow-2xl border border-emerald-400/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl text-emerald-600 animate-pulse">
          <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
          Zere os atrasos hoje.
        </h3>
        <a href={APP_REGISTER_URL} className="px-6 md:px-8 py-3 md:py-4 bg-white text-emerald-700 rounded-xl font-bold text-base md:text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
          Montar meu Quadro <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
  
  return (
    <>
      {/* VERSÃO DESKTOP (Framer Motion) */}
      <section ref={targetRef} className="relative h-[300vh] bg-[#000212] hidden md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[150px]"></div>
          </div>

          <div className="px-6 md:px-16 mb-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight max-w-4xl">
              O cérebro da sua empresa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">funcionando no automático.</span>
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16 w-max relative z-10 items-center">
            {features.map((feature) => <FeatureCard key={feature.id} feature={feature} />)}
            <CTACard />
            <div className="w-[5vw] shrink-0"></div>
          </motion.div>
        </div>
      </section>

      {/* VERSÃO MOBILE (Scroll Nativo Fluido) */}
      <section className="relative py-24 bg-[#000212] md:hidden overflow-hidden">
        <div className="px-6 mb-8 relative z-10">
          <h2 className="text-4xl font-black text-white tracking-tighter leading-tight">
            O cérebro da sua empresa, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">funcionando no automático.</span>
          </h2>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mt-6 animate-pulse">
            <Hand size={16} /> Deslize para o lado
          </div>
        </div>
        
        <div className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 relative z-10">
          {features.map((feature) => (
            <div key={feature.id} className="snap-center shrink-0">
              <FeatureCard feature={feature} />
            </div>
          ))}
          <div className="snap-center shrink-0">
            <CTACard />
          </div>
          <div className="w-6 shrink-0"></div>
        </div>

        <div className="absolute top-1/4 left-[-10%] w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      </section>
    </>
  );
};

const KanbanCTA = () => (
  <section className="py-32 relative overflow-hidden bg-white">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
        A clareza que a sua operação <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">precisava.</span>
      </h2>
      <p className="text-slate-500 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
        Transforme o caos num processo visual, rápido e auditável. Configure os seus quadros de projetos em menos de 5 minutos com o Zinq.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a href={APP_REGISTER_URL} className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl overflow-hidden ring-4 ring-slate-900/10 hover:shadow-emerald-500/20">
            <span className="relative z-10">Criar Conta e Estruturar Equipe</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function KanbanClient() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main> 
          <KanbanHero />
          <InteractiveMockup />
          <HorizontalFeatures />
          <KanbanCTA />
        </main>
      </ReactLenis>
      <Footer />
      <ConversionBanner variant='floating' />
    </div>
  );
}