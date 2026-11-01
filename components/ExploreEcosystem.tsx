"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, HeartPulse, Target, Sparkles, Briefcase, 
  MessageSquare, LayoutPanelTop, RotateCw, Trophy, 
  Compass, ArrowRight, Bot,
  Zap
} from 'lucide-react';

const niches = [
  { id: 'imobiliarias', label: 'Imobiliárias', href: '/imobiliarias', icon: Building2, color: 'text-amber-500', bg: 'bg-amber-50 group-hover:bg-amber-100' },
  { id: 'clinicas', label: 'Clínicas', href: '/clinicas', icon: HeartPulse, color: 'text-teal-500', bg: 'bg-teal-50 group-hover:bg-teal-100' },
  { id: 'vendas', label: 'Equipes de Vendas', href: '/vendas', icon: Target, color: 'text-blue-500', bg: 'bg-blue-50 group-hover:bg-blue-100' },
  { id: 'estetica', label: 'Estética & Beleza', href: '/estetica', icon: Sparkles, color: 'text-rose-500', bg: 'bg-rose-50 group-hover:bg-rose-100' },
  { id: 'b2b', label: 'Escritórios B2B', href: '/b2b', icon: Briefcase, color: 'text-cyan-500', bg: 'bg-cyan-50 group-hover:bg-cyan-100' }
];

const features = [
  { label: 'Zinq AI', href: '/funcionalidades/ia', icon: Bot, desc: 'Atendimento 24h' },
  { label: 'Z-Teams', href: '/funcionalidades/chat', icon: MessageSquare, desc: 'Chat Corporativo' },
  { label: 'Kanban', href: '/funcionalidades/kanban', icon: LayoutPanelTop, desc: 'Gestão Visual' },
  { label: 'Roletas', href: '/funcionalidades/roletas', icon: RotateCw, desc: 'Distribuição de Leads' },
  { label: 'Gamificação', href: '/funcionalidades/gamificacao', icon: Trophy, desc: 'Dopamina e Metas' }
];

export const ExploreEcosystem = () => {
  const pathname = usePathname();

  // 🎯 Filtra os nichos para não mostrar a página em que o usuário já está
  const filteredNiches = niches.filter(niche => pathname !== niche.href);

  return (
    <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Elemento de fundo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          
          {/* LADO ESQUERDO: Outros Nichos */}
          <div className="w-full md:w-5/12">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">
              <Compass size={16} /> Explore mais Nichos
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
              O Zinq se adapta <br className="hidden md:block"/>ao seu modelo de negócio.
            </h3>
            <p className="text-slate-500 mb-8 text-sm md:text-base">
              Não é a sua área? Conheça as soluções personalizadas que criamos para outras operações de alta performance.
            </p>

            <div className="flex flex-wrap gap-3">
              {filteredNiches.map((niche, idx) => (
                <Link key={niche.id} href={niche.href} className="outline-none">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${niche.bg} ${niche.color}`}>
                      <niche.icon size={14} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {niche.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* LINHA DIVISÓRIA (Mobile: Horizontal, Desktop: Vertical) */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
          <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4"></div>

          {/* LADO DIREITO: Funcionalidades Core */}
          <div className="w-full md:w-7/12 md:pl-8">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">
              <Zap size={16} /> O Motor da Plataforma
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-8">
              Conheça as ferramentas que <br className="hidden md:block"/>fazem a mágica acontecer.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <Link key={feat.label} href={feat.href} className="outline-none block">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white p-4 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-blue-600 group-hover:scale-110 transition-all shadow-sm">
                        <feat.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{feat.label}</h4>
                        <p className="text-xs text-slate-500">{feat.desc}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};