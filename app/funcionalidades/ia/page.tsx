import { Metadata } from 'next';
import { 
  Zap, Clock, BrainCircuit, ShieldCheck, 
  ArrowRight, CheckCircle2, XCircle, Sparkles 
} from 'lucide-react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

// 🎯 SEO NATIVO DO NEXT.JS (Substitui o React Helmet)
export const metadata: Metadata = {
  title: 'Zinq AI | Sua Secretária Virtual 24h',
  description: 'Automatize seu agendamento com Inteligência Artificial. A Zinq AI atende seus clientes no WhatsApp, tira dúvidas e agenda horários 24 horas por dia.',
};

// --- STYLES INJECTOR (Para animações fluidas) ---
const FluidStyles = () => (
  <style>{`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob { animation: blob 10s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
  `}</style>
);

// --- COMPONENTES DA PÁGINA ---

const AIHero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden bg-[#020617]">
    {/* Background Vivo */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
    </div>
    
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
    </div>

    <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-violet-900/20">
        <Sparkles size={12} className="text-violet-400" /> Inteligência Artificial Zinq
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
        Sua secretária virtual <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">que nunca dorme.</span>
      </h1>
      
      <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
        A primeira IA treinada especificamente para agendar horários, tirar dúvidas e encantar seus clientes. <span className="text-white font-medium">24 horas por dia.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <a href="https://zinq.me/register" className="group relative w-full sm:w-auto px-10 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
          <div className="flex items-center justify-center gap-3 relative z-10">
            Testar IA Gratuitamente
            <Zap size={20} className="fill-white group-hover:scale-110 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  </section>
);

const LiveDemo = () => (
  <section className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Lado Esquerdo: Explicação Lógica */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Ela pensa como uma <br/> <span className="text-violet-400">humana experiente.</span>
        </h2>
        
        <div className="space-y-8">
            {[
                { 
                    icon: BrainCircuit, 
                    title: 'Entende Contexto', 
                    desc: 'O cliente não precisa usar comandos robóticos. A IA entende "quero cortar o cabelo amanhã de tarde" perfeitamente.' 
                },
                { 
                    icon: Clock, 
                    title: 'Verificação em Tempo Real', 
                    desc: 'Ela checa sua agenda no milissegundo que o cliente pergunta, evitando conflitos de horário.' 
                },
                { 
                    icon: ShieldCheck, 
                    title: 'Filtro de Curiosos', 
                    desc: 'Ela tira dúvidas de preço e localização antes de você precisar intervir, entregando o cliente pronto para fechar.' 
                }
            ].map((item, i) => (
                <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-violet-900/30 flex items-center justify-center shrink-0 border border-violet-500/30 text-violet-300">
                        <item.icon size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Lado Direito: A "Mágica" Visual */}
      <div className="relative flex justify-center">
         <div className="relative w-full max-w-[400px] animate-float">
            {/* O Chat */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 shadow-2xl relative z-20">
                
                {/* Header Fake */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                        <Zap size={18} fill="white"/>
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Zinq Assistant</p>
                        <p className="text-xs text-emerald-400 flex items-center gap-1">Online agora</p>
                    </div>
                </div>

                {/* Mensagens */}
                <div className="space-y-4 text-sm font-medium">
                    <div className="flex justify-end">
                        <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5">
                            Oi, tem horário pra sexta a tarde?
                        </div>
                    </div>
                    
                    <div className="flex justify-start relative">
                        <div className="bg-violet-600 text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-lg shadow-violet-900/40">
                            Tenho sim! Na sexta-feira (14/02) tenho livre às <strong>14:00</strong> e às <strong>16:30</strong>. Qual fica melhor para você? 😊
                        </div>
                        {/* Tag de "Pensamento" */}
                        <div className="absolute -top-3 -right-2 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-emerald-400 animate-pulse">
                            Agenda Consultada ✔
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5">
                            Pode ser as 14h. Quanto custa?
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="bg-violet-600 text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-lg shadow-violet-900/40">
                            Perfeito! O valor é R$ 80,00. Já reservei seu horário das 14h. Te espero lá!
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow atrás do chat */}
            <div className="absolute inset-0 bg-violet-600/30 blur-[80px] -z-10 rounded-full"></div>
         </div>
      </div>

    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24 bg-white relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">A evolução do atendimento</h2>
        <p className="text-slate-500">Veja a diferença entre o caos manual e a paz da automação.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lado Ruim */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
                <XCircle size={32} className="text-red-500" />
                <h3 className="text-xl font-bold text-slate-700">Atendimento Manual</h3>
            </div>
            <ul className="space-y-4">
                {[
                    'Demora horas para responder (cliente esfria)',
                    'Esquece de anotar na agenda (furos)',
                    'Para o trabalho para responder WhatsApp',
                    'Perde clientes de madrugada ou fim de semana',
                    'Mistura conversa pessoal com profissional'
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Lado Bom (Zinq) */}
        <div className="p-8 rounded-3xl bg-[#0F172A] border border-violet-500/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
                <CheckCircle2 size={32} className="text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Com Zinq AI</h3>
            </div>
            <ul className="space-y-4 relative z-10">
                {[
                    'Resposta imediata (0 segundos de espera)',
                    'Sincronização automática com a agenda',
                    'Você foca no serviço, a IA foca no cliente',
                    'Vende 24h/dia, inclusive domingos e feriados',
                    'Profissionalismo total no tom de voz'
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 size={16} className="text-violet-400 mt-1 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Perguntas Frequentes</h2>
      <div className="grid gap-6">
        {[
            { q: 'A IA sabe meus horários?', a: 'Sim! Ela é conectada em tempo real com sua agenda Zinq. Ela nunca agendará em um horário ocupado ou fora do seu expediente.' },
            { q: 'Parece um robô falando?', a: 'Não. Utilizamos modelos de linguagem avançados (LLMs) que falam de forma natural, usam emojis e são cordiais. Seus clientes vão achar que é uma pessoa.' },
            { q: 'Posso intervir na conversa?', a: 'Claro. A qualquer momento você pode assumir o chat se for uma questão muito específica que a IA não saiba responder.' },
            { q: 'É difícil de configurar?', a: 'Zero dificuldade. Você só precisa definir seus serviços e horários. A IA aprende sozinha com base nessas informações.' }
        ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
            </div>
        ))}
      </div>
    </div>
  </section>
);

const AICTA = () => (
  <section className="py-32 relative overflow-hidden bg-[#020617]">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[#020617] to-[#020617]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
        Contrate sua nova <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">funcionária digital.</span>
      </h2>
      <p className="text-slate-400 text-xl mb-12 font-light">
        Por menos de R$ 1,00 por dia, você tem atendimento premium 24h. <br/> Teste gratuitamente e veja a mágica acontecer.
      </p>
      
      <div className="flex flex-col items-center gap-8">
        <a 
          href="https://zinq.me/register" 
          className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-violet-900 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] ring-4 ring-white/10"
        >
            <span className="relative z-10">Ativar Zinq AI Grátis</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="text-sm text-slate-500 flex items-center gap-2">
            <Clock size={14} /> Configuração em 2 minutos. Não pede cartão.
        </p>
      </div>
    </div>
  </section>
);

export default function AIFeaturePage() {
  return (
    <div className="bg-[#020617] min-h-screen font-sans">
      <FluidStyles />
      <Header />
      
      <main>
        <AIHero />
        <LiveDemo />
        <Comparison />
        <FAQ />
        <AICTA />
      </main>
      
      <Footer />
    </div>
  );
}