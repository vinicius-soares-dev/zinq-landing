"use client"; 

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactLenis } from 'lenis/react';

import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer'; 

import { 
  ArrowRight, MessageSquare, Users, 
  Hash, ShieldCheck, Zap, Lock, 
  Send, User, Bell, PlusCircle
} from 'lucide-react';

const APP_REGISTER_URL = "https://zinq.me/register";

// ==========================================
// 1. HERO SECTION
// ==========================================
const ChatHero = () => {
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

  // 🎯 Correção de tipagem do Framer Motion
  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants: Variants = { hidden: { opacity: 0, y: 30, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 20 } } };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#000212] min-h-[90vh] flex flex-col items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div style={{ x: smoothX, y: smoothY }} className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[140px]"></motion.div>
          <motion.div style={{ x: smoothY, y: smoothX }} className="absolute bottom-[-10%] right-1/4 w-[700px] h-[700px] bg-indigo-600/15 rounded-full mix-blend-screen filter blur-[160px]"></motion.div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-1" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-8 shadow-glow">
            <MessageSquare size={14} /> Comunicação Interna
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-[1.05]">
            Sua equipe alinhada. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">O fim do caos no WhatsApp.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light opacity-90">
            Crie canais por projeto, converse em tempo real e mantenha a sua equipe focada num ambiente corporativo integrado ao seu sistema.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href={APP_REGISTER_URL} className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group">
              Começar Grátis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#interativo" className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm">
              Testar Simulador
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

// ==========================================
// 2. MOCKUP INTERATIVO (Mini-App Funcional)
// ==========================================
type Message = { id: number; sender: string; avatar: string; color: string; time: string; text: string; isUser: boolean; };

const initialChats: Record<string, Message[]> = {
  'marketing-campanhas': [
    { id: 1, sender: 'Ana Silva', avatar: 'AS', color: 'bg-blue-500', time: '14:23', text: 'Pessoal, as novas artes da campanha de Black Friday estão prontas! Alguém revisa? 🚀', isUser: false },
    { id: 2, sender: 'Carlos Dev', avatar: 'CD', color: 'bg-purple-500', time: '14:26', text: 'Ficaram excelentes, Ana! Ajustei o link UTM. Aprovado. ✅', isUser: false }
  ],
  'geral': [
    { id: 1, sender: 'Sistema', avatar: 'Z', color: 'bg-emerald-500', time: '09:00', text: 'Bem-vindos ao Z-Teams! Este é o canal aberto para toda a empresa.', isUser: false }
  ],
  'ana-silva': [
    { id: 1, sender: 'Ana Silva', avatar: 'AS', color: 'bg-blue-500', time: 'Ontem', text: 'Oi! Consegue me mandar aquele relatório de vendas do mês passado?', isUser: false }
  ]
};

const InteractiveMockup = () => {
  const [activeChannel, setActiveChannel] = useState('marketing-campanhas');
  const [messages, setMessages] = useState(initialChats);
  const [inputText, setInputText] = useState('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, activeChannel]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    const newMessage: Message = {
      id: Date.now(),
      sender: 'Futuro Zinqer',
      avatar: 'FZ',
      color: 'bg-slate-800',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      text: inputText,
      isUser: true
    };

    setMessages(prev => ({
      ...prev,
      [activeChannel]: [...prev[activeChannel], newMessage]
    }));
    setInputText('');
  };

  return (
    <section id="interativo" className="bg-slate-50 pb-20 pt-10 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Zap size={16} className="fill-blue-600"/> Sandbox Interativo
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Experimente você mesmo.</h2>
          <p className="text-slate-500 mt-2">Troque de canais e envie uma mensagem real no simulador abaixo.</p>
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden flex flex-col md:flex-row h-[600px]"
        >
          {/* NAVEGAÇÃO MOBILE */}
          <div className="md:hidden flex overflow-x-auto bg-[#1A1D21] p-3 gap-2 hide-scrollbar shrink-0 border-b border-slate-800">
            <button onClick={() => setActiveChannel('marketing-campanhas')} className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold flex items-center gap-1.5 transition-colors ${activeChannel === 'marketing-campanhas' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
              <Hash size={16}/> marketing
            </button>
            <button onClick={() => setActiveChannel('geral')} className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold flex items-center gap-1.5 transition-colors ${activeChannel === 'geral' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
              <Hash size={16}/> geral
            </button>
            <button onClick={() => setActiveChannel('ana-silva')} className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold flex items-center gap-1.5 transition-colors ${activeChannel === 'ana-silva' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
              <User size={16}/> Ana Silva
            </button>
          </div>

          {/* BARRA LATERAL DESKTOP */}
          <div className="hidden md:flex flex-col w-72 bg-[#1A1D21] text-slate-300 h-full shrink-0">
            <div className="p-5 border-b border-slate-700/50 flex justify-between items-center cursor-default">
              <h3 className="font-black text-white text-lg tracking-tight">Zinq Workspace</h3>
              <Bell size={18} className="text-slate-400" />
            </div>
            
            <div className="flex-1 overflow-y-auto flex flex-col gap-6 p-4 hide-scrollbar">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">Canais</p>
                <div className="space-y-1">
                  <button onClick={() => setActiveChannel('geral')} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${activeChannel === 'geral' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-300'}`}>
                    <Hash size={16} /> <span>geral</span>
                  </button>
                  <button onClick={() => setActiveChannel('marketing-campanhas')} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${activeChannel === 'marketing-campanhas' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-300'}`}>
                    <Hash size={16} /> <span>marketing-campanhas</span>
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">Mensagens Diretas</p>
                <div className="space-y-1">
                  <button onClick={() => setActiveChannel('ana-silva')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeChannel === 'ana-silva' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-300'}`}>
                    <div className="relative">
                      <div className="w-6 h-6 bg-blue-500 rounded text-[10px] text-white flex items-center justify-center font-bold">AS</div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border border-[#1A1D21] rounded-full"></div>
                    </div>
                    <span>Ana Silva</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ÁREA PRINCIPAL DO CHAT */}
          <div className="flex-1 bg-white flex flex-col h-full relative">
            <div className="p-4 md:p-5 border-b border-slate-200 flex justify-between items-center bg-white/90 backdrop-blur-md z-10 shrink-0">
              <div className="flex items-center gap-3">
                {activeChannel.includes('ana') ? <User size={24} className="text-slate-400" /> : <Hash size={24} className="text-slate-400" />}
                <div>
                  <h4 className="font-bold text-slate-800 text-lg leading-none">{activeChannel}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {activeChannel === 'marketing-campanhas' ? 'Alinhamento de campanhas ativas.' : 
                     activeChannel === 'geral' ? 'Avisos da empresa.' : 'Status: Online'}
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={messagesContainerRef} 
              className="flex-1 p-4 md:p-6 overflow-y-auto flex flex-col gap-6 bg-slate-50/50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
            >
              {messages[activeChannel]?.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 md:gap-4 max-w-[90%] md:max-w-[80%] ${msg.isUser ? 'self-end flex-row-reverse' : 'self-start'}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${msg.color} flex shrink-0 items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {msg.avatar}
                  </div>
                  <div className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-baseline gap-2 mb-1 px-1">
                      <span className="font-bold text-slate-800 text-sm">{msg.sender}</span>
                      <span className="text-[10px] text-slate-400">{msg.time}</span>
                    </div>
                    <div className={`text-sm p-3 shadow-sm ${msg.isUser ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' : 'bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-200'}`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
              <form onSubmit={handleSend} className="bg-slate-50 border border-slate-300 rounded-xl flex flex-col focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all overflow-hidden">
                <input 
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Mandar mensagem em ${activeChannel}...`}
                  className="w-full bg-transparent p-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  autoComplete="off"
                />
                <div className="bg-slate-100/80 p-2 flex justify-between items-center border-t border-slate-200">
                  <div className="flex gap-1 md:gap-2 text-slate-400">
                    <div className="p-1.5 hover:bg-slate-200 rounded cursor-pointer transition-colors"><ShieldCheck size={18} /></div>
                    <div className="p-1.5 hover:bg-slate-200 rounded cursor-pointer transition-colors"><Users size={18} /></div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={!inputText.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold shadow-sm transition-colors"
                  >
                    <Send size={14} /> <span className="hidden md:inline">Enviar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-10">
          <a href={APP_REGISTER_URL} className="text-slate-500 hover:text-blue-600 font-bold flex items-center gap-2 transition-colors">
            Gostou da fluidez? Crie sua conta grátis agora <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 3. HORIZONTAL SCROLL (Funcionalidades)
// ==========================================
const features = [
  {
    id: 1, title: "Canais Temáticos", subtitle: "Organização Total",
    desc: "Crie grupos por departamento, projeto ou unidade. Mantenha os assuntos separados, pesquisáveis e fáceis de encontrar.",
    icon: Hash, color: "from-blue-600 to-cyan-500", glow: "bg-blue-500/20"
  },
  {
    id: 2, title: "Mensagens Privadas", subtitle: "Agilidade 1 a 1",
    desc: "Precisa resolver algo rápido com alguém específico? As mensagens diretas garantem comunicação ágil sem poluir os canais principais.",
    icon: User, color: "from-purple-600 to-indigo-600", glow: "bg-purple-500/20"
  },
  {
    id: 3, title: "Foco no Trabalho", subtitle: "Zero Distrações",
    desc: "Chega de misturar conversas da empresa com grupos de família no WhatsApp. Crie um ambiente 100% profissional e focado.",
    icon: Lock, color: "from-emerald-500 to-teal-500", glow: "bg-emerald-500/20"
  }
];

const HorizontalFeatures = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);
  
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#000212]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="px-6 md:px-16 mb-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight max-w-4xl">
            Um escritório virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">para operações modernas.</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16 w-max relative z-10 items-center">
          {features.map((feature) => (
            <div key={feature.id} className="group relative h-[420px] md:h-[480px] w-[85vw] md:w-[600px] flex flex-col justify-between p-8 md:p-12 shrink-0 transition-all duration-500">
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] group-hover:bg-white/[0.05] transition-colors duration-500"></div>
              <div className={`absolute top-0 right-0 w-64 h-64 ${feature.glow} rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-3 group-hover:text-white transition-colors duration-300">
                  {feature.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CARD FINAL EXTRA */}
          <div className="group relative h-[420px] md:h-[480px] w-[85vw] md:w-[450px] flex flex-col items-center justify-center text-center p-8 md:p-12 shrink-0 transition-all duration-500 rounded-[3rem] bg-gradient-to-b from-blue-600 to-indigo-700 shadow-2xl border border-blue-400/30 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl text-blue-600 animate-bounce" style={{ animationDuration: '3s'}}>
                <PlusCircle size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                Pronto para evoluir?
              </h3>
              <a href={APP_REGISTER_URL} className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                Criar Conta Grátis <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-[5vw] shrink-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// 4. CTA FINAL
// ==========================================
const ChatCTA = () => (
  <section className="py-32 relative overflow-hidden bg-white">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
        Conecte a sua equipe <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">hoje mesmo.</span>
      </h2>
      <p className="text-slate-500 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
        Melhore o fluxo de informação e elimine os ruídos da sua operação. O chat perfeito integrado ao seu sistema de gestão em apenas 2 minutos.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a href={APP_REGISTER_URL} className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-slate-900 text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl overflow-hidden ring-4 ring-slate-900/10 hover:shadow-blue-500/20">
            <span className="relative z-10">Criar Workspace Grátis</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default function ChatClient() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.2 }}>
        <main> 
          <ChatHero />
          <InteractiveMockup />
          <HorizontalFeatures />
          <ChatCTA />
        </main>
      </ReactLenis>
      <Footer />
    </div>
  );
}